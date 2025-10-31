import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /**
     * unfinished  
     * represents the instance of either DataConnection or bAK. these same properties are made accessible on bAK instances even though they don't exist.
     */
    type pb2PlayerConnectionInstance = ClassIdentityProps<"pb2PlayerConnection"> & {
        readonly controller: unknown;
        readonly spectated_ragdoll: unknown;
        readonly personal_virtual_controller: unknown;
        readonly isHost: unknown;
        readonly StartPointOfViewReplay: unknown;
        readonly IsWatchingReplay: unknown;
        readonly CancelPointOfViewReplay: unknown;
        readonly SetReplayTimeScale: unknown;
        readonly GetReplayTimeScale: unknown;
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly SetDisconnectActionDescriptionStructure: unknown;
        readonly Disconnect: unknown;
        readonly SetToController: unknown;
        readonly SetToSpectateRagdoll: unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
        controls_trusted: unknown;
        hud_visible: unknown;
        hud_show_character_info: unknown;
        hud_custom_bars: unknown;
        readonly settings: unknown;
        readonly ShowChatMessage: unknown;
        readonly ShakeScreen: unknown;
        readonly SetToFreeCamera: unknown;
    };
}