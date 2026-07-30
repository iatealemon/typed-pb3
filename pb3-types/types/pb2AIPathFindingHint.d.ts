export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2AIPathFindingHint extends ClassIdentityProps<"pb2AIPathFindingHint"> {
        enabled: unknown;
        remove: () => unknown;
        action_to_proceed: unknown;
        action_target: unknown;
    }
    var pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        Create: (params: unknown) => unknown;
    }
}
