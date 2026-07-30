export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        /** Type is unknown. One known value: 0.999 */
        decal_decay_remain: unknown;
        RemoveAllDecalsAndParticles: () => unknown;
    }
}
