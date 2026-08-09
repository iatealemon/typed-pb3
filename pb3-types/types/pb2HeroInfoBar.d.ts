export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2HeroInfoBar extends ClassIdentityProps<"pb2HeroInfoBar"> {
        /** Type is unknown. One known value: 30 */
        readonly classid: TODO;
        title: string;
        value: number;
        value_max: number;
        value_handicap: number;
        color: pb2HighRangeColor;
        color_border: pb2HighRangeColor;
        color_delta: pb2HighRangeColor | null;
        color_handicap: pb2HighRangeColor | null;
        color_title: pb2HighRangeColor;
    }
    var pb2HeroInfoBar: {
        /**
         * @param params Object containing parameters
         * @param params.type (default=pb2HeroInfoBar.TYPE_SERVER_VAR)
         * @param params.order (default=1)
         * @param params.title (default="")
         * @param params.value (default=0)
         * @param params.value_max (default=100)
         * @param params.value_handicap (default=0)
         * @param params.color (default=new pb2HighRangeColor(0xd81a1a))
         * @param params.color_border (default=new pb2HighRangeColor(0xff4747))
         * @param params.color_delta (default=null)
         * @param params.color_handicap (default=null)
         * @param params.color_title (default=new pb2HighRangeColor(0xff4747))
         */
        new (params: {
            type?: TODO,
            order?: number,
            title?: string,
            value?: number,
            value_max?: number,
            value_handicap?: number,
            color?: pb2HighRangeColor,
            color_border?: pb2HighRangeColor,
            color_delta?: pb2HighRangeColor,
            color_handicap?: pb2HighRangeColor,
            color_title?: pb2HighRangeColor,
        }): pb2HeroInfoBar;
        /** Type is unknown. One known value: 4 */
        TYPE_SERVER_VAR: TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_SPACER: TODO;
    }
}
