export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Bullet extends ClassIdentityProps<"pb2Bullet"> {
        /** Type is unknown. One known value: 4 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly owner_ragdoll: TODO;
        readonly owner_gun: TODO;
        readonly initial_grenade_type: TODO;
        readonly is_punch: boolean;
        readonly is_sword: boolean;
        readonly is_bite: boolean;
        readonly is_railgun: boolean;
        readonly is_rocket: boolean;
        readonly is_plasma: boolean;
        readonly is_grenade: boolean;
        readonly is_radioactive: boolean;
        readonly is_beam: boolean;
        readonly is_blaster: boolean;
        readonly is_healgun: boolean;
        readonly is_cloud: boolean;
        readonly is_lightning: boolean;
        readonly is_blinding: boolean;
        readonly rocket_direct_damage_mode: TODO;
        readonly is_wall_sticking: boolean;
        readonly is_nail: boolean;
        Teleport: (dx: number, dy: number) => TODO;
        readonly box2d_body: b2Body;
        /** @param dlv (default=false)  */
        remove: (dlv?: TODO) => TODO;
        readonly is_being_removed: boolean;
        bullet_hp: number;
        readonly is_thrown_by: TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: 0 | 1 | 2) => THREE.Mesh | null;
    }
    var pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        /** Type is unknown. One known value: false */
        bullets_damage_guns: TODO;
        /** Type is unknown. One known value: 1 */
        explosive_direct_based_multiplier: TODO;
        /** Type is unknown. One known value: 1.26 */
        held_ragdoll_damage_sword_kick_punch_mult: TODO;
        /** Type is unknown. One known value: 0.66 */
        knock_gun_owner_intensity: TODO;
        /** Type is unknown. One known value: 0.66 */
        knock_sword_owner_intensity: TODO;
        /** Type is unknown. One known value: 1.1 */
        grenade_density: TODO;
        /** Type is unknown. One known value: 1.142857142857143 */
        normal_grenade_mesh_scale: TODO;
        /** Type is unknown. One known value: 6 */
        radius_grenade: TODO;
        /** Type is unknown. One known value: 1 */
        radius_bullet: TODO;
        /** Type is unknown. One known value: 0 */
        radius_beam: TODO;
        /** Type is unknown. One known value: 5 */
        radius_sword: TODO;
        /** Type is unknown. One known value: 30 */
        radius_sword_crosshit: TODO;
        /** Type is unknown. One known value: 20 */
        radius_sword_protection: TODO;
        /** Type is unknown. One known value: 20 */
        radius_sword_bullet_reflection: TODO;
        /** Type is unknown. One known value: 10 */
        radius_cloud: TODO;
        /** Type is unknown. One known value: 7 */
        beam_max_life_time: TODO;
        /** Type is unknown. One known value: 5 */
        time_before_selfhit: TODO;
        /** Type is unknown. One known value: 85 */
        dist_before_selfhit: TODO;
        /** Type is unknown. One known value: 0.24 */
        player_push_power: TODO;
        /** Type is unknown. One known value: 0.18 */
        ragdoll_push_power: TODO;
        /** Type is unknown. One known value: 0.5 */
        ragdoll_push_power_explosion: TODO;
        /** Type is unknown. One known value: 0.5 */
        entity_push_power: TODO;
        /** Type is unknown. One known value: 1.3888888888888888 */
        entity_push_power_explosion: TODO;
        /** Type is unknown. One known value: 2.5 */
        bullet_target_push_multiplayer: TODO;
        /** Type is unknown. One known value: 2.5 */
        bullet_self_push_multiplayer: TODO;
        /** Type is unknown. One known value: 18 */
        beam_hit_spark_multiplier: TODO;
        /** Type is unknown. One known value: 0.333 */
        bullet_gravity_multiplayer: TODO;
        /** Type is unknown. One known value: 0.02 */
        water_push_power: TODO;
        /** Type is unknown. One known value: 0.4 */
        water_push_power_directed: TODO;
        /** Type is unknown. One known value: 0.05 */
        particle_push_power: TODO;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_bullet: TODO;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_beam: TODO;
        /** Type is unknown. One known value: 0.35 */
        ricochet_power_remain_rail: TODO;
        /** Type is unknown. One known value: 0.03 */
        friction_distance_multiplier: TODO;
        /** Type is unknown. One known value: 0.99 */
        friction_air: TODO;
        /** Type is unknown. One known value: 0.9 */
        friction_water: TODO;
        /** Type is unknown. One known value: 0.7 */
        friction_wall: TODO;
        /** Type is unknown. One known value: 0.75 */
        friction_for_beam: TODO;
        /** Type is unknown. One known value: 0.93 */
        friction_for_cloud_air: TODO;
        /** Type is unknown. One known value: 0.4 */
        friction_for_cloud_water: TODO;
        /** Type is unknown. One known value: 0.1 */
        min_damaging_ammount: TODO;
        /** Type is unknown. One known value: 0.05 */
        min_damaging_ammount_nails: TODO;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_AI: TODO;
        /** Type is unknown. One known value: 0.01 */
        min_damaging_ammount_clouds: TODO;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_in_walls: TODO;
        /** Type is unknown. One known value: 0.66 */
        held_gun_knock_multiplier: TODO;
        /** Type is unknown. One known value: 0.01 */
        max_damaging_constant_beam_damage: TODO;
        /** Type is unknown. One known value: 50 */
        blip_time: TODO;
        /** Type is unknown. One known value: 90 */
        max_rocket_fuel: TODO;
        /** Type is unknown. One known value: 0.1 */
        bullet_min_hp: TODO;
        /** Type is unknown. One known value: 1 */
        hp_default_bullet: TODO;
        /** Type is unknown. One known value: 0.65 */
        hp_railgun: TODO;
        /** Type is unknown. One known value: 1 */
        hp_raygun: TODO;
        /** Type is unknown. One known value: 1 */
        hp_sword: TODO;
        /** Type is unknown. One known value: 0.75 */
        hp_rocket: TODO;
        /** Type is unknown. One known value: 0.45 */
        hp_plasma: TODO;
        /** Type is unknown. One known value: 1 */
        hp_plasma_radioactive: TODO;
        /** Type is unknown. One known value: 2 */
        hp_beam: TODO;
        /** Type is unknown. One known value: 1 */
        hp_grenade: TODO;
        /** Type is unknown. One known value: 1.8 */
        hp_nail: TODO;
        /** Type is unknown. One known value: 240 */
        default_bullet_speed: TODO;
        /** Type is unknown. One known value: 30 */
        default_bullet_life: TODO;
        /**
         * @param x   
         * @param y   
         * @param _type   
         * @param cfF (default=true)   
         * @param owner_ragdoll (default=null)   
         * @param PF (default=false)   
         */
        CreateGadget: (x: number, y: number, _type: TODO, cfF?: TODO, owner_ragdoll?: TODO, PF?: TODO) => TODO;
        bullets: pb2Bullet[];
    }
}
