export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2StyleBoost extends ClassIdentityProps<"pb2StyleBoost"> {
        readonly ragdoll: unknown;
        readonly style_id: unknown;
        readonly noping_out_boost: unknown;
        readonly noping_out_current_boost: unknown;
        readonly noping_out_boost_ignition: unknown;
        boost: unknown;
        readonly activated: unknown;
        max_fuel: unknown;
        fuel: unknown;
        readonly raycast_less_activation_allowed_timer: unknown;
        readonly reactivation_anti_flood_timer: unknown;
        readonly denied_repeat_cooldown: unknown;
        doublejumps_left: number;
        doublejumps_max: number;
        readonly current_boost: unknown;
    }
    var pb2StyleBoost: ClassIdentityProps<"pb2StyleBoost"> & {
        /** Type is unknown. One known value: 0 */
        NONE: unknown;
        /** Type is unknown. One known value: 1 */
        SELFBOOST: unknown;
        /** Type is unknown. One known value: 2 */
        JETPACK: unknown;
        /** Type is unknown. One known value: 3 */
        DOUBLEJUMP: unknown;
        /** Type is unknown. One known value: ["pb2StyleBoost.NONE","pb2StyleBoost.SELFBOOST","pb2StyleBoost.JETPACK","pb2StyleBoost.DOUBLEJUMP"] */
        ALL_TYPES: unknown;
        noping_out_boost_max: number;
        noping_out_boost_regen_speed: number;
        noping_out_boost_regen_speed_midair: number;
        noping_out_current_boost_max: number;
        noping_out_boost_strength: number;
        jetpack_loop_loudness: number;
        jetpack_auto_jetpack_on_double_jump_duration: number;
        jetpack_max_fuel_for_new_ragdolls: number;
        selfboost_decay_speed: number;
        selfboost_strength: number;
        doublejump_maximum_charge_for_new_ragdolls: number;
        doublejump_restore_speed: number;
        doublejump_strength: number;
        doublejump_single_boost_duration_decay: number;
    }
}
