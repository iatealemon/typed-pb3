export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";
import { pb2EntityBase } from "./pb2Entity";
import type { pb2StyleBoostBase } from "./pb2StyleBoost";

declare global {
    interface pb2Ragdoll extends ClassIdentityProps<"pb2Ragdoll"> {
        /** Type is unknown. One known value: 3 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly tox: number;
        readonly toy: number;
        dimmed: boolean;
        readonly owner_character: pb2Character | null;
        /**
         * Damages a limb. This also reduces current hp of the character.
         * @param atom Ragdoll atom  
         * @param dmg Damage amount  
         * @param eWu (default=atom.GetPosition())   
         * @param beg (default=pb2Void.bh)   
         * @param eWw (default=1) affects damage in some way  
         * @param dir_x (default=0) Damage direction vector x  
         * @param dir_y (default=0) Damage direction vector y  
         * @param beo (default=true)   
         * @param limb_damage_multiplier (default=1)   
         * @param eWx (default=null)   
         */
        DealLimbDamage: (atom: pb2Atom, dmg: number, eWu?: TODO, beg?: TODO, eWw?: TODO, dir_x?: number, dir_y?: number, beo?: TODO, limb_damage_multiplier?: number, eWx?: TODO) => number;
        /**
         * Apply defibrillator effect
         * @param self If false, healing will be applied regardless of the character's dying state. 
         * @returns Boolean telling if the player healed
         */
        HealGunApplied: (self: boolean) => boolean;
        /**
         * Apply capture defibrillator effect. Target will become a teammate of `by`  
         * Used by gun class "gun_eratrigger" or any gun class with is_healgun and is_capturehealgun set to true.
         * @param by 
         */
        CaptureHealGunApplied: (by: pb2Ragdoll) => void;
        /**
         * Sets the displayed name of the ragdoll.  
         * Note that the team's `recolor_nicknames_on_overhead` property can cause colors to be displayed differently.
         * @param name New name
         */
        SetName: (name: pb2ColoredText) => void;
        /** Gets the displayed name of the ragdoll */
        GetName: () => pb2ColoredText;
        /**
         * Destroys the ragdoll in an explosion of particles.  
         * 
         * The whole body will be destroyed if the ragdoll's hp_body is over 0 or `atom_id` is -1.  
         * 
         * `atom_id` may be specified to destroy only the lower or upper half of the body. 
         * The half that atom `atom_id` belongs to will be destroyed.  
         * For example:  
         * pb2Ragdoll.b_pelvis -> destroy lower body  
         * pb2Ragdoll.b_body -> destroy upper body
         * @param color Particle color  
         * @param atom_id (default=-1) Atom id that specifies which half of the body should be destroyed.  
         */
        MeltDown: (color: pb2Color, atom_id?: number) => void;
        /**
         * Starts removal of all floating text bubbles (pb2WindowHints) attached to the ragdoll.
         */
        ExpireAllHintObjects: () => void;
        readonly side: -1 | 1;
        /** Flips the ragdoll horizontally. Has no effect if the character is alive. */
        Flip: () => void;
        /** Removes the ragdoll and its owner_character if it exists. */
        remove: () => TODO;
        readonly is_being_removed: boolean;
        /**
         * Sets the ragdoll's vision type.
         * @param ID One of the vision types defined on pb2Vision, such as pb2Vision.VISION_SCREEN_BOX
         */
        SetVision: (ID: TODO) => void;
        /** Gets the ragdoll's vision type. */
        GetVision: () => TODO;
        /** Get blindness time/amount */
        GetBlindness: () => number;
        /**
         * Set blindness time/amount. Prevents players and NPCs from seeing.
         * @param v 
         */
        SetBlindness: (v: number) => void;
        /** Get deafness time/amount */
        GetDeafness: () => number;
        /**
         * Set deafness time/amount. Prevents players and NPCs from hearing.
         * @param v 
         */
        SetDeafness: (v: number) => void;
        hp_head: number;
        hp_body: number;
        hp_arms: number;
        hp_legs: number;
        /** Gets the number of atoms in the ragdoll. Varies based on hp_body. */
        GetAtomsTotal: () => number;
        readonly gameplay_effects: pb2GameplayEffects;
        /** Removes visible bullet holes from the ragdoll */
        ClearBulletHoles: () => void;
        /** Returns a boolean telling if the ragdoll is currently using a grappling hook */
        UsesGrapplingHook: () => boolean;
        readonly active_grappling_hook: pb2Rope | null;
        /**
         * Forces the ragdoll's grappling hook to detach
         * @param collapse Pull in rope (true) or detach from both ends (false)
         */
        DetachFromRope: (collapse: boolean) => void;
        /**
         * Can be used to add custom bars.  
         * Example:
         * ```js
         * ragdoll.hud_custom_bars.push(new pb2HeroInfoBar({title: "Energy"}))
         * ```
         */
        hud_custom_bars: pb2HeroInfoBar[];
        readonly enforce_skin_limitations: boolean;
        readonly use_skin_properties: boolean;
        readonly team: pb2Team;
        /**
         * Sets the ragdoll's boost style type.
         * @param v One of the boost style types defined on pb2StyleBoost, such as pb2StyleBoost.SELFBOOST
         */
        SetBoostStyle: (v: TODO) => void;
        /**
         * Sets the ragdoll's swords style type.
         * @param v One of the swords style types defined on pb2StyleSwords, such as pb2StyleSwords.BASIC
         */
        SetSwordsStyle: (v: TODO) => void;
        readonly style_boost: pb2StyleBoostBase<string>;
        /** Gets the ragdoll's sword style type. */
        GetSwordsStyleID: () => TODO;
        /**
         * @param dx Difference in X  
         * @param dy Difference in y  
         * @param dtox (default=0) Added X speed  
         * @param dtoy (default=0) Added Y speed  
         * @param atom (default=this.local_atoms[pb2Ragdoll.b_pelvis]) Atom to teleport. If `hp_body <= 0` or `split` is true, only the half of the body that the atom belongs to will be teleported.   
         * @param split (default=false) Force body halves to split and only teleport the half containing `atom`. Kills the character if not already dead. 
         * @param color (default=null) Particle color, or null for teleport effect and sound  
         */
        Teleport: (dx: number, dy: number, dtox?: number, dtoy?: number, atom?: pb2Atom, split?: boolean, color?: ColorTransform | null) => void;
        /**
         * Plays a sound at the ragdoll.  
         * ```js
         * // Play the ragdoll's death_underwater sound
         * ragdoll.Speak("death_underwater") 
         * // Play a sound from the library
         * ragdoll.Speak("s_explode3") 
         * ```
         * @param sound_name   
         * @param eVL (default=false)   
         * @param team_only (default=false) Only for own team  
         */
        Speak: (sound_name: string, eVL?: boolean, team_only?: boolean) => void;
        damage_projectiles: number;
        damage_explosions: number;
        damage_impacts: number;
        damage_radiation: number;
        damage_liquids: number;
        mobility: number;
        readonly scale: number;
        readonly voice_preset_pitch: number;
        voice_pitch: undefined | null;
        readonly normalize_all_voice_lines_volume: boolean;
        readonly normalize_custom_voice_lines_volume: boolean;
        /**
         * Gets the ragdoll's atom (i.e. body part) with the specified ID. 
         * @param id One of the atom IDs defined on pb2Ragdoll, such as pb2Ragdoll.b_pelvis
         */
        GetAtom: (id: number) => pb2Atom;
        /**
         * Gets the ragdoll's mesh with the specified ID. 
         * @param id (default=0) One of the mesh IDs defined on pb2Ragdoll, such as pb2Ragdoll.mc_arm1b_sword  
         */
        GetMesh: (id?: number) => THREE.Mesh;
    }
    var pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        /**
         * Creates a new ragdoll. The ragdoll will be lifeless if params.owner_character is unspecified, pass in a pb2Character
         * or use CreateRagdollComplete to create a ragdoll with an accompanying pb2Character and pb2Controller.  
         * @param params Object containing parameters  
         * @param params.team Required.  
         * @param params.skin Required. Skin editor object created using pb2SkinEditor functions  
         * @param params.owner_character (default=null)  
         * @param params.x (default=0)  
         * @param params.y (default=0)  
         * @param params.tox (default=0)  
         * @param params.toy (default=0)  
         * @param params.rotation (default=0)  
         * @param params.side (default=1)  
         * @param params.scale (default=1)  
         * @param params.name (default=null) Can be a pb2ColoredText or a string optionally containing color tags like "[#00FFFF]John[/] Doe"  
         * @param params.style_swords (default=pb2StyleSwords.NONE)  
         * @param params.style_grappling_hook (default=pb2StyleGrapplingHook.STYLE_NOTHING)  
         * @param params.style_boost (default=pb2StyleBoost.NONE)  
         * @param params.vision (default=pb2Vision.VISION_RADIAL_TRACE)  
         * @param params.can_breathe_in_water (default=false)  
         * @param params.can_breathe_in_toxic_clouds (default=false)  
         * @param params.enforce_skin_limitations (default=false)  
         * @param params.use_skin_properties (default=false)  
         * @param params.sword_projectile_reflection (default=false)  
         * @param params.normalize_all_voice_lines_volume (default=false)  
         * @param params.normalize_custom_voice_lines_volume (default=false)  
         * @param params.voice_pitch (default=undefined) If undefined, pitch will be based on the ragdoll scale and voice preset pitch  
         * @param params.driver_of (default=null)  
         */
        CreateRagdoll: (params: {
            // roughly ordered by importance and category
            team: pb2Team,
            skin: pb2EditorObject,
            owner_character?: pb2Character | null
            x?: number,
            y?: number,
            tox?: number,
            toy?: number,
            rotation?: number,
            side?: -1 | 1,
            scale?: number,
            name?: pb2ColoredText | string,
            style_swords?: TODO,
            style_grappling_hook?: TODO,
            style_boost?: TODO,
            vision?: TODO,
            can_breathe_in_water?: boolean,
            can_breathe_in_toxic_clouds?: boolean,
            enforce_skin_limitations?: boolean,
            use_skin_properties?: boolean,
            sword_projectile_reflection?: boolean,
            normalize_all_voice_lines_volume?: boolean,
            normalize_custom_voice_lines_volume?: boolean,
            voice_pitch?: number | undefined,
            driver_of?: pb2EntityBase<string> | null,
        }) => pb2Ragdoll; // technically this can also return null but it seems that only happens in an edge case, so maybe null should be omitted for convenience?
        /**
         * Same as CreateRagdoll, but a pb2Character and pb2Controller are also created.
         * @param p Object containing parameters
         * @param params.team Required.  
         * @param params.skin Required. Skin editor object created using pb2SkinEditor functions  
         * @param params.x (default=0)  
         * @param params.y (default=0)  
         * @param params.tox (default=0)  
         * @param params.toy (default=0)  
         * @param params.rotation (default=0)  
         * @param params.side (default=1)  
         * @param params.scale (default=1)  
         * @param params.name (default=null) Can be a pb2ColoredText or a string optionally containing color tags like "[#00FFFF]John[/] Doe"  
         * @param params.style_swords (default=pb2StyleSwords.NONE)  
         * @param params.style_grappling_hook (default=pb2StyleGrapplingHook.STYLE_NOTHING)  
         * @param params.style_boost (default=pb2StyleBoost.NONE)  
         * @param params.vision (default=pb2Vision.VISION_RADIAL_TRACE)  
         * @param params.can_breathe_in_water (default=false)  
         * @param params.can_breathe_in_toxic_clouds (default=false)  
         * @param params.enforce_skin_limitations (default=false)  
         * @param params.use_skin_properties (default=false)  
         * @param params.sword_projectile_reflection (default=false)  
         * @param params.normalize_all_voice_lines_volume (default=false)  
         * @param params.normalize_custom_voice_lines_volume (default=false)  
         * @param params.voice_pitch (default=undefined) If undefined, pitch will be based on the ragdoll scale and voice preset pitch  
         * @param params.driver_of (default=null)  
         * 
         * @param params.hmax (default=pb2Character.bXF)
         * @param params.hea (default=this.hmax)
         * @param params.start_hea (default=this.hmax)
         * @param params.hmax_damage_multiplier (default=pb2Character.hmax_damage_multiplier)
         * @param params.stability (default=1)
         * @param params.block_instant_midair_jump (default=false)
         * @param params.drop_guns_on_death (default=pb2Character.DROP_ALWAYS)
         * @param params.drop_grenades_on_death (default=pb2Character.DROP_WHEN_INTENDED_ONLY)
         * @param params.can_be_revived (default=undefined) Can be left unspecified, but the value will be `undefined` (falsy) rather than a boolean value.
         * @param params.Gd (default=false) If true, body part hp values on the ragdoll will not be set
         * @param params.regen_module (default=pb2StyleRegen.style_delayed_speedup)
         * @param params.onDeath Optional function or trigger that gets added as an "OBJECT_DIED" event listener on the character
         * @param params.onAbility Optional function or trigger that gets added as a "CHARACTER_ABILITY" event listener on the character
         * 
         * @param params.player_controllable (default=false)
         * @param params.ai_preset (default=undefined)
         */
        CreateRagdollComplete: (p: {
            // ragdoll
            team: pb2Team,
            skin: pb2EditorObject,
            x?: number,
            y?: number,
            tox?: number,
            toy?: number,
            rotation?: number,
            side?: -1 | 1,
            scale?: number,
            name?: pb2ColoredText | string,
            style_swords?: TODO,
            style_grappling_hook?: TODO,
            style_boost?: TODO,
            vision?: TODO,
            can_breathe_in_water?: boolean,
            can_breathe_in_toxic_clouds?: boolean,
            enforce_skin_limitations?: boolean,
            use_skin_properties?: boolean,
            sword_projectile_reflection?: boolean,
            normalize_all_voice_lines_volume?: boolean,
            normalize_custom_voice_lines_volume?: boolean,
            voice_pitch?: number | undefined,
            driver_of?: pb2EntityBase<string> | null,

            // character
            hmax?: number,
            hea?: number,
            start_hea?: number,
            hmax_damage_multiplier?: number,
            stability?: number,
            block_instant_midair_jump?: boolean,
            drop_guns_on_death?: TODO,
            drop_grenades_on_death?: TODO,
            can_be_revived?: boolean,
            Gd?: boolean,
            regen_module?: TODO | null,
            onDeath?: (
                died: pb2Character, 
                killers: pb2Ragdoll[], // entities don't count
                damage_dealt: number[], 
                using: (pb2Gun | pb2Bullet)[]
            ) => void,
            onAbility?: (user: pb2Character) => void,

            // controller
            player_controllable?: boolean,
            ai_preset?: AIPreset | null
        }) => pb2Ragdoll;
        /** Type is unknown. One known value: 0 */
        b_pelvis: TODO;
        /** Type is unknown. One known value: 1 */
        b_leg1: TODO;
        /** Type is unknown. One known value: 2 */
        b_leg2: TODO;
        /** Type is unknown. One known value: 3 */
        b_arm1: TODO;
        /** Type is unknown. One known value: 4 */
        b_arm2: TODO;
        /** Type is unknown. One known value: 5 */
        b_body: TODO;
        /** Type is unknown. One known value: 6 */
        b_head_start: TODO;
        /** Type is unknown. One known value: 7 */
        b_head_end: TODO;
        /** Type is unknown. One known value: 8 */
        b_body_brk1: TODO;
        /** Type is unknown. One known value: 9 */
        b_body_brk2: TODO;
        /** Type is unknown. One known value: [true,true,false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true] */
        mc_body_top_pattern: TODO;
        /** Type is unknown. One known value: 0 */
        mc_head: TODO;
        /** Type is unknown. One known value: 1 */
        mc_head_broken: TODO;
        /** Type is unknown. One known value: 2 */
        mc_pelvis: TODO;
        /** Type is unknown. One known value: 3 */
        mc_pelvis_broken: TODO;
        /** Type is unknown. One known value: 4 */
        mc_body: TODO;
        /** Type is unknown. One known value: 5 */
        mc_arm1a: TODO;
        /** Type is unknown. One known value: 6 */
        mc_arm1b: TODO;
        /** Type is unknown. One known value: 7 */
        mc_arm1b_broken: TODO;
        /** Type is unknown. One known value: 8 */
        mc_arm1b_sword: TODO;
        /** Type is unknown. One known value: 9 */
        mc_arm2a: TODO;
        /** Type is unknown. One known value: 10 */
        mc_arm2b: TODO;
        /** Type is unknown. One known value: 11 */
        mc_arm2b_broken: TODO;
        /** Type is unknown. One known value: 12 */
        mc_arm2b_sword: TODO;
        /** Type is unknown. One known value: 13 */
        mc_leg1a: TODO;
        /** Type is unknown. One known value: 14 */
        mc_leg1b: TODO;
        /** Type is unknown. One known value: 15 */
        mc_leg1c: TODO;
        /** Type is unknown. One known value: 16 */
        mc_leg1b_broken: TODO;
        /** Type is unknown. One known value: 17 */
        mc_leg2a: TODO;
        /** Type is unknown. One known value: 18 */
        mc_leg2b: TODO;
        /** Type is unknown. One known value: 19 */
        mc_leg2c: TODO;
        /** Type is unknown. One known value: 20 */
        mc_leg2b_broken: TODO;
        /** Type is unknown. One known value: 21 */
        mc_body_broken: TODO;
        ragdolls: pb2Ragdoll[];
    }
}
