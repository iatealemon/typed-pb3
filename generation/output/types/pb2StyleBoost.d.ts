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
        doublejumps_left: unknown;
        doublejumps_max: unknown;
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
        /** Type is unknown. One known value: 20 */
        noping_out_boost_max: unknown;
        /** Type is unknown. One known value: 1 */
        noping_out_boost_regen_speed: unknown;
        /** Type is unknown. One known value: 0.1 */
        noping_out_boost_regen_speed_midair: unknown;
        /** Type is unknown. One known value: 1 */
        noping_out_current_boost_max: unknown;
        /** Type is unknown. One known value: 66 */
        noping_out_boost_strength: unknown;
        /** Type is unknown. One known value: 6 */
        jetpack_loop_loudness: unknown;
        /** Type is unknown. One known value: 30 */
        jetpack_auto_jetpack_on_double_jump_duration: unknown;
        /** Type is unknown. One known value: 2000 */
        jetpack_max_fuel_for_new_ragdolls: unknown;
        /** Type is unknown. One known value: 0.45 */
        selfboost_decay_speed: unknown;
        /** Type is unknown. One known value: 275 */
        selfboost_strength: unknown;
        /** Type is unknown. One known value: 1.5 */
        doublejump_maximum_charge_for_new_ragdolls: unknown;
        /** Type is unknown. One known value: 0.3 */
        doublejump_restore_speed: unknown;
        /** Type is unknown. One known value: 160 */
        doublejump_strength: unknown;
        /** Type is unknown. One known value: 0.1 */
        doublejump_single_boost_duration_decay: unknown;
    }
}
