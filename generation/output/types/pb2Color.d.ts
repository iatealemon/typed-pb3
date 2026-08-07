export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Color extends ClassIdentityProps<"pb2Color"> {
        r: TODO;
        g: TODO;
        b: TODO;
        clone: () => TODO;
        /** Type is unknown. One known value: 0 */
        _uint: TODO;
        multiply: (num: TODO) => TODO;
        average: () => TODO;
        toColorTransform: () => TODO;
        /** @param enC (default=1)  */
        random: (enC?: TODO) => TODO;
        multUpToMax: (max: TODO) => TODO;
        setRGB: (r: TODO, g: TODO, b: TODO) => TODO;
        isEqual: (c: TODO) => TODO;
    }
    var pb2Color: {
        /** @param u (default=0xffffff)  */
        new (u?: TODO): pb2Color;

    }
}
