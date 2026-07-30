export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2AIThreat extends ClassIdentityProps<"pb2AIThreat"> {
        readonly knowledge_owner_team: unknown;
        readonly knowledge_about: unknown;
        ThreatEliminated: () => unknown;
    }
    var pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        /**
         * @param _dHj   
         * @param _dHk   
         * @param rk   
         * @param dHo (default=false)   
         */
        NewThreat: (_dHj: unknown, _dHk: unknown, rk: unknown, dHo?: unknown) => unknown;
    }
}
