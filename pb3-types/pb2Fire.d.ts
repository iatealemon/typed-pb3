import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Fire: ClassIdentityProps<"pb2Fire"> & {
        fires: unknown;
    };
    
    /** unfinished */
    type pb2FireInstance = ClassIdentityProps<"pb2Fire"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
    };
}