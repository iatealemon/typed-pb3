export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Timer extends ClassIdentityProps<"pb2Timer"> {
        calls_left: unknown;
        current_cycle_time_left: unknown;
        SetCalls: (v: unknown) => unknown;
        SetTimeUntilNextCycle: (v: unknown) => unknown;
        SetDefaultCycleDuration: (v: unknown) => unknown;
        ResetCurrentCycle: () => unknown;
        enabled: unknown;
        Start: () => unknown;
        Stop: () => unknown;
        position_container: unknown;
        readonly type: unknown;
    }
    var pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        /**
         * @param func   
         * @param tim   
         * @param _type (default=0)   
         * @param bql (default=null)   
         */
        CreateTimer: (func: unknown, tim: unknown, _type?: unknown, bql?: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_GAME_TIMESCALE: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_GAME_TIMESCALE_WARPED: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_REAL_WORLD_TIMESCALE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_FULL_FRAME_TICKS: unknown;
        /** Type is unknown. One known value: [] */
        timers_active_game: unknown;
        /** Type is unknown. One known value: [] */
        timers_active_world: unknown;
    }
}
