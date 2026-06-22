import { readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dir = join(__dirname, "..", "pb3-types");

const imports = readdirSync(dir)
    .filter(f => f.endsWith(".d.ts") && f !== "temp-index.d.ts")
    .sort()
    .map(f => `import "./${f}";`)
    .join("\n");

writeFileSync(join(dir, "temp-index.d.ts"), imports + "\nexport {}\n");
console.log("Created temp-index.d.ts");