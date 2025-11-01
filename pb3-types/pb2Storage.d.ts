import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Storage: ClassIdentityProps<"pb2Storage"> & {
        ClearPropertyNameToUIDCache(...args: unknown[]): unknown;
        GetCreationProperty(...args: unknown[]): unknown;
        GetPlayerProperty(...args: unknown[]): unknown;
        SetCreationProperty(...args: unknown[]): unknown;
        SetPlayerProperty(...args: unknown[]): unknown;
    };
}