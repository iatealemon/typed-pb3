export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2GunClass extends ClassIdentityProps<"pb2GunClass"> {
        inventory_slot: unknown;
        title: unknown;
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
        GetProjectileMovieClip: () => unknown;
        SetProjectileMovieClip: (v: unknown) => unknown;
        GetStuckProjectileMovieClip: () => unknown;
        SetStuckProjectileMovieClip: (v: unknown) => unknown;
        readonly weapon_modes: unknown;
        SetSoundInfo: (category: unknown, KP: unknown) => unknown;
        GetSoundInfo: (category: unknown) => unknown;
        detonates_on_entity_collisions: unknown;
        detonates_on_organic_entities_only: unknown;
        ricochet_speed_condition: unknown;
        ricochet_speed_decay_multiplier: unknown;
        magazine_reload_duration_multiplier: unknown;
        stat_power: unknown;
        muzzle_flash_scale_mult: unknown;
    }
    var pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        /** Type is unknown. One known value: ["gun_pistol","gun_pistol2","gun_rifle","gun_rayrifle","gun_real_rifle","gun_arifle","gun_arifle2","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_railgun2","gun_sniper","gun_rl","gun_apistol","gun_plasmagun","gun_apistol2","gun_gl","gun_bng","gun_defibrillator","gun_vgun","gun_oicw"] */
        non_spoiler_weapons: unknown;
        /** Type is unknown. One known value: ["gun_rifle","gun_anti_rifle","gun_pistol","gun_pistol2","gun_rayrifle","gun_arifle2","gun_arifle","gun_real_rifle","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_shadowstep_railgun","gun_railgun2","gun_sniper","gun_rl","gun_trouble","gun_shaft","gun_rl2","gun_plasmagun","gun_apistol","gun_apistol2","gun_gl","gun_bng","gun_disintegrator","gun_explosiveminigun","gun_firebug","gun_drainlight","gun_drainlight_mg","gun_sniper2","gun_defibrillator","gun_eratrigger","gun_repairgun","gun_dodge","gun_oicw","gun_vgun","gun_nailgun","gun_freezer","gun_pistol3","gun_farheal","gun_flappygun","gun_flame","gun_rl3","gun_vehgun","gun_bng2","gun_chrono","gun_vehcannon","gun_vehcannon2","gun_scout_drone","gun_harasser_drone","gun_cs_vehgun","gun_vehminigun","gun_fttp_vehgun","gun_drain_sniper_rifle"] */
        registered_weapons: unknown;
        GetGunClassByString: (str: unknown) => unknown;
        CachedGunClasses: {

        }
        CreateCustomGunClass: (bjW: unknown, exC: unknown) => unknown;
    }
}
