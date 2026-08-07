export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2TimeWarpZone extends ClassIdentityProps<"pb2TimeWarpZone"> {
        /** Type is unknown. One known value: 22 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        MoveTo: (xx: TODO, yy: TODO) => TODO;
        SetTargetSpeed: (v: TODO) => TODO;
        readonly target_speed: TODO;
        decay_speed: TODO;
        remove: () => TODO;
    }
    var pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        /** Type is unknown. One known value: 150 */
        base_range: TODO;
        /** Type is unknown. One known value: 50 */
        blur_range: TODO;
        /** Type is unknown. One known value: 0.35 */
        target_speed: TODO;
        /** Type is unknown. One known value: 0 */
        TEXTURE_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        TEXTURE_TIME_NADE_BLACKOUT: TODO;
        /** Type is unknown. One known value: 2 */
        TEXTURE_GRADIENT: TODO;
        CreateWarpZone: (params: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param eft (default=null)   
         * @param beL (default=null)   
         * @param efv (default=false)   
         */
        GetSpeedAtPoint: (x: TODO, y: TODO, eft?: TODO, beL?: TODO, efv?: TODO) => TODO;
        /**
         * @param body   
         * @param eft (default=null)   
         */
        TimeWarpFunction: (body: TODO, eft?: TODO) => TODO;
        IsBodyChronoFrozen: (body: TODO) => TODO;
        /** Type is unknown. One known value: [] */
        zones: TODO;
    }
}
