export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2GunDefinitions: ClassIdentityProps<"pb2GunDefinitions"> & {
        GetDefinitionFor: (s: unknown) => unknown;
    }
}
