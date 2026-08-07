export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2Sound: ClassIdentityProps<"pb2Sound"> & {
        StopAllSounds: () => TODO;
        /** Type is unknown. One known value: 0 */
        PRIORITY_FLOOD: TODO;
        /** Type is unknown. One known value: 1 */
        PRIORITY_FLOOD_TICKS: TODO;
        /** Type is unknown. One known value: 2 */
        PRIORITY_NORMAL: TODO;
        /** Type is unknown. One known value: 3 */
        PRIORITY_GAMEPLAY: TODO;
        /** Type is unknown. One known value: 4 */
        PRIORITY_GAMEPLAY_SPEECH: TODO;
        /** Type is unknown. One known value: 5 */
        PRIORITY_GAMEPLAY_PINGS: TODO;
        /** Type is unknown. One known value: 6 */
        PRIORITY_GAMEPLAY_MERGED_SOUNDS: TODO;
        /** Type is unknown. One known value: 7 */
        PRIORITY_UI: TODO;
        /** Type is unknown. One known value: 8 */
        PRIORITY_ATMOSHPERICS: TODO;
        /** Type is unknown. One known value: 9 */
        PRIORITY_MUSIC: TODO;
        /** Type is unknown. One known value: ["pb2Sound.PRIORITY_FLOOD","pb2Sound.PRIORITY_FLOOD_TICKS","pb2Sound.PRIORITY_NORMAL","pb2Sound.PRIORITY_GAMEPLAY","pb2Sound.PRIORITY_GAMEPLAY_SPEECH","pb2Sound.PRIORITY_GAMEPLAY_PINGS","pb2Sound.PRIORITY_GAMEPLAY_MERGED_SOUNDS","pb2Sound.PRIORITY_UI","pb2Sound.PRIORITY_ATMOSHPERICS","pb2Sound.PRIORITY_MUSIC"] */
        ALL_TYPES: TODO;
        PlayCustomSound: (params: TODO) => ep;
    }
}
