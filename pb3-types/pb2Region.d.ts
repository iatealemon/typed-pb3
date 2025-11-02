import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /**
     * unfinished  
     * the class is actually called zV in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2RegionInstance = ClassIdentityProps<"zV"> & {
        readonly x: number;
        readonly y: number;
        readonly classid: unknown;
        remove(...args: unknown[]): unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly box2d_body: unknown;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: unknown;
        readonly is_quad: unknown;
        readonly type: unknown;
        readonly _childs: unknown;
        AddPosition(...args: unknown[]): unknown;
        readonly collected_entities_counter: unknown;
    };
}