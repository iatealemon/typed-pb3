export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface ColorTransform extends ClassIdentityProps<"ColorTransform"> {
        redMultiplier: TODO;
        greenMultiplier: TODO;
        blueMultiplier: TODO;
        redOffset: TODO;
        greenOffset: TODO;
        blueOffset: TODO;
        clone: () => TODO;
        multiplyHighRangeColor: (v: TODO) => TODO;
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
        new (r?: TODO, g?: TODO, b?: TODO, alphaMultiplier?: TODO, redOffset?: TODO, greenOffset?: TODO, blueOffset?: TODO): ColorTransform;

    }
}
