export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2PendingJoinRequest extends ClassIdentityProps<"pb2PendingJoinRequest"> {
        readonly user_uid: number;
        readonly connection_uid: TODO;
        readonly response_sent: TODO;
        accept: () => TODO;
        reject: (message: TODO) => TODO;
        /**
         * @param new_match_uid   
         * @param new_match_instance_key   
         * @param new_match_host_user_uid   
         * @param new_match_password (default='')   
         * @param message (default='')   
         */
        redirect: (new_match_uid: TODO, new_match_instance_key: TODO, new_match_host_user_uid: TODO, new_match_password?: TODO, message?: TODO) => TODO;
        readonly nickname_tagged: TODO;
        readonly skin_info: TODO;
    }
    
}
