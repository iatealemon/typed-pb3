export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2GunDefinitions: ClassIdentityProps<"pb2GunDefinitions"> & {
        GetDefinitionFor: (s: TODO) => TODO;
    }
}
