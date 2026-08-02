export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        enabled: boolean;
        /** Type is unknown. One known value: -1 */
        match_uid: unknown;
        match_host_user_uid: number;
        /** Type is unknown. One known value: "???" */
        match_instance_key: unknown;
        initiator_user_uid: number;
        SetMatchProperty: (property: unknown, value: unknown) => unknown;
        GetMatchInfoObject: () => unknown;
        AddMatchTag: (tag: unknown) => unknown;
        GetAllPlayerConnectionsAndSelf: () => unknown;
    }
}
