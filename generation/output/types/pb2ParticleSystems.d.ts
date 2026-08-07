export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2ParticleSystems: ClassIdentityProps<"pb2ParticleSystems"> & {
        /**
         * @param params   
         * @param fbl (default=false)   
         */
        CreateParticleSystem: (params: TODO, fbl?: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_TELEPORT: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_TACTICAL_PING: TODO;
    }
}
