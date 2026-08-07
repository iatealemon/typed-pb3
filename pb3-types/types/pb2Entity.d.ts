export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

export type pb2EntityBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    /** Type is unknown. One known value: 2 */
    readonly classid: TODO;
    readonly x: number;
    readonly y: number;
    readonly tox: number;
    readonly toy: number;
    InstallGun: (_tQ: TODO) => TODO;
    DropGun: () => TODO;
    remove: () => TODO;
    /**
     * @param r   
     * @param eQf (default=-1)   
     */
    AddRagdoll: (r: TODO, eQf?: TODO) => TODO;
    /**
     * @param r   
     * @param hv (default=false)   
     */
    ExcludeRagdoll: (r: TODO, hv?: TODO) => TODO;
    /**
     * @param r   
     * @param time (default=-100)   
     * @param eQa (default=false)   
     * @param eQh (default=null)   
     */
    IgnoreRagdoll: (r: TODO, time?: TODO, eQa?: TODO, eQh?: TODO) => TODO;
    /**
     * @param bN   
     * @param xx   
     * @param yy   
     * @param _boD   
     * @param _ben   
     * @param limb_id   
     * @param limb_damage_multiplier (default=1)   
     * @param eTB (default=true)   
     * @param fG (default=0)   
     * @param fE (default=0)   
     * @param eSP (default=null)   
     * @param bqj (default=false)   
     */
    DealDamage: (bN: TODO, xx: TODO, yy: TODO, _boD: TODO, _ben: TODO, limb_id: TODO, limb_damage_multiplier?: TODO, eTB?: TODO, fG?: TODO, fE?: TODO, eSP?: TODO, bqj?: TODO) => TODO;
    MultiplyHealth: (m: TODO) => TODO;
    alpha: TODO;
    readonly is_being_removed: boolean;
    hea: number;
    hmax: number;
    dying_level: TODO;
    team: pb2Team;
    /**
     * @param x   
     * @param dist (default=-123)   
     */
    SetDriverSeatsAndRadius: (x: number, dist?: number) => TODO;
    /**
     * @param x   
     * @param eQr (default=false)   
     */
    SetSide: (x: TODO, eQr?: TODO) => TODO;
    readonly box2d_bodies: b2Body[];
    addEventListener: (event_type: TODO, params: TODO) => TODO;
    removeEventListener: (event_type: TODO, params: TODO) => TODO;
    GetLimb: (id: TODO) => TODO;
    /** @param id (default=0)  */
    GetMesh: (id?: number) => THREE.Mesh;
};

declare global {
    interface pb2Entity extends pb2EntityBase<"pb2Entity"> {}
    var pb2Entity: ClassIdentityProps<"pb2Entity"> & {
        /** return type may be different based on the parameters passed in */
        CreateEntity: (params: TODO) => pb2Entity;
        /** Type is unknown. One known value: 0 */
        TYPE_UNKNOWN: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_SPOILER35: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_BARREL: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_BARREL_PART: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_CRATE: TODO;
        /** Type is unknown. One known value: 5 */
        TYPE_TURRET: TODO;
        /** Type is unknown. One known value: 6 */
        TYPE_SPOILER27: TODO;
        /** Type is unknown. One known value: 7 */
        TYPE_SPOILER29: TODO;
        /** Type is unknown. One known value: 8 */
        TYPE_MOTO: TODO;
        /** Type is unknown. One known value: 9 */
        TYPE_WALKER: TODO;
        /** Type is unknown. One known value: 10 */
        TYPE_SPOILER28: TODO;
        /** Type is unknown. One known value: 11 */
        TYPE_SPOILER30: TODO;
        /** Type is unknown. One known value: 12 */
        TYPE_SPOILER13: TODO;
        /** Type is unknown. One known value: 13 */
        TYPE_SPOILER14: TODO;
        /** Type is unknown. One known value: 14 */
        TYPE_SPOILER15: TODO;
        /** Type is unknown. One known value: 15 */
        TYPE_SPOILER16: TODO;
        /** Type is unknown. One known value: 16 */
        TYPE_SPOILER17: TODO;
        /** Type is unknown. One known value: 17 */
        TYPE_SPOILER19: TODO;
        /** Type is unknown. One known value: 18 */
        TYPE_SPOILER18: TODO;
        /** Type is unknown. One known value: 19 */
        TYPE_SPOILER20: TODO;
        /** Type is unknown. One known value: 20 */
        TYPE_SPOILER21: TODO;
        /** Type is unknown. One known value: 21 */
        TYPE_ANTIGRAVITY: TODO;
        /** Type is unknown. One known value: 22 */
        TYPE_SPOILER33: TODO;
        /** Type is unknown. One known value: 23 */
        TYPE_CORVETTE: TODO;
        /** Type is unknown. One known value: 24 */
        TYPE_FLOATING_ICE: TODO;
        /** Type is unknown. One known value: 25 */
        TYPE_SPOILER34: TODO;
        /** Type is unknown. One known value: ["pb2Entity.TYPE_UNKNOWN","pb2Entity.TYPE_SPOILER35","pb2Entity.TYPE_BARREL","pb2Entity.TYPE_BARREL_PART","pb2Entity.TYPE_CRATE","pb2Entity.TYPE_TURRET","pb2Entity.TYPE_SPOILER27","pb2Entity.TYPE_SPOILER29","pb2Entity.TYPE_MOTO","pb2Entity.TYPE_WALKER","pb2Entity.TYPE_SPOILER28","pb2Entity.TYPE_SPOILER30","pb2Entity.TYPE_SPOILER13","pb2Entity.TYPE_SPOILER14","pb2Entity.TYPE_SPOILER15","pb2Entity.TYPE_SPOILER16","pb2Entity.TYPE_SPOILER17","pb2Entity.TYPE_SPOILER19","pb2Entity.TYPE_SPOILER18","pb2Entity.TYPE_SPOILER20","pb2Entity.TYPE_SPOILER21","pb2Entity.TYPE_ANTIGRAVITY","pb2Entity.TYPE_SPOILER33","pb2Entity.TYPE_CORVETTE","pb2Entity.TYPE_FLOATING_ICE","pb2Entity.TYPE_SPOILER34"] */
        ALL_TYPES: TODO;
        /** Type is unknown. One known value: 0 */
        MATERIAL_METAL: TODO;
        /** Type is unknown. One known value: 1 */
        MATERIAL_GLASS: TODO;
        /** Type is unknown. One known value: 2 */
        MATERIAL_WOOD: TODO;
        /** Type is unknown. One known value: 3 */
        MATERIAL_BLOOD: TODO;
        /** Type is unknown. One known value: 4 */
        MATERIAL_MAGAZINE_PISTOL: TODO;
        /** Type is unknown. One known value: 5 */
        MATERIAL_MAGAZINE_PISTOL3: TODO;
        /** Type is unknown. One known value: 6 */
        MATERIAL_MAGAZINE_RIFLE: TODO;
        /** Type is unknown. One known value: 7 */
        MATERIAL_MAGAZINE_GENERIC_METAL: TODO;
        /** Type is unknown. One known value: 8 */
        MATERIAL_RUBBER: TODO;
        /** Type is unknown. One known value: 9 */
        MATERIAL_METAL_USURP: TODO;
        /** Type is unknown. One known value: 10 */
        MATERIAL_METAL_USURP_BOSS_LEG: TODO;
        /** Type is unknown. One known value: 11 */
        MATERIAL_CONCRETE: TODO;
        /** Type is unknown. One known value: 12 */
        MATERIAL_METAL_SPOILER33: TODO;
        /** Type is unknown. One known value: 13 */
        MATERIAL_MAGAZINE_CANISTER: TODO;
        /** Type is unknown. One known value: 14 */
        MATERIAL_CRAB_SHELL: TODO;
        /** Type is unknown. One known value: 15 */
        MATERIAL_ICE: TODO;
        /** Type is unknown. One known value: 16 */
        MATERIAL_ROCK: TODO;
        /** Type is unknown. One known value: 17 */
        MATERIAL_METAL_MOTO: TODO;
        /** Type is unknown. One known value: [] */
        entities: TODO;
        /**
         * @param yJ   
         * @param x   
         * @param y   
         * @param _width   
         * @param _height   
         * @param eQz (default=null)   
         * @param lw (default=null)   
         * @param eQA (default=null)   
         */
        CountShapesInRect: (yJ: TODO, x: number, y: number, _width: number, _height: number, eQz?: TODO, lw?: TODO, eQA?: TODO) => TODO;
    }
}
