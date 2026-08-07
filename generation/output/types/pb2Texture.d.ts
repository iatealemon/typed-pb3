export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Texture extends ClassIdentityProps<"pb2Texture"> {
        readonly internal: TODO;
        readonly url: TODO;
    }
    var pb2Texture: ClassIdentityProps<"pb2Texture"> & {
        GetTextureByName: (name: TODO) => TODO;
    }
}
