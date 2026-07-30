export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: number;
        readonly y: number;
        readonly w: unknown;
        readonly h: unknown;
        /** Type is unknown. One known value: 101 */
        readonly classid: unknown;
        /** @param recursive (default=true)  */
        remove: (recursive?: unknown) => unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly box2d_body: unknown;
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
        SetPosition: (x: unknown, y: unknown) => unknown;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: unknown, h?: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: unknown, y: unknown, w?: unknown, h?: unknown) => unknown;
        CopyPositionAndSizeFrom: (cP: unknown) => unknown;
        readonly collected_entities_counter: unknown;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        /** Type is unknown. One known value: [] */
        regions: unknown;
    }
}
