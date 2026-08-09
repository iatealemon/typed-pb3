export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2ColoredText extends ClassIdentityProps<"pb2ColoredText"> {
        text: TODO;
        colors: TODO;
        CapitalRedColors: () => TODO;
        /**
         * Bugged. Tries to set every color to `new pb2HighRangeColor().random(1)` but `random` doesn't exist on pb2HighRangeColor.  
         * 
         * Working alternative:
         * ```js
         * for (let i = 0; i < coloredText.text.length; i++)
         *     coloredText.colors[i] = new pb2HighRangeColor(Math.random() * Math.pow(16, 6));
         * ```
         */
        RandomColors: () => pb2ColoredText;
        WhiteColors: () => TODO;
        /**
         * @param nickname_tagged   
         * @param main_color (default=undefined)   
         */
        FromTagged: (nickname_tagged: TODO, main_color?: TODO) => TODO;
        GetTagged: () => TODO;
    }
    var pb2ColoredText: {
        /** @param txt (default='')  */
        new (txt?: TODO): pb2ColoredText;

    }
}
