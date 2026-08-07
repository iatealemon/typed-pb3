export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        AllowDispose: (b: TODO) => TODO;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: TODO;
        /** Type is unknown. One known value: [] */
        disposers: TODO;
    }
}
