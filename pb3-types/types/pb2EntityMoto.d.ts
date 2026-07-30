export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityMoto extends pb2EntityBase<"pb2EntityMoto"> {}
    var pb2EntityMoto: ClassIdentityProps<"pb2EntityMoto"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_MOTO: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_MOBILE_CS: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_MOBILE_C9: unknown;
    }
}
