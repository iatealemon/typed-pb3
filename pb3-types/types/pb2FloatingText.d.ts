export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2FloatingText: ClassIdentityProps<"pb2FloatingText"> & {
        GetNewHash: () => unknown;
    }
}
