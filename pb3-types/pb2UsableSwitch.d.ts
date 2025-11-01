import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2UsableSwitchInstance = ClassIdentityProps<"pb2UsableSwitch"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        usable_glow_intensity: unknown;
        is_usable: unknown;
        Use(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly model_frame: unknown;
        SetPosition(...args: unknown[]): unknown;
        readonly is_being_removed: unknown;
    };
}