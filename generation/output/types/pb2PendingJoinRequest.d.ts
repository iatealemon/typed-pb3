export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2PendingJoinRequest extends ClassIdentityProps<"pb2PendingJoinRequest"> {
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly response_sent: unknown;
        accept: () => unknown;
        reject: (message: unknown) => unknown;
        /**
         * @param new_match_uid   
         * @param new_match_instance_key   
         * @param new_match_host_user_uid   
         * @param new_match_password (default='')   
         * @param message (default='')   
         */
        redirect: (new_match_uid: unknown, new_match_instance_key: unknown, new_match_host_user_uid: unknown, new_match_password?: unknown, message?: unknown) => unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
    }
    
}
