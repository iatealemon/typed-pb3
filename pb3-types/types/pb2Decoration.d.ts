export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Decoration extends ClassIdentityProps<"pb2Decoration"> {
        /** Type is unknown. One known value: 32 */
        readonly classid: unknown;
        remove: () => unknown;
        GetColor: () => unknown;
        GetColorGlow: () => unknown;
        SetColor: (c: unknown) => unknown;
        SetColorGlow: (c: unknown) => unknown;
        blending: unknown;
        shading: unknown;
        alpha: unknown;
        opacity: unknown;
        glowing_intensity: unknown;
        readonly source: unknown;
        readonly model_source: unknown;
        readonly source_glow: unknown;
        relative_to_mesh: unknown;
        hide_relative_to_mesh: unknown;
        inherit_effects: unknown;
        visible: unknown;
        readonly is_being_removed: unknown;
        readonly position: unknown;
        x: unknown;
        y: unknown;
        z: unknown;
        readonly rotation: unknown;
        readonly scale: unknown;
        /** Type is unknown. One known value: null */
        readonly offset: unknown;
        SetPersonalVisibilityFor: (TK: unknown, value: unknown) => unknown;
        ResetPersonalVisibilityRules: () => unknown;
        default_visibility: unknown;
        PlayAnimation: (animation_id: unknown) => unknown;
        PauseAnimation: () => unknown;
        ResumeAnimation: () => unknown;
        animation_info: unknown;
        UpdateAnimationUVs: () => unknown;
        allow_sync: unknown;
    }
    var pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        CreateDecoration: (params: unknown) => unknown;
        PreloadUserData: (user_data_uid: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        LAYER_WORLD: unknown;
        /** Type is unknown. One known value: 1 */
        LAYER_WORLD_HUD: unknown;
        /** Type is unknown. One known value: 2 */
        LAYER_SCREEN_HUD: unknown;
        /** Type is unknown. One known value: 0 */
        BLENDING_NORMAL: unknown;
        /** Type is unknown. One known value: 1 */
        BLENDING_ADDITIVE: unknown;
        /** Type is unknown. One known value: 2 */
        BLENDING_MULTIPLY: unknown;
        /** Type is unknown. One known value: 0 */
        SHADING_INITIAL: unknown;
        /** Type is unknown. One known value: 1 */
        SHADING_DIMMED: unknown;
        /** Type is unknown. One known value: 2 */
        SHADING_GLOWING: unknown;
        /** Type is unknown. One known value: 0 */
        ATTACHMENT_DISABLED: unknown;
        /** Type is unknown. One known value: 1 */
        ATTACHMENT_NTH_MESH_OF_OBJECT: unknown;
        /** Type is unknown. One known value: 2 */
        ATTACHMENT_EXPRESSION: unknown;
        /** Type is unknown. One known value: 0 */
        RENDER_METHOD_TRANSPARENT: unknown;
        /** Type is unknown. One known value: 1 */
        RENDER_METHOD_TRANSPARENT_BACKGROUND: unknown;
        /** Type is unknown. One known value: 2 */
        RENDER_METHOD_TRANSPARENT_FOREGROUND: unknown;
        /** Type is unknown. One known value: 3 */
        RENDER_METHOD_OPAQUE: unknown;
        /** Type is unknown. One known value: 4 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY: unknown;
        /** Type is unknown. One known value: 5 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND: unknown;
        /** Type is unknown. One known value: 6 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND: unknown;
        /** Type is unknown. One known value: ["pb2Decoration.RENDER_METHOD_TRANSPARENT","pb2Decoration.RENDER_METHOD_TRANSPARENT_BACKGROUND","pb2Decoration.RENDER_METHOD_TRANSPARENT_FOREGROUND","pb2Decoration.RENDER_METHOD_OPAQUE","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND"] */
        ALL_RENDER_METHODS: unknown;
    }
}
