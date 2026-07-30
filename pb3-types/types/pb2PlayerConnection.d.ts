export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2PlayerConnection extends ClassIdentityProps<"pb2PlayerConnection"> {
        readonly controller: unknown;
        readonly GetPing: unknown;
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
        readonly FlashScreen: unknown;
        readonly SetToFreeCamera: unknown;
        readonly is_being_removed: unknown;
        readonly PauseTrustedControlsTemporarily: unknown;
        readonly SetKeyActions: unknown;
        readonly ClearAllKeyActionsAndStates: unknown;
        readonly GetKeyState: unknown;
        readonly DebugTraceAnyPressedKeys: unknown;
    }
    
}
