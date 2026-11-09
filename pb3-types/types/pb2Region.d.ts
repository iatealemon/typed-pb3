export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 101 */
        readonly classid: TODO;
        /** @param recursive (default=true)  */
        remove: (recursive?: TODO) => TODO;
        attached_to: TODO;
        readonly p: TODO;
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: TODO;
        readonly is_quad: TODO;
        /** Type is unknown. One known value: 5 */
        readonly type: TODO;
        readonly _childs: TODO;
        AddPosition: (x: number, y: number) => void;
        SetPosition: (x: number, y: number) => TODO;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: number, h?: number) => TODO;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: number, y: number, w?: number, h?: number) => TODO;
        CopyPositionAndSizeFrom: (cP: TODO) => TODO;
        GetBodiesCount: () => TODO;
        GetObjectsCount: () => TODO;
        GetAliveObjectsCount: () => TODO;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        /** Type is unknown. One known value: 0 */
        CALLBACK_CONDITION_PER_RIGID_BODY: TODO;
        /** Type is unknown. One known value: 1 */
        CALLBACK_CONDITION_PER_OBJECT: TODO;
        /** Type is unknown. One known value: 2 */
        CALLBACK_CONDITION_SPECIFIC_OBJECT_ONLY: TODO;
        /** Type is unknown. One known value: 3 */
        CALLBACK_CONDITION_SPECIFIC_TEAM_ONLY: TODO;
        /** Type is unknown. One known value: 4 */
        CALLBACK_CONDITION_SPECIFIC_ENTITY_TYPE: TODO;
        /** Type is unknown. One known value: 5 */
        CALLBACK_CONDITION_SPECIFIC_GUN_TYPE: TODO;
        /** Type is unknown. One known value: ["pb2Region.CALLBACK_CONDITION_PER_RIGID_BODY","pb2Region.CALLBACK_CONDITION_PER_OBJECT","pb2Region.CALLBACK_CONDITION_SPECIFIC_OBJECT_ONLY","pb2Region.CALLBACK_CONDITION_SPECIFIC_TEAM_ONLY","pb2Region.CALLBACK_CONDITION_SPECIFIC_ENTITY_TYPE","pb2Region.CALLBACK_CONDITION_SPECIFIC_GUN_TYPE"] */
        ALL_CALLBACK_CONDITION_TYPES: TODO;
        regions: pb2Region[];
    }
}
