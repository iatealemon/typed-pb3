import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun(...args: unknown[]): unknown;
        guns: unknown;
        pickable_guns: unknown;
    };
    
    /** unfinished auto-generated */
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
        readonly Flip: unknown;
        readonly Hide: unknown;
        readonly Show: unknown;
        readonly MoveTo: unknown;
        readonly GetPhysSpread: unknown;
        readonly DetachClip: unknown;
        readonly AttachClip: unknown;
        readonly CanShoot: unknown;
        readonly CanShootUI: unknown;
        readonly Fire: unknown;
        readonly CarryStart: unknown;
        readonly activate: unknown;
        readonly deactivate: unknown;
        readonly CarryEnd: unknown;
        readonly remove: unknown;
        readonly is_being_removed: unknown;
        readonly box2d_body: unknown;
        main_reload_length: unknown;
        readonly is_active: unknown;
        readonly is_being_carried: unknown;
        readonly attachment_atom: unknown;
        readonly clip_out: unknown;
        readonly muzzle_alpha: unknown;
        readonly scale: unknown;
    };
}