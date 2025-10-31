import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityInstanceBase } from "./pb2Entity";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        readonly STYLE_ID_FORCE: any;
        readonly STYLE_ID_IMPACT_PREVENTION: any;
        readonly STYLE_ID_KINETIC_PUSHER: any;
    };
    
    /** unfinished */
    type pb2EntityAntigravityInstance = pb2EntityInstanceBase<"pb2EntityAntigravity"> & {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
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
    };
}