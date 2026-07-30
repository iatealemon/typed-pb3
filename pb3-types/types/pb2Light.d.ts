export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Light extends ClassIdentityProps<"pb2Light"> {
        x: unknown;
        y: unknown;
        z: unknown;
        readonly is_static: unknown;
        color: unknown;
        color_high_range: unknown;
        power: unknown;
        scale: unknown;
        readonly flare: unknown;
        remove: () => unknown;
        /** Type is unknown. One known value: true */
        readonly is_being_removed: unknown;
        SetPosition: (x: unknown, y: unknown, z: unknown) => unknown;
        UpdateMeshFlareColorAndScale: () => unknown;
        angular_range_from: unknown;
        angular_range_length: unknown;
        attachment: unknown;
        attachment_limb_id: unknown;
        attachment_position: unknown;
        attachment_rotation: unknown;
    }
    var pb2Light: ClassIdentityProps<"pb2Light"> & {
        /** Type is unknown. One known value: [] */
        lights_dynamic: unknown;
        /** Type is unknown. One known value: [] */
        lights: unknown;
        CreateLight: (params: unknown) => unknown;
    }
}
