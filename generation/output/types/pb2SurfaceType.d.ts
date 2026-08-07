export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2SurfaceType extends ClassIdentityProps<"pb2SurfaceType"> {
        is_soft: TODO;
        recommended_slices_per_density: TODO;
    }
    var pb2SurfaceType: ClassIdentityProps<"pb2SurfaceType"> & {
        /** Type is unknown. One known value: 0 */
        TYPE_SIMPLE_WALL: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_SIMPLE_BACKGROUND: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_PLATFORM_WALL: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_PB2PLATFORM_WALL: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_STAR_DEFENDING_CUBE: TODO;
        /** Type is unknown. One known value: 5 */
        TYPE_3D_MODEL: TODO;
        /** Type is unknown. One known value: 0 */
        APPEARANCE_NORMAL: TODO;
        /** Type is unknown. One known value: 1 */
        APPEARANCE_FULL_BRIGHT: TODO;
        /** Type is unknown. One known value: 2 */
        APPEARANCE_ADDITIVE: TODO;
        /** Type is unknown. One known value: 3 */
        APPEARANCE_FULL_BRIGHT_NO_GLOW: TODO;
        /** Type is unknown. One known value: 4 */
        APPEARANCE_NORMAL_NO_LIGHT_BLOCKING: TODO;
        /** Type is unknown. One known value: 0 */
        SHADER_GAMEPLAY: TODO;
        /** Type is unknown. One known value: 1 */
        SHADER_ENVIRONMENT: TODO;
        /** Type is unknown. One known value: 0 */
        TERRAIN_LAYER_GROUND: TODO;
        /** Type is unknown. One known value: 1 */
        TERRAIN_LAYER_GRASS: TODO;
        /** Type is unknown. One known value: 2 */
        TERRAIN_LAYER_SAND: TODO;
        /** Type is unknown. One known value: 3 */
        TERRAIN_LAYER_CLIFF: TODO;
        /** Type is unknown. One known value: 4 */
        TERRAIN_LAYER_SNOW: TODO;
        /** Type is unknown. One known value: ["pb2SurfaceType.TYPE_SIMPLE_WALL","pb2SurfaceType.TYPE_SIMPLE_BACKGROUND","pb2SurfaceType.TYPE_PLATFORM_WALL","pb2SurfaceType.TYPE_PB2PLATFORM_WALL","pb2SurfaceType.TYPE_STAR_DEFENDING_CUBE","pb2SurfaceType.TYPE_3D_MODEL","pb2SurfaceType.APPEARANCE_NORMAL","pb2SurfaceType.APPEARANCE_FULL_BRIGHT","pb2SurfaceType.APPEARANCE_ADDITIVE","pb2SurfaceType.APPEARANCE_FULL_BRIGHT_NO_GLOW","pb2SurfaceType.APPEARANCE_NORMAL_NO_LIGHT_BLOCKING","pb2SurfaceType.SHADER_GAMEPLAY","pb2SurfaceType.SHADER_ENVIRONMENT","pb2SurfaceType.TERRAIN_LAYER_GROUND","pb2SurfaceType.TERRAIN_LAYER_GRASS","pb2SurfaceType.TERRAIN_LAYER_SAND","pb2SurfaceType.TERRAIN_LAYER_CLIFF","pb2SurfaceType.TERRAIN_LAYER_SNOW"] */
        ALL_TYPES: TODO;
        /**
         * @param params   
         * @param slot (default=-1)   
         */
        CreateSurfaceType: (params: TODO, slot?: TODO) => TODO;
        SpawnPB2SurfaceTypeParams: (ffS: TODO, is_wall: TODO) => TODO;
    }
}
