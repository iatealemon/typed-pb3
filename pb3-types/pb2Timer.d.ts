import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        CreateTimer(...args: unknown[]): unknown;
        readonly TYPE_FULL_FRAME_TICKS: any;
        readonly TYPE_GAME_TIMESCALE: any;
        readonly TYPE_GAME_TIMESCALE_WARPED: any;
        readonly TYPE_REAL_WORLD_TIMESCALE: any;
    };
    
    /** unfinished */
    type pb2TimerInstance = ClassIdentityProps<"pb2Timer"> & {
        calls_left: unknown;
        current_cycle_time_left: unknown;
        SetCalls(...args: unknown[]): unknown;
        SetTimeUntilNextCycle(...args: unknown[]): unknown;
        SetDefaultCycleDuration(...args: unknown[]): unknown;
        ResetCurrentCycle(...args: unknown[]): unknown;
        enabled: unknown;
        Start(...args: unknown[]): unknown;
        Stop(...args: unknown[]): unknown;
        position_container: unknown;
        readonly type: unknown;
    };
}