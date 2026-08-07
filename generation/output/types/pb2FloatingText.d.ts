export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2FloatingText: ClassIdentityProps<"pb2FloatingText"> & {
        GetNewHash: () => TODO;
    }
}
