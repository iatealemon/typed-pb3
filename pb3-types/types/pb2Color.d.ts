export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Color extends ClassIdentityProps<"pb2Color"> {
        r: number;
        g: number;
        b: number;
        clone: () => pb2Color;
        _uint: number;
        multiply: (num: number) => pb2Color;
        /** sets every color channel value to their average */
        average: () => pb2Color;
        toColorTransform: () => ColorTransform;
        /** @param enC (default=1) proportion (in range 0-1) */
        random: (enC?: number) => pb2Color;
        multUpToMax: (max: number) => pb2Color;
        setRGB: (r: number, g: number, b: number) => pb2Color;
        isEqual: (c: pb2Color) => boolean;
    }
    var pb2Color: {
        /** @param u (default=0xffffff)  */
        new (u?: number): pb2Color;

    }
}
