export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntitySeat extends pb2EntityBase<"pb2EntitySeat"> {}
    var pb2EntitySeat: ClassIdentityProps<"pb2EntitySeat"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_SINGLE_SIDE: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_DOUBLE_SIDE: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_SINGLE_SIDE_FLAT: TODO;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_DOUBLE_SIDE_FLAT: TODO;
    }
}
