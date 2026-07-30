// ==UserScript==
// @name        PB3 Script Env extract
// @description Provides a console function to automatically extract data about the pb3 level editor script environment
// @version     1.0.0
// @author      jeje52
// @match       https://www.plazmaburst.net/**
// @connect     github.com
// @connect     githubusercontent.com
// @grant       GM.xmlHttpRequest
// @run-at      document-start
// ==/UserScript==

// using var because it doesn't mind being redeclared when copying to the console twice
var NO_KNOWN_VALUE = "no known value";
var VALUE_TOO_LONG = "value is too long";

// makes this also usable by copying to the console
var globalObject;
if (typeof unsafeWindow === "undefined") {
    globalObject = window;
    window.extractScriptEnv = extractScriptEnv;
    extractScriptEnv();
}
else {
    globalObject = unsafeWindow;
    unsafeWindow.extractScriptEnv = extractScriptEnv;
}

function extractScriptEnv() {
    try {
        const context = extractClasses();
        const instanceRepresentations = extractInstanceRepresentations();
        clearRegExp();
        return {
            context: createDescription(context),
            instances: createDescription(instanceRepresentations),
        };
    }
    catch (e) {
        console.error("extractScriptEnv failed:", e);
        if (e.message.includes("is not defined"))
            console.log("Was the script run within the level editor?");
    }
}

/** clear RegExp static properties like "input" and "lastMatch" so their values don't get serialized */
function clearRegExp() {
    "".match(/(?:)/);
}

function createDescription(cur, parent = null, key = "", path = "") {
    const structure = {};
    const description = {};

    let type = getObjectType(cur);

    // treat arrays as literals cuz we rly don't need to describe every single element
    // but also let Array.prototype through
    if (Array.isArray(cur) && path !== "Array.prototype")
        type = "literal";
    
    if (parent !== null) {
        const readonly = testReadonly(parent, key)
        description[path] = { type };
        if (readonly) // include readonly only if it's true (saves space because it's usually false)
            description[path].readonly = readonly;
    }

    if (type === "literal") {
        let ser = cur !== NO_KNOWN_VALUE ? serializeLiteral(cur) : cur;
        if (ser.length > 10000)
            ser = VALUE_TOO_LONG;
        description[path].value = ser;
    }

    if (type === "function") {
        let params = extractFunctionParameters(cur);
        if (params === "...bbV" || params === "...args") {
            let ogFn = pb2CodeExec.method_backwards_decode.get(cur);
            if (ogFn === undefined) {
                let pathToCheck = path;
                
                if (pathToCheck.startsWith("pb2EngineDatabase"))
                    pathToCheck = "pb2EditorObject.prototype" + pathToCheck.slice("pb2EngineDatabase".length);

                try { ogFn = eval(pathToCheck); }
                catch (e) {
                    try { ogFn = eval("ExternalClasses." + pathToCheck); }
                    catch (e) { ogFn = undefined; }
                }
            }
            if (ogFn !== undefined) {
                params = extractFunctionParameters(ogFn);
            }
        }
        description[path].params = params;
        const match = cur.toString().match(/\s(?<name>.*)\(.*?\)\s*{\s*\[native code\]\s*}$/);
        const fnName = match?.groups.name;
        const nativeCode = match !== null && (
            fnName === key ||
            (fnName === "trimStart" && path === "String.prototype.trimLeft") ||
            (fnName === "trimEnd" && path === "String.prototype.trimRight")
        );
        clearRegExp();
        if (nativeCode) // include nativeCode only if it's true (saves space because it's usually false)
            description[path].nativeCode = nativeCode;
    }

    if (type === "class") {
        let params = extractClassConstructorParameters(cur);
        if (params === "...args") {
            let og;
            try { og = eval(path); }
            catch (e) {
                try { og = eval("ExternalClasses." + path); }
                catch (e) { og = undefined; }
            }
            if (og !== undefined)
                params = extractClassConstructorParameters(og);
        }
        clearRegExp();
        description[path].params = params;
    }

    if (type === "function" || type === "class" || type === "object") {
        const newPathBase = path + (path === "" ? "" : ".");
        for (const [key, value] of safeIterEntries(cur)) {
            const {structure: s2, description: d2} = createDescription(value, cur, key, newPathBase + key);
            Object.assign(description, d2);
            structure[key] = s2;
        }

        // todo should this shit be in the other thing?
        // correctly describe function classes as classes. differentiate by checking if prototype is non-empty
        if (type === "function" && Object.hasOwn(structure, "prototype") && Object.keys(structure["prototype"]).length > 0) {
            description[path].type = "class";
        }
    }

    return { structure, description };
}

function safeGet(obj, key) {
    try {
        return obj[key]; // getter can throw
    }
    catch (e) {
        return NO_KNOWN_VALUE;
    }
} 

function* safeIterEntries(obj) {
    for (const key of Object.getOwnPropertyNames(obj)) {
        if (key === "constructor")
            continue; // skip constructor because they cause infinite recursion
        if (key === "length")
            continue; // skip length (vi ger inte a fuck)
        if (key === "name")
            continue; // likewise
        yield [key, safeGet(obj, key)];
    }
}

function serializeLiteral(value) {
    if (value === undefined) return "undefined";
    if (value === Infinity) return "Infinity";
    if (value === -Infinity) return "-Infinity";
    if (Number.isNaN(value)) return "NaN";
    return JSON.stringify(value);
}

function testReadonly(parent, key) {
    const old = safeGet(parent, key);
    let readonly = false;
    try {
        parent[key] = 123469696969;
    }
    catch (e) {
        const msg = e.message.toLowerCase();
        readonly = msg.includes("read-only") || msg.includes("read only");
    }
    finally {
        try { parent[key] = old; } catch (e) {}
        return readonly;
    }
}

function extractFunctionParameters(fn) {
    const str = fn.toString();
    let open = str.indexOf("(");
    let close = str.indexOf(")", open);
    const arrow = str.indexOf("=>");
    // the params text is between the first parentheses, unless they aren't found 
    // or come after "=>", in which case the params text is everything before "=>"
    if (open === -1 || (arrow !== -1 && open > arrow))
        return str.slice(0, arrow).trim();
    return str.slice(open + 1, close).trim();
}

function extractClassConstructorParameters(cls) {
    const match = String(cls).match(/constructor\s*\((.*?)\)\s*\{/);
    if (match !== null)
        return match[1].trim();
    return "";
}

function getObjectType(obj) {
    if (typeof obj === "function" && String(obj).startsWith("class"))
        return "class";
    else if (typeof obj === "function")
        return "function";
    else if (obj !== null && typeof obj === "object")
        return "object";
    else
        return "literal";
}

function extractClasses() {
    return pb2GameWorld.wk.Nb;
}

/**
 * extracts objects that are representative of the structure of real class instances within pb3 script environment.  
 * this is done by passing class prototypes to pb2ClassShells._RepresentEngineObject, along with some extra fluff to make it work.  
 * because the objects aren't real instances, calling methods or accessing properties may throw errors.
 */
function extractInstanceRepresentations() {
    function findInstanceofChecks(src) {
        // regex takes string containing something like "if (expression) {"
        // matches contained expression like "r instanceof ClassA" or "r instanceof ClassA || r instanceof ClassB" etc
        const instanceOfChecksExprMatches = [...src.matchAll(/(?<=if\s*\(\s*)(?:r\s+instanceof\s+.*?(?:\s*\|\|)?\s*)*(?=\)\s*\{)/g)];
        const out = Array(instanceOfChecksExprMatches.length);
        let i = 0;
        for (const exprMatch of instanceOfChecksExprMatches) {
            // regex takes result of previous regex
            // matches the individual instanceof checks like "r instanceof ClassA". captures class name
            const classMatches = [...exprMatch[0].matchAll(/r\s+instanceof\s+(.*?)(?=$|(?:\s*\|\|))/g)];
            for (const c of classMatches) {
                c.overallIndex = exprMatch.index + c.index;
                out[i++] = c;
            }
        }
        return out;
    }

    function tidyClassMatchData(matches) {
        return matches.map(m => {
            const className = m[1];
            const root = className.split(".", 1)[0];
            return {
                className,
                usePrefix: eval(`typeof ${root} === "undefined"`),
                toReplace: m[0],
                replaceIndex: m.overallIndex,
            };
        });
    }

    function makeRepresentEngineObjectPatchSrc(src, classMatchData) {
        // iterate backwards cuz we do be modifying
        for (let i = classMatchData.length - 1; i >= 0; i--) {
            const { className, usePrefix, toReplace, replaceIndex } = classMatchData[i];
            const endIndex = replaceIndex + toReplace.length;
            const replaceWith = `prototypeInstanceOf(r, ${usePrefix ? "ExternalClasses." : ""}${className})`;
            src = src.slice(0, replaceIndex) + replaceWith + src.slice(endIndex);
        }

        // add prototypeInstanceOf function
        const prototypeInstanceOfSrc = 
`function prototypeInstanceOf(proto, classy) {
    let classProto = classy.prototype;
    do {
        if (proto === classProto)
            return true;
    } while ((proto = proto.__proto__) !== Object.prototype);
    return false;
}`;
        const bodyBegin = src.indexOf("{") + 1;
        src = src.slice(0, bodyBegin) + prototypeInstanceOfSrc + src.slice(bodyBegin);

        return src;
    }
    
    /**
     * example input -> output:
     * "pb2Window" -> ["pb2Window"]
     * "pb2ClassShells.kB[i].class_object" -> ["pb2ClassShells.kB[0].class_object", ..., "pb2ClassShells.kB[12].class_object"]
     */
    function* getPaths(str, curPos = 0) {
        const open = str.indexOf("\\[");
        if (open === -1)
            yield str;
        else {
            const close = curPos = str.indexOf("\\]", open + "\\[".length);
            const rootKey = str.slice(0, open);
            const rootValue = eval(rootKey);
            // if there is indexing, get a new path for each key
            for (const key of Object.keys(rootValue)) {
                const strWithIndex = `${rootKey}[${key}]${str.slice(close + "\\]".length)}`;
                yield* getPaths(strWithIndex, curPos);
            }
        }
    }

    function isSubclassOf(classy, superClass) {
        return classy.prototype instanceof superClass;
    }

    function findSubclasses(superClasses, cur = globalObject, seen = new WeakSet(), path = []) {
        if (seen.has(cur))
            return [];
        
        let out = [];
        
        if (typeof cur === "function") {
            for (const superClass of superClasses) {
                if (isSubclassOf(cur, superClass)) {
                    out.push({ classy: cur, path: path.join(".") });
                    break;
                }
            }
        }
        else if (typeof cur !== "object" || cur === null)
            return [];
        
        seen.add(cur);

        for (const [key, value] of Object.entries(cur)) {
            path.push(key);
            out.push(...findSubclasses(superClasses, value, seen, path));
            path.pop();
        }
        return out;
    }

    // breadth-first search version
    // thought it would find stuff like pb2EntityAntigravity at "window.pb2EntityAntigravity" instead of "window.pb2Entity.eXd[21]"
    // it doesn't because pb2EntityAntigravity is not in window, it's in the global lexical scope
    /*function findSubclasses(superClasses, root = globalObject) {
        if (typeof root !== "function" && (typeof root !== "object" || root === null))
            return [];

        const seen = new WeakSet();
        const frontier = [root];
        const frontierPaths = [[]];

        function visit(cur, path) {
            if (seen.has(cur))
                return null;
            seen.add(cur);

            for (const [key, value] of Object.entries(cur)) {
                if (typeof value === "function" || (typeof value === "object" && value !== null)) {
                    frontier.push(value);
                    frontierPaths.push(path.concat(key));
                }
            }

            if (typeof cur === "function") {
                for (const superClass of superClasses) {
                    if (isSubclassOf(cur, superClass))
                        return { classy: cur, super: superClass, path: path.join(".") };
                }
            }

            return null;
        }

        const out = [];
        for (let i = 0; i < frontier.length; i++) {
            const classy = frontier[i];
            const path = frontierPaths[i];
            frontier[i] = undefined;
            frontierPaths[i] = undefined;
            const found = visit(classy, path); // may extend frontier
            if (found !== null)
                out.push(found)
        }
        return out;
    }*/

    /**
     * temporarily patches pb2ClassShells._RepresentEngineObject to accept a prototype instead of an instance. 
     * "r instanceof Class" checks are replaced with "r === Class.prototype"
     */
    function withPatchedRepresentEngineObject(newSrc, fn) {
        const old = pb2ClassShells._RepresentEngineObject;
        try {
            pb2ClassShells._RepresentEngineObject = eval(`(function ${newSrc})`);
            return fn()
        }
        finally {
            pb2ClassShells._RepresentEngineObject = old;
        }
    }

    /**
     * temporarily patches pb2ClassShells._bVF to accept a prototype instead of an instance. 
     * "r.__proto__" is replaced with "r"
     */
    function withPatched_bVF(fn) {
        const old = pb2ClassShells._bVF;
        try {
            // regex matches "r.__proto__"
            const newSrc = pb2ClassShells._bVF.toString().replaceAll(/\br\s*\.\s*__proto__/g, "r");
            pb2ClassShells._bVF = eval(`(function ${newSrc})`);
            return fn();
        }
        finally {
            pb2ClassShells._bVF = old;
        }
    }

    /**
     * quick hacky fix to make this work again after the Gurt changed "if (r instanceof 
     * pb2ClassShells.kB[i].class_object)" to "if (r.constructor===pb2ClassShells.kB[i].class_object)"".  
     * a bit brittle. not adaptive. may break
     */
    function hackyUnfuckinator(superClasses) {
        superClasses.push(...pb2ClassShells.kB.map(item => item.class_object));
    }
    
    const src = pb2ClassShells._RepresentEngineObject.toString();
    const matches = findInstanceofChecks(src);
    const classMatchData = tidyClassMatchData(matches);
    const newSrc = makeRepresentEngineObjectPatchSrc(src, classMatchData);

    const superClasses = [];
    for (const {className, usePrefix} of classMatchData) {
        let str = (usePrefix ? "ExternalClasses." : "") + className.replaceAll("[", "\\[").replaceAll("]", "\\]");
        for (const s of getPaths(str)) {
            const classy = eval(s);
            superClasses.push(classy);
        }
    }

    // there are many subclasses that pb2ClassShells._RepresentEngineObject successfully represents but i'm not sure scripts can ever gain access to them
    // for example THREE.Object3D has 44 subclasses and pb2Window has "pb2WindowParamsPanel" and "kP" (pb2Window subclass with type === pb2Window.SAYBOX)
    // to avoid including useless stuff, this gets only the subclasses that are known to be accessible
    const subClasses = findSubclasses([pb2Entity]/*superClasses*/);

    hackyUnfuckinator(superClasses);

    const classesToGetRepresentationOf = new Set([...superClasses, ...subClasses.map(x => x.classy)]);

    //console.log([...classesToGetRepresentationOf].map(c => c.name));

    // special handling to make these work
    pb2Explosion.prototype.yt = null;
    [...classesToGetRepresentationOf].filter(c => isSubclassOf(c, pb2Entity)).forEach(c => c.prototype.box2d_bodies = null);

    const representativeObjects = [];
    withPatchedRepresentEngineObject(newSrc, () => {
        withPatched_bVF(() => {
            for (const classy of classesToGetRepresentationOf) {
                try {
                    const obj = pb2ClassShells._RepresentEngineObject(classy.prototype);
                    if (obj !== null)
                        representativeObjects.push({
                            classy,
                            obj,
                        });
                }
                catch (e) {
                    console.log(`Error on ${classy.name}:`, e);
                }
            }
        });
    });

    delete pb2Explosion.prototype.yt;
    [...classesToGetRepresentationOf].filter(c => isSubclassOf(c, pb2Entity)).forEach(c => delete c.prototype.box2d_bodies);

    return Object.fromEntries(representativeObjects.map(({classy, obj}) => {
        let name = obj._class ?? classy.name ?? obj.constructor?.name;
        if (name !== undefined)
            name += ".prototype";

        // i don't think there exists a map to get these names from so they're hardcoded here
        if (name !== undefined) {
            if (name.startsWith("Object3D.") || 
                name.startsWith("Vector3.") || 
                name.startsWith("Matrix4.") || 
                name.startsWith("Euler."))
                name = "THREE." + name;
            else if (name.startsWith("bsW."))
                name = "pb2GameplayEffects." + name;
        }
        return [name, obj];
    }))
}