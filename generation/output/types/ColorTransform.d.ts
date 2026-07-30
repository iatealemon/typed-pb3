export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface ColorTransform extends ClassIdentityProps<"ColorTransform"> {
        redMultiplier: unknown;
        greenMultiplier: unknown;
        blueMultiplier: unknown;
        redOffset: unknown;
        greenOffset: unknown;
        blueOffset: unknown;
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
        new (r?: unknown, g?: unknown, b?: unknown, alphaMultiplier?: unknown, redOffset?: unknown, greenOffset?: unknown, blueOffset?: unknown): ColorTransform;

    }
}
