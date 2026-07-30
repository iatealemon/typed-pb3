export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2TextChannel extends ClassIdentityProps<"pb2TextChannel"> {
        InvitePlayerConnection: (dc: unknown) => unknown;
        UninvitePlayerConnection: (dc: unknown) => unknown;
        remove: () => unknown;
        readonly title: unknown;
        readonly color: unknown;
        readonly show_tag: unknown;
        readonly sync_with_main_server: unknown;
        readonly auto_channel_id: unknown;
        readonly channel_id: unknown;
        readonly is_being_removed: unknown;
        readonly synced: unknown;
        readonly syncing: unknown;
        GetInvitedDataConnections: () => unknown;
    }
    var pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel: (params: unknown) => unknown;
    }
}
