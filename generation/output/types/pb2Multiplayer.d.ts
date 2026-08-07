export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        /** Type is unknown. One known value: false */
        enabled: TODO;
        /** Type is unknown. One known value: -1 */
        match_uid: TODO;
        /** Type is unknown. One known value: -1 */
        match_host_user_uid: TODO;
        /** Type is unknown. One known value: "???" */
        match_instance_key: TODO;
        /** Type is unknown. One known value: -1 */
        initiator_user_uid: TODO;
        SetMatchProperty: (property: TODO, value: TODO) => TODO;
        GetMatchInfoObject: () => TODO;
        AddMatchTag: (tag: TODO) => TODO;
        GetAllPlayerConnectionsAndSelf: () => TODO;
    }
}
