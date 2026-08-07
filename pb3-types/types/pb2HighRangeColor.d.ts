export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2HighRangeColor extends ClassIdentityProps<"pb2HighRangeColor"> {
        r: number;
        g: number;
        b: number;
        clone: () => pb2HighRangeColor;
        addRGB: (_r: number, _g: number, _b: number) => TODO;
        /** @param u (default=0xffffff)  */
        from_uint: (u?: number) => TODO;
        _uint: number;
        limit: () => TODO;
        multiply: (num: number) => TODO;
        multiplyColor: (c: TODO) => TODO;
        add: (num: number) => TODO;
        addColor: (c: TODO) => TODO;
        average: () => TODO;
        GetAverageValue: () => TODO;
        rand: () => TODO;
        setRGB: (_r: number, _g: number, _b: number) => TODO;
    }
    var pb2HighRangeColor: {
        /** @param u (default=0xffffff)  */
        new (u?: number): pb2HighRangeColor;

    }
}
