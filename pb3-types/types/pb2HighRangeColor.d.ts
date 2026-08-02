export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2HighRangeColor extends ClassIdentityProps<"pb2HighRangeColor"> {
        r: number;
        g: number;
        b: number;
        clone: () => pb2HighRangeColor;
        addRGB: (_r: number, _g: number, _b: number) => unknown;
        /** @param u (default=0xffffff)  */
        from_uint: (u?: number) => unknown;
        _uint: number;
        limit: () => unknown;
        multiply: (num: number) => unknown;
        multiplyColor: (c: unknown) => unknown;
        add: (num: number) => unknown;
        addColor: (c: unknown) => unknown;
        average: () => unknown;
        GetAverageValue: () => unknown;
        rand: () => unknown;
        setRGB: (_r: number, _g: number, _b: number) => unknown;
    }
    var pb2HighRangeColor: {
        /** @param u (default=0xffffff)  */
        new (u?: number): pb2HighRangeColor;

    }
}
