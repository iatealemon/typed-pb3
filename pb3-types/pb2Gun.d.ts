import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun(...args: unknown[]): unknown;
        guns: unknown;
        pickable_guns: unknown;
    };
    
    /** unfinished */
    type pb2GunInstance = ClassIdentityProps<"pb2Gun"> & {
        readonly classid: unknown;
        x: unknown;
        y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        readonly owner: unknown;
        readonly owner_entity: unknown;
        readonly gun_type: unknown;
        readonly gun_type_string: unknown;
        barrel_spin: unknown;
        heat: unknown;
        main_cooldown: unknown;
        readonly side: unknown;
        Flip(...args: unknown[]): unknown;
        Hide(...args: unknown[]): unknown;
        Show(...args: unknown[]): unknown;
        MoveTo(...args: unknown[]): unknown;
        GetPhysSpread(...args: unknown[]): unknown;
        DetachClip(...args: unknown[]): unknown;
        AttachClip(...args: unknown[]): unknown;
        CanShoot(...args: unknown[]): unknown;
        CanShootUI(...args: unknown[]): unknown;
        Fire(...args: unknown[]): unknown;
        CarryStart(...args: unknown[]): unknown;
        activate(...args: unknown[]): unknown;
        deactivate(...args: unknown[]): unknown;
        CarryEnd(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly is_being_removed: unknown;
        readonly box2d_body: unknown;
        main_reload_length: unknown;
        readonly is_active: unknown;
        readonly is_being_carried: unknown;
        readonly attachment_atom: unknown;
        readonly clip_out: unknown;
        readonly muzzle_alpha: unknown;
        readonly scale: unknown;
        GetMesh(id?: number): unknown | unknown;
    };
}