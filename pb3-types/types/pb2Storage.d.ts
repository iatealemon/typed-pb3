export { };

declare global {
    var pb2Storage: {
        /**
         * @param dVZ   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetCreationProperty: (dVZ: unknown, then?: unknown, onerror?: unknown) => unknown;
        /**
         * @param dVZ   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetCreationProperty: (dVZ: unknown, value: unknown, then?: unknown, onerror?: unknown) => unknown;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetPlayerProperty: (dVZ: unknown, user_uid: unknown, then?: unknown, onerror?: unknown) => unknown;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetPlayerProperty: (dVZ: unknown, user_uid: unknown, value: unknown, then?: unknown, onerror?: unknown) => unknown;
        ClearPropertyNameToUIDCache: () => unknown;
    }
}
