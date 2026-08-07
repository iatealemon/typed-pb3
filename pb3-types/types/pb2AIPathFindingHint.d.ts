export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2AIPathFindingHint extends ClassIdentityProps<"pb2AIPathFindingHint"> {
        enabled: boolean;
        remove: () => TODO;
        action_to_proceed: TODO;
        action_target: TODO;
    }
    var pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        Create: (params: TODO) => pb2AIPathFindingHint;
    }
}
