export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2Sound: ClassIdentityProps<"pb2Sound"> & {
        StopAllSounds: () => unknown;
        /** Type is unknown. One known value: 0 */
        PRIORITY_FLOOD: unknown;
        /** Type is unknown. One known value: 1 */
        PRIORITY_FLOOD_TICKS: unknown;
        /** Type is unknown. One known value: 2 */
        PRIORITY_NORMAL: unknown;
        /** Type is unknown. One known value: 3 */
        PRIORITY_GAMEPLAY: unknown;
        /** Type is unknown. One known value: 4 */
        PRIORITY_GAMEPLAY_SPEECH: unknown;
        /** Type is unknown. One known value: 5 */
        PRIORITY_GAMEPLAY_PINGS: unknown;
        /** Type is unknown. One known value: 6 */
        PRIORITY_GAMEPLAY_MERGED_SOUNDS: unknown;
        /** Type is unknown. One known value: 7 */
        PRIORITY_UI: unknown;
        /** Type is unknown. One known value: 8 */
        PRIORITY_ATMOSHPERICS: unknown;
        /** Type is unknown. One known value: 9 */
        PRIORITY_MUSIC: unknown;
        /** Type is unknown. One known value: ["pb2Sound.PRIORITY_FLOOD","pb2Sound.PRIORITY_FLOOD_TICKS","pb2Sound.PRIORITY_NORMAL","pb2Sound.PRIORITY_GAMEPLAY","pb2Sound.PRIORITY_GAMEPLAY_SPEECH","pb2Sound.PRIORITY_GAMEPLAY_PINGS","pb2Sound.PRIORITY_GAMEPLAY_MERGED_SOUNDS","pb2Sound.PRIORITY_UI","pb2Sound.PRIORITY_ATMOSHPERICS","pb2Sound.PRIORITY_MUSIC"] */
        ALL_TYPES: unknown;
        PlayCustomSound: (params: unknown) => unknown;
    }
}
