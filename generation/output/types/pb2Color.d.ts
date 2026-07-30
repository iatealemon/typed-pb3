export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Color extends ClassIdentityProps<"pb2Color"> {
        r: unknown;
        g: unknown;
        b: unknown;
        clone: () => unknown;
        /** Type is unknown. One known value: 0 */
        _uint: unknown;
        multiply: (num: unknown) => unknown;
        average: () => unknown;
        toColorTransform: () => unknown;
        /** @param enC (default=1)  */
        random: (enC?: unknown) => unknown;
        multUpToMax: (max: unknown) => unknown;
        setRGB: (r: unknown, g: unknown, b: unknown) => unknown;
        isEqual: (c: unknown) => unknown;
    }
    var pb2Color: {
        /** @param u (default=0xffffff)  */
        new (u?: unknown): pb2Color;

    }
}
