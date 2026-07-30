export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2GunDisposer: ClassIdentityProps<"pb2GunDisposer"> & {
        AllowDispose: (g: unknown) => unknown;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: unknown;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}
