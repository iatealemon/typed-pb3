import { dts } from "rollup-plugin-dts";

export default [
    {
        input: "pb3-types/types/temp-index.d.ts",
        output: {
            file: "dist/pb3-script-env.d.ts",
            format: "es",
            banner: "export {};",
        },
        plugins: [dts()],
    },
];