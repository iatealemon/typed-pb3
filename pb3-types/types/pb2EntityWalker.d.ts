export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityWalker extends pb2EntityBase<"pb2EntityWalker"> {}
    
}
