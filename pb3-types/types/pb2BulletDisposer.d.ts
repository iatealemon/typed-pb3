export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        AllowDispose: (b: unknown) => unknown;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: unknown[];
    }
}
