export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2ColoredText extends ClassIdentityProps<"pb2ColoredText"> {
        text: unknown;
        colors: unknown;
        CapitalRedColors: () => unknown;
        RandomColors: () => unknown;
        WhiteColors: () => unknown;
        /**
         * @param nickname_tagged   
         * @param main_color (default=undefined)   
         */
        FromTagged: (nickname_tagged: unknown, main_color?: unknown) => unknown;
        GetTagged: () => unknown;
    }
    var pb2ColoredText: {
        /** @param txt (default='')  */
        new (txt?: unknown): pb2ColoredText;

    }
}
