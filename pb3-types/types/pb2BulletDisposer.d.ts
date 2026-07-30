export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        AllowDispose: (b: unknown) => unknown;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: unknown;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}
