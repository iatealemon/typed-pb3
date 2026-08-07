export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2TextChannel extends ClassIdentityProps<"pb2TextChannel"> {
        InvitePlayerConnection: (dc: TODO) => TODO;
        UninvitePlayerConnection: (dc: TODO) => TODO;
        remove: () => TODO;
        readonly title: TODO;
        readonly color: TODO;
        readonly show_tag: TODO;
        readonly sync_with_main_server: TODO;
        readonly auto_channel_id: TODO;
        readonly channel_id: TODO;
        readonly is_being_removed: TODO;
        readonly synced: TODO;
        readonly syncing: TODO;
        GetInvitedDataConnections: () => TODO;
    }
    var pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel: (params: TODO) => TODO;
    }
}
