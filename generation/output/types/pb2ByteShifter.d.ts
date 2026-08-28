export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2ByteShifter: ClassIdentityProps<"pb2ByteShifter"> & {
        /** Type is unknown. One known value: 16.39344262295082 */
        send_repeat_delay_for_server: TODO;
    }
}
