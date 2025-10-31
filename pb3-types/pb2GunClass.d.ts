import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        CachedGunClasses: unknown;
        CreateCustomGunClass(...args: unknown[]): unknown;
        GetGunClassByString(...args: unknown[]): unknown;
        non_spoiler_weapons: unknown;
        registered_weapons: unknown;
    };
    
    /** unfinished auto-generated */
    type pb2GunClassInstance = ClassIdentityProps<"pb2GunClass"> & {
        inventory_slot: unknown;
        forcars: unknown;
        cost: unknown;
        costupg: unknown;
        two_at_a_time: unknown;
        stat_count: unknown;
        spawn_distance: unknown;
        stat_spread: unknown;
        stat_bullets: unknown;
        stat_cursor: unknown;
        projectile_speed: unknown;
        projectile_luminescent: unknown;
        fire_duration: unknown;
        fire_type: unknown;
        auto_fire_if_unready: unknown;
        disabled_laser: unknown;
        mass_mult: unknown;
        secondary_mode_toggle: unknown;
        is_grenade: unknown;
        is_lightning: unknown;
        is_rocket: unknown;
        rocket_direct_damage_mode: unknown;
        projectile_base_color: unknown;
        is_railgun: unknown;
        is_heavy: unknown;
        is_healgun: unknown;
        is_repairgun: unknown;
        is_capturehealgun: unknown;
        is_radioactive: unknown;
        is_cloud: unknown;
        is_snowball: unknown;
        is_beam: unknown;
        is_blaster: unknown;
        is_plasma: unknown;
        is_nail: unknown;
        is_raygun: unknown;
        is_wall_sticking: unknown;
        rocket_damage: unknown;
        xpos1: unknown;
        xpos2: unknown;
        attachment: unknown;
        zpos: unknown;
        zpos2: unknown;
        len1: unknown;
        len2: unknown;
        size1: unknown;
        size2: unknown;
        recoil_factor: unknown;
        chaotic_recoil: unknown;
        constant_beam_damage: unknown;
        speed_to_damage_multiplier: unknown;
        explosion_knock_multiplier: unknown;
        explosion_hp_damage_multiplier: unknown;
        max_life_time: unknown;
        max_life_time_rand: unknown;
        ammo_bullet_price: unknown;
        grenade_density: unknown;
        readonly model_name: unknown;
        reload_length: unknown;
        readonly GetProjectileMovieClip: unknown;
        readonly SetProjectileMovieClip: unknown;
        readonly GetStuckProjectileMovieClip: unknown;
        readonly SetStuckProjectileMovieClip: unknown;
    };
}