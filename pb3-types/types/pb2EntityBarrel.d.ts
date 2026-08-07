export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityBarrel extends pb2EntityBase<"pb2EntityBarrel"> {}
    var pb2EntityBarrel: ClassIdentityProps<"pb2EntityBarrel"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_YELLOW: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_BLUE: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_RED: TODO;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_EMPTY: TODO;
        /** Type is unknown. One known value: 5 */
        STYLE_ID_TOXIC_GAS: TODO;
        /** Type is unknown. One known value: 6 */
        STYLE_ID_RED_PBFTTP: TODO;
        /** Type is unknown. One known value: 7 */
        STYLE_ID_FREEZING: TODO;
        /** Type is unknown. One known value: 8 */
        STYLE_ID_RADIOACTIVE: TODO;
    }
}
