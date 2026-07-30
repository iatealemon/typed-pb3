export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Ragdoll extends ClassIdentityProps<"pb2Ragdoll"> {
        /** Type is unknown. One known value: 3 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        dimmed: unknown;
        readonly owner_character: pb2Character | null;
        /**
         * @param eVZ   
         * @param beh   
         * @param eWu (default=eVZ.GetPosition()   
         */
        DealLimbDamage: (eVZ: unknown, beh: unknown, eWu?: unknown) => unknown;
        HealGunApplied: (self: unknown) => unknown;
        CaptureHealGunApplied: (by: unknown) => unknown;
        SetName: (eUZ: unknown) => unknown;
        GetName: () => unknown;
        /**
         * @param fj   
         * @param eFv (default=-1)   
         */
        MeltDown: (fj: unknown, eFv?: unknown) => unknown;
        ExpireAllHintObjects: () => unknown;
        readonly side: unknown;
        Flip: () => unknown;
        remove: () => unknown;
        readonly is_being_removed: unknown;
        SetVision: (ID: unknown) => unknown;
        GetVision: () => unknown;
        GetBlindness: () => unknown;
        SetBlindness: (v: unknown) => unknown;
        GetDeafness: () => unknown;
        SetDeafness: (v: unknown) => unknown;
        hp_head: unknown;
        hp_body: unknown;
        hp_arms: unknown;
        hp_legs: unknown;
        GetAtomsTotal: () => unknown;
        readonly gameplay_effects: unknown;
        ClearBulletHoles: () => unknown;
        UsesGrapplingHook: () => unknown;
        readonly active_grappling_hook: unknown;
        DetachFromRope: (collapse: unknown) => unknown;
        hud_custom_bars: unknown;
        readonly enforce_skin_limitations: unknown;
        readonly use_skin_properties: unknown;
        readonly team: unknown;
        SetBoostStyle: (v: unknown) => unknown;
        SetSwordsStyle: (v: unknown) => unknown;
        readonly style_boost: unknown;
        GetSwordsStyleID: () => unknown;
        /**
         * @param dx   
         * @param dy   
         * @param dJP (default=0)   
         * @param dJQ (default=0)   
         * @param beD (default=this.local_atoms[pb2Ragdoll.b_pelvis])   
         * @param beF (default=false)   
         * @param ben (default=null)   
         */
        Teleport: (dx: unknown, dy: unknown, dJP?: unknown, dJQ?: unknown, beD?: unknown, beF?: unknown, ben?: unknown) => unknown;
        /**
         * @param sound_name   
         * @param eVL (default=false)   
         * @param cAr (default=false)   
         */
        Speak: (sound_name: unknown, eVL?: unknown, cAr?: unknown) => unknown;
        damage_projectiles: unknown;
        damage_explosions: unknown;
        damage_impacts: unknown;
        damage_radiation: unknown;
        damage_liquids: unknown;
        mobility: unknown;
        readonly scale: unknown;
        readonly voice_preset_pitch: unknown;
        voice_pitch: unknown;
        readonly normalize_all_voice_lines_volume: unknown;
        readonly normalize_custom_voice_lines_volume: unknown;
        /** id is one of the atom id static consts defined on pb2Ragdoll */
        GetAtom: (id: number) => pb2Atom | null;
        /** @param id (default=0)  */
        GetMesh: (id?: number) => unknown;
    }
    var pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        CreateRagdoll: (params: unknown) => unknown;
        CreateRagdollComplete: (p: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        b_pelvis: unknown;
        /** Type is unknown. One known value: 1 */
        b_leg1: unknown;
        /** Type is unknown. One known value: 2 */
        b_leg2: unknown;
        /** Type is unknown. One known value: 3 */
        b_arm1: unknown;
        /** Type is unknown. One known value: 4 */
        b_arm2: unknown;
        /** Type is unknown. One known value: 5 */
        b_body: unknown;
        /** Type is unknown. One known value: 6 */
        b_head_start: unknown;
        /** Type is unknown. One known value: 7 */
        b_head_end: unknown;
        /** Type is unknown. One known value: 8 */
        b_body_brk1: unknown;
        /** Type is unknown. One known value: 9 */
        b_body_brk2: unknown;
        /** Type is unknown. One known value: [true,true,false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true] */
        mc_body_top_pattern: unknown;
        /** Type is unknown. One known value: 0 */
        mc_head: unknown;
        /** Type is unknown. One known value: 1 */
        mc_head_broken: unknown;
        /** Type is unknown. One known value: 2 */
        mc_pelvis: unknown;
        /** Type is unknown. One known value: 3 */
        mc_pelvis_broken: unknown;
        /** Type is unknown. One known value: 4 */
        mc_body: unknown;
        /** Type is unknown. One known value: 5 */
        mc_arm1a: unknown;
        /** Type is unknown. One known value: 6 */
        mc_arm1b: unknown;
        /** Type is unknown. One known value: 7 */
        mc_arm1b_broken: unknown;
        /** Type is unknown. One known value: 8 */
        mc_arm1b_sword: unknown;
        /** Type is unknown. One known value: 9 */
        mc_arm2a: unknown;
        /** Type is unknown. One known value: 10 */
        mc_arm2b: unknown;
        /** Type is unknown. One known value: 11 */
        mc_arm2b_broken: unknown;
        /** Type is unknown. One known value: 12 */
        mc_arm2b_sword: unknown;
        /** Type is unknown. One known value: 13 */
        mc_leg1a: unknown;
        /** Type is unknown. One known value: 14 */
        mc_leg1b: unknown;
        /** Type is unknown. One known value: 15 */
        mc_leg1c: unknown;
        /** Type is unknown. One known value: 16 */
        mc_leg1b_broken: unknown;
        /** Type is unknown. One known value: 17 */
        mc_leg2a: unknown;
        /** Type is unknown. One known value: 18 */
        mc_leg2b: unknown;
        /** Type is unknown. One known value: 19 */
        mc_leg2c: unknown;
        /** Type is unknown. One known value: 20 */
        mc_leg2b_broken: unknown;
        /** Type is unknown. One known value: 21 */
        mc_body_broken: unknown;
        /** Type is unknown. One known value: [] */
        ragdolls: unknown;
    }
}
