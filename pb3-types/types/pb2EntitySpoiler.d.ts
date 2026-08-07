export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityBase } from "./pb2Entity";

declare global {
    /** this is an entity that is not currently available in the game. throws an error when constructed */
    interface pb2EntitySpoiler extends pb2EntityBase<"fU"> {}
    
}
