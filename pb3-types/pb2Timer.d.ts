import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        CreateTimer(...args: unknown[]): unknown;
        readonly TYPE_FULL_FRAME_TICKS: any;
        readonly TYPE_GAME_TIMESCALE: any;
        readonly TYPE_GAME_TIMESCALE_WARPED: any;
        readonly TYPE_REAL_WORLD_TIMESCALE: any;
    };
    
    /** unfinished auto-generated */
    type pb2TimerInstance = ClassIdentityProps<"pb2Timer"> & {
        calls_left: unknown;
        current_cycle_time_left: unknown;
        readonly SetCalls: unknown;
        readonly SetTimeUntilNextCycle: unknown;
        readonly SetDefaultCycleDuration: unknown;
        readonly ResetCurrentCycle: unknown;
        enabled: unknown;
        readonly Start: unknown;
        readonly Stop: unknown;
        position_container: unknown;
        readonly type: unknown;
    };
}