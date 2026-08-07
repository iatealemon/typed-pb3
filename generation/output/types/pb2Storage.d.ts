export { };

import type { TODO } from "./internal/helper";

declare global {
    var pb2Storage: {
        /**
         * @param dVZ   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetCreationProperty: (dVZ: TODO, then?: TODO, onerror?: TODO) => TODO;
        /**
         * @param dVZ   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetCreationProperty: (dVZ: TODO, value: TODO, then?: TODO, onerror?: TODO) => TODO;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetPlayerProperty: (dVZ: TODO, user_uid: TODO, then?: TODO, onerror?: TODO) => TODO;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetPlayerProperty: (dVZ: TODO, user_uid: TODO, value: TODO, then?: TODO, onerror?: TODO) => TODO;
        ClearPropertyNameToUIDCache: () => TODO;
    }
}
