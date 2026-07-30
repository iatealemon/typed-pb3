export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose: (r: unknown) => unknown;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: unknown;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}
