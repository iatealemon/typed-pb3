export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        enabled: boolean;
        /** Type is unknown. One known value: -1 */
        match_uid: TODO;
        match_host_user_uid: number;
        /** Type is unknown. One known value: "???" */
        match_instance_key: TODO;
        initiator_user_uid: number;
        SetMatchProperty: (property: TODO, value: TODO) => TODO;
        GetMatchInfoObject: () => TODO;
        AddMatchTag: (tag: TODO) => TODO;
        GetAllPlayerConnectionsAndSelf: () => TODO;
    }
}
