export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Fire extends ClassIdentityProps<"pb2Fire"> {
        /** Type is unknown. One known value: 17 */
        readonly classid: unknown;
        UpdateAndGetWorldPoint: () => unknown;
        readonly size: unknown;
        remove: () => unknown;
    }
    var pb2Fire: ClassIdentityProps<"pb2Fire"> & {
        fires: pb2Fire[];
    }
}
