export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityAntigravity extends pb2EntityBase<"pb2EntityAntigravity"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: TODO[]): TODO;
        range: number;
        strength: number;
        mass_cap_scale: number;
        cooldown_duration_scale: number;
        can_be_damaged: boolean;
        lights_intensity: TODO;
        light_current: TODO;
        light_next_update_in: TODO;
        malfunction_timer: TODO;
    }
    var pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FORCE: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_IMPACT_PREVENTION: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_KINETIC_PUSHER: TODO;
    }
}
