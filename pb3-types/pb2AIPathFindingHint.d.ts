import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        Create(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2AIPathFindingHintInstance = ClassIdentityProps<"pb2AIPathFindingHint"> & {
        enabled: unknown;
        remove(...args: unknown[]): unknown;
        action_to_proceed: unknown;
        action_target: unknown;
    };
}