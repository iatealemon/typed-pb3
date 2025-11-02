import type { ClassIdentityProps } from "./internal/helper";

/** unfinished */
export type pb2EntityInstanceBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    readonly classid: unknown;
    readonly x: number;
    readonly y: number;
    readonly tox: number;
    readonly toy: number;
    InstallGun(...args: unknown[]): unknown;
    DropGun(...args: unknown[]): unknown;
    remove(...args: unknown[]): unknown;
    AddRagdoll(...args: unknown[]): unknown;
    ExcludeRagdoll(...args: unknown[]): unknown;
    IgnoreRagdoll(...args: unknown[]): unknown;
    DealDamage(...args: unknown[]): unknown;
    alpha: unknown;
    readonly is_being_removed: boolean;
    hea: number;
    hmax: number;
    dying_level: unknown;
    team: pb2TeamInstance;
    SetDriverSeatsAndRadius(...args: unknown[]): unknown;
    SetSide(...args: unknown[]): unknown;
    readonly box2d_bodies: b2BodyInstance[];
    addEventListener(...args: unknown[]): unknown;
    removeEventListener(...args: unknown[]): unknown;
    GetLimb(id: unknown): unknown;
    GetMesh(id?: 0 | unknown): unknown;
};

declare global {
    /** unfinished */
    const pb2Entity: ClassIdentityProps<"pb2Entity"> & {
        readonly ALL_TYPES: any;
        CountShapesInRect(...args: unknown[]): unknown;
        CreateEntity(...args: unknown[]): unknown;
        readonly MATERIAL_BLOOD: any;
        readonly MATERIAL_CONCRETE: any;
        readonly MATERIAL_CRAB_SHELL: any;
        readonly MATERIAL_GLASS: any;
        readonly MATERIAL_ICE: any;
        readonly MATERIAL_MAGAZINE_CANISTER: any;
        readonly MATERIAL_MAGAZINE_GENERIC_METAL: any;
        readonly MATERIAL_MAGAZINE_PISTOL: any;
        readonly MATERIAL_MAGAZINE_PISTOL3: any;
        readonly MATERIAL_MAGAZINE_RIFLE: any;
        readonly MATERIAL_METAL: any;
        readonly MATERIAL_METAL_MOTO: any;
        readonly MATERIAL_METAL_SPOILER33: any;
        readonly MATERIAL_METAL_USURP: any;
        readonly MATERIAL_METAL_USURP_BOSS_LEG: any;
        readonly MATERIAL_ROCK: any;
        readonly MATERIAL_RUBBER: any;
        readonly MATERIAL_WOOD: any;
        readonly TYPE_ANTIGRAVITY: any;
        readonly TYPE_BARREL: any;
        readonly TYPE_BARREL_PART: any;
        readonly TYPE_CORVETTE: any;
        readonly TYPE_CRATE: any;
        readonly TYPE_FLOATING_ICE: any;
        readonly TYPE_MOTO: any;
        readonly TYPE_SPOILER13: any;
        readonly TYPE_SPOILER14: any;
        readonly TYPE_SPOILER15: any;
        readonly TYPE_SPOILER16: any;
        readonly TYPE_SPOILER17: any;
        readonly TYPE_SPOILER18: any;
        readonly TYPE_SPOILER19: any;
        readonly TYPE_SPOILER20: any;
        readonly TYPE_SPOILER21: any;
        readonly TYPE_SPOILER27: any;
        readonly TYPE_SPOILER28: any;
        readonly TYPE_SPOILER29: any;
        readonly TYPE_SPOILER30: any;
        readonly TYPE_SPOILER33: any;
        readonly TYPE_SPOILER34: any;
        readonly TYPE_SPOILER35: any;
        readonly TYPE_TURRET: any;
        readonly TYPE_UNKNOWN: any;
        readonly TYPE_WALKER: any;
        entities: unknown;
    };
    
    type pb2EntityInstance = pb2EntityInstanceBase<"pb2Entity">;
}