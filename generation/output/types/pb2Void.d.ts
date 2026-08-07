export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Void: ClassIdentityProps<"pb2Void"> & {
        /** Type is unknown. One known value: 102 */
        readonly classid: TODO;
    }
}
