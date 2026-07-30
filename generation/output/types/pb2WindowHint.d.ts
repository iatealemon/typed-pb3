export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2WindowHint extends ClassIdentityProps<"pb2WindowHint"> {
        readonly x: unknown;
        readonly y: unknown;
        readonly text: unknown;
        readonly text_decorated: unknown;
        readonly type: unknown;
        readonly container: unknown;
        readonly attachment_ragdoll: unknown;
        readonly time_current: unknown;
        readonly time_to_live: unknown;
        /**
         * @param s   
         * @param cYr (default=false)   
         */
        SetText: (s: unknown, cYr?: unknown) => unknown;
        SetColor: (color: unknown) => unknown;
        Expire: () => unknown;
        readonly appearance_duration: unknown;
        readonly main_color: unknown;
        GetOptions: () => unknown;
        /**
         * @param options   
         * @param cYr (default=false)   
         */
        SetOptions: (options: unknown, cYr?: unknown) => unknown;
        readonly my_vote_id: unknown;
        readonly votes: unknown;
        sync_to_spectators: unknown;
    }
    var pb2WindowHint: ClassIdentityProps<"pb2WindowHint"> & {
        CreateWindowHint: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        CONTAINER_TOP: unknown;
        /** Type is unknown. One known value: 1 */
        CONTAINER_BOTTOM: unknown;
        /** Type is unknown. One known value: 2 */
        CONTAINER_FLOATING_IN_WORLD: unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_WARNING: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_RESPONSE_OPTIONS: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_SUBTITLE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_HINT: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_HEALTHBAR: unknown;
        COLOR_RED: {
            /** Type is unknown. One known value: 1 */
            r: unknown;
            /** Type is unknown. One known value: 0.2 */
            g: unknown;
            /** Type is unknown. One known value: 0.2 */
            b: unknown;
        }
        COLOR_YELLOW: {
            /** Type is unknown. One known value: 1 */
            r: unknown;
            /** Type is unknown. One known value: 1 */
            g: unknown;
            /** Type is unknown. One known value: 0.4666666666666667 */
            b: unknown;
        }
        COLOR_GREEN: {
            /** Type is unknown. One known value: 0.4 */
            r: unknown;
            /** Type is unknown. One known value: 1 */
            g: unknown;
            /** Type is unknown. One known value: 0.4 */
            b: unknown;
        }
        COLOR_WHITE: {
            /** Type is unknown. One known value: 1 */
            r: unknown;
            /** Type is unknown. One known value: 1 */
            g: unknown;
            /** Type is unknown. One known value: 1 */
            b: unknown;
        }
    }
}
