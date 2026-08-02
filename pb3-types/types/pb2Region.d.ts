export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 101 */
        readonly classid: unknown;
        /** @param recursive (default=true)  */
        remove: (recursive?: unknown) => unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: unknown;
        readonly is_quad: unknown;
        /** Type is unknown. One known value: 5 */
        readonly type: unknown;
        readonly _childs: unknown;
        AddPosition: (x: number, y: number) => void;
        SetPosition: (x: number, y: number) => unknown;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: number, h?: number) => unknown;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: number, y: number, w?: number, h?: number) => unknown;
        CopyPositionAndSizeFrom: (cP: unknown) => unknown;
        readonly collected_entities_counter: unknown;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        regions: pb2Region[];
    }
}
