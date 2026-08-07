export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2GunClass extends ClassIdentityProps<"pb2GunClass"> {
        inventory_slot: TODO;
        title: TODO;
        forcars: TODO;
        cost: TODO;
        costupg: TODO;
        two_at_a_time: TODO;
        stat_count: TODO;
        spawn_distance: TODO;
        stat_spread: TODO;
        stat_bullets: TODO;
        stat_cursor: TODO;
        projectile_speed: TODO;
        projectile_luminescent: TODO;
        fire_duration: TODO;
        fire_type: TODO;
        auto_fire_if_unready: TODO;
        disabled_laser: TODO;
        mass_mult: TODO;
        secondary_mode_toggle: TODO;
        is_grenade: TODO;
        is_lightning: TODO;
        is_rocket: TODO;
        rocket_direct_damage_mode: TODO;
        projectile_base_color: TODO;
        is_railgun: TODO;
        is_heavy: TODO;
        is_healgun: TODO;
        is_repairgun: TODO;
        is_capturehealgun: TODO;
        is_radioactive: TODO;
        is_cloud: TODO;
        is_snowball: TODO;
        is_beam: TODO;
        is_blaster: TODO;
        is_plasma: TODO;
        is_nail: TODO;
        is_raygun: TODO;
        is_wall_sticking: TODO;
        rocket_damage: TODO;
        xpos1: TODO;
        xpos2: TODO;
        attachment: TODO;
        zpos: TODO;
        zpos2: TODO;
        len1: TODO;
        len2: TODO;
        size1: TODO;
        size2: TODO;
        recoil_factor: TODO;
        chaotic_recoil: TODO;
        constant_beam_damage: TODO;
        speed_to_damage_multiplier: TODO;
        explosion_knock_multiplier: TODO;
        explosion_hp_damage_multiplier: TODO;
        max_life_time: TODO;
        max_life_time_rand: TODO;
        ammo_bullet_price: TODO;
        grenade_density: TODO;
        readonly model_name: TODO;
        reload_length: TODO;
        GetProjectileMovieClip: () => TODO;
        SetProjectileMovieClip: (v: TODO) => TODO;
        GetStuckProjectileMovieClip: () => TODO;
        SetStuckProjectileMovieClip: (v: TODO) => TODO;
        readonly weapon_modes: TODO;
        SetSoundInfo: (category: TODO, KP: TODO) => TODO;
        GetSoundInfo: (category: TODO) => TODO;
        detonates_on_entity_collisions: TODO;
        detonates_on_organic_entities_only: TODO;
        ricochet_speed_condition: TODO;
        ricochet_speed_decay_multiplier: TODO;
        magazine_reload_duration_multiplier: TODO;
        stat_power: TODO;
        muzzle_flash_scale_mult: TODO;
    }
    var pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        /** Type is unknown. One known value: ["gun_pistol","gun_pistol2","gun_rifle","gun_rayrifle","gun_real_rifle","gun_arifle","gun_arifle2","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_railgun2","gun_sniper","gun_rl","gun_apistol","gun_plasmagun","gun_apistol2","gun_gl","gun_bng","gun_defibrillator","gun_vgun","gun_oicw"] */
        non_spoiler_weapons: TODO;
        /** Type is unknown. One known value: ["gun_rifle","gun_anti_rifle","gun_pistol","gun_pistol2","gun_rayrifle","gun_arifle2","gun_arifle","gun_real_rifle","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_shadowstep_railgun","gun_railgun2","gun_sniper","gun_rl","gun_trouble","gun_shaft","gun_rl2","gun_plasmagun","gun_apistol","gun_apistol2","gun_gl","gun_bng","gun_disintegrator","gun_explosiveminigun","gun_firebug","gun_drainlight","gun_drainlight_mg","gun_sniper2","gun_defibrillator","gun_eratrigger","gun_repairgun","gun_dodge","gun_oicw","gun_vgun","gun_nailgun","gun_freezer","gun_pistol3","gun_farheal","gun_flappygun","gun_flame","gun_rl3","gun_vehgun","gun_bng2","gun_chrono","gun_vehcannon","gun_vehcannon2","gun_scout_drone","gun_harasser_drone","gun_cs_vehgun","gun_vehminigun","gun_fttp_vehgun","gun_drain_sniper_rifle"] */
        registered_weapons: TODO;
        GetGunClassByString: (str: TODO) => TODO;
        CachedGunClasses: {

        }
        CreateCustomGunClass: (bjW: TODO, exC: TODO) => TODO;
    }
}
