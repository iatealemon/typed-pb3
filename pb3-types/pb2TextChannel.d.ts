import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2TextChannelInstance = ClassIdentityProps<"pb2TextChannel"> & {
        InvitePlayerConnection(...args: unknown[]): unknown;
        UninvitePlayerConnection(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly title: unknown;
        readonly color: unknown;
        readonly show_tag: unknown;
        readonly sync_with_main_server: unknown;
        readonly auto_channel_id: unknown;
        readonly channel_id: unknown;
        readonly is_being_removed: unknown;
        readonly synced: unknown;
        readonly syncing: unknown;
        GetInvitedDataConnections(...args: unknown[]): unknown;
    };
}