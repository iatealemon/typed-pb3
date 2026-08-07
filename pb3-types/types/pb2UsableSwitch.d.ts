export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2UsableSwitch extends ClassIdentityProps<"pb2UsableSwitch"> {
        /** Type is unknown. One known value: 34 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        usable_glow_intensity: TODO;
        is_usable: boolean;
        /** @param Ox (default=null)  */
        Use: (Ox?: TODO) => TODO;
        remove: () => TODO;
        readonly model_frame: TODO;
        SetPosition: (x2: number, y2: number) => TODO;
        readonly is_being_removed: boolean;
    }
    var pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch: (params: TODO) => pb2UsableSwitch;
        switches: pb2UsableSwitch[];
    }
}
