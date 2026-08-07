export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2WindowHint extends ClassIdentityProps<"pb2WindowHint"> {
        readonly x: number;
        readonly y: number;
        readonly text: TODO;
        readonly text_decorated: TODO;
        readonly type: TODO;
        readonly container: TODO;
        readonly attachment_ragdoll: TODO;
        readonly time_current: number;
        readonly time_to_live: number;
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
        CreateWindowHint: (params: TODO) => pb2WindowHint;
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
            r: number;
            g: number;
            b: number;
        }
        COLOR_YELLOW: {
            r: number;
            g: number;
            b: number;
        }
        COLOR_GREEN: {
            r: number;
            g: number;
            b: number;
        }
        COLOR_WHITE: {
            r: number;
            g: number;
            b: number;
        }
    }
}
