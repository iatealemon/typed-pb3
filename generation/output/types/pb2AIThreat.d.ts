export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2AIThreat extends ClassIdentityProps<"pb2AIThreat"> {
        readonly knowledge_owner_team: TODO;
        readonly knowledge_about: TODO;
        ThreatEliminated: () => TODO;
    }
    var pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        /**
         * @param _dHj   
         * @param _dHk   
         * @param rk   
         * @param dHo (default=false)   
         */
        NewThreat: (_dHj: TODO, _dHk: TODO, rk: TODO, dHo?: TODO) => TODO;
    }
}
