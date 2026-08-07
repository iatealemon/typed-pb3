export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Decoration extends ClassIdentityProps<"pb2Decoration"> {
        /** Type is unknown. One known value: 32 */
        readonly classid: TODO;
        remove: () => TODO;
        GetColor: () => TODO;
        GetColorGlow: () => TODO;
        SetColor: (c: TODO) => TODO;
        SetColorGlow: (c: TODO) => TODO;
        blending: TODO;
        shading: TODO;
        alpha: TODO;
        opacity: TODO;
        glowing_intensity: TODO;
        readonly source: TODO;
        readonly model_source: TODO;
        readonly source_glow: TODO;
        relative_to_mesh: TODO;
        hide_relative_to_mesh: TODO;
        inherit_effects: TODO;
        visible: TODO;
        readonly is_being_removed: boolean;
        readonly position: TODO;
        x: number;
        y: number;
        z: number;
        readonly rotation: TODO;
        readonly scale: TODO;
        /** Type is unknown. One known value: null */
        readonly offset: TODO;
        SetPersonalVisibilityFor: (TK: TODO, value: TODO) => TODO;
        ResetPersonalVisibilityRules: () => TODO;
        default_visibility: TODO;
        PlayAnimation: (animation_id: TODO) => TODO;
        PauseAnimation: () => TODO;
        ResumeAnimation: () => TODO;
        animation_info: TODO;
        UpdateAnimationUVs: () => TODO;
        allow_sync: TODO;
    }
    var pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        CreateDecoration: (params: TODO) => pb2Decoration;
        PreloadUserData: (user_data_uid: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        LAYER_WORLD: TODO;
        /** Type is unknown. One known value: 1 */
        LAYER_WORLD_HUD: TODO;
        /** Type is unknown. One known value: 2 */
        LAYER_SCREEN_HUD: TODO;
        /** Type is unknown. One known value: 0 */
        BLENDING_NORMAL: TODO;
        /** Type is unknown. One known value: 1 */
        BLENDING_ADDITIVE: TODO;
        /** Type is unknown. One known value: 2 */
        BLENDING_MULTIPLY: TODO;
        /** Type is unknown. One known value: 0 */
        SHADING_INITIAL: TODO;
        /** Type is unknown. One known value: 1 */
        SHADING_DIMMED: TODO;
        /** Type is unknown. One known value: 2 */
        SHADING_GLOWING: TODO;
        /** Type is unknown. One known value: 0 */
        ATTACHMENT_DISABLED: TODO;
        /** Type is unknown. One known value: 1 */
        ATTACHMENT_NTH_MESH_OF_OBJECT: TODO;
        /** Type is unknown. One known value: 2 */
        ATTACHMENT_EXPRESSION: TODO;
        /** Type is unknown. One known value: 0 */
        RENDER_METHOD_TRANSPARENT: TODO;
        /** Type is unknown. One known value: 1 */
        RENDER_METHOD_TRANSPARENT_BACKGROUND: TODO;
        /** Type is unknown. One known value: 2 */
        RENDER_METHOD_TRANSPARENT_FOREGROUND: TODO;
        /** Type is unknown. One known value: 3 */
        RENDER_METHOD_OPAQUE: TODO;
        /** Type is unknown. One known value: 4 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY: TODO;
        /** Type is unknown. One known value: 5 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND: TODO;
        /** Type is unknown. One known value: 6 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND: TODO;
        /** Type is unknown. One known value: ["pb2Decoration.RENDER_METHOD_TRANSPARENT","pb2Decoration.RENDER_METHOD_TRANSPARENT_BACKGROUND","pb2Decoration.RENDER_METHOD_TRANSPARENT_FOREGROUND","pb2Decoration.RENDER_METHOD_OPAQUE","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND"] */
        ALL_RENDER_METHODS: TODO;
    }
}
