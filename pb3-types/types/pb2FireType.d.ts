export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    /** the class is actually called Ki but it's renamed here for obvious reasons */
    interface pb2FireType extends ClassIdentityProps<"Ki"> {
        /** Type is unknown. One known value: 18 */
        readonly classid: unknown;
        readonly is_permanent: boolean;
        readonly is_being_removed: boolean;
        readonly damage_scale: number;
        readonly pitch: unknown;
    }
    
}
