export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    /** the class is actually called LZ but it's renamed here for obvious reasons */
    interface pb2EntityBarrelPart extends pb2EntityBase<"LZ"> {}
    
}
