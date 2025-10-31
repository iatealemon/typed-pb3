import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Light: ClassIdentityProps<"pb2Light"> & {
        CreateLight(...args: unknown[]): unknown;
    };
    
    /** unfinished auto-generated */
    type pb2LightInstance = ClassIdentityProps<"pb2Light"> & {
        x: unknown;
        y: unknown;
        readonly is_static: unknown;
        color: unknown;
        power: unknown;
        readonly flare: unknown;
        readonly remove: unknown;
        readonly is_being_removed: unknown;
    };
}