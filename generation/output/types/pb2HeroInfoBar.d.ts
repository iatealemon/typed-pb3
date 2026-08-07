export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2HeroInfoBar extends ClassIdentityProps<"pb2HeroInfoBar"> {
        /** Type is unknown. One known value: 30 */
        readonly classid: TODO;
        title: TODO;
        value: TODO;
        value_max: TODO;
        value_handicap: TODO;
        color: TODO;
        color_border: TODO;
        color_delta: TODO;
        color_handicap: TODO;
        color_title: TODO;
    }
    var pb2HeroInfoBar: {
        new (params: TODO): pb2HeroInfoBar;
        /** Type is unknown. One known value: 4 */
        TYPE_SERVER_VAR: TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_SPACER: TODO;
    }
}
