/**
 * generates .d.ts files based on data extracted from the pb3 sandbox.  
 * input: ./generation/input/extraction.js (the data extracted using extractor.user.js)  
 * output: ./generation/output/types/**\/*.d.ts and ./generation/output/lib-analysis.json  
 * 
 * this is not for generating the final .d.ts files nor entirely accurate types, rather it should be used as 
 * a baseline and reference for what the types should look like. the generation input and output data should 
 * also be included in commits so that the diff shows what has changed in the environment and what should be 
 * added/changed in the actual types.
 */

import ts from "typescript";
import { Project, SymbolFlags, Node, SyntaxKind, Symbol as TsSymbol, Type, TypeFlags, ModuleDeclarationKind } from "ts-morph";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { inspect } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const NO_KNOWN_VALUE = "no known value";
const VALUE_TOO_LONG = "value is too long";

const inputPath = join(__dirname, "..", "generation", "input", "extraction.json");
const outputDir = join(__dirname, "..", "generation", "output");

const rawData = readFileSync(inputPath, "utf8");
const jsonData = JSON.parse(rawData);

const sandboxData = unifyJsonData(jsonData);
const intersectionAnalysis = analyzeTsLibAndSandboxIntersection(sandboxData.structure);

// these are always accessible but it's through the map context object which is why they're not included in the extraction.
// also their recursion could cause problems in the intersectionAnalysis function. so they're hardcoded here
intersectionAnalysis.shared.push("this", "globalThis", "window");
intersectionAnalysis.libOnly = intersectionAnalysis.libOnly.filter(k => !["this", "globalThis", "window"].includes(k));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "lib-analysis.json"), JSON.stringify(intersectionAnalysis, undefined, 4));
writePB3Types(sandboxData, outputDir, intersectionAnalysis);

function unflattenStructure(structure) {
    function createObjectPath(names) {
        const out = Array(names.length + 1);
        let cur = out[0] = {};
        for (let i = 0; i < names.length; i++)
            cur = cur[names[i]] = out[i + 1] = {};
        return out;
    }

    const entries = Object.entries(structure)
        .map(([k, v]) => {
            const names = k.split(".");
            const levels = createObjectPath(names);
            levels.at(-2)[names.at(-1)] = v;
            return [names[0], levels[1]];
        });
    
    // using combineStructures makes this merge entries with the same name (ex. THREE.Euler.prototype and THREE.Matrix4.prototype)
    return combineStructures(...entries.map(entry => Object.fromEntries([entry])));
}

function combineStructures(...structures) {
    const out = {};
    const allKeys = new Set(structures.flatMap(strc => Object.keys(strc)));
    for (const key of allKeys)
        out[key] = combineStructures(...structures.map(strc => strc[key] ?? {}));
    return out;
}

/**
 * @param {Record<string, Record<string, any>>} desc1 
 * @param {Record<string, Record<string, any>>} desc2 
 */
function combineDescriptionRecords(desc1, desc2) {
    // check for conflicts and throw if found
    for (const [key, info1] of Object.entries(desc1)) {
        const info2 = desc2[key];
        if (info2 === undefined)
            continue;

        const keys1 = Object.keys(info1);
        const keys2 = Object.keys(info2);

        if (
            keys1.length !== keys2.length ||
            keys1.some(k => info1[k] !== info2[k])
        )
            throw new Error(`Conflicting descriptions for key ${key}`);
    }

    // combine
    return {...desc1, ...desc2};
}

function unifyJsonData(jsonData) {
    const { context, instances } = jsonData;
    return {
        structure: combineStructures(context.structure, unflattenStructure(instances.structure)),
        description: combineDescriptionRecords(context.description, instances.description)
    };
}

function analyzeTsLibAndSandboxIntersection(sandboxStructure) {
    const project = new Project({ skipLoadingLibFiles: true, });

    const libDir = dirname(ts.getDefaultLibFilePath({}));
    const libFile = join(libDir, "lib.esnext.full.d.ts");

    function loadLib(name) {
        const file = join(libDir, `lib.${name}.d.ts`);
        const sf = project.addSourceFileAtPath(file);

        for (const ref of sf.getLibReferenceDirectives()) {
            loadLib(ref.getFileName());
        }
    }

    loadLib("esnext.full");

    /**
     * @param {TsSymbol} symbol 
     * @returns {Node | undefined}
     */
    function getValueDeclaration(symbol) {
        return symbol.getValueDeclaration();
    }

    /**
     * @param {Type} t 
     * @returns {boolean}
     */
    function isPrimitiveType(t) {
        return (
            t.isBoolean() ||
            t.isString() ||
            t.isNumber() ||
            t.isBigInt() ||
            t.isLiteral() ||
            t.isNull() ||
            t.isUndefined()
        );
    }

    const valueDeclarationSymbols = project.getSourceFiles().flatMap(sf => sf.getSymbolsInScope(SymbolFlags.Value));
    const valueDeclarationSymbolsMap = Object.fromEntries(valueDeclarationSymbols.map(s => ([s.getName(), s])));

    /**
     * @param {string} path 
     * @returns {Type | null}
     */
    function getTypeAtPath(path) {
        const parts = path.split(".");
        if (!Object.hasOwn(valueDeclarationSymbolsMap, parts[0]))
            return null;
        
        const declSymbol = valueDeclarationSymbolsMap[parts[0]];
        const decl = getValueDeclaration(declSymbol);
        if (decl === undefined) // happens for symbol of "undefined"
            return null;
        
        let currentType = decl.getType();

        for (let i = 1; i < parts.length; i++) {
            const prop = currentType.getProperty(parts[i]);
            if (prop === undefined)
                return null;
                
            currentType = prop.getTypeAtLocation(decl);
        }

        return currentType;
    }

    /**
     * @param {string} path 
     * @returns {string[]}
     */
    function getKeys(path) {
        if (path === "")
            return Object.keys(valueDeclarationSymbolsMap);
        
        const _type = getTypeAtPath(path);

        if (_type === null || isPrimitiveType(_type))
            return [];

        return _type.getProperties()
            .map(s => s.getName())
            .filter(st => !st.startsWith("__@")) // filter out symbol properties
    }

    function intersectionAnalysis(obj, path="") {
        const libKeys = getKeys(path);
        const sandbox = Object.keys(obj);
        const shared = sandbox.filter(k => libKeys.includes(k));
        const sandboxOnly = sandbox.filter(k => !shared.includes(k));
        const libOnly = libKeys.filter(k => !shared.includes(k))
            .filter(st => st !== "toString") // filter out toString (reduces incorrect results)
            .filter(st => st !== "length"); // filter out length (extractor omits length)

        const base = path === "" ? "" : `${path}.`;
        const output = {
            shared: [],
            sandboxOnly: sandboxOnly.map(k => base + k),
            libOnly: libOnly.map(k => base + k),
        };

        for (const key of shared) {
            output.shared.push(base + key);
            const sub = intersectionAnalysis(obj[key], base + key);
            output.shared.push(...sub.shared);
            output.sandboxOnly.push(...sub.sandboxOnly);
            output.libOnly.push(...sub.libOnly);
        }

        return output;
    }

    function addParentTypeToPath(path) {
        const lastDot = path.lastIndexOf(".");
        const parentPath = lastDot === -1 ? null : path.slice(0, lastDot);
        const parentType = parentPath !== null
            ? getTypeAtPath(parentPath)?.getSymbol()?.getName() ?? null
            : null;
        return (parentType !== null ? `${parentType}|` : "") + path;
    }

    const analysis = intersectionAnalysis(sandboxStructure);

    return Object.fromEntries(
        Object.entries(analysis)
            .map(([k, v]) => [k, v.map(addParentTypeToPath)])
    );
}

function writePB3Types(sandboxData, outputDir, libAnalysis) {
    /** prefix every non-empty line of `text` with `spaces` spaces */
    function indentBlock(spaces, text) {
        const prefix = " ".repeat(spaces);
        return text
            .split("\n")
            .map((line) => (line.length > 0 ? prefix + line : line))
            .join("\n");
    }
    
    /** parse "a,b,c=default" parameter string */
    function parseParamList(paramsStr) {
        return paramsStr
            .split(",")
            .map(s => s.trim())
            .filter(s => s.length > 0)
            .map(entry => {
                const eq = entry.indexOf("=");
                if (eq === -1)
                    return { name: entry, default: null };
                return { name: entry.slice(0, eq).trimEnd(), default: entry.slice(eq + 1).trimStart() };
            });
    }
    
    /** jsdoc builder so i don't have to check the exact syntax every time i insert docs */
    function JsDoc() {
        const unset = Symbol("Unset");
        return {
            docs: [],
            params: [],
            doc(line) {
                this.docs.push(line);
                return this;
            },
            param(name, doc=undefined, _default=unset) {
                this.params.push({name, doc, default: _default});
                return this;
            },
            build() {
                const lineCount = this.docs.length + this.params.length;
                if (lineCount === 0)
                    return "";
                if (lineCount === 1) {
                    const line = this.docs[0] ?? this._writeParam(this.params[0]);
                    return `/** ${line} */`;
                }
                return (
                    "/**\n" +
                    this._part(this.docs) + 
                    this._part(this.params.map(this._writeParam)) + 
                    " */"
                );
            },
            _writeParam(param) {
                const {name, doc, default: _default} = param;
                return `@param ${name} ${_default !== unset ? `(default=${_default}) ` : ""}${doc ?? ""}`;
            },
            _part(lines) {
                return lines.map(line => " * " + line + "  \n").join("");
            },
        }
    }
    
    class MyFileWriter {
        static writeWholeJSON(sandboxData, outputDir, libAnalysis) {
            const { structure = {}, description = {} } = sandboxData;
    
            const project = new Project();
    
            project.createDirectory("internal");

            const writer = new MyFileWriter(project, sandboxData, outputDir);
    
            // make internal types
            writer.openFile("internal/helper.d.ts");
            writer.writeText(
                "export interface ClassIdentityProps<ClassName extends string> {\n" +
                "    readonly _class: ClassName;\n" + 
                "    toString(): \`[object \${ClassName}]\`;\n" +
                "}\n\n" +
                "export type TODO = any;"
            );

            const skipPaths = new Set(libAnalysis.shared.map(st => st.slice(st.indexOf("|") + 1)));
    
            for (const key of Object.keys(structure)) {
                const kind = description[key]?.type;
                if (skipPaths.has(key))
                    continue; // skip things that the ts lib already declares
                if (kind === "function")
                    writer.openFile("_functions.d.ts");
                else if (kind === "literal")
                    writer.openFile("_literals.d.ts");
                else // class or object
                    writer.openFile(`${key}.d.ts`);
                
                const location = new Location(key, structure[key]);
                writer.addToGlobalBlock(writer.writeThing(location));
            }

            // write interfaces into _jsmods.d.ts that contain the extensions in sandboxOnly
            const extendedLibs = intersectionAnalysis.sandboxOnly.map(st => st.split("|")).filter(parts => parts.length > 1);
            if (extendedLibs.length > 0) {
                writer.openFile("_jsmods.d.ts");
                const toAdd = {};
                for (const [parentType, path] of extendedLibs)
                    (toAdd[parentType] ??= []).push(path);
                for (const [parentType, paths] of Object.entries(toAdd)) {
                    const parentPath = paths[0].slice(0, paths[0].lastIndexOf("."));
                    const kind = description[parentPath].type;
                    if (kind !== "class" && kind !== "object") // can only extend these
                        continue;
                    const struct = Object.fromEntries(paths.map(p => [p.slice(p.lastIndexOf(".") + 1), {}]));
                    const location = new Location(parentPath, struct);
                    location.name = parentType; // override name so the interface has the same name as in the ts lib
                    if (parentType === "Array")
                        location.name = "Array<T>"; // too much effort to fix this properly when it's so easy to do it like this
                    writer.addToGlobalBlock(writer.writeInterface(location));
                }
            }
    
            project.getSourceFiles().forEach(file => file.save());
        }
    
        /**
         * @param {Project} project 
         * @param {Object} sandboxData 
         * @param {string} outputDir 
         */
        constructor(project, sandboxData, outputDir) {
            this.project = project;
            this.structure = sandboxData.structure;
            this.description = sandboxData.description;
            this.outputDir = outputDir;
            this.instanceDetector = new InstanceDetector(this.structure, this.description);
        }
    
        openFile(filePath) {
            const path = join(this.outputDir, filePath);
            this.file = this.project.getSourceFile(path);
            if (this.file === undefined) {
                this.file = this.project.createSourceFile(path, undefined, { overwrite: true, });
            }
        }
    
        getGlobalBlock() {
            // return existing "declare global" block if it already exists
            const existing = this.file.getModule(m => m.getDeclarationKind() === ModuleDeclarationKind.Global);
            if (existing)
                return existing;
    
            // add export if it doesn't already exist (turns this into a module which makes declare global blocks legal)
            if (this.file.getExportDeclarations().length === 0)
                this.file.insertExportDeclaration(0, { namedExports: [] });
    
            // add declare global block and return it
            return this.file.addModule({
                name: "global",
                declarationKind: ModuleDeclarationKind.Global,
                hasDeclareKeyword: true,
            });
        }
    
        ensureImport(name, moduleSpecifier) {
            const imp = this.file.getImportDeclaration(moduleSpecifier);
            if (imp) {
                const importedNames = imp.getNamedImports().map(n => n.getName());
                if (!importedNames.includes(name)) {
                    imp.addNamedImport(name);
                }
            }
            else
                this.file.insertImportDeclaration(0, {
                    moduleSpecifier,
                    namedImports: [name],
                    isTypeOnly: true,
                });
        }
    
        addToGlobalBlock(code) {
            this.getGlobalBlock().addStatements(code);
        }
    
        writeText(text) {
            this.file.addStatements(text);
        }
    
        writeThing(location) {
            if (Object.hasOwn(location.structure, "prototype") && this.description[location.path]?.type !== "function")
                this.addToGlobalBlock(this.writeInterface(location.locationOfKey("prototype")));

            const desc = this.description[location.path];
            if (desc === undefined)
                return ""; // no description happens when the instance of a class is exposed but not the class/object itself

            switch (desc.type) {
                case "object":
                case "class":
                    return this.writeObjectLike(location);
                case "function":
                    return this.writeFunction(location);
                case "literal":
                    return this.writeLiteral(location);
                default:
                    return "";
            }
        }

        writeObjectLike(loc) {
            const modifier = this._getModifier(loc);
            const isClass = (this.description[loc.path]?.type) === "class";
            let constructorPart = "";
            if (isClass) {
                const params = parseParamList(this.description[loc.path]?.params ?? "");
                const docs = this.writeParamsDocs(params);
                const paramsSignature = this.writeParamsSignature(params);
                constructorPart = `${docs}new (${paramsSignature}): ${loc.name};\n`;
            }
            else {
                const instanceName = this.instanceDetector.getInstanceName(loc);
                if (instanceName !== null) {
                    // this object is an instance of something, use the instance type instead of writing its structure
                    const doc = new JsDoc().doc(`Not known if this is always of type ${instanceName}`).build() + "\n";
                    return `${doc}${modifier}${loc.name}: ${instanceName};`;
                }
            }
            const { useTypes, memberKeys } = this._handleHelperTypes(loc);
            const helpersPart = useTypes.map(st => st += " & ");
            return (
                `${modifier}${loc.name}: ${helpersPart}{\n` +
                indentBlock(4, 
                    constructorPart +
                    this.writeMembers(loc, memberKeys.filter(k => k !== "prototype"))
                ) +
                "\n}"
            );
        }

        writeInterface(loc) {
            const { useTypes, memberKeys } = this._handleHelperTypes(loc);
            const helpersPart = useTypes.map(st => `extends ${st} `);
            return (
                `interface ${loc.name} ${helpersPart}{\n` +
                indentBlock(4, 
                    this.writeMembers(loc, memberKeys)
                ) + 
                "\n}"
            );
        }

        writeMembers(loc, keys) {
            return keys.map(k => this.writeThing(loc.locationOfKey(k))).join("\n");
        }

        writeParamsDocs(params) {
            if (!params.some(p => p.default !== null))
                return ""; // no docs if there are no defaults to document

            const builder = new JsDoc();
            params.forEach(p => {
                if (p.default === null)
                    builder.param(p.name);
                else
                    builder.param(p.name, undefined, p.default);
            });
            return builder.build() + "\n";
        }

        writeParamsSignature(params) {
            this.ensureImport("TODO", "./internal/helper");
            return params.map(p => {
                const returnType = p.name.startsWith("...") ? "TODO[]" : "TODO";
                const hasDefault = p.default !== null;
                return `${p.name}${hasDefault ? "?" : ""}: ${returnType}`;
            }).join(", ");
        }

        writeFunction(loc) {
            this.ensureImport("TODO", "./internal/helper");
            const params = parseParamList(this.description[loc.path]?.params ?? "");
            const doc = this.writeParamsDocs(params);
            const modifier = this._getModifier(loc);
            const paramsSignature = this.writeParamsSignature(params);
            return `${doc}${modifier}${loc.name}: (${paramsSignature}) => TODO;`;
        }

        writeLiteral(loc) {
            const knownValue = this.description[loc.path]?.value;

            this.ensureImport("TODO", "./internal/helper");

            let doc = "";
            if ((!loc.isChildOfPrototype() || String(knownValue) !== "undefined") && knownValue !== VALUE_TOO_LONG && knownValue !== NO_KNOWN_VALUE) {
                // only show known value when it's not "undefined" on an instance
                // (undefined means nothing on instances because of how the data extraction is done)
                doc = new JsDoc().doc(`Type is unknown. One known value: ${knownValue}`).build() + "\n";
            }

            const modifier = this._getModifier(loc);
            return `${doc}${modifier}${loc.name}: TODO;`;
        }

        _getModifier(loc) {
            const readonly = this.description[loc.path]?.readonly ?? false;
            return [["", "readonly "], ["var ", "const "]][Number(loc.isRoot)][Number(readonly)];
        }

        _handleHelperTypes(loc) {
            let useTypes = [];
            let memberKeys = Object.keys(loc.structure);
            if (Object.hasOwn(loc.structure, "_class")) { // ClassIdentityProps
                this.ensureImport("ClassIdentityProps", "./internal/helper");
                const _classValue = this.description[`${loc.path}._class`]?.value;
                useTypes.push(`ClassIdentityProps<${_classValue}>`);
                memberKeys = memberKeys.filter(k => !["_class", "toString"].includes(k));
            }
            return { useTypes, memberKeys };
        }
    }

    class InstanceDetector {
        constructor(fullStructure, description) {
            this.description = description;
            this.lookup = {};
            for (const {path, structure} of this._findInstances(fullStructure)) {
                const hash = this._hashStructure(structure);
                (this.lookup[hash] ??= []).push({
                    location: new Location(path),
                    values: {
                        _class: description[`${path}._class`]?.value,
                    },
                })
            }
        }

        /**
         * @param {Object} fullStructure 
         * @returns {{path: string, structure: Object}[]}
         */
        _findInstances(fullStructure) {
            const output = [];
            const frontier = [fullStructure];
            const frontierPaths = [""]
            let i = 0;
            while (i < frontier.length) {
                const cur = frontier[i];
                const curPath = frontierPaths[i];
                frontier[i] = undefined;
                frontierPaths[i] = undefined;
                {
                    if (curPath.endsWith(".prototype") && Object.keys(cur).length > 0) {
                        output.push({
                            path: curPath,
                            structure: cur,
                        });
                    }
                    for (const key of Object.keys(cur)) {
                        frontier.push(cur[key]);
                        frontierPaths.push(curPath === "" ? key : `${curPath}.${key}`);
                    }
                }
                i++;
            }
            return output;
        }
        
        _hashStructure(structure) {
            return Object.keys(structure).sort().join("|");
        }

        /**
         * @param {Location} loc 
         */
        getInstanceName(loc) {
            const hash = this._hashStructure(loc.structure);
            const hits = this.lookup[hash] ?? [];
            if (hits.length === 0)
                return null;
            if (hits.length === 1)
                return hits[0].location.name;
            else {
                // check value of _class to differentiate when all keys are in common
                const hit = hits.find(x => x.values._class === this.description[`${loc.path}._class`]?.value);
                return hit ? hit.location.name : null;
            }
        } 
    }

    class Location {
        /** @type {string} */ path;
        /** @type {string[]} */ parts;
        /** @type {string} */ head;

        constructor(path, structure) {
            this.path = path;
            this.parts = path.split(".");
            this.head = this.parts.at(-1);
            this.isRoot = this.parts.length === 1;
            this.structure = structure;
            this.name = this._decideName();
        }

        locationOfKey(key) {
            return new Location(this.pathWith(key), this.structure[key]);
        }

        pathWith(key) {
            return `${this.path}.${key}`;
        }

        isPrototype() {
            return this.head === "prototype";
        }

        isChildOfPrototype() {
            return this.parts.at(-2) === "prototype";
        }

        _decideName() {
            if (this.isPrototype() && this.parts.at(-2) !== undefined)
                return this.parts.at(-2);
            return this.head;
        }
    }

    MyFileWriter.writeWholeJSON(sandboxData, join(outputDir, "types"), libAnalysis);
}