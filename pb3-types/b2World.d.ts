import { ClassIdentityProps } from "./internal/helper";

export {};

declare global {
    const b2World: ClassIdentityProps<"b2World"> & {
        GetAllBodies(...args: unknown[]): unknown;
    };
}