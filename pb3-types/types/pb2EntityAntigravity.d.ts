export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityAntigravity extends pb2EntityBase<"pb2EntityAntigravity"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: unknown[]): unknown;
        range: unknown;
        strength: unknown;
        mass_cap_scale: unknown;
        cooldown_duration_scale: unknown;
        can_be_damaged: unknown;
        lights_intensity: unknown;
        light_current: unknown;
        light_next_update_in: unknown;
        malfunction_timer: unknown;
    }
    var pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FORCE: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_IMPACT_PREVENTION: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_KINETIC_PUSHER: unknown;
    }
}
