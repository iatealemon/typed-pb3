export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Light extends ClassIdentityProps<"pb2Light"> {
        x: TODO;
        y: TODO;
        z: TODO;
        readonly is_static: TODO;
        color: TODO;
        color_high_range: TODO;
        power: TODO;
        scale: TODO;
        readonly flare: TODO;
        remove: () => TODO;
        /** Type is unknown. One known value: true */
        readonly is_being_removed: TODO;
        SetPosition: (x: TODO, y: TODO, z: TODO) => TODO;
        UpdateMeshFlareColorAndScale: () => TODO;
        angular_range_from: TODO;
        angular_range_length: TODO;
        attachment: TODO;
        attachment_limb_id: TODO;
        attachment_position: TODO;
        attachment_rotation: TODO;
    }
    var pb2Light: ClassIdentityProps<"pb2Light"> & {
        /** Type is unknown. One known value: [] */
        lights_dynamic: TODO;
        /** Type is unknown. One known value: [] */
        lights: TODO;
        CreateLight: (params: TODO) => TODO;
    }
}
