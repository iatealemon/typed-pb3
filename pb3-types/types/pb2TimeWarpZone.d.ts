export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2TimeWarpZone extends ClassIdentityProps<"pb2TimeWarpZone"> {
        /** Type is unknown. One known value: 22 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        MoveTo: (xx: unknown, yy: unknown) => unknown;
        SetTargetSpeed: (v: unknown) => unknown;
        readonly target_speed: unknown;
        decay_speed: unknown;
        remove: () => unknown;
    }
    var pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        /** Type is unknown. One known value: 150 */
        base_range: unknown;
        /** Type is unknown. One known value: 50 */
        blur_range: unknown;
        /** Type is unknown. One known value: 0.35 */
        target_speed: unknown;
        /** Type is unknown. One known value: 0 */
        TEXTURE_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        TEXTURE_TIME_NADE_BLACKOUT: unknown;
        /** Type is unknown. One known value: 2 */
        TEXTURE_GRADIENT: unknown;
        CreateWarpZone: (params: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param eft (default=null)   
         * @param beL (default=null)   
         * @param efv (default=false)   
         */
        GetSpeedAtPoint: (x: unknown, y: unknown, eft?: unknown, beL?: unknown, efv?: unknown) => unknown;
        /**
         * @param body   
         * @param eft (default=null)   
         */
        TimeWarpFunction: (body: unknown, eft?: unknown) => unknown;
        IsBodyChronoFrozen: (body: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        zones: unknown;
    }
}
