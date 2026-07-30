export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2EntityCorvette extends ClassIdentityProps<"pb2EntityCorvette"> {
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
         * @param eL (default=false)   
         */
        SetSide: (x: unknown, eL?: unknown) => unknown;
        readonly box2d_bodies: unknown;
        addEventListener: (event_type: unknown, params: unknown) => unknown;
        removeEventListener: (event_type: unknown, params: unknown) => unknown;
        GetLimb: (id: unknown) => unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: unknown) => unknown;
    }
    
}
