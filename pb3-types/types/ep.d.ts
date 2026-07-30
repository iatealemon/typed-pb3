export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface ep extends ClassIdentityProps<"ep"> {
        /** Type is unknown. One known value: 0 */
        volume: unknown;
        pitch: unknown;
        stop: () => unknown;
        readonly isPlaying: unknown;
        /** Type is unknown. One known value: "" */
        readonly sound_name: unknown;
    }
    
}
