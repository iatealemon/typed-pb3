export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: TODO;
        readonly y: TODO;
        readonly w: TODO;
        readonly h: TODO;
        /** Type is unknown. One known value: 101 */
        readonly classid: TODO;
        /** @param recursive (default=true)  */
        remove: (recursive?: TODO) => TODO;
        attached_to: TODO;
        readonly p: TODO;
        readonly box2d_body: TODO;
        readonly minx: TODO;
        readonly miny: TODO;
        readonly maxx: TODO;
        readonly maxy: TODO;
        readonly corner: TODO;
        readonly is_quad: TODO;
        /** Type is unknown. One known value: 5 */
        readonly type: TODO;
        readonly _childs: TODO;
        AddPosition: (x: TODO, y: TODO) => TODO;
        SetPosition: (x: TODO, y: TODO) => TODO;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: TODO, h?: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: TODO, y: TODO, w?: TODO, h?: TODO) => TODO;
        CopyPositionAndSizeFrom: (cP: TODO) => TODO;
        readonly collected_entities_counter: TODO;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        /** Type is unknown. One known value: [] */
        regions: TODO;
    }
}
