export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Shape extends ClassIdentityProps<"pb2Shape"> {
        readonly x: TODO;
        readonly y: TODO;
        readonly w: TODO;
        readonly h: TODO;
        /** Type is unknown. One known value: 6 */
        readonly classid: TODO;
        SetSpeed: (v: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param yg (default=null)   
         */
        StartMove: (x: TODO, y: TODO, yg?: TODO) => TODO;
        /** @param recursive (default=true)  */
        remove: (recursive?: TODO) => TODO;
        /**
         * @param bN   
         * @param pos (default=null)   
         * @param bhS (default=0)   
         * @param Ai (default=0)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param lA (default=null)   
         */
        DealDamage: (bN: TODO, pos?: TODO, bhS?: TODO, Ai?: TODO, fG?: TODO, fE?: TODO, lA?: TODO) => TODO;
        attached_to: TODO;
        readonly p: TODO;
        readonly normal: TODO;
        readonly hea: TODO;
        readonly box2d_body: TODO;
        readonly minx: TODO;
        readonly miny: TODO;
        readonly maxx: TODO;
        readonly maxy: TODO;
        readonly corner: TODO;
        readonly is_quad: TODO;
        readonly type: TODO;
        readonly frozen_spots: TODO;
        readonly _childs: TODO;
        SingleTracePoint: (x: TODO, y: TODO) => TODO;
        readonly see_through: TODO;
        SetAIBreakingAllowed: (v: TODO) => TODO;
        SetHitpointsIfPossible: (v: TODO) => TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: TODO) => TODO;
    }
    var pb2Shape: ClassIdentityProps<"pb2Shape"> & {
        /** Type is unknown. One known value: 0 */
        WALL: TODO;
        /** Type is unknown. One known value: 2 */
        MOVABLE: TODO;
        /** Type is unknown. One known value: 1 */
        BACKGROUND: TODO;
        /** Type is unknown. One known value: 4 */
        WATER: TODO;
        /** Type is unknown. One known value: 3 */
        CORNER_LEFT_BOTTOM: TODO;
        /** Type is unknown. One known value: 1 */
        CORNER_LEFT_TOP: TODO;
        /** Type is unknown. One known value: 2 */
        CORNER_RIGHT_TOP: TODO;
        /** Type is unknown. One known value: 4 */
        CORNER_RIGHT_BOTTOM: TODO;
        /** Type is unknown. One known value: 3 */
        RIGID: TODO;
        /** Type is unknown. One known value: 5 */
        REGION: TODO;
        /** Type is unknown. One known value: 0 */
        CORNER_NONE: TODO;
        /** Type is unknown. One known value: ["pb2Shape.WALL","pb2Shape.BACKGROUND","pb2Shape.MOVABLE","pb2Shape.RIGID","pb2Shape.WATER","pb2Shape.REGION","pb2Shape.CORNER_NONE","pb2Shape.CORNER_LEFT_TOP","pb2Shape.CORNER_RIGHT_TOP","pb2Shape.CORNER_LEFT_BOTTOM","pb2Shape.CORNER_RIGHT_BOTTOM"] */
        ALL_TYPES: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes_walls: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes_bgs: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes_collide: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes_collide_no_water: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes_nonstatic: TODO;
        /** Type is unknown. One known value: [] */
        world_shapes_water: TODO;
        /**
         * @param x   
         * @param y   
         * @param eLd (default=null)   
         */
        SnowCanReach: (x: TODO, y: TODO, eLd?: TODO) => TODO;
        CountShapesInRect: (yJ: TODO, x: TODO, y: TODO, _width: TODO, _height: TODO, world_shapes_collide: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param tox   
         * @param toy   
         * @param where   
         * @param QI (default=true)   
         */
        isRayTraceable: (x: TODO, y: TODO, tox: TODO, toy: TODO, where: TODO, QI?: TODO) => TODO;
        isLineTraceable: (x: TODO, y: TODO, tox: TODO, toy: TODO, where: TODO) => TODO;
        GetShapeAtPoint: (x: TODO, y: TODO) => TODO;
        RaycastResult: (x: TODO, y: TODO, tox: TODO, toy: TODO, where: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param eLv (default=true)   
         */
        isWaterAtPoint: (x: TODO, y: TODO, eLv?: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param where (default=null)   
         * @param QI (default=true)   
         */
        isShapesAtPoint: (x: TODO, y: TODO, where?: TODO, QI?: TODO) => TODO;
    }
}
