export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Bleeding: ClassIdentityProps<"pb2Bleeding"> & {
        BleedAt: (mesh: TODO, dXy: TODO, duration: TODO, lD: TODO, dXG: TODO, is_glowing: TODO, dXr: TODO) => TODO;
    }
}
