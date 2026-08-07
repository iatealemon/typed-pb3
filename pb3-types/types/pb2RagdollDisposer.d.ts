export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose: (r: TODO) => TODO;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: TODO;
    }
}
