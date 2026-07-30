export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2HighRangeColor extends ClassIdentityProps<"pb2HighRangeColor"> {
        r: unknown;
        g: unknown;
        b: unknown;
        clone: () => unknown;
        addRGB: (_r: unknown, _g: unknown, _b: unknown) => unknown;
        /** @param u (default=0xffffff)  */
        from_uint: (u?: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        _uint: unknown;
        limit: () => unknown;
        multiply: (num: unknown) => unknown;
        multiplyColor: (c: unknown) => unknown;
        add: (num: unknown) => unknown;
        addColor: (c: unknown) => unknown;
        average: () => unknown;
        GetAverageValue: () => unknown;
        rand: () => unknown;
        setRGB: (_r: unknown, _g: unknown, _b: unknown) => unknown;
    }
    var pb2HighRangeColor: {
        /** @param u (default=0xffffff)  */
        new (u?: unknown): pb2HighRangeColor;

    }
}
