export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2UsableSwitch extends ClassIdentityProps<"pb2UsableSwitch"> {
        /** Type is unknown. One known value: 34 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        usable_glow_intensity: unknown;
        is_usable: unknown;
        /** @param Ox (default=null)  */
        Use: (Ox?: unknown) => unknown;
        remove: () => unknown;
        readonly model_frame: unknown;
        SetPosition: (x2: unknown, y2: unknown) => unknown;
        /** Type is unknown. One known value: false */
        readonly is_being_removed: unknown;
    }
    var pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        switches: unknown;
    }
}
