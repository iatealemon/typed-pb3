export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityBarrel extends pb2EntityBase<"pb2EntityBarrel"> {}
    var pb2EntityBarrel: ClassIdentityProps<"pb2EntityBarrel"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_YELLOW: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_BLUE: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_RED: unknown;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_EMPTY: unknown;
        /** Type is unknown. One known value: 5 */
        STYLE_ID_TOXIC_GAS: unknown;
        /** Type is unknown. One known value: 6 */
        STYLE_ID_RED_PBFTTP: unknown;
        /** Type is unknown. One known value: 7 */
        STYLE_ID_FREEZING: unknown;
        /** Type is unknown. One known value: 8 */
        STYLE_ID_RADIOACTIVE: unknown;
    }
}
