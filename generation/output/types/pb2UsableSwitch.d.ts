export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2UsableSwitch extends ClassIdentityProps<"pb2UsableSwitch"> {
        /** Type is unknown. One known value: 34 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        usable_glow_intensity: TODO;
        is_usable: TODO;
        /** @param initiator_ragdoll (default=null)  */
        Use: (initiator_ragdoll?: TODO) => TODO;
        remove: () => TODO;
        readonly model_frame: TODO;
        SetPosition: (x2: TODO, y2: TODO) => TODO;
        readonly is_being_removed: TODO;
    }
    var pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch: (params: TODO) => TODO;
        /** Type is unknown. One known value: [] */
        switches: TODO;
    }
}
