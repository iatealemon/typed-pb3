export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface ColorTransform extends ClassIdentityProps<"ColorTransform"> {
        redMultiplier: number;
        greenMultiplier: number;
        blueMultiplier: number;
        redOffset: number;
        greenOffset: number;
        blueOffset: number;
        clone: () => unknown;
        multiplyHighRangeColor: (v: unknown) => unknown;
    }
    var ColorTransform: {
        /**
         * @param r (default=0)   
         * @param g (default=0)   
         * @param b (default=0)   
         * @param alphaMultiplier (default=1)   
         * @param redOffset (default=0)   
         * @param greenOffset (default=0)   
         * @param blueOffset (default=0)   
         */
        new (r?: number, g?: number, b?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number): ColorTransform;

    }
}
