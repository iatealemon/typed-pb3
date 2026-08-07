export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2ColoredText extends ClassIdentityProps<"pb2ColoredText"> {
        text: TODO;
        colors: TODO;
        CapitalRedColors: () => TODO;
        RandomColors: () => TODO;
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
