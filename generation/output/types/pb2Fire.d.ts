export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Fire extends ClassIdentityProps<"pb2Fire"> {
        /** Type is unknown. One known value: 17 */
        readonly classid: TODO;
        UpdateAndGetWorldPoint: () => TODO;
        readonly size: TODO;
        remove: () => TODO;
    }
    var pb2Fire: ClassIdentityProps<"pb2Fire"> & {
        /** Type is unknown. One known value: [] */
        fires: TODO;
    }
}
