export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        /** Type is unknown. One known value: false */
        enabled: unknown;
        /** Type is unknown. One known value: -1 */
        match_uid: unknown;
        /** Type is unknown. One known value: -1 */
        match_host_user_uid: unknown;
        /** Type is unknown. One known value: "???" */
        match_instance_key: unknown;
        /** Type is unknown. One known value: -1 */
        initiator_user_uid: unknown;
        SetMatchProperty: (property: unknown, value: unknown) => unknown;
        GetMatchInfoObject: () => unknown;
        AddMatchTag: (tag: unknown) => unknown;
        GetAllPlayerConnectionsAndSelf: () => unknown;
    }
}
