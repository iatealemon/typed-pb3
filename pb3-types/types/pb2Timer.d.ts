export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Timer extends ClassIdentityProps<"pb2Timer"> {
        calls_left: number;
        current_cycle_time_left: number;
        SetCalls: (v: number) => unknown;
        SetTimeUntilNextCycle: (v: number) => unknown;
        SetDefaultCycleDuration: (v: number) => unknown;
        ResetCurrentCycle: () => unknown;
        enabled: boolean;
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
        CreateTimer: (func: unknown, tim: unknown, _type?: unknown, bql?: unknown) => pb2Timer;
        /** Type is unknown. One known value: 0 */
        TYPE_GAME_TIMESCALE: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_GAME_TIMESCALE_WARPED: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_REAL_WORLD_TIMESCALE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_FULL_FRAME_TICKS: unknown;
        timers_active_game: pb2Timer[];
        timers_active_world: pb2Timer[];
    }
}
