export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2TimeWarpZone extends ClassIdentityProps<"pb2TimeWarpZone"> {
        /** Type is unknown. One known value: 22 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        MoveTo: (xx: number, yy: number) => TODO;
        SetTargetSpeed: (v: number) => TODO;
        readonly target_speed: number;
        decay_speed: number;
        remove: () => TODO;
    }
    var pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        base_range: number;
        blur_range: number;
        target_speed: number;
        /** Type is unknown. One known value: 0 */
        TEXTURE_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        TEXTURE_TIME_NADE_BLACKOUT: TODO;
        /** Type is unknown. One known value: 2 */
        TEXTURE_GRADIENT: TODO;
        CreateWarpZone: (params: TODO) => pb2TimeWarpZone;
        /**
         * @param x   
         * @param y   
         * @param eft (default=null)   
         * @param beL (default=null)   
         * @param efv (default=false)   
         */
        GetSpeedAtPoint: (x: number, y: number, eft?: TODO, beL?: TODO, efv?: TODO) => number;
        /**
         * @param body   
         * @param eft (default=null)   
         */
        TimeWarpFunction: (body: TODO, eft?: TODO) => TODO;
        IsBodyChronoFrozen: (body: TODO) => boolean;
        zones: pb2TimeWarpZone[];
    }
}
