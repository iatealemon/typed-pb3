import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityInstanceBase } from "./pb2Entity";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2EntityFloatingIce: ClassIdentityProps<"pb2EntityFloatingIce"> & {
        readonly STYLE_ID_ICE: any;
        readonly STYLE_ID_ROCK: any;
    };
    
    type pb2EntityFloatingIceInstance = pb2EntityInstanceBase<"pb2EntityFloatingIce">;
}