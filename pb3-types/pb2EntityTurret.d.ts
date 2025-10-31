import type { ClassIdentityProps } from "./internal/helper";
import type { pb2EntityInstanceBase } from "./pb2Entity";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2EntityTurret: ClassIdentityProps<"pb2EntityTurret"> & {
        readonly STYLE_ID_DENIER: any;
        readonly STYLE_ID_FACET: any;
        readonly STYLE_ID_HARASSER_DRONE: any;
        readonly STYLE_ID_SCOUT_DRONE: any;
    };
    
    type pb2EntityTurretInstance = pb2EntityInstanceBase<"pb2EntityTurret"> & {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        Detach(...args: unknown[]): unknown;
    };
}