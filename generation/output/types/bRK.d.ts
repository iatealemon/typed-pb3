export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface bRK extends ClassIdentityProps<"bRK"> {
        GetEvolved: () => TODO;
    }
    
}
