export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        decal_decay_remain: number;
        RemoveAllDecalsAndParticles: () => unknown;
    }
}
