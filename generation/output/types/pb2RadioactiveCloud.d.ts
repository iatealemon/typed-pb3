export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2RadioactiveCloud extends ClassIdentityProps<"pb2RadioactiveCloud"> {
        /** Type is unknown. One known value: 25 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        readonly radius: TODO;
    }
    var pb2RadioactiveCloud: ClassIdentityProps<"pb2RadioactiveCloud"> & {
        /** Type is unknown. One known value: [] */
        clouds: TODO;
    }
}
