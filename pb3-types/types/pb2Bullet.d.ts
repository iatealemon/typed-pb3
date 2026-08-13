export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Bullet extends ClassIdentityProps<"pb2Bullet"> {
        /** Type is unknown. One known value: 4 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly owner_ragdoll: pb2Ragdoll | null;
        readonly owner_gun: pb2Gun | null; // null for grenades
        readonly initial_grenade_type: -1 | TODO; // -1 or one of the grenade types
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
        readonly rocket_direct_damage_mode: boolean;
        readonly is_wall_sticking: boolean;
        readonly is_nail: boolean;
        Teleport: (dx: number, dy: number) => TODO;
        readonly box2d_body: b2Body | null; // null after removed
        /** @param dlv (default=false)  */
        remove: (dlv?: TODO) => TODO;
        readonly is_being_removed: boolean;
        bullet_hp: number;
        readonly is_thrown_by: pb2Ragdoll | null; // != null for grenades
        /** @param id (default=0)  */
        GetMesh: (id?: 0 | 1 | 2) => THREE.Mesh | null;
    }
    var pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        bullets_damage_guns: boolean;
        explosive_direct_based_multiplier: number;
        held_ragdoll_damage_sword_kick_punch_mult: number;
        knock_gun_owner_intensity: number;
        knock_sword_owner_intensity: number;
        grenade_density: number;
        normal_grenade_mesh_scale: number;
        radius_grenade: number;
        radius_bullet: number;
        radius_beam: number;
        radius_sword: number;
        radius_sword_crosshit: number;
        radius_sword_protection: number;
        radius_sword_bullet_reflection: number;
        radius_cloud: number;
        beam_max_life_time: number;
        time_before_selfhit: number;
        dist_before_selfhit: number;
        player_push_power: number;
        ragdoll_push_power: number;
        ragdoll_push_power_explosion: number;
        entity_push_power: number;
        entity_push_power_explosion: number;
        bullet_target_push_multiplayer: number;
        bullet_self_push_multiplayer: number;
        beam_hit_spark_multiplier: number;
        bullet_gravity_multiplayer: number;
        water_push_power: number;
        water_push_power_directed: number;
        particle_push_power: number;
        ricochet_power_remain_bullet: number;
        ricochet_power_remain_beam: number;
        ricochet_power_remain_rail: number;
        friction_distance_multiplier: number;
        friction_air: number;
        friction_water: number;
        friction_wall: number;
        friction_for_beam: number;
        friction_for_cloud_air: number;
        friction_for_cloud_water: number;
        min_damaging_ammount: number;
        min_damaging_ammount_nails: number;
        min_damaging_ammount_AI: number;
        min_damaging_ammount_clouds: number;
        min_damaging_ammount_in_walls: number;
        held_gun_knock_multiplier: number;
        max_damaging_constant_beam_damage: number;
        blip_time: number;
        max_rocket_fuel: number;
        bullet_min_hp: number;
        hp_default_bullet: number;
        hp_railgun: number;
        hp_raygun: number;
        hp_sword: number;
        hp_rocket: number;
        hp_plasma: number;
        hp_plasma_radioactive: number;
        hp_beam: number;
        hp_grenade: number;
        hp_nail: number;
        default_bullet_speed: number;
        default_bullet_life: number;
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
