export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2StyleRegen: ClassIdentityProps<"pb2StyleRegen"> & {
        /** Type is unknown. One known value: 0 */
        style_none: TODO;
        /** Type is unknown. One known value: 2 */
        style_delayed_speedup: TODO;
        /** Type is unknown. One known value: ["pb2StyleRegen.style_none","pb2StyleRegen.style_delayed_speedup"] */
        ALL_TYPES: TODO;
    }
}
