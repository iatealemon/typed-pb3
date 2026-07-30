export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityTurret extends pb2EntityBase<"pb2EntityTurret"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: unknown[]): unknown;
    }
    var pb2EntityTurret: ClassIdentityProps<"pb2EntityTurret"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FACET: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_DENIER: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_SCOUT_DRONE: unknown;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_HARASSER_DRONE: unknown;
    }
}
