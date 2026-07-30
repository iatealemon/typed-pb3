export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2ParticleSystems: ClassIdentityProps<"pb2ParticleSystems"> & {
        /**
         * @param params   
         * @param fbl (default=false)   
         */
        CreateParticleSystem: (params: unknown, fbl?: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_TELEPORT: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_TACTICAL_PING: unknown;
    }
}
