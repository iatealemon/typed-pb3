export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        /** Type is unknown. One known value: 0.999 */
        decal_decay_remain: TODO;
        RemoveAllDecalsAndParticles: () => TODO;
    }
}
