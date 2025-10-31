import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        NewThreat(...args: unknown[]): unknown;
    };
    
    /** unfinished auto-generated */
    type pb2AIThreatInstance = ClassIdentityProps<"pb2AIThreat"> & {
        readonly knowledge_owner_team: unknown;
        readonly knowledge_about: unknown;
        readonly ThreatEliminated: unknown;
    };
}