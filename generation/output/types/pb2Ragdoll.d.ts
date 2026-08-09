export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Ragdoll extends ClassIdentityProps<"pb2Ragdoll"> {
        /** Type is unknown. One known value: 3 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        readonly tox: TODO;
        readonly toy: TODO;
        dimmed: TODO;
        readonly owner_character: TODO;
        /**
         * @param eVZ   
         * @param beh   
         * @param eWu (default=eVZ.GetPosition())   
         * @param beg (default=pb2Void.bh)   
         * @param eWw (default=1)   
         * @param bef (default=0)   
         * @param bed (default=0)   
         * @param beo (default=true)   
         * @param limb_damage_multiplier (default=1)   
         * @param eWx (default=null)   
         */
        DealLimbDamage: (eVZ: TODO, beh: TODO, eWu?: TODO, beg?: TODO, eWw?: TODO, bef?: TODO, bed?: TODO, beo?: TODO, limb_damage_multiplier?: TODO, eWx?: TODO) => TODO;
        HealGunApplied: (self: TODO) => TODO;
        CaptureHealGunApplied: (by: TODO) => TODO;
        SetName: (eUZ: TODO) => TODO;
        GetName: () => TODO;
        /**
         * @param fj   
         * @param eFv (default=-1)   
         */
        MeltDown: (fj: TODO, eFv?: TODO) => TODO;
        ExpireAllHintObjects: () => TODO;
        readonly side: TODO;
        Flip: () => TODO;
        remove: () => TODO;
        readonly is_being_removed: TODO;
        SetVision: (ID: TODO) => TODO;
        GetVision: () => TODO;
        GetBlindness: () => TODO;
        SetBlindness: (v: TODO) => TODO;
        GetDeafness: () => TODO;
        SetDeafness: (v: TODO) => TODO;
        hp_head: TODO;
        hp_body: TODO;
        hp_arms: TODO;
        hp_legs: TODO;
        GetAtomsTotal: () => TODO;
        readonly gameplay_effects: TODO;
        ClearBulletHoles: () => TODO;
        UsesGrapplingHook: () => TODO;
        readonly active_grappling_hook: TODO;
        DetachFromRope: (collapse: TODO) => TODO;
        hud_custom_bars: TODO;
        readonly enforce_skin_limitations: TODO;
        readonly use_skin_properties: TODO;
        readonly team: TODO;
        SetBoostStyle: (v: TODO) => TODO;
        SetSwordsStyle: (v: TODO) => TODO;
        readonly style_boost: TODO;
        GetSwordsStyleID: () => TODO;
        /**
         * @param dx   
         * @param dy   
         * @param dJP (default=0)   
         * @param dJQ (default=0)   
         * @param beD (default=this.local_atoms[pb2Ragdoll.b_pelvis])   
         * @param beF (default=false)   
         * @param ben (default=null)   
         */
        Teleport: (dx: TODO, dy: TODO, dJP?: TODO, dJQ?: TODO, beD?: TODO, beF?: TODO, ben?: TODO) => TODO;
        /**
         * @param sound_name   
         * @param eVL (default=false)   
         * @param cAr (default=false)   
         */
        Speak: (sound_name: TODO, eVL?: TODO, cAr?: TODO) => TODO;
        damage_projectiles: TODO;
        damage_explosions: TODO;
        damage_impacts: TODO;
        damage_radiation: TODO;
        damage_liquids: TODO;
        mobility: TODO;
        readonly scale: TODO;
        readonly voice_preset_pitch: TODO;
        voice_pitch: TODO;
        readonly normalize_all_voice_lines_volume: TODO;
        readonly normalize_custom_voice_lines_volume: TODO;
        GetAtom: (id: TODO) => TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: TODO) => TODO;
    }
    var pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        CreateRagdoll: (params: TODO) => TODO;
        CreateRagdollComplete: (p: TODO) => TODO;
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
        /** Type is unknown. One known value: [] */
        ragdolls: TODO;
    }
}
