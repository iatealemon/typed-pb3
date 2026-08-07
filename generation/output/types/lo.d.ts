export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface lo extends ClassIdentityProps<"lo"> {
        /** Type is unknown. One known value: 23 */
        readonly classid: TODO;
        readonly ragdoll: TODO;
        readonly is_collapsing: TODO;
        readonly held_ragdoll: TODO;
        readonly remote_body: TODO;
    }
    
}
