import type { pb2WindowInstanceBase } from "./pb2Window";
export {};

declare global {
    type pb2WindowIconButtonInstance = pb2WindowInstanceBase<"pb2WindowIconButton"> & {
        icon: unknown;
    };
}