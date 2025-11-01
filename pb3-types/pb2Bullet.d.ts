import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        beam_hit_spark_multiplier: unknown;
        beam_max_life_time: unknown;
        blip_time: unknown;
        bullet_gravity_multiplayer: unknown;
        bullet_min_hp: unknown;
        bullet_self_push_multiplayer: unknown;
        bullet_target_push_multiplayer: unknown;
        bullets: unknown;
        bullets_damage_guns: unknown;
        default_bullet_life: unknown;
        default_bullet_speed: unknown;
        dist_before_selfhit: unknown;
        entity_push_power: unknown;
        entity_push_power_explosion: unknown;
        explosive_direct_based_multiplier: unknown;
        friction_air: unknown;
        friction_distance_multiplier: unknown;
        friction_for_beam: unknown;
        friction_for_cloud_air: unknown;
        friction_for_cloud_water: unknown;
        friction_wall: unknown;
        friction_water: unknown;
        grenade_density: unknown;
        held_gun_knock_multiplier: unknown;
        held_ragdoll_damage_sword_kick_punch_mult: unknown;
        hp_beam: unknown;
        hp_default_bullet: unknown;
        hp_grenade: unknown;
        hp_nail: unknown;
        hp_plasma: unknown;
        hp_plasma_radioactive: unknown;
        hp_railgun: unknown;
        hp_raygun: unknown;
        hp_rocket: unknown;
        hp_sword: unknown;
        knock_gun_owner_intensity: unknown;
        knock_sword_owner_intensity: unknown;
        max_damaging_constant_beam_damage: unknown;
        max_rocket_fuel: unknown;
        min_damaging_ammount: unknown;
        min_damaging_ammount_AI: unknown;
        min_damaging_ammount_clouds: unknown;
        min_damaging_ammount_nails: unknown;
        normal_grenade_mesh_scale: unknown;
        particle_push_power: unknown;
        player_push_power: unknown;
        radius_beam: unknown;
        radius_bullet: unknown;
        radius_cloud: unknown;
        radius_grenade: unknown;
        radius_sword: unknown;
        radius_sword_bullet_reflection: unknown;
        radius_sword_crosshit: unknown;
        radius_sword_protection: unknown;
        ragdoll_push_power: unknown;
        ragdoll_push_power_explosion: unknown;
        ricochet_power_remain_beam: unknown;
        ricochet_power_remain_bullet: unknown;
        ricochet_power_remain_rail: unknown;
        time_before_selfhit: unknown;
        water_push_power: unknown;
        water_push_power_directed: unknown;
    };
    
    /** unfinished */
    type pb2BulletInstance = ClassIdentityProps<"pb2Bullet"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly owner_ragdoll: unknown;
        readonly owner_gun: unknown;
        GetMesh(id?: 0 | 1 | 2): unknown | undefined;
    };
}