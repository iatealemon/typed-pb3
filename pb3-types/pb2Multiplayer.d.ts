import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        AddMatchTag(...args: unknown[]): unknown;
        GetAllPlayerConnectionsAndSelf(...args: unknown[]): unknown;
        GetMatchInfoObject(...args: unknown[]): unknown;
        SetMatchProperty(...args: unknown[]): unknown;
        readonly enabled: unknown;
        readonly initiator_user_uid: any;
        readonly match_host_user_uid: any;
        readonly match_instance_key: any;
        readonly match_uid: any;
    };
}