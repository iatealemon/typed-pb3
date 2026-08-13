export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";
import { pb2EntityBase } from "./pb2Entity";

declare global {
    interface pb2AIPathFindingHint extends ClassIdentityProps<"pb2AIPathFindingHint"> {
        enabled: boolean;
        remove: () => TODO;
        action_to_proceed: TODO; // One of the pb2AIModule.HINT_ACTION_* values
        /**
         * This has a different set of intended values for each different `action_to_proceed`  
         * All accept null.  
         * pb2AIModule.HINT_ACTION_USE_SWITCH: pb2UsableSwitch  
         * pb2AIModule.HINT_ACTION_JUST_WAIT: none  
         * pb2AIModule.HINT_ACTION_GO_TO: Point | pb2UsableSwitch | pb2Entity | pb2Ragdoll | pb2Gun  
         * pb2AIModule.HINT_ACTION_ATTACK_OBJECT: pb2Entity | pb2Ragdoll  
         * pb2AIModule.HINT_ACTION_SHOOT_AT_POINT: Point | pb2UsableSwitch | pb2Entity | pb2Ragdoll | pb2Gun  
         */
        action_target: null | pb2UsableSwitch | Point | pb2EntityBase<string> | pb2Ragdoll | pb2Gun;
    }
    var pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        /**
         * Creates a new AI pathfinding hint.
         * @param params Object containing parameters
         * @param params.a Point A
         * @param params.a.x X of point A
         * @param params.a.y Y of point A
         * @param params.b Point B
         * @param params.b.x X of point B
         * @param params.b.y Y of point B
         * @param params.enabled (default=true)
         * @param params.action_to_proceed (default=pb2AIModule.HINT_ACTION_USE_SWITCH)
         * @param params.both_ways (default=false)
         * @returns 
         */
        Create: (params: {
            a: {x: number, y: number},
            b: {x: number, y: number},
            enabled?: boolean,
            action_to_proceed?: TODO,
            action_target?: null,
            both_ways?: boolean,
        }) => pb2AIPathFindingHint;
    }
}
