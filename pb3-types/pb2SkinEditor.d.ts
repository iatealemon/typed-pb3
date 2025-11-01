import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2SkinEditor: ClassIdentityProps<"pb2SkinEditor"> & {
        AllowSkinDispose(...args: unknown[]): unknown;
        ScheduleCustomSkinUpdate(...args: unknown[]): unknown;
        SpawnDefaultSkin(...args: unknown[]): unknown;
        SpawnTemporaryPreferredUserSkin(...args: unknown[]): unknown;
        SpawnUserDataSkin(...args: unknown[]): unknown;
    };
}