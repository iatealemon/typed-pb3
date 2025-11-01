import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        CreateRagdoll(...args: unknown[]): unknown;
        CreateRagdollComplete(...args: unknown[]): unknown;
        readonly b_arm1: any;
        readonly b_arm2: any;
        readonly b_body: any;
        readonly b_body_brk1: any;
        readonly b_body_brk2: any;
        readonly b_head_end: any;
        readonly b_head_start: any;
        readonly b_leg1: any;
        readonly b_leg2: any;
        readonly b_pelvis: any;
        readonly mc_arm1a: any;
        readonly mc_arm1b: any;
        readonly mc_arm1b_broken: any;
        readonly mc_arm1b_sword: any;
        readonly mc_arm2a: any;
        readonly mc_arm2b: any;
        readonly mc_arm2b_broken: any;
        readonly mc_arm2b_sword: any;
        readonly mc_body: any;
        readonly mc_body_broken: any;
        readonly mc_body_top_pattern: any;
        readonly mc_head: any;
        readonly mc_head_broken: any;
        readonly mc_leg1a: any;
        readonly mc_leg1b: any;
        readonly mc_leg1b_broken: any;
        readonly mc_leg1c: any;
        readonly mc_leg2a: any;
        readonly mc_leg2b: any;
        readonly mc_leg2b_broken: any;
        readonly mc_leg2c: any;
        readonly mc_pelvis: any;
        readonly mc_pelvis_broken: any;
        ragdolls: unknown;
    };

    /** unfinished */
    type pb2RagdollInstance = ClassIdentityProps<"pb2Ragdoll"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        dimmed: unknown;
        readonly owner_character: unknown;
        DealLimbDamage(...args: unknown[]): unknown;
        HealGunApplied(...args: unknown[]): unknown;
        CaptureHealGunApplied(...args: unknown[]): unknown;
        SetName(...args: unknown[]): unknown;
        GetName(...args: unknown[]): unknown;
        MeltDown(...args: unknown[]): unknown;
        ExpireAllHintObjects(...args: unknown[]): unknown;
        readonly side: unknown;
        Flip(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly is_being_removed: unknown;
        SetVision(...args: unknown[]): unknown;
        GetVision(...args: unknown[]): unknown;
        GetBlindness(...args: unknown[]): unknown;
        SetBlindness(...args: unknown[]): unknown;
        GetDeafness(...args: unknown[]): unknown;
        SetDeafness(...args: unknown[]): unknown;
        hp_head: unknown;
        hp_body: unknown;
        hp_arms: unknown;
        hp_legs: unknown;
        GetAtomsTotal(...args: unknown[]): unknown;
        readonly gameplay_effects: unknown;
        ClearBulletHoles(...args: unknown[]): unknown;
        UsesGrapplingHook(...args: unknown[]): unknown;
        DetachFromRope(...args: unknown[]): unknown;
        hud_custom_bars: unknown;
        readonly enforce_skin_limitations: unknown;
        readonly use_skin_properties: unknown;
        readonly mobility: unknown;
        readonly team: unknown;
        GetAtom(id: unknown): unknown;
        GetMesh(id?: 0 | unknown): unknown;
    };
}