export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2RadioactiveCloud extends ClassIdentityProps<"pb2RadioactiveCloud"> {
        /** Type is unknown. One known value: 25 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly radius: unknown;
    }
    var pb2RadioactiveCloud: ClassIdentityProps<"pb2RadioactiveCloud"> & {
        /** Type is unknown. One known value: [] */
        clouds: unknown;
    }
}
