export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Bullet extends ClassIdentityProps<"pb2Bullet"> {
        /** Type is unknown. One known value: 4 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly owner_ragdoll: unknown;
        readonly owner_gun: unknown;
        readonly initial_grenade_type: unknown;
        readonly is_punch: unknown;
        readonly is_sword: unknown;
        readonly is_bite: unknown;
        readonly is_railgun: unknown;
        readonly is_rocket: unknown;
        readonly is_plasma: unknown;
        readonly is_grenade: unknown;
        readonly is_radioactive: unknown;
        readonly is_beam: unknown;
        readonly is_blaster: unknown;
        readonly is_healgun: unknown;
        readonly is_cloud: unknown;
        readonly is_lightning: unknown;
        readonly is_blinding: unknown;
        readonly rocket_direct_damage_mode: unknown;
        readonly is_wall_sticking: unknown;
        readonly is_nail: unknown;
        Teleport: (dx: unknown, dy: unknown) => unknown;
        readonly box2d_body: unknown;
        /** @param dlv (default=false)  */
        remove: (dlv?: unknown) => unknown;
        readonly is_being_removed: unknown;
        bullet_hp: unknown;
        readonly is_thrown_by: unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: unknown) => unknown;
    }
    var pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        /** Type is unknown. One known value: false */
        bullets_damage_guns: unknown;
        /** Type is unknown. One known value: 1 */
        explosive_direct_based_multiplier: unknown;
        /** Type is unknown. One known value: 1.26 */
        held_ragdoll_damage_sword_kick_punch_mult: unknown;
        /** Type is unknown. One known value: 0.66 */
        knock_gun_owner_intensity: unknown;
        /** Type is unknown. One known value: 0.66 */
        knock_sword_owner_intensity: unknown;
        /** Type is unknown. One known value: 1.1 */
        grenade_density: unknown;
        /** Type is unknown. One known value: 1.142857142857143 */
        normal_grenade_mesh_scale: unknown;
        /** Type is unknown. One known value: 6 */
        radius_grenade: unknown;
        /** Type is unknown. One known value: 1 */
        radius_bullet: unknown;
        /** Type is unknown. One known value: 0 */
        radius_beam: unknown;
        /** Type is unknown. One known value: 5 */
        radius_sword: unknown;
        /** Type is unknown. One known value: 30 */
        radius_sword_crosshit: unknown;
        /** Type is unknown. One known value: 20 */
        radius_sword_protection: unknown;
        /** Type is unknown. One known value: 20 */
        radius_sword_bullet_reflection: unknown;
        /** Type is unknown. One known value: 10 */
        radius_cloud: unknown;
        /** Type is unknown. One known value: 7 */
        beam_max_life_time: unknown;
        /** Type is unknown. One known value: 5 */
        time_before_selfhit: unknown;
        /** Type is unknown. One known value: 85 */
        dist_before_selfhit: unknown;
        /** Type is unknown. One known value: 0.24 */
        player_push_power: unknown;
        /** Type is unknown. One known value: 0.18 */
        ragdoll_push_power: unknown;
        /** Type is unknown. One known value: 0.5 */
        ragdoll_push_power_explosion: unknown;
        /** Type is unknown. One known value: 0.5 */
        entity_push_power: unknown;
        /** Type is unknown. One known value: 1.3888888888888888 */
        entity_push_power_explosion: unknown;
        /** Type is unknown. One known value: 2.5 */
        bullet_target_push_multiplayer: unknown;
        /** Type is unknown. One known value: 2.5 */
        bullet_self_push_multiplayer: unknown;
        /** Type is unknown. One known value: 18 */
        beam_hit_spark_multiplier: unknown;
        /** Type is unknown. One known value: 0.333 */
        bullet_gravity_multiplayer: unknown;
        /** Type is unknown. One known value: 0.02 */
        water_push_power: unknown;
        /** Type is unknown. One known value: 0.4 */
        water_push_power_directed: unknown;
        /** Type is unknown. One known value: 0.05 */
        particle_push_power: unknown;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_bullet: unknown;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_beam: unknown;
        /** Type is unknown. One known value: 0.35 */
        ricochet_power_remain_rail: unknown;
        /** Type is unknown. One known value: 0.03 */
        friction_distance_multiplier: unknown;
        /** Type is unknown. One known value: 0.99 */
        friction_air: unknown;
        /** Type is unknown. One known value: 0.9 */
        friction_water: unknown;
        /** Type is unknown. One known value: 0.7 */
        friction_wall: unknown;
        /** Type is unknown. One known value: 0.75 */
        friction_for_beam: unknown;
        /** Type is unknown. One known value: 0.93 */
        friction_for_cloud_air: unknown;
        /** Type is unknown. One known value: 0.4 */
        friction_for_cloud_water: unknown;
        /** Type is unknown. One known value: 0.1 */
        min_damaging_ammount: unknown;
        /** Type is unknown. One known value: 0.05 */
        min_damaging_ammount_nails: unknown;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_AI: unknown;
        /** Type is unknown. One known value: 0.01 */
        min_damaging_ammount_clouds: unknown;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_in_walls: unknown;
        /** Type is unknown. One known value: 0.66 */
        held_gun_knock_multiplier: unknown;
        /** Type is unknown. One known value: 0.01 */
        max_damaging_constant_beam_damage: unknown;
        /** Type is unknown. One known value: 50 */
        blip_time: unknown;
        /** Type is unknown. One known value: 90 */
        max_rocket_fuel: unknown;
        /** Type is unknown. One known value: 0.1 */
        bullet_min_hp: unknown;
        /** Type is unknown. One known value: 1 */
        hp_default_bullet: unknown;
        /** Type is unknown. One known value: 0.65 */
        hp_railgun: unknown;
        /** Type is unknown. One known value: 1 */
        hp_raygun: unknown;
        /** Type is unknown. One known value: 1 */
        hp_sword: unknown;
        /** Type is unknown. One known value: 0.75 */
        hp_rocket: unknown;
        /** Type is unknown. One known value: 0.45 */
        hp_plasma: unknown;
        /** Type is unknown. One known value: 1 */
        hp_plasma_radioactive: unknown;
        /** Type is unknown. One known value: 2 */
        hp_beam: unknown;
        /** Type is unknown. One known value: 1 */
        hp_grenade: unknown;
        /** Type is unknown. One known value: 1.8 */
        hp_nail: unknown;
        /** Type is unknown. One known value: 240 */
        default_bullet_speed: unknown;
        /** Type is unknown. One known value: 30 */
        default_bullet_life: unknown;
        /**
         * @param x   
         * @param y   
         * @param _type   
         * @param cfF (default=true)   
         * @param owner_ragdoll (default=null)   
         * @param PF (default=false)   
         */
        CreateGadget: (x: unknown, y: unknown, _type: unknown, cfF?: unknown, owner_ragdoll?: unknown, PF?: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        bullets: unknown;
    }
}
