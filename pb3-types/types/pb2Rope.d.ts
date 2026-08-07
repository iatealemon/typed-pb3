export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    /** the class is actually called lo but it's renamed here for obvious reasons */
    interface pb2Rope extends ClassIdentityProps<"lo"> {
        /** Type is unknown. One known value: 23 */
        readonly classid: TODO;
        readonly ragdoll: TODO;
        readonly is_collapsing: boolean;
        readonly held_ragdoll: TODO;
        readonly remote_body: TODO;
    }
    
}
