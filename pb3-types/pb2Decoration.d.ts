import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        readonly BLENDING_ADDITIVE: any;
        readonly BLENDING_MULTIPLY: any;
        readonly BLENDING_NORMAL: any;
        CreateDecoration(...args: unknown[]): unknown;
        readonly LAYER_SCREEN_HUD: any;
        readonly LAYER_WORLD: any;
        readonly LAYER_WORLD_HUD: any;
        PreloadUserData(...args: unknown[]): unknown;
        readonly SHADING_DIMMED: any;
        readonly SHADING_GLOWING: any;
        readonly SHADING_INITIAL: any;
    };
    
    /** unfinished auto-generated */
    type pb2DecorationInstance = ClassIdentityProps<"pb2Decoration"> & {
        readonly classid: unknown;
        readonly remove: unknown;
        readonly SetColor: unknown;
        blending: unknown;
        shading: unknown;
        relative_to_mesh: unknown;
        hide_relative_to_mesh: unknown;
        inherit_effects: unknown;
        visible: unknown;
        readonly is_being_removed: unknown;
        readonly position: unknown;
        readonly rotation: unknown;
        readonly scale: unknown;
        readonly offset: unknown;
        readonly SetPersonalVisibilityFor: unknown;
        readonly ResetPersonalVisibilityRules: unknown;
        default_visibility: unknown;
        readonly PlayAnimation: unknown;
        readonly PauseAnimation: unknown;
        readonly ResumeAnimation: unknown;
        animation_info: unknown;
        readonly UpdateAnimationUVs: unknown;
    };
}