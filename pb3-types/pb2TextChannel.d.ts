import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel(...args: unknown[]): unknown;
    };
    
    /** unfinished auto-generated */
    type pb2TextChannelInstance = ClassIdentityProps<"pb2TextChannel"> & {
        readonly InvitePlayerConnection: unknown;
        readonly UninvitePlayerConnection: unknown;
        readonly remove: unknown;
        readonly title: unknown;
        readonly color: unknown;
        readonly show_tag: unknown;
        readonly sync_with_main_server: unknown;
        readonly auto_channel_id: unknown;
        readonly channel_id: unknown;
        readonly is_being_removed: unknown;
        readonly synced: unknown;
        readonly syncing: unknown;
        readonly GetInvitedDataConnections: unknown;
    };
}