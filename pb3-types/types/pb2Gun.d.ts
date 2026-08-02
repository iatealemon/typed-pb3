export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Gun extends ClassIdentityProps<"pb2Gun"> {
        /** Type is unknown. One known value: 5 */
        readonly classid: unknown;
        x: number;
        y: number;
        readonly tox: number;
        readonly toy: number;
        readonly owner: pb2Character | null;
        readonly owner_entity: pb2Entity | null;
        readonly gun_type: unknown;
        readonly gun_type_string: unknown;
        barrel_spin: unknown;
        heat: unknown;
        main_cooldown: unknown;
        readonly side: 1 | -1;
        Flip: () => void;
        Hide: () => unknown;
        Show: () => unknown;
        /**
         * @param a   
         * @param an   
         * @param offset   
         * @param Xv   
         * @param dRg   
         * @param Xx (default=false)   
         * @param GSPEED (default=Xv)   
         */
        MoveTo: (a: unknown, an: unknown, offset: unknown, Xv: unknown, dRg: unknown, Xx?: unknown, GSPEED?: unknown) => unknown;
        GetPhysSpread: (ang: unknown) => unknown;
        DetachClip: () => unknown;
        AttachClip: () => unknown;
        /**
         * @param dQI (default=false)   
         * @param dQB (default=false)   
         */
        CanShoot: (dQI?: unknown, dQB?: unknown) => unknown;
        CanShootUI: () => unknown;
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
        Fire: (ragdoll: unknown, dQG: unknown, dQN: unknown, GSPEED: unknown, final: unknown, dQO?: unknown, dQP?: unknown, dQQ?: unknown, Yq?: unknown) => unknown;
        CarryStart: () => unknown;
        activate: () => unknown;
        deactivate: () => unknown;
        /** @param dPA (default=null)  */
        CarryEnd: (dPA?: unknown) => unknown;
        remove: () => unknown;
        readonly is_being_removed: boolean;
        readonly box2d_body: b2Body;
        main_reload_length: unknown;
        readonly is_active: unknown;
        readonly is_being_carried: boolean;
        readonly attachment_atom: unknown;
        readonly clip_out: unknown;
        readonly muzzle_alpha: unknown;
        readonly scale: unknown;
        readonly ammo_style: unknown;
        readonly ammo_style2: unknown;
        addEventListener: (event_type: unknown, params: unknown) => unknown;
        removeEventListener: (event_type: unknown, params: unknown) => unknown;
        readonly is_thrown_by: unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: number) => unknown;
    }
    var pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun: (params: unknown) => pb2Gun;
        guns: pb2Gun[];
        /** Type is unknown. One known value: [] */
        pickable_guns: unknown[];
    }
}
