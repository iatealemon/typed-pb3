export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2OverheadHUD: ClassIdentityProps<"pb2OverheadHUD"> & {
        /** Type is unknown. One known value: 0 */
        OVERHEAD_VISIBILITY_HIDDEN: unknown;
        /** Type is unknown. One known value: 1 */
        OVERHEAD_VISIBILITY_TEAMMATES_ONLY: unknown;
        /** Type is unknown. One known value: 2 */
        OVERHEAD_VISIBILITY_EVERYONE: unknown;
        /** Type is unknown. One known value: ["pb2OverheadHUD.OVERHEAD_VISIBILITY_HIDDEN","pb2OverheadHUD.OVERHEAD_VISIBILITY_TEAMMATES_ONLY","pb2OverheadHUD.OVERHEAD_VISIBILITY_EVERYONE"] */
        ALL_TYPES: unknown;
    }
}
