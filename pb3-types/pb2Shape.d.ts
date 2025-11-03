import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Shape: ClassIdentityProps<"pb2Shape"> & {
        readonly ALL_TYPES: any;
        readonly BACKGROUND: any;
        readonly CORNER_LEFT_BOTTOM: any;
        readonly CORNER_LEFT_TOP: any;
        readonly CORNER_NONE: any;
        readonly CORNER_RIGHT_BOTTOM: any;
        readonly CORNER_RIGHT_TOP: any;
        CountShapesInRect(...args: unknown[]): unknown;
        GetShapeAtPoint(...args: unknown[]): unknown;
        readonly MOVABLE: any;
        readonly REGION: any;
        readonly RIGID: any;
        RaycastResult(...args: unknown[]): unknown;
        SnowCanReach(...args: unknown[]): unknown;
        readonly WALL: any;
        readonly WATER: any;
        isLineTraceable(...args: unknown[]): unknown;
        isRayTraceable(...args: unknown[]): unknown;
        isShapesAtPoint(...args: unknown[]): unknown;
        isWaterAtPoint(...args: unknown[]): unknown;
        world_shapes: pb2ShapeInstance[];
        world_shapes_bgs: (pb2ShapeInstance & {type: typeof pb2Shape.BACKGROUND })[];
        world_shapes_collide: (pb2ShapeInstance & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID | typeof pb2Shape.WATER })[];
        world_shapes_collide_no_water: (pb2ShapeInstance & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_nonstatic: (pb2ShapeInstance & {type: typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_walls: (pb2ShapeInstance & {type: typeof pb2Shape.WALL })[];
        world_shapes_water: (pb2ShapeInstance & {type: typeof pb2Shape.WATER })[];
    };
    
    /** unfinished */
    type pb2ShapeInstance = ClassIdentityProps<"pb2Shape"> & {
        readonly classid: unknown;
        SetSpeed(...args: unknown[]): unknown;
        StartMove(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        DealDamage(...args: unknown[]): unknown;
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
        SingleTracePoint(...args: unknown[]): unknown;
        readonly see_through: unknown;
        GetMesh(id?: 0): unknown | undefined;
    };
}