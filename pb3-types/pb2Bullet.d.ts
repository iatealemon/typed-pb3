import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        readonly beam_hit_spark_multiplier: unknown;
        readonly beam_max_life_time: unknown;
        readonly blip_time: unknown;
        readonly bullet_gravity_multiplayer: unknown;
        readonly bullet_min_hp: unknown;
        readonly bullet_self_push_multiplayer: unknown;
        readonly bullet_target_push_multiplayer: unknown;
        bullets: unknown;
        readonly bullets_damage_guns: unknown;
        readonly default_bullet_life: unknown;
        readonly default_bullet_speed: unknown;
        readonly dist_before_selfhit: unknown;
        readonly entity_push_power: unknown;
        readonly entity_push_power_explosion: unknown;
        readonly explosive_direct_based_multiplier: unknown;
        readonly friction_air: unknown;
        readonly friction_distance_multiplier: unknown;
        readonly friction_for_beam: unknown;
        readonly friction_for_cloud_air: unknown;
        readonly friction_for_cloud_water: unknown;
        readonly friction_wall: unknown;
        readonly friction_water: unknown;
        readonly grenade_density: unknown;
        readonly held_gun_knock_multiplier: unknown;
        readonly held_ragdoll_damage_sword_kick_punch_mult: unknown;
        readonly hp_beam: unknown;
        readonly hp_default_bullet: unknown;
        readonly hp_grenade: unknown;
        readonly hp_nail: unknown;
        readonly hp_plasma: unknown;
        readonly hp_plasma_radioactive: unknown;
        readonly hp_railgun: unknown;
        readonly hp_raygun: unknown;
        readonly hp_rocket: unknown;
        readonly hp_sword: unknown;
        readonly knock_gun_owner_intensity: unknown;
        readonly knock_sword_owner_intensity: unknown;
        readonly max_damaging_constant_beam_damage: unknown;
        readonly max_rocket_fuel: unknown;
        readonly min_damaging_ammount: unknown;
        readonly min_damaging_ammount_AI: unknown;
        readonly min_damaging_ammount_clouds: unknown;
        readonly min_damaging_ammount_nails: unknown;
        readonly normal_grenade_mesh_scale: unknown;
        readonly particle_push_power: unknown;
        readonly player_push_power: unknown;
        readonly radius_beam: unknown;
        readonly radius_bullet: unknown;
        readonly radius_cloud: unknown;
        readonly radius_grenade: unknown;
        readonly radius_sword: unknown;
        readonly radius_sword_bullet_reflection: unknown;
        readonly radius_sword_crosshit: unknown;
        readonly radius_sword_protection: unknown;
        readonly ragdoll_push_power: unknown;
        readonly ragdoll_push_power_explosion: unknown;
        readonly ricochet_power_remain_beam: unknown;
        readonly ricochet_power_remain_bullet: unknown;
        readonly ricochet_power_remain_rail: unknown;
        readonly time_before_selfhit: unknown;
        readonly water_push_power: unknown;
        readonly water_push_power_directed: unknown;
    };
    
    /** unfinished auto-generated */
    type pb2BulletInstance = ClassIdentityProps<"pb2Bullet"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly owner_ragdoll: unknown;
        readonly owner_gun: unknown;
    };
}