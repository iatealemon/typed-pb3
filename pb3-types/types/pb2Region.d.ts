export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 101 */
        readonly classid: TODO;
        /** @param recursive (default=true)  */
        remove: (recursive?: TODO) => TODO;
        attached_to: TODO;
        readonly p: TODO;
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: TODO;
        readonly is_quad: TODO;
        /** Type is unknown. One known value: 5 */
        readonly type: TODO;
        readonly _childs: TODO;
        AddPosition: (x: number, y: number) => void;
        SetPosition: (x: number, y: number) => TODO;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: number, h?: number) => TODO;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: number, y: number, w?: number, h?: number) => TODO;
        CopyPositionAndSizeFrom: (cP: TODO) => TODO;
        readonly collected_entities_counter: TODO;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        regions: pb2Region[];
    }
}
