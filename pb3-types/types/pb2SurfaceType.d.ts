export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2SurfaceType extends ClassIdentityProps<"pb2SurfaceType"> {
        is_soft: unknown;
        recommended_slices_per_density: unknown;
    }
    var pb2SurfaceType: ClassIdentityProps<"pb2SurfaceType"> & {
        /** Type is unknown. One known value: 0 */
        TYPE_SIMPLE_WALL: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_SIMPLE_BACKGROUND: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_PLATFORM_WALL: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_PB2PLATFORM_WALL: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_STAR_DEFENDING_CUBE: unknown;
        /** Type is unknown. One known value: 5 */
        TYPE_3D_MODEL: unknown;
        /** Type is unknown. One known value: 0 */
        APPEARANCE_NORMAL: unknown;
        /** Type is unknown. One known value: 1 */
        APPEARANCE_FULL_BRIGHT: unknown;
        /** Type is unknown. One known value: 2 */
        APPEARANCE_ADDITIVE: unknown;
        /** Type is unknown. One known value: 3 */
        APPEARANCE_FULL_BRIGHT_NO_GLOW: unknown;
        /** Type is unknown. One known value: 4 */
        APPEARANCE_NORMAL_NO_LIGHT_BLOCKING: unknown;
        /** Type is unknown. One known value: 0 */
        SHADER_GAMEPLAY: unknown;
        /** Type is unknown. One known value: 1 */
        SHADER_ENVIRONMENT: unknown;
        /** Type is unknown. One known value: 0 */
        TERRAIN_LAYER_GROUND: unknown;
        /** Type is unknown. One known value: 1 */
        TERRAIN_LAYER_GRASS: unknown;
        /** Type is unknown. One known value: 2 */
        TERRAIN_LAYER_SAND: unknown;
        /** Type is unknown. One known value: 3 */
        TERRAIN_LAYER_CLIFF: unknown;
        /** Type is unknown. One known value: 4 */
        TERRAIN_LAYER_SNOW: unknown;
        /** Type is unknown. One known value: ["pb2SurfaceType.TYPE_SIMPLE_WALL","pb2SurfaceType.TYPE_SIMPLE_BACKGROUND","pb2SurfaceType.TYPE_PLATFORM_WALL","pb2SurfaceType.TYPE_PB2PLATFORM_WALL","pb2SurfaceType.TYPE_STAR_DEFENDING_CUBE","pb2SurfaceType.TYPE_3D_MODEL","pb2SurfaceType.APPEARANCE_NORMAL","pb2SurfaceType.APPEARANCE_FULL_BRIGHT","pb2SurfaceType.APPEARANCE_ADDITIVE","pb2SurfaceType.APPEARANCE_FULL_BRIGHT_NO_GLOW","pb2SurfaceType.APPEARANCE_NORMAL_NO_LIGHT_BLOCKING","pb2SurfaceType.SHADER_GAMEPLAY","pb2SurfaceType.SHADER_ENVIRONMENT","pb2SurfaceType.TERRAIN_LAYER_GROUND","pb2SurfaceType.TERRAIN_LAYER_GRASS","pb2SurfaceType.TERRAIN_LAYER_SAND","pb2SurfaceType.TERRAIN_LAYER_CLIFF","pb2SurfaceType.TERRAIN_LAYER_SNOW"] */
        ALL_TYPES: unknown;
        /**
         * @param params   
         * @param slot (default=-1)   
         */
        CreateSurfaceType: (params: unknown, slot?: unknown) => unknown;
        SpawnPB2SurfaceTypeParams: (ffS: unknown, is_wall: unknown) => unknown;
    }
}
