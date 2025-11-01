import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /**
     * unfinished  
     * the class is actually called lo in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2RopeInstance = ClassIdentityProps<"lo"> & {
        readonly classid: unknown;
        readonly ragdoll: unknown;
        readonly is_collapsing: unknown;
        readonly held_ragdoll: unknown;
        readonly remote_body: unknown;
    };
}