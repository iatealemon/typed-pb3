import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch(...args: unknown[]): unknown;
    };
    
    /** unfinished auto-generated */
    type pb2UsableSwitchInstance = ClassIdentityProps<"pb2UsableSwitch"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        usable_glow_intensity: unknown;
        is_usable: unknown;
        readonly Use: unknown;
        readonly remove: unknown;
        readonly model_frame: unknown;
        readonly SetPosition: unknown;
        readonly is_being_removed: unknown;
    };
}