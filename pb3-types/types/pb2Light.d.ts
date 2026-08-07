export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Light extends ClassIdentityProps<"pb2Light"> {
        x: number;
        y: number;
        z: number;
        readonly is_static: boolean;
        color: TODO;
        color_high_range: TODO;
        power: number;
        scale: number;
        readonly flare: boolean;
        remove: () => TODO;
        readonly is_being_removed: boolean;
        SetPosition: (x: number, y: number, z: number) => TODO;
        UpdateMeshFlareColorAndScale: () => TODO;
        angular_range_from: TODO;
        angular_range_length: TODO;
        attachment: TODO;
        attachment_limb_id: TODO;
        attachment_position: TODO;
        attachment_rotation: TODO;
    }
    var pb2Light: ClassIdentityProps<"pb2Light"> & {
        lights_dynamic: TODO[];
        lights: pb2Light[];
        CreateLight: (params: TODO) => pb2Light;
    }
}
