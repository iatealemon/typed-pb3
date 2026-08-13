export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Gun extends ClassIdentityProps<"pb2Gun"> {
        /** Type is unknown. One known value: 5 */
        readonly classid: TODO;
        x: number;
        y: number;
        readonly tox: number;
        readonly toy: number;
        readonly owner: pb2Character | null;
        readonly owner_entity: pb2Entity | null;
        readonly gun_type: pb2GunClass;
        readonly gun_type_string: string;
        barrel_spin: number; // starts at 0. used in guns that need to spin up before firing (for example 'gun_anti_rifle')
        heat: number; // value that increases when firing. how high it increases depends on the gun
        main_cooldown: number; // time before it's possible to shoot again
        readonly side: 1 | -1;
        Flip: () => void;
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
        readonly is_being_removed: boolean;
        readonly box2d_body: b2Body | null; // set to null when disposed
        main_reload_length: number;
        readonly is_active: boolean; // when held by a character
        readonly is_being_carried: boolean;
        readonly attachment_atom: pb2Atom | null;
        readonly clip_out: boolean; // when reloadable gun needs to be reloaded
        readonly muzzle_alpha: number; // muzzle flash alpha
        readonly scale: number;
        readonly ammo_style: pb2StyleAmmo | null;
        readonly ammo_style2: pb2StyleAmmo | null;
        addEventListener: (event_type: TODO, params: TODO) => TODO;
        removeEventListener: (event_type: TODO, params: TODO) => TODO;
        readonly is_thrown_by: pb2Ragdoll | null; // gets set to ragdoll when thrown, gets reset to null when picked up
        /** @param id (default=0)  */
        GetMesh: (id?: number) => TODO;
    }
    var pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun: (params: TODO) => pb2Gun;
        guns: pb2Gun[];
        pickable_guns: pb2Gun[]; // guns that have no owner
    }
}
