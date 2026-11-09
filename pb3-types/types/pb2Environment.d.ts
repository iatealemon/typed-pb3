export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Environment: ClassIdentityProps<"pb2Environment"> & {
        /** Type is unknown. One known value: 0 */
        BACKGROUND_IMAGE_FILTER_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        BACKGROUND_IMAGE_FILTER_COLOR_MULT: TODO;
        /** Type is unknown. One known value: 2 */
        BACKGROUND_IMAGE_FILTER_GRADIENT_MULT: TODO;
    }
}
