export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Disposer extends ClassIdentityProps<"pb2Disposer"> {
        time_to_live: number;
        readonly Pause: unknown;
        readonly Resume: unknown;
        readonly paused: unknown;
    }
    var pb2Disposer: ClassIdentityProps<"pb2Disposer"> & {
        GetDisposer: (obj: unknown) => unknown;
    }
}
