export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Timer extends ClassIdentityProps<"pb2Timer"> {
        calls_left: TODO;
        current_cycle_time_left: TODO;
        SetCalls: (v: TODO) => TODO;
        SetTimeUntilNextCycle: (v: TODO) => TODO;
        SetDefaultCycleDuration: (v: TODO) => TODO;
        ResetCurrentCycle: () => TODO;
        enabled: TODO;
        Start: () => TODO;
        Stop: () => TODO;
        position_container: TODO;
        readonly type: TODO;
        Skip: () => TODO;
        readonly skip_mode: TODO;
        SetSkipMode: (condition: TODO) => TODO;
    }
    var pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        /**
         * @param func   
         * @param tim   
         * @param _type (default=0)   
         * @param bql (default=null)   
         */
        CreateTimer: (func: TODO, tim: TODO, _type?: TODO, bql?: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_GAME_TIMESCALE: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_GAME_TIMESCALE_WARPED: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_REAL_WORLD_TIMESCALE: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_FULL_FRAME_TICKS: TODO;
        /** Type is unknown. One known value: 0 */
        SKIP_MODE_UNSKIPPABLE: TODO;
        /** Type is unknown. One known value: 2 */
        SKIP_MODE_SPACE_KEY: TODO;
        /** Type is unknown. One known value: 3 */
        SKIP_MODE_FIRE_KEY: TODO;
        /** Type is unknown. One known value: 4 */
        SKIP_MODE_ANY_KEY: TODO;
        /** Type is unknown. One known value: 5 */
        SKIP_MODE_SPACE_KEY_HOLDING: TODO;
        /** Type is unknown. One known value: 2 */
        SKIP_MODE_STANDARD_SKIP_KEY: TODO;
        /** Type is unknown. One known value: [] */
        timers_active_game: TODO;
        /** Type is unknown. One known value: [] */
        timers_active_world: TODO;
    }
}
