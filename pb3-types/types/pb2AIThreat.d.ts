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
         * @param _dHj hunter team  
         * @param _dHk enemy  
         * @param rk null or pb2AIWayPoint instance  
         * @param dHo (default=false) no throw  
         */
        NewThreat: (_dHj: pb2Team, _dHk: pb2Ragdoll, rk: null | TODO, dHo?: boolean) => pb2AIThreat;
    }
}
