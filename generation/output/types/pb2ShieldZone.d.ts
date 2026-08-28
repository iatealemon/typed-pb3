export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2ShieldZone extends ClassIdentityProps<"pb2ShieldZone"> {
        /** Type is unknown. One known value: 21 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        /**
         * @param bN   
         * @param xx   
         * @param yy   
         * @param _boD   
         * @param initiator_ragdoll (default=null)   
         */
        DealDamage: (bN: TODO, xx: TODO, yy: TODO, _boD: TODO, initiator_ragdoll?: TODO) => TODO;
        Heal: (bN: TODO) => TODO;
        MoveTo: (xx: TODO, yy: TODO) => TODO;
        /** @param gv (default=false)  */
        Destroy: (gv?: TODO) => TODO;
        readonly radius: TODO;
        readonly attachment_box2d_body: TODO;
        readonly connected_bullet: TODO;
        readonly hea: TODO;
        readonly hmax: TODO;
        remove: () => TODO;
    }
    var pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        /** Type is unknown. One known value: 150 */
        base_range: TODO;
        /** Type is unknown. One known value: 1000 */
        default_hitpoints: TODO;
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
        /** Type is unknown. One known value: [] */
        shields: TODO;
    }
}
