export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2ColoredText extends ClassIdentityProps<"pb2ColoredText"> {
        text: string;
        /** Color for every character in `text` */
        colors: pb2HighRangeColor[];
        /** Sets the color of all capital characters to red and others to white. Throws an error if `colors` is non-empty. */
        CapitalRedColors: () => pb2ColoredText;
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
        /** Sets text to white. Throws an error if `colors` is non-empty. */
        WhiteColors: () => pb2ColoredText;
        /**
         * @param nickname_tagged A string containing color tags like "[#00FFFF]John[/] Doe"  
         * @param main_color (default=0xffffff) Color to use for text parts that aren't tagged  
         */
        FromTagged: (nickname_tagged: string, main_color?: number) => pb2ColoredText;
        /**
         * Returns string containing color tags like "[#00FFFF]John[/] Doe" that represents the current text and colors.  
         * 
         * This function caches the result which can cause problems if the colors or text are modified after the cached result is set.
         */
        GetTagged: () => string;
    }
    var pb2ColoredText: {
        /**
         * Creates a new pb2ColoredText with the specified text. The colors have to be defined next for the text to be visible.  
         * 
         * Examples of correct usage:
         * ```js
         * new pb2ColoredText("Fully white").WhiteColors();
         * new pb2ColoredText("CapitalRedColors").CapitalRedColors();
         * new pb2ColoredText().FromTagged("[#00FFFF]John[/] Doe");
         * ```
         * @param txt (default='')  
         */
        new (txt?: string): pb2ColoredText;

    }
}
