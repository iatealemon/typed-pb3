export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Texture extends ClassIdentityProps<"pb2Texture"> {
        readonly internal: unknown;
        readonly url: unknown;
    }
    var pb2Texture: ClassIdentityProps<"pb2Texture"> & {
        GetTextureByName: (name: unknown) => pb2Texture;
    }
}
