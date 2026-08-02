export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2TimeWarpZone extends ClassIdentityProps<"pb2TimeWarpZone"> {
        /** Type is unknown. One known value: 22 */
        readonly classid: unknown;
        readonly x: number;
        readonly y: number;
        MoveTo: (xx: number, yy: number) => unknown;
        SetTargetSpeed: (v: number) => unknown;
        readonly target_speed: number;
        decay_speed: number;
        remove: () => unknown;
    }
    var pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        base_range: number;
        blur_range: number;
        target_speed: number;
        /** Type is unknown. One known value: 0 */
        TEXTURE_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        TEXTURE_TIME_NADE_BLACKOUT: unknown;
        /** Type is unknown. One known value: 2 */
        TEXTURE_GRADIENT: unknown;
        CreateWarpZone: (params: unknown) => pb2TimeWarpZone;
        /**
         * @param x   
         * @param y   
         * @param eft (default=null)   
         * @param beL (default=null)   
         * @param efv (default=false)   
         */
        GetSpeedAtPoint: (x: number, y: number, eft?: unknown, beL?: unknown, efv?: unknown) => number;
        /**
         * @param body   
         * @param eft (default=null)   
         */
        TimeWarpFunction: (body: unknown, eft?: unknown) => unknown;
        IsBodyChronoFrozen: (body: unknown) => boolean;
        zones: pb2TimeWarpZone[];
    }
}
