import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2WindowHint: ClassIdentityProps<"pb2WindowHint"> & {
        readonly COLOR_GREEN: any;
        readonly COLOR_RED: any;
        readonly COLOR_WHITE: any;
        readonly COLOR_YELLOW: any;
        readonly CONTAINER_BOTTOM: any;
        readonly CONTAINER_FLOATING_IN_WORLD: any;
        readonly CONTAINER_TOP: any;
        CreateWindowHint(...args: unknown[]): unknown;
        readonly TYPE_HEALTHBAR: any;
        readonly TYPE_HINT: any;
        readonly TYPE_RESPONSE_OPTIONS: any;
        readonly TYPE_SUBTITLE: any;
        readonly TYPE_WARNING: any;
    };
    
    /** unfinished auto-generated */
    type pb2WindowHintInstance = ClassIdentityProps<"pb2WindowHint"> & {
        readonly x: unknown;
        readonly y: unknown;
        readonly text: unknown;
        readonly text_decorated: unknown;
        readonly type: unknown;
        readonly container: unknown;
        readonly attachment_ragdoll: unknown;
        readonly time_current: unknown;
        readonly time_to_live: unknown;
        readonly SetText: unknown;
        readonly SetColor: unknown;
        readonly Expire: unknown;
        readonly appearance_duration: unknown;
        readonly main_color: unknown;
        readonly GetOptions: unknown;
        readonly SetOptions: unknown;
        readonly my_vote_id: unknown;
        readonly votes: unknown;
        sync_to_spectators: unknown;
    };
}