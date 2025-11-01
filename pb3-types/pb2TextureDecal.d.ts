import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        RemoveAllDecalsAndParticles(...args: unknown[]): unknown;
        readonly decal_decay_remain: unknown;
    };
}