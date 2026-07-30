export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2Bleeding: ClassIdentityProps<"pb2Bleeding"> & {
        BleedAt: (mesh: unknown, dXy: unknown, duration: unknown, lD: unknown, dXG: unknown, is_glowing: unknown, dXr: unknown) => unknown;
    }
}
