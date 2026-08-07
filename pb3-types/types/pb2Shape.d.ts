export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Shape extends ClassIdentityProps<"pb2Shape"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 6 */
        readonly classid: TODO;
        SetSpeed: (v: number) => TODO;
        /**
         * @param x   
         * @param y   
         * @param yg (default=null)   
         */
        StartMove: (x: number, y: number, yg?: TODO) => TODO;
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
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: TODO;
        readonly is_quad: TODO;
        readonly type: TODO;
        readonly frozen_spots: TODO;
        readonly _childs: TODO;
        SingleTracePoint: (x: number, y: number) => TODO;
        readonly see_through: TODO;
        SetAIBreakingAllowed: (v: boolean) => void;
        SetHitpointsIfPossible: (v: number) => TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: 0) => TODO;
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
        world_shapes: pb2Shape[];
        world_shapes_walls: (pb2Shape & {type: typeof pb2Shape.WALL })[];
        world_shapes_bgs: (pb2Shape & {type: typeof pb2Shape.BACKGROUND })[];
        world_shapes_collide: (pb2Shape & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID | typeof pb2Shape.WATER })[];
        world_shapes_collide_no_water: (pb2Shape & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_nonstatic: (pb2Shape & {type: typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_water: (pb2Shape & {type: typeof pb2Shape.WATER })[];
        /**
         * @param x   
         * @param y   
         * @param eLd (default=null)   
         */
        SnowCanReach: (x: number, y: number, eLd?: TODO) => boolean;
        CountShapesInRect: (yJ: TODO, x: number, y: number, _width: number, _height: number, world_shapes_collide: TODO) => number;
        /**
         * @param x   
         * @param y   
         * @param tox   
         * @param toy   
         * @param where   
         * @param QI (default=true)   
         */
        isRayTraceable: (x: number, y: number, tox: number, toy: number, where: TODO, QI?: TODO) => boolean;
        isLineTraceable: (x: number, y: number, tox: number, toy: number, where: TODO) => boolean;
        GetShapeAtPoint: (x: number, y: number) => TODO;
        RaycastResult: (x: number, y: number, tox: number, toy: number, where: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param eLv (default=true)   
         */
        isWaterAtPoint: (x: number, y: number, eLv?: TODO) => boolean;
        /**
         * @param x   
         * @param y   
         * @param where (default=null)   
         * @param QI (default=true)   
         */
        isShapesAtPoint: (x: number, y: number, where?: TODO, QI?: TODO) => boolean;
    }
}
