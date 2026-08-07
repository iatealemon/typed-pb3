export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2WindowHint extends ClassIdentityProps<"pb2WindowHint"> {
        readonly x: TODO;
        readonly y: TODO;
        readonly text: TODO;
        readonly text_decorated: TODO;
        readonly type: TODO;
        readonly container: TODO;
        readonly attachment_ragdoll: TODO;
        readonly time_current: TODO;
        readonly time_to_live: TODO;
        /**
         * @param s   
         * @param cYr (default=false)   
         */
        SetText: (s: TODO, cYr?: TODO) => TODO;
        SetColor: (color: TODO) => TODO;
        Expire: () => TODO;
        readonly appearance_duration: TODO;
        readonly main_color: TODO;
        GetOptions: () => TODO;
        /**
         * @param options   
         * @param cYr (default=false)   
         */
        SetOptions: (options: TODO, cYr?: TODO) => TODO;
        readonly my_vote_id: TODO;
        readonly votes: TODO;
        sync_to_spectators: TODO;
    }
    var pb2WindowHint: ClassIdentityProps<"pb2WindowHint"> & {
        CreateWindowHint: (params: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        CONTAINER_TOP: TODO;
        /** Type is unknown. One known value: 1 */
        CONTAINER_BOTTOM: TODO;
        /** Type is unknown. One known value: 2 */
        CONTAINER_FLOATING_IN_WORLD: TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_WARNING: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_RESPONSE_OPTIONS: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_SUBTITLE: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_HINT: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_HEALTHBAR: TODO;
        COLOR_RED: {
            /** Type is unknown. One known value: 1 */
            r: TODO;
            /** Type is unknown. One known value: 0.2 */
            g: TODO;
            /** Type is unknown. One known value: 0.2 */
            b: TODO;
        }
        COLOR_YELLOW: {
            /** Type is unknown. One known value: 1 */
            r: TODO;
            /** Type is unknown. One known value: 1 */
            g: TODO;
            /** Type is unknown. One known value: 0.4666666666666667 */
            b: TODO;
        }
        COLOR_GREEN: {
            /** Type is unknown. One known value: 0.4 */
            r: TODO;
            /** Type is unknown. One known value: 1 */
            g: TODO;
            /** Type is unknown. One known value: 0.4 */
            b: TODO;
        }
        COLOR_WHITE: {
            /** Type is unknown. One known value: 1 */
            r: TODO;
            /** Type is unknown. One known value: 1 */
            g: TODO;
            /** Type is unknown. One known value: 1 */
            b: TODO;
        }
    }
}
