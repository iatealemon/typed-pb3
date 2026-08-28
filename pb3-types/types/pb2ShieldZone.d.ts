export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2ShieldZone extends ClassIdentityProps<"pb2ShieldZone"> {
        /** Type is unknown. One known value: 21 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        /**
         * @param bN   
         * @param xx   
         * @param yy   
         * @param _boD   
         * @param initiator_ragdoll (default=null)   
         */
        DealDamage: (bN: TODO, xx: TODO, yy: TODO, _boD: TODO, initiator_ragdoll?: TODO) => TODO;
        Heal: (bN: TODO) => TODO;
        MoveTo: (xx: number, yy: number) => TODO;
        /** @param gv (default=false)  */
        Destroy: (gv?: TODO) => TODO;
        readonly radius: number;
        readonly attachment_box2d_body: TODO;
        readonly connected_bullet: TODO;
        readonly hea: number;
        readonly hmax: number;
        remove: () => TODO;
    }
    var pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        base_range: number;
        default_hitpoints: number;
        /** Type is unknown. One known value: null */
        CreateShieldZone: TODO;
        /** Type is unknown. One known value: 0 */
        SOUND_PRESET_ID_SILENT: TODO;
        /** Type is unknown. One known value: 1 */
        SOUND_PRESET_ID_SHIELD_GRENADE: TODO;
        /** Type is unknown. One known value: 2 */
        SOUND_PRESET_ID_SPOILER26_SHIELD: TODO;
        /** Type is unknown. One known value: ["pb2ShieldZone.SOUND_PRESET_ID_SILENT","pb2ShieldZone.SOUND_PRESET_ID_SHIELD_GRENADE","pb2ShieldZone.SOUND_PRESET_ID_SPOILER26_SHIELD"] */
        ALL_SOUND_PRESET_IDS: TODO;
        shields: pb2ShieldZone[];
    }
}
