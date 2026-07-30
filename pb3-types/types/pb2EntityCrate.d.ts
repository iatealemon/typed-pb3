export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2EntityCrate extends pb2EntityBase<"pb2EntityCrate"> {}
    
}
