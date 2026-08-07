export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose: (r: TODO) => TODO;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: TODO;
        /** Type is unknown. One known value: [] */
        disposers: TODO;
    }
}
