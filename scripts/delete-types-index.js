import { unlink } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const indexFilePath = join(__dirname, "..", "pb3-types", "types", "temp-index.d.ts");

unlink(indexFilePath, (err) => {
    if (err) {
        console.error(`Failed to remove ${indexFilePath}.`, err);
    }
    console.log("Deleted temp-index.d.ts");
});