import { readdirSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INDEX_NAME = "temp-index.d.ts";

const typesDir = join(__dirname, "..", "pb3-types", "types");
const indexFile = join(typesDir, INDEX_NAME);

try {
    const imports = readdirSync(typesDir)
        .filter(f => f.endsWith(".d.ts") && f !== INDEX_NAME)
        .sort()
        .map(f => `import "./${f}";`)
        .join("\n");
    writeFileSync(indexFile, imports + "\nexport {}\n");
    console.log(`Created ${INDEX_NAME}`);

    execSync("rollup -c", { stdio: "inherit" });
}
finally {
    rmSync(indexFile, { force: true });
    console.log(`Deleted ${INDEX_NAME}`);
}