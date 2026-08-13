export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface ep extends ClassIdentityProps<"ep"> {
        volume: number;
        pitch: number;
        stop: () => TODO;
        readonly isPlaying: boolean;
        readonly sound_name: string;
    }
    
}
