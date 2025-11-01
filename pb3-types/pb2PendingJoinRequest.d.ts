import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    type pb2PendingJoinRequestInstance = ClassIdentityProps<"pb2PendingJoinRequest"> & {
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly response_sent: unknown;
        accept(...args: unknown[]): unknown;
        reject(...args: unknown[]): unknown;
        redirect(...args: unknown[]): unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
    };
}