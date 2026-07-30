export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Entity extends ClassIdentityProps<"pb2Entity"> {
        /** Type is unknown. One known value: 2 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        InstallGun: (_tQ: unknown) => unknown;
        DropGun: () => unknown;
        remove: () => unknown;
        /**
         * @param r   
         * @param eQf (default=-1)   
         */
        AddRagdoll: (r: unknown, eQf?: unknown) => unknown;
        /**
         * @param r   
         * @param hv (default=false)   
         */
        ExcludeRagdoll: (r: unknown, hv?: unknown) => unknown;
        /**
         * @param r   
         * @param time (default=-100)   
         * @param eQa (default=false)   
         * @param eQh (default=null)   
         */
        IgnoreRagdoll: (r: unknown, time?: unknown, eQa?: unknown, eQh?: unknown) => unknown;
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
        DealDamage: (bN: unknown, xx: unknown, yy: unknown, _boD: unknown, _ben: unknown, limb_id: unknown, limb_damage_multiplier?: unknown, eTB?: unknown, fG?: unknown, fE?: unknown, eSP?: unknown, bqj?: unknown) => unknown;
        MultiplyHealth: (m: unknown) => unknown;
        alpha: unknown;
        readonly is_being_removed: unknown;
        hea: unknown;
        hmax: unknown;
        dying_level: unknown;
        team: unknown;
        /**
         * @param x   
         * @param dist (default=-123)   
         */
        SetDriverSeatsAndRadius: (x: unknown, dist?: unknown) => unknown;
        /**
         * @param x   
         * @param eQr (default=false)   
         */
        SetSide: (x: unknown, eQr?: unknown) => unknown;
        readonly box2d_bodies: unknown;
        addEventListener: (event_type: unknown, params: unknown) => unknown;
        removeEventListener: (event_type: unknown, params: unknown) => unknown;
        GetLimb: (id: unknown) => unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: unknown) => unknown;
    }
    var pb2Entity: ClassIdentityProps<"pb2Entity"> & {
        CreateEntity: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_UNKNOWN: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_SPOILER35: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_BARREL: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_BARREL_PART: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_CRATE: unknown;
        /** Type is unknown. One known value: 5 */
        TYPE_TURRET: unknown;
        /** Type is unknown. One known value: 6 */
        TYPE_SPOILER27: unknown;
        /** Type is unknown. One known value: 7 */
        TYPE_SPOILER29: unknown;
        /** Type is unknown. One known value: 8 */
        TYPE_MOTO: unknown;
        /** Type is unknown. One known value: 9 */
        TYPE_WALKER: unknown;
        /** Type is unknown. One known value: 10 */
        TYPE_SPOILER28: unknown;
        /** Type is unknown. One known value: 11 */
        TYPE_SPOILER30: unknown;
        /** Type is unknown. One known value: 12 */
        TYPE_SPOILER13: unknown;
        /** Type is unknown. One known value: 13 */
        TYPE_SPOILER14: unknown;
        /** Type is unknown. One known value: 14 */
        TYPE_SPOILER15: unknown;
        /** Type is unknown. One known value: 15 */
        TYPE_SPOILER16: unknown;
        /** Type is unknown. One known value: 16 */
        TYPE_SPOILER17: unknown;
        /** Type is unknown. One known value: 17 */
        TYPE_SPOILER19: unknown;
        /** Type is unknown. One known value: 18 */
        TYPE_SPOILER18: unknown;
        /** Type is unknown. One known value: 19 */
        TYPE_SPOILER20: unknown;
        /** Type is unknown. One known value: 20 */
        TYPE_SPOILER21: unknown;
        /** Type is unknown. One known value: 21 */
        TYPE_ANTIGRAVITY: unknown;
        /** Type is unknown. One known value: 22 */
        TYPE_SPOILER33: unknown;
        /** Type is unknown. One known value: 23 */
        TYPE_CORVETTE: unknown;
        /** Type is unknown. One known value: 24 */
        TYPE_FLOATING_ICE: unknown;
        /** Type is unknown. One known value: 25 */
        TYPE_SPOILER34: unknown;
        /** Type is unknown. One known value: ["pb2Entity.TYPE_UNKNOWN","pb2Entity.TYPE_SPOILER35","pb2Entity.TYPE_BARREL","pb2Entity.TYPE_BARREL_PART","pb2Entity.TYPE_CRATE","pb2Entity.TYPE_TURRET","pb2Entity.TYPE_SPOILER27","pb2Entity.TYPE_SPOILER29","pb2Entity.TYPE_MOTO","pb2Entity.TYPE_WALKER","pb2Entity.TYPE_SPOILER28","pb2Entity.TYPE_SPOILER30","pb2Entity.TYPE_SPOILER13","pb2Entity.TYPE_SPOILER14","pb2Entity.TYPE_SPOILER15","pb2Entity.TYPE_SPOILER16","pb2Entity.TYPE_SPOILER17","pb2Entity.TYPE_SPOILER19","pb2Entity.TYPE_SPOILER18","pb2Entity.TYPE_SPOILER20","pb2Entity.TYPE_SPOILER21","pb2Entity.TYPE_ANTIGRAVITY","pb2Entity.TYPE_SPOILER33","pb2Entity.TYPE_CORVETTE","pb2Entity.TYPE_FLOATING_ICE","pb2Entity.TYPE_SPOILER34"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: 0 */
        MATERIAL_METAL: unknown;
        /** Type is unknown. One known value: 1 */
        MATERIAL_GLASS: unknown;
        /** Type is unknown. One known value: 2 */
        MATERIAL_WOOD: unknown;
        /** Type is unknown. One known value: 3 */
        MATERIAL_BLOOD: unknown;
        /** Type is unknown. One known value: 4 */
        MATERIAL_MAGAZINE_PISTOL: unknown;
        /** Type is unknown. One known value: 5 */
        MATERIAL_MAGAZINE_PISTOL3: unknown;
        /** Type is unknown. One known value: 6 */
        MATERIAL_MAGAZINE_RIFLE: unknown;
        /** Type is unknown. One known value: 7 */
        MATERIAL_MAGAZINE_GENERIC_METAL: unknown;
        /** Type is unknown. One known value: 8 */
        MATERIAL_RUBBER: unknown;
        /** Type is unknown. One known value: 9 */
        MATERIAL_METAL_USURP: unknown;
        /** Type is unknown. One known value: 10 */
        MATERIAL_METAL_USURP_BOSS_LEG: unknown;
        /** Type is unknown. One known value: 11 */
        MATERIAL_CONCRETE: unknown;
        /** Type is unknown. One known value: 12 */
        MATERIAL_METAL_SPOILER33: unknown;
        /** Type is unknown. One known value: 13 */
        MATERIAL_MAGAZINE_CANISTER: unknown;
        /** Type is unknown. One known value: 14 */
        MATERIAL_CRAB_SHELL: unknown;
        /** Type is unknown. One known value: 15 */
        MATERIAL_ICE: unknown;
        /** Type is unknown. One known value: 16 */
        MATERIAL_ROCK: unknown;
        /** Type is unknown. One known value: 17 */
        MATERIAL_METAL_MOTO: unknown;
        /** Type is unknown. One known value: [] */
        entities: unknown;
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
        CountShapesInRect: (yJ: unknown, x: unknown, y: unknown, _width: unknown, _height: unknown, eQz?: unknown, lw?: unknown, eQA?: unknown) => unknown;
    }
}
