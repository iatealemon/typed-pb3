export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2SkinEditor: ClassIdentityProps<"pb2SkinEditor"> & {
        SpawnDefaultSkin: (frame: TODO) => TODO;
        /**
         * @param user_data_uid   
         * @param cWI (default=1)   
         */
        SpawnUserDataSkin: (user_data_uid: TODO, cWI?: TODO) => TODO;
        ScheduleCustomSkinUpdate: (skin: TODO) => TODO;
        /**
         * @param skin   
         * @param new_value (default=true)   
         */
        AllowSkinDispose: (skin: TODO, new_value?: TODO) => TODO;
        /**
         * @param dc   
         * @param cWI (default=1)   
         */
        SpawnTemporaryPreferredUserSkin: (dc: TODO, cWI?: TODO) => TODO;
        OpenSkinEditor: (user_data_uid: TODO, user_data_title: TODO) => TODO;
    }
}
