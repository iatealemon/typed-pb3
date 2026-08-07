export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface Ki extends ClassIdentityProps<"Ki"> {
        /** Type is unknown. One known value: 18 */
        readonly classid: TODO;
        readonly is_permanent: TODO;
        readonly is_being_removed: TODO;
        readonly damage_scale: TODO;
        readonly pitch: TODO;
    }
    
}
