export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2RadioactiveCloud extends ClassIdentityProps<"pb2RadioactiveCloud"> {
        /** Type is unknown. One known value: 25 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly radius: number;
    }
    var pb2RadioactiveCloud: ClassIdentityProps<"pb2RadioactiveCloud"> & {
        clouds: pb2RadioactiveCloud[];
    }
}
