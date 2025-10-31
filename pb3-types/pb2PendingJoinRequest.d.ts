import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    type pb2PendingJoinRequestInstance = ClassIdentityProps<"pb2PendingJoinRequest"> & {
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly response_sent: unknown;
        readonly accept: unknown;
        readonly reject: unknown;
        readonly redirect: unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
    };
}