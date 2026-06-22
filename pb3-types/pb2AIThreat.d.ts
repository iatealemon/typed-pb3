import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        /**
         * @param _dHj hunter team
         * @param _dHk enemy
         * @param rk null or pb2AIWayPoint instance
         * @param dHo no throw
         * @returns {pb2AIThreatInstance}
         */
        NewThreat(_dHj: pb2TeamInstance, _dHk: pb2RagdollInstance, rk: null | unknown, dHo: boolean): pb2AIThreatInstance;
    };
    
    /** unfinished */
    type pb2AIThreatInstance = ClassIdentityProps<"pb2AIThreat"> & {
        readonly knowledge_owner_team: unknown;
        readonly knowledge_about: unknown;
        ThreatEliminated(...args: unknown[]): unknown;
    };
}