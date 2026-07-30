export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityFloatingIce extends pb2EntityBase<"pb2EntityFloatingIce"> {}
    var pb2EntityFloatingIce: ClassIdentityProps<"pb2EntityFloatingIce"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_ICE: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_ROCK: unknown;
    }
}
