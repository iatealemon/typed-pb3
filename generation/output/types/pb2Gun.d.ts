export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Gun extends ClassIdentityProps<"pb2Gun"> {
        /** Type is unknown. One known value: 5 */
        readonly classid: TODO;
        x: TODO;
        y: TODO;
        readonly tox: TODO;
        readonly toy: TODO;
        readonly owner: TODO;
        readonly owner_entity: TODO;
        readonly gun_type: TODO;
        readonly gun_type_string: TODO;
        barrel_spin: TODO;
        heat: TODO;
        main_cooldown: TODO;
        readonly side: TODO;
        Flip: () => TODO;
        Hide: () => TODO;
        Show: () => TODO;
        /**
         * @param a   
         * @param an   
         * @param offset   
         * @param Xv   
         * @param dRg   
         * @param Xx (default=false)   
         * @param GSPEED (default=Xv)   
         */
        MoveTo: (a: TODO, an: TODO, offset: TODO, Xv: TODO, dRg: TODO, Xx?: TODO, GSPEED?: TODO) => TODO;
        GetPhysSpread: (ang: TODO) => TODO;
        DetachClip: () => TODO;
        AttachClip: () => TODO;
        /**
         * @param dQI (default=false)   
         * @param dQB (default=false)   
         */
        CanShoot: (dQI?: TODO, dQB?: TODO) => TODO;
        CanShootUI: () => TODO;
        /**
         * @param ragdoll   
         * @param dQG   
         * @param dQN   
         * @param GSPEED   
         * @param final   
         * @param dQO (default=0)   
         * @param dQP (default=0)   
         * @param dQQ (default=null)   
         * @param Yq (default=0)   
         */
        Fire: (ragdoll: TODO, dQG: TODO, dQN: TODO, GSPEED: TODO, final: TODO, dQO?: TODO, dQP?: TODO, dQQ?: TODO, Yq?: TODO) => TODO;
        CarryStart: () => TODO;
        activate: () => TODO;
        deactivate: () => TODO;
        /** @param dPA (default=null)  */
        CarryEnd: (dPA?: TODO) => TODO;
        remove: () => TODO;
        readonly is_being_removed: TODO;
        readonly box2d_body: TODO;
        main_reload_length: TODO;
        readonly is_active: TODO;
        readonly is_being_carried: TODO;
        readonly attachment_atom: TODO;
        readonly clip_out: TODO;
        readonly muzzle_alpha: TODO;
        readonly scale: TODO;
        readonly ammo_style: TODO;
        readonly ammo_style2: TODO;
        addEventListener: (event_type: TODO, params: TODO) => TODO;
        removeEventListener: (event_type: TODO, params: TODO) => TODO;
        readonly is_thrown_by: TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: TODO) => TODO;
    }
    var pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun: (params: TODO) => TODO;
        /** Type is unknown. One known value: [] */
        guns: TODO;
        /** Type is unknown. One known value: [] */
        pickable_guns: TODO;
    }
}
