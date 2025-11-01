import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /**
     * unfinished  
     * the class is actually called hT in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2AtomInstance = ClassIdentityProps<"hT"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        tox: unknown;
        toy: unknown;
        readonly rad: unknown;
        readonly of: unknown;
        Teleport(...args: unknown[]): unknown;
        GetBody(...args: unknown[]): unknown;
        GetPosition(...args: unknown[]): unknown;
        DealDamage(...args: unknown[]): unknown;
    };
}