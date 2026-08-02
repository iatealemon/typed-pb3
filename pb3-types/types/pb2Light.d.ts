export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Light extends ClassIdentityProps<"pb2Light"> {
        x: number;
        y: number;
        z: number;
        readonly is_static: boolean;
        color: unknown;
        color_high_range: unknown;
        power: number;
        scale: number;
        readonly flare: boolean;
        remove: () => unknown;
        readonly is_being_removed: boolean;
        SetPosition: (x: number, y: number, z: number) => unknown;
        UpdateMeshFlareColorAndScale: () => unknown;
        angular_range_from: unknown;
        angular_range_length: unknown;
        attachment: unknown;
        attachment_limb_id: unknown;
        attachment_position: unknown;
        attachment_rotation: unknown;
    }
    var pb2Light: ClassIdentityProps<"pb2Light"> & {
        lights_dynamic: unknown[];
        lights: pb2Light[];
        CreateLight: (params: unknown) => pb2Light;
    }
}
