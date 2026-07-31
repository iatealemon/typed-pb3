import { readdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INDEX_NAME = "temp-index.d.ts";

const inputDir = join(__dirname, "..", "pb3-types");
const typesDir = join(inputDir, "types");
const indexFile = join(typesDir, INDEX_NAME);
const libAnalysisFile = join(inputDir, "lib-analysis.json");
const squigglificationsOutput = join(__dirname, "..", "dist", "squigglifications.json");

try {
    writeIndexFile();
    bundleTypes();
    writeSquigglificationsJSON();
}
finally {
    deleteIndexFile();
}

function writeIndexFile() {
    const imports = readdirSync(typesDir)
        .filter(f => f.endsWith(".d.ts") && f !== INDEX_NAME)
        .sort()
        .map(f => `import "./${f}";`)
        .join("\n");
    writeFileSync(indexFile, imports + "\nexport {}\n");
    console.log(`Created ${INDEX_NAME}`);
}

function bundleTypes() {
    execSync("rollup -c", { stdio: "inherit" });
}

function writeSquigglificationsJSON() {
    const rawData = readFileSync(libAnalysisFile, "utf8");
    const jsonData = JSON.parse(rawData);
    writeFileSync(squigglificationsOutput, JSON.stringify(jsonData["libOnly"] ?? []));
    console.log(`Wrote libOnly list to dist`);
}

function deleteIndexFile() {
    rmSync(indexFile, { force: true });
    console.log(`Deleted ${INDEX_NAME}`);
}