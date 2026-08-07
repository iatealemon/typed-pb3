export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2PlayerConnection extends ClassIdentityProps<"pb2PlayerConnection"> {
        readonly controller: TODO;
        readonly GetPing: TODO;
        readonly spectated_ragdoll: TODO;
        readonly personal_virtual_controller: TODO;
        readonly isHost: TODO;
        readonly StartPointOfViewReplay: TODO;
        readonly IsWatchingReplay: TODO;
        readonly CancelPointOfViewReplay: TODO;
        readonly SetReplayTimeScale: TODO;
        readonly GetReplayTimeScale: TODO;
        readonly user_uid: TODO;
        readonly connection_uid: TODO;
        readonly SetDisconnectActionDescriptionStructure: TODO;
        readonly Disconnect: TODO;
        readonly SetToController: TODO;
        readonly SetToSpectateRagdoll: TODO;
        readonly nickname_tagged: TODO;
        readonly skin_info: TODO;
        controls_trusted: TODO;
        hud_visible: TODO;
        hud_show_character_info: TODO;
        hud_custom_bars: TODO;
        readonly settings: TODO;
        readonly ShowChatMessage: TODO;
        readonly ShakeScreen: TODO;
        readonly FlashScreen: TODO;
        readonly SetToFreeCamera: TODO;
        readonly is_being_removed: TODO;
        readonly PauseTrustedControlsTemporarily: TODO;
        readonly SetKeyActions: TODO;
        readonly ClearAllKeyActionsAndStates: TODO;
        readonly GetKeyState: TODO;
        readonly DebugTraceAnyPressedKeys: TODO;
    }
    
}
