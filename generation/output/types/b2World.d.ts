export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var b2World: ClassIdentityProps<"b2World"> & {
        GetAllBodies: () => TODO;
    }
}
