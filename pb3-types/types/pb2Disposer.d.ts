export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Disposer extends ClassIdentityProps<"pb2Disposer"> {
        time_to_live: number;
        readonly Pause: TODO;
        readonly Resume: TODO;
        readonly paused: TODO;
    }
    var pb2Disposer: ClassIdentityProps<"pb2Disposer"> & {
        GetDisposer: (obj: TODO) => TODO;
    }
}
