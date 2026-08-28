export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Vision extends ClassIdentityProps<"pb2Vision"> {
        readonly type: TODO;
        readonly ragdoll: TODO;
        ai_x_limit: TODO;
        ai_y_limit: TODO;
        readonly deafness_timer: TODO;
        readonly blindndess_timer: TODO;
    }
    var pb2Vision: ClassIdentityProps<"pb2Vision"> & {
        /** Type is unknown. One known value: 1 */
        VISION_EVERYTHING: TODO;
        /** Type is unknown. One known value: 2 */
        VISION_SCREEN_BOX: TODO;
        /** Type is unknown. One known value: 3 */
        VISION_RADIAL_TRACE: TODO;
        /** Type is unknown. One known value: 4 */
        VISION_DIRECTED_TRACE: TODO;
        /** Type is unknown. One known value: ["pb2Vision.VISION_EVERYTHING","pb2Vision.VISION_SCREEN_BOX","pb2Vision.VISION_RADIAL_TRACE","pb2Vision.VISION_DIRECTED_TRACE"] */
        ALL_TYPES: TODO;
    }
}
