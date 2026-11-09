export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2GunClass extends ClassIdentityProps<"pb2GunClass"> {
        inventory_slot: number;
        title: string; // user facing gun name
        forcars: boolean;
        cost: number;
        costupg: number;
        two_at_a_time: boolean; // can be dual wielded?
        stat_count: number;
        spawn_distance: number;
        stat_spread: number;
        stat_bullets: number;
        stat_cursor: number; // integer from 0 to 6. changes cursor
        projectile_speed: number; // bullet speed. affects recoil
        projectile_luminescent: number;
        fire_duration: number;
        fire_type: pb2FireType;
        auto_fire_if_unready: boolean;
        disabled_laser: boolean;
        mass_mult: number;
        secondary_mode_toggle: boolean;
        is_grenade: boolean;
        is_lightning: boolean;
        is_rocket: boolean;
        rocket_direct_damage_mode: boolean;
        projectile_base_color: pb2Color;
        is_railgun: boolean;
        is_heavy: boolean;
        is_healgun: boolean;
        is_repairgun: boolean;
        is_capturehealgun: boolean;
        is_radioactive: boolean;
        is_cloud: boolean;
        is_snowball: boolean;
        is_beam: boolean;
        is_blaster: boolean;
        is_plasma: boolean;
        is_nail: boolean;
        is_raygun: boolean;
        is_wall_sticking: boolean;
        rocket_damage: number;
        xpos1: number;
        xpos2: number;
        attachment: number;
        zpos: number;
        zpos2: number;
        len1: number;
        len2: number;
        size1: number;
        size2: number;
        recoil_factor: number;
        chaotic_recoil: number;
        constant_beam_damage: number;
        speed_to_damage_multiplier: number;
        explosion_knock_multiplier: number;
        explosion_hp_damage_multiplier: number;
        max_life_time: number;
        max_life_time_rand: number;
        ammo_bullet_price: number; // how many ammo is consumed per shot
        grenade_density: number;
        readonly model_name: string;
        reload_length: number;
        GetProjectileMovieClip: () => TODO;
        SetProjectileMovieClip: (v: TODO) => TODO;
        GetStuckProjectileMovieClip: () => TODO;
        SetStuckProjectileMovieClip: (v: TODO) => TODO;
        readonly weapon_modes: pb2GunClass[]; // array of gun classes for each fire mode. weapon_modes[0] === this
        SetSoundInfo: (category: TODO, KP: TODO) => TODO;
        GetSoundInfo: (category: TODO) => TODO;
        detonates_on_entity_collisions: boolean;
        detonates_on_organic_entities_only: boolean;
        ricochet_speed_condition: number;
        ricochet_speed_decay_multiplier: number;
        magazine_reload_duration_multiplier: number;
        stat_power: number;
        muzzle_flash_scale_mult: number;
        ammo_style: TODO;
        ammo_style2: TODO;
        partial_reload_steps: TODO;
        manual_reload: TODO;
        force_reload_on_last_shot: TODO;
        manual_reload_or_cancel: TODO;
        minigun_spin_factor: TODO;
        reset_spin_factor_on_shot: TODO;
        always_grow_spin_factor_when_active: TODO;
        overheat_damage_after: TODO;
        heat_per_shot_mult: TODO;
        sound_explosion_id: TODO;
        shell_type: TODO;
        magazine_behind_gun: TODO;
        use_shotgun_offset_pattern: TODO;
    }
    var pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        /** Type is unknown. One known value: -1 */
        SHELL_TYPE_AUTO: TODO;
        /** Type is unknown. One known value: 0 */
        SHELL_TYPE_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        SHELL_TYPE_SCIFI_SINGLE: TODO;
        /** Type is unknown. One known value: 2 */
        SHELL_TYPE_SCIFI_SHOTGUN_SINGLE: TODO;
        /** Type is unknown. One known value: 3 */
        SHELL_TYPE_SCIFI_SHOTGUN_DOUBLE: TODO;
        /** Type is unknown. One known value: 4 */
        SHELL_TYPE_REAL_SINGLE: TODO;
        /** Type is unknown. One known value: 5 */
        SHELL_TYPE_REAL_SHOTGUN_SINGLE: TODO;
        /** Type is unknown. One known value: 6 */
        SHELL_TYPE_BIG_CALIBER: TODO;
        /** Type is unknown. One known value: 7 */
        SHELL_TYPE_REAL_SHOTGUN_DOUBLE: TODO;
        /** Type is unknown. One known value: ["pb2GunClass.SHELL_TYPE_AUTO","pb2GunClass.SHELL_TYPE_NONE","pb2GunClass.SHELL_TYPE_SCIFI_SINGLE","pb2GunClass.SHELL_TYPE_SCIFI_SHOTGUN_SINGLE","pb2GunClass.SHELL_TYPE_SCIFI_SHOTGUN_DOUBLE","pb2GunClass.SHELL_TYPE_REAL_SINGLE","pb2GunClass.SHELL_TYPE_REAL_SHOTGUN_SINGLE","pb2GunClass.SHELL_TYPE_BIG_CALIBER","pb2GunClass.SHELL_TYPE_REAL_SHOTGUN_DOUBLE"] */
        ALL_SHELL_TYPES: TODO;
        /** Array of gun IDs */
        non_spoiler_weapons: string[];
        /** Array of gun IDs */
        registered_weapons: string[];
        GetGunClassByString: (str: string) => pb2GunClass;
        CachedGunClasses: {[k: string]: pb2GunClass}
        CreateCustomGunClass: (identificator: TODO, exC: TODO) => void;
    }
}
