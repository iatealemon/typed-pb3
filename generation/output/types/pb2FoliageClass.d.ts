export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2FoliageClass: ClassIdentityProps<"pb2FoliageClass"> & {
        /** Type is unknown. One known value: 0 */
        TEMPLATE_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        TEMPLATE_EARTH: TODO;
        /** Type is unknown. One known value: 2 */
        TEMPLATE_GRASS_ONLY: TODO;
        /** Type is unknown. One known value: ["pb2FoliageClass.TEMPLATE_NONE","pb2FoliageClass.TEMPLATE_EARTH","pb2FoliageClass.TEMPLATE_GRASS_ONLY"] */
        ALL_TEMPLATE_TYPES: TODO;
    }
}
