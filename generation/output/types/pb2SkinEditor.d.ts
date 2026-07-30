export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2SkinEditor: ClassIdentityProps<"pb2SkinEditor"> & {
        SpawnDefaultSkin: (frame: unknown) => unknown;
        /**
         * @param user_data_uid   
         * @param cWI (default=1)   
         */
        SpawnUserDataSkin: (user_data_uid: unknown, cWI?: unknown) => unknown;
        ScheduleCustomSkinUpdate: (skin: unknown) => unknown;
        /**
         * @param skin   
         * @param new_value (default=true)   
         */
        AllowSkinDispose: (skin: unknown, new_value?: unknown) => unknown;
        /**
         * @param dc   
         * @param cWI (default=1)   
         */
        SpawnTemporaryPreferredUserSkin: (dc: unknown, cWI?: unknown) => unknown;
        OpenSkinEditor: (user_data_uid: unknown, user_data_title: unknown) => unknown;
    }
}
