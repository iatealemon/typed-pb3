export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2ByteShifter: ClassIdentityProps<"pb2ByteShifter"> & {
        send_repeat_delay_for_server: number;
    }
}
