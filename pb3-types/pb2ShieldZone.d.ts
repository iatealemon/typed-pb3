import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        readonly ALL_SOUND_PRESET_IDS: any;
        readonly SOUND_PRESET_ID_SHIELD_GRENADE: any;
        readonly SOUND_PRESET_ID_SILENT: any;
        readonly SOUND_PRESET_ID_SPOILER26_SHIELD: any;
    };
    
    /** unfinished auto-generated */
    type pb2ShieldZoneInstance = ClassIdentityProps<"pb2ShieldZone"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly DealDamage: unknown;
        readonly Heal: unknown;
        readonly MoveTo: unknown;
    };
}