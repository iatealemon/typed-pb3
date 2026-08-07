export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface ep extends ClassIdentityProps<"ep"> {
        /** Type is unknown. One known value: 0 */
        volume: TODO;
        pitch: TODO;
        stop: () => TODO;
        readonly isPlaying: TODO;
        /** Type is unknown. One known value: "" */
        readonly sound_name: TODO;
    }
    
}
