export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2StyleBoost extends ClassIdentityProps<"pb2StyleBoost"> {
        readonly ragdoll: TODO;
        readonly style_id: TODO;
        readonly noping_out_boost: TODO;
        readonly noping_out_current_boost: TODO;
        readonly noping_out_boost_ignition: TODO;
        boost: TODO;
        readonly activated: TODO;
        max_fuel: TODO;
        fuel: TODO;
        readonly raycast_less_activation_allowed_timer: TODO;
        readonly reactivation_anti_flood_timer: TODO;
        readonly denied_repeat_cooldown: TODO;
        doublejumps_left: number;
        doublejumps_max: number;
        readonly current_boost: TODO;
    }
    var pb2StyleBoost: ClassIdentityProps<"pb2StyleBoost"> & {
        /** Type is unknown. One known value: 0 */
        NONE: TODO;
        /** Type is unknown. One known value: 1 */
        SELFBOOST: TODO;
        /** Type is unknown. One known value: 2 */
        JETPACK: TODO;
        /** Type is unknown. One known value: 3 */
        DOUBLEJUMP: TODO;
        /** Type is unknown. One known value: ["pb2StyleBoost.NONE","pb2StyleBoost.SELFBOOST","pb2StyleBoost.JETPACK","pb2StyleBoost.DOUBLEJUMP"] */
        ALL_TYPES: TODO;
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
