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
        projectile_speed: number;
        projectile_luminescent: TODO;
        fire_duration: TODO;
        fire_type: TODO;
        auto_fire_if_unready: TODO;
        disabled_laser: TODO;
        mass_mult: number;
        secondary_mode_toggle: TODO;
        is_grenade: boolean;
        is_lightning: boolean;
        is_rocket: boolean;
        rocket_direct_damage_mode: TODO;
        projectile_base_color: TODO;
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
        recoil_factor: number;
        chaotic_recoil: TODO;
        constant_beam_damage: number;
        speed_to_damage_multiplier: number;
        explosion_knock_multiplier: number;
        explosion_hp_damage_multiplier: number;
        max_life_time: number;
        max_life_time_rand: TODO;
        ammo_bullet_price: TODO;
        grenade_density: TODO;
        readonly model_name: TODO;
        reload_length: number;
        GetProjectileMovieClip: () => TODO;
        SetProjectileMovieClip: (v: TODO) => TODO;
        GetStuckProjectileMovieClip: () => TODO;
        SetStuckProjectileMovieClip: (v: TODO) => TODO;
        readonly weapon_modes: TODO;
        SetSoundInfo: (category: TODO, KP: TODO) => TODO;
        GetSoundInfo: (category: TODO) => TODO;
        detonates_on_entity_collisions: boolean;
        detonates_on_organic_entities_only: boolean;
        ricochet_speed_condition: TODO;
        ricochet_speed_decay_multiplier: number;
        magazine_reload_duration_multiplier: number;
        stat_power: TODO;
        muzzle_flash_scale_mult: number;
    }
    var pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        /** Type is unknown. One known value: ["gun_pistol","gun_pistol2","gun_rifle","gun_rayrifle","gun_real_rifle","gun_arifle","gun_arifle2","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_railgun2","gun_sniper","gun_rl","gun_apistol","gun_plasmagun","gun_apistol2","gun_gl","gun_bng","gun_defibrillator","gun_vgun","gun_oicw"] */
        non_spoiler_weapons: TODO;
        /** Type is unknown. One known value: ["gun_rifle","gun_anti_rifle","gun_pistol","gun_pistol2","gun_rayrifle","gun_arifle2","gun_arifle","gun_real_rifle","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_shadowstep_railgun","gun_railgun2","gun_sniper","gun_rl","gun_trouble","gun_shaft","gun_rl2","gun_plasmagun","gun_apistol","gun_apistol2","gun_gl","gun_bng","gun_disintegrator","gun_explosiveminigun","gun_firebug","gun_drainlight","gun_drainlight_mg","gun_sniper2","gun_defibrillator","gun_eratrigger","gun_repairgun","gun_dodge","gun_oicw","gun_vgun","gun_nailgun","gun_freezer","gun_pistol3","gun_farheal","gun_flappygun","gun_flame","gun_rl3","gun_vehgun","gun_bng2","gun_chrono","gun_vehcannon","gun_vehcannon2","gun_scout_drone","gun_harasser_drone","gun_cs_vehgun","gun_vehminigun","gun_fttp_vehgun","gun_drain_sniper_rifle"] */
        registered_weapons: TODO;
        GetGunClassByString: (str: string) => pb2GunClass;
        CachedGunClasses: {[k: string]: pb2GunClass}
        CreateCustomGunClass: (bjW: TODO, exC: TODO) => void;
    }
}
