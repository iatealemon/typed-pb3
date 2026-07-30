export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2ByteShifter: ClassIdentityProps<"pb2ByteShifter"> & {
        /** Type is unknown. One known value: 6.944444444444445 */
        send_repeat_delay_for_server: unknown;
    }
}
