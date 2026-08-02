export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2UsableSwitch extends ClassIdentityProps<"pb2UsableSwitch"> {
        /** Type is unknown. One known value: 34 */
        readonly classid: unknown;
        readonly x: number;
        readonly y: number;
        usable_glow_intensity: unknown;
        is_usable: boolean;
        /** @param Ox (default=null)  */
        Use: (Ox?: unknown) => unknown;
        remove: () => unknown;
        readonly model_frame: unknown;
        SetPosition: (x2: number, y2: number) => unknown;
        readonly is_being_removed: boolean;
    }
    var pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch: (params: unknown) => pb2UsableSwitch;
        switches: pb2UsableSwitch[];
    }
}
