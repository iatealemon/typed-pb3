export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface ep extends ClassIdentityProps<"ep"> {
        volume: number;
        pitch: number;
        stop: () => unknown;
        readonly isPlaying: boolean;
        /** Type is unknown. One known value: "" */
        readonly sound_name: unknown;
    }
    
}
