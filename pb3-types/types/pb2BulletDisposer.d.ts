export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        AllowDispose: (b: TODO) => TODO;
        normal_time_to_live: number;
        disposers: TODO[];
    }
}
