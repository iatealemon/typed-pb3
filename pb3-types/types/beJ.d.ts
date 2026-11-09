export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface beJ extends ClassIdentityProps<"beJ"> {
        readonly x: TODO;
        readonly y: TODO;
    }
    
}
