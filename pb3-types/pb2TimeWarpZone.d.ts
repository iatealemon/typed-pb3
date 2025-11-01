import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        CreateWarpZone(...args: unknown[]): unknown;
        GetSpeedAtPoint(...args: unknown[]): unknown;
        IsBodyChronoFrozen(...args: unknown[]): unknown;
        readonly TEXTURE_GRADIENT: unknown;
        readonly TEXTURE_NONE: unknown;
        readonly TEXTURE_TIME_NADE_BLACKOUT: unknown;
        TimeWarpFunction(...args: unknown[]): unknown;
        readonly base_range: unknown;
        readonly blur_range: unknown;
        readonly target_speed: unknown;
        zones: unknown;
    };
}