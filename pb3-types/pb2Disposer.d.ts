import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Disposer: ClassIdentityProps<"pb2Disposer"> & {
        GetDisposer(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2DisposerInstance = ClassIdentityProps<"pb2Disposer"> & {
        time_to_live: unknown;
        readonly Pause: unknown;
        readonly Resume: unknown;
        readonly paused: unknown;
    };
}