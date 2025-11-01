import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2ParticleSystems: ClassIdentityProps<"pb2ParticleSystems"> & {
        CreateParticleSystem(...args: unknown[]): unknown;
        readonly TYPE_TACTICAL_PING: any;
        readonly TYPE_TELEPORT: any;
    };
}