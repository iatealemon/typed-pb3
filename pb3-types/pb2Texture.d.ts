import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Texture: ClassIdentityProps<"pb2Texture"> & {
        GetTextureByName(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2TextureInstance = ClassIdentityProps<"pb2Texture"> & {
        readonly internal: unknown;
        readonly url: unknown;
        readonly name: unknown;
    };
}