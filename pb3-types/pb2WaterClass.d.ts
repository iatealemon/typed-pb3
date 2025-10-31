import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2WaterClass: ClassIdentityProps<"pb2WaterClass"> & {
        readonly ALL_TYPES: any;
        DeclareWaterClass(...args: unknown[]): unknown;
        readonly TYPE_CORROSIVE: any;
        readonly TYPE_FREEZING: any;
        readonly TYPE_LAVA: any;
        readonly TYPE_TOXIC: any;
        readonly TYPE_WATER: any;
        readonly TYPE_ZERO_GRAVITY: any;
        readonly TYPE_ZERO_GRAVITY_NO_MUFFLE: any;
    };
    
    /** unfinished auto-generated */
    type pb2WaterClassInstance = ClassIdentityProps<"pb2WaterClass"> & {
        readonly shapes: unknown;
    };
}