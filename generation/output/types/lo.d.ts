export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface lo extends ClassIdentityProps<"lo"> {
        /** Type is unknown. One known value: 23 */
        readonly classid: unknown;
        readonly ragdoll: unknown;
        readonly is_collapsing: unknown;
        readonly held_ragdoll: unknown;
        readonly remote_body: unknown;
    }
    
}
