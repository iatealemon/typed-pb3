export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2Vision: ClassIdentityProps<"pb2Vision"> & {
        /** Type is unknown. One known value: 1 */
        VISION_EVERYTHING: unknown;
        /** Type is unknown. One known value: 2 */
        VISION_SCREEN_BOX: unknown;
        /** Type is unknown. One known value: 3 */
        VISION_RADIAL_TRACE: unknown;
        /** Type is unknown. One known value: 4 */
        VISION_DIRECTED_TRACE: unknown;
        /** Type is unknown. One known value: ["pb2Vision.VISION_EVERYTHING","pb2Vision.VISION_SCREEN_BOX","pb2Vision.VISION_RADIAL_TRACE","pb2Vision.VISION_DIRECTED_TRACE"] */
        ALL_TYPES: unknown;
    }
}
