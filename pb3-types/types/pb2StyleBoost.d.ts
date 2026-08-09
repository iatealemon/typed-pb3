export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

export type pb2StyleBoostBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    readonly activated: TODO;
    boost: TODO;
    readonly current_boost: TODO;
    readonly denied_repeat_cooldown: TODO;
    doublejumps_left: number;
    doublejumps_max: number;
    fuel: TODO;
    max_fuel: TODO;
    readonly noping_out_boost: TODO;
    readonly noping_out_boost_ignition: TODO;
    readonly noping_out_current_boost: TODO;
    readonly ragdoll: TODO;
    readonly raycast_less_activation_allowed_timer: TODO;
    readonly reactivation_anti_flood_timer: TODO;
    readonly style_id: TODO;
}

declare global {
    interface pb2StyleBoost extends pb2StyleBoostBase<"pb2StyleBoost"> {} // pb2StyleBoost.NONE
    interface pb2StyleBoostSelfboost extends pb2StyleBoostBase<"fnR"> {} // pb2StyleBoost.SELFBOOST
    interface pb2StyleBoostJetpack extends pb2StyleBoostBase<"fnC"> {} // pb2StyleBoost.JETPACK
    interface pb2StyleBoostDoublejump extends pb2StyleBoostBase<"fnD"> {} // pb2StyleBoost.DOUBLEJUMP
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
