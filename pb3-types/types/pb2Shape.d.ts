export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Shape extends ClassIdentityProps<"pb2Shape"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 6 */
        readonly classid: unknown;
        SetSpeed: (v: number) => unknown;
        /**
         * @param x   
         * @param y   
         * @param yg (default=null)   
         */
        StartMove: (x: number, y: number, yg?: unknown) => unknown;
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
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: unknown;
        readonly is_quad: unknown;
        readonly type: unknown;
        readonly frozen_spots: unknown;
        readonly _childs: unknown;
        SingleTracePoint: (x: number, y: number) => unknown;
        readonly see_through: unknown;
        SetAIBreakingAllowed: (v: boolean) => void;
        SetHitpointsIfPossible: (v: number) => unknown;
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
        SnowCanReach: (x: number, y: number, eLd?: unknown) => boolean;
        CountShapesInRect: (yJ: unknown, x: number, y: number, _width: number, _height: number, world_shapes_collide: unknown) => number;
        /**
         * @param x   
         * @param y   
         * @param tox   
         * @param toy   
         * @param where   
         * @param QI (default=true)   
         */
        isRayTraceable: (x: number, y: number, tox: number, toy: number, where: unknown, QI?: unknown) => boolean;
        isLineTraceable: (x: number, y: number, tox: number, toy: number, where: unknown) => boolean;
        GetShapeAtPoint: (x: number, y: number) => unknown;
        RaycastResult: (x: number, y: number, tox: number, toy: number, where: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param eLv (default=true)   
         */
        isWaterAtPoint: (x: number, y: number, eLv?: unknown) => boolean;
        /**
         * @param x   
         * @param y   
         * @param where (default=null)   
         * @param QI (default=true)   
         */
        isShapesAtPoint: (x: number, y: number, where?: unknown, QI?: unknown) => boolean;
    }
}
