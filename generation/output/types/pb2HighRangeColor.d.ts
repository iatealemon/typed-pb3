export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2HighRangeColor extends ClassIdentityProps<"pb2HighRangeColor"> {
        r: TODO;
        g: TODO;
        b: TODO;
        clone: () => TODO;
        addRGB: (_r: TODO, _g: TODO, _b: TODO) => TODO;
        /** @param u (default=0xffffff)  */
        from_uint: (u?: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        _uint: TODO;
        limit: () => TODO;
        multiply: (num: TODO) => TODO;
        multiplyColor: (c: TODO) => TODO;
        add: (num: TODO) => TODO;
        addColor: (c: TODO) => TODO;
        average: () => TODO;
        GetAverageValue: () => TODO;
        rand: () => TODO;
        setRGB: (_r: TODO, _g: TODO, _b: TODO) => TODO;
    }
    var pb2HighRangeColor: {
        /** @param u (default=0xffffff)  */
        new (u?: TODO): pb2HighRangeColor;

    }
}
