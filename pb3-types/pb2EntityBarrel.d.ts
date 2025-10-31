import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityInstanceBase } from "./pb2Entity";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2EntityBarrel: ClassIdentityProps<"pb2EntityBarrel"> & {
        readonly STYLE_ID_BLUE: any;
        readonly STYLE_ID_EMPTY: any;
        readonly STYLE_ID_FREEZING: any;
        readonly STYLE_ID_RADIOACTIVE: any;
        readonly STYLE_ID_RED: any;
        readonly STYLE_ID_RED_PBFTTP: any;
        readonly STYLE_ID_TOXIC_GAS: any;
        readonly STYLE_ID_YELLOW: any;
    };
    
    type pb2EntityBarrelInstance = pb2EntityInstanceBase<"pb2EntityBarrel">;
}