export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2GunDisposer: ClassIdentityProps<"pb2GunDisposer"> & {
        AllowDispose: (g: unknown) => unknown;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}
