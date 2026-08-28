export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Bleeding: ClassIdentityProps<"pb2Bleeding"> & {
        /**
         * @param mesh   
         * @param dXy   
         * @param duration   
         * @param lD   
         * @param dXG   
         * @param is_glowing   
         * @param dXr   
         * @param type (default=pb2Bleeding.TYPE_BLOOD)   
         */
        BleedAt: (mesh: TODO, dXy: TODO, duration: TODO, lD: TODO, dXG: TODO, is_glowing: TODO, dXr: TODO, type?: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_BLOOD: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_WATER: TODO;
        /** Type is unknown. One known value: ["pb2Bleeding.TYPE_BLOOD","pb2Bleeding.TYPE_WATER"] */
        ALL_TYPES: TODO;
    }
}
