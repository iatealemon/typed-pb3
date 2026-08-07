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
        doublejumps_left: TODO;
        doublejumps_max: TODO;
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
        /** Type is unknown. One known value: 20 */
        noping_out_boost_max: TODO;
        /** Type is unknown. One known value: 1 */
        noping_out_boost_regen_speed: TODO;
        /** Type is unknown. One known value: 0.1 */
        noping_out_boost_regen_speed_midair: TODO;
        /** Type is unknown. One known value: 1 */
        noping_out_current_boost_max: TODO;
        /** Type is unknown. One known value: 66 */
        noping_out_boost_strength: TODO;
        /** Type is unknown. One known value: 6 */
        jetpack_loop_loudness: TODO;
        /** Type is unknown. One known value: 30 */
        jetpack_auto_jetpack_on_double_jump_duration: TODO;
        /** Type is unknown. One known value: 2000 */
        jetpack_max_fuel_for_new_ragdolls: TODO;
        /** Type is unknown. One known value: 0.45 */
        selfboost_decay_speed: TODO;
        /** Type is unknown. One known value: 275 */
        selfboost_strength: TODO;
        /** Type is unknown. One known value: 1.5 */
        doublejump_maximum_charge_for_new_ragdolls: TODO;
        /** Type is unknown. One known value: 0.3 */
        doublejump_restore_speed: TODO;
        /** Type is unknown. One known value: 160 */
        doublejump_strength: TODO;
        /** Type is unknown. One known value: 0.1 */
        doublejump_single_boost_duration_decay: TODO;
    }
}
