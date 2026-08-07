export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2EntityAntigravity extends ClassIdentityProps<"pb2EntityAntigravity"> {
        /** Type is unknown. One known value: 2 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        readonly tox: TODO;
        readonly toy: TODO;
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
        readonly is_being_removed: TODO;
        hea: TODO;
        hmax: TODO;
        dying_level: TODO;
        team: TODO;
        /**
         * @param x   
         * @param dist (default=-123)   
         */
        SetDriverSeatsAndRadius: (x: TODO, dist?: TODO) => TODO;
        /**
         * @param x   
         * @param eQr (default=false)   
         */
        SetSide: (x: TODO, eQr?: TODO) => TODO;
        readonly box2d_bodies: TODO;
        addEventListener: (event_type: TODO, params: TODO) => TODO;
        removeEventListener: (event_type: TODO, params: TODO) => TODO;
        range: TODO;
        strength: TODO;
        mass_cap_scale: TODO;
        cooldown_duration_scale: TODO;
        can_be_damaged: TODO;
        lights_intensity: TODO;
        light_current: TODO;
        light_next_update_in: TODO;
        malfunction_timer: TODO;
        GetLimb: (id: TODO) => TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: TODO) => TODO;
    }
    var pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FORCE: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_IMPACT_PREVENTION: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_KINETIC_PUSHER: TODO;
    }
}
