export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2GunDisposer: ClassIdentityProps<"pb2GunDisposer"> & {
        AllowDispose: (g: TODO) => TODO;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: TODO;
    }
}
