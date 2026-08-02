export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose: (r: unknown) => unknown;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}
