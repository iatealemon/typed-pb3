import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        NewThreat(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2AIThreatInstance = ClassIdentityProps<"pb2AIThreat"> & {
        readonly knowledge_owner_team: unknown;
        readonly knowledge_about: unknown;
        ThreatEliminated(...args: unknown[]): unknown;
    };
}