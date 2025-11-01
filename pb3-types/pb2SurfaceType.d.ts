import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2SurfaceType: ClassIdentityProps<"pb2SurfaceType"> & {
        readonly ALL_TYPES: any;
        readonly APPEARANCE_ADDITIVE: any;
        readonly APPEARANCE_FULL_BRIGHT: any;
        readonly APPEARANCE_NORMAL: any;
        CreateSurfaceType(...args: unknown[]): unknown;
        readonly SHADER_ENVIRONMENT: any;
        readonly SHADER_GAMEPLAY: any;
        SpawnPB2SurfaceTypeParams(...args: unknown[]): unknown;
        readonly TERRAIN_LAYER_CLIFF: any;
        readonly TERRAIN_LAYER_GRASS: any;
        readonly TERRAIN_LAYER_GROUND: any;
        readonly TERRAIN_LAYER_SAND: any;
        readonly TERRAIN_LAYER_SNOW: any;
        readonly TYPE_PB2PLATFORM_WALL: any;
        readonly TYPE_PLATFORM_WALL: any;
        readonly TYPE_SIMPLE_BACKGROUND: any;
        readonly TYPE_SIMPLE_WALL: any;
    };
    
    /** unfinished */
    type pb2SurfaceTypeInstance = ClassIdentityProps<"pb2SurfaceType"> & {
        name: unknown;
        is_soft: unknown;
        recommended_slices_per_density: unknown;
    };
}