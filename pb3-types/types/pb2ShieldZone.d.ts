export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2ShieldZone extends ClassIdentityProps<"pb2ShieldZone"> {
        /** Type is unknown. One known value: 21 */
        readonly classid: unknown;
        readonly x: number;
        readonly y: number;
        /**
         * @param bN   
         * @param xx   
         * @param yy   
         * @param _boD   
         * @param Ox (default=null)   
         */
        DealDamage: (bN: unknown, xx: unknown, yy: unknown, _boD: unknown, Ox?: unknown) => unknown;
        Heal: (bN: unknown) => unknown;
        MoveTo: (xx: number, yy: number) => unknown;
        /** @param gv (default=false)  */
        Destroy: (gv?: unknown) => unknown;
        remove: () => unknown;
    }
    var pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        /** Type is unknown. One known value: 0 */
        SOUND_PRESET_ID_SILENT: unknown;
        /** Type is unknown. One known value: 1 */
        SOUND_PRESET_ID_SHIELD_GRENADE: unknown;
        /** Type is unknown. One known value: 2 */
        SOUND_PRESET_ID_SPOILER26_SHIELD: unknown;
        /** Type is unknown. One known value: ["pb2ShieldZone.SOUND_PRESET_ID_SILENT","pb2ShieldZone.SOUND_PRESET_ID_SHIELD_GRENADE","pb2ShieldZone.SOUND_PRESET_ID_SPOILER26_SHIELD"] */
        ALL_SOUND_PRESET_IDS: unknown;
        shields: pb2ShieldZone[];
    }
}
