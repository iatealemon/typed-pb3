export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Shape extends ClassIdentityProps<"pb2Shape"> {
        readonly x: unknown;
        readonly y: unknown;
        readonly w: unknown;
        readonly h: unknown;
        /** Type is unknown. One known value: 6 */
        readonly classid: unknown;
        SetSpeed: (v: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param yg (default=null)   
         */
        StartMove: (x: unknown, y: unknown, yg?: unknown) => unknown;
        /** @param recursive (default=true)  */
        remove: (recursive?: unknown) => unknown;
        /**
         * @param bN   
         * @param pos (default=null)   
         * @param bhS (default=0)   
         * @param Ai (default=0)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param lA (default=null)   
         */
        DealDamage: (bN: unknown, pos?: unknown, bhS?: unknown, Ai?: unknown, fG?: unknown, fE?: unknown, lA?: unknown) => unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly normal: unknown;
        readonly hea: unknown;
        readonly box2d_body: unknown;
        readonly minx: unknown;
        readonly miny: unknown;
        readonly maxx: unknown;
        readonly maxy: unknown;
        readonly corner: unknown;
        readonly is_quad: unknown;
        readonly type: unknown;
        readonly frozen_spots: unknown;
        readonly _childs: unknown;
        SingleTracePoint: (x: unknown, y: unknown) => unknown;
        readonly see_through: unknown;
        SetAIBreakingAllowed: (v: unknown) => unknown;
        SetHitpointsIfPossible: (v: unknown) => unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: 0) => unknown;
    }
    var pb2Shape: ClassIdentityProps<"pb2Shape"> & {
        /** Type is unknown. One known value: 0 */
        WALL: unknown;
        /** Type is unknown. One known value: 2 */
        MOVABLE: unknown;
        /** Type is unknown. One known value: 1 */
        BACKGROUND: unknown;
        /** Type is unknown. One known value: 4 */
        WATER: unknown;
        /** Type is unknown. One known value: 3 */
        CORNER_LEFT_BOTTOM: unknown;
        /** Type is unknown. One known value: 1 */
        CORNER_LEFT_TOP: unknown;
        /** Type is unknown. One known value: 2 */
        CORNER_RIGHT_TOP: unknown;
        /** Type is unknown. One known value: 4 */
        CORNER_RIGHT_BOTTOM: unknown;
        /** Type is unknown. One known value: 3 */
        RIGID: unknown;
        /** Type is unknown. One known value: 5 */
        REGION: unknown;
        /** Type is unknown. One known value: 0 */
        CORNER_NONE: unknown;
        /** Type is unknown. One known value: ["pb2Shape.WALL","pb2Shape.BACKGROUND","pb2Shape.MOVABLE","pb2Shape.RIGID","pb2Shape.WATER","pb2Shape.REGION","pb2Shape.CORNER_NONE","pb2Shape.CORNER_LEFT_TOP","pb2Shape.CORNER_RIGHT_TOP","pb2Shape.CORNER_LEFT_BOTTOM","pb2Shape.CORNER_RIGHT_BOTTOM"] */
        ALL_TYPES: unknown;
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
        SnowCanReach: (x: unknown, y: unknown, eLd?: unknown) => unknown;
        CountShapesInRect: (yJ: unknown, x: unknown, y: unknown, _width: unknown, _height: unknown, world_shapes_collide: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param tox   
         * @param toy   
         * @param where   
         * @param QI (default=true)   
         */
        isRayTraceable: (x: unknown, y: unknown, tox: unknown, toy: unknown, where: unknown, QI?: unknown) => unknown;
        isLineTraceable: (x: unknown, y: unknown, tox: unknown, toy: unknown, where: unknown) => unknown;
        GetShapeAtPoint: (x: unknown, y: unknown) => unknown;
        RaycastResult: (x: unknown, y: unknown, tox: unknown, toy: unknown, where: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param eLv (default=true)   
         */
        isWaterAtPoint: (x: unknown, y: unknown, eLv?: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param where (default=null)   
         * @param QI (default=true)   
         */
        isShapesAtPoint: (x: unknown, y: unknown, where?: unknown, QI?: unknown) => unknown;
    }
}
