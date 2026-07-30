export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2HeroInfoBar extends ClassIdentityProps<"pb2HeroInfoBar"> {
        /** Type is unknown. One known value: 30 */
        readonly classid: unknown;
        title: unknown;
        value: unknown;
        value_max: unknown;
        value_handicap: unknown;
        color: unknown;
        color_border: unknown;
        color_delta: unknown;
        color_handicap: unknown;
        color_title: unknown;
    }
    var pb2HeroInfoBar: {
        new (params: unknown): pb2HeroInfoBar;
        /** Type is unknown. One known value: 4 */
        TYPE_SERVER_VAR: unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_SPACER: unknown;
    }
}
