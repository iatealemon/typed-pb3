export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2_mp: ClassIdentityProps<"pb2_mp"> & {
        GAME_FPS: number;
        /** Type is unknown. One known value: 1 */
        FUNCTION_LINEAR: TODO;
        /** Type is unknown. One known value: 2 */
        FUNCTION_MORPH: TODO;
        /** Type is unknown. One known value: 3 */
        FUNCTION_INVERSEMORPH: TODO;
        /** Type is unknown. One known value: 4 */
        FUNCTION_RUBBER_BAND: TODO;
        /** Type is unknown. One known value: 5 */
        FUNCTION_EASE_IN_OUT: TODO;
        ui_offset_x: number;
        ui_offset_y: number;
    }
}
