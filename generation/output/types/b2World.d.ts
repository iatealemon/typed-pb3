export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var b2World: ClassIdentityProps<"b2World"> & {
        GetAllBodies: () => unknown;
    }
}
