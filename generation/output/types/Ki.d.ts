export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface Ki extends ClassIdentityProps<"Ki"> {
        /** Type is unknown. One known value: 18 */
        readonly classid: unknown;
        readonly is_permanent: unknown;
        readonly is_being_removed: unknown;
        readonly damage_scale: unknown;
        readonly pitch: unknown;
    }
    
}
