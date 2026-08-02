export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2_mp: ClassIdentityProps<"pb2_mp"> & {
        /** Type is unknown. One known value: 0 */
        GAME_FPS: unknown;
        /** Type is unknown. One known value: 1 */
        FUNCTION_LINEAR: unknown;
        /** Type is unknown. One known value: 2 */
        FUNCTION_MORPH: unknown;
        /** Type is unknown. One known value: 3 */
        FUNCTION_INVERSEMORPH: unknown;
        ui_offset_x: number;
        ui_offset_y: number;
    }
}
