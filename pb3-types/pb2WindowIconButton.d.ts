import type { pb2WindowInstanceBase } from "./pb2Window";
export {};

declare global {
    /**
     * unfinished  
     * the class is actually called bIc in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2WindowIconButtonInstance = pb2WindowInstanceBase<"pb2WindowIconButton"> & {
        icon: unknown;
    };
}