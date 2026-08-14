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
        /** One of the pb2Decoration.BLENDING_* values */
        blending: TODO;
        /** One of the pb2Decoration.SHADING_INITIAL* values */
        shading: TODO;
        alpha: number;
        opacity: number;
        glowing_intensity: number | undefined;
        readonly source: string;
        readonly model_source: string | null;
        readonly source_glow: string | null;
        relative_to_mesh: THREE.Mesh | null;
        hide_relative_to_mesh: boolean;
        inherit_effects: boolean;
        visible: boolean;
        readonly is_being_removed: boolean;
        readonly position: THREE.Vector3;
        x: number;
        y: number;
        z: number;
        readonly rotation: THREE.Euler;
        readonly scale: THREE.Vector3;
        readonly offset: THREE.Vector3 | null;
        SetPersonalVisibilityFor: (TK: TODO, value: TODO) => TODO;
        ResetPersonalVisibilityRules: () => TODO;
        default_visibility: boolean;
        PlayAnimation: (animation_id: TODO) => TODO;
        PauseAnimation: () => TODO;
        ResumeAnimation: () => TODO;
        animation_info: {
            frame: TODO,
            isPlaying: boolean,
            isRelativeToWorld: boolean,
            frameProgress: number,
            speed: number,
            animation_id: number,
            animations: {
                firstFrame: number,
                framesTotal: number,
                relativeSpeed: number,
                looped: boolean,
                report_animation_end: boolean,
            }[],
        } | null;
        UpdateAnimationUVs: () => TODO;
        allow_sync: boolean;
    }
    var pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        /**
         * Creates a new decoration.  
         * @param params Object containing parameters
         * @param params.source Required. Image source ID string.  
         * @param params.model_source (default=null)  
         * @param params.source_glow (default=null)  
         * @param params.layer (default=pb2Decoration.LAYER_WORLD)  
         * @param params.offsetX (default=0)  
         * @param params.offsetY (default=0)  
         * @param params.offsetZ (default=0)  
         * @param params.frameWidth (default=undefined)  
         * @param params.frameHeight (default=undefined)  
         * @param params.frameOffsetX (default=0)  
         * @param params.frameOffsetY (default=0)  
         * @param params.pixelated (default=false)  
         * @param params.mipmaps (default=true)  
         * @param params.animation_info (default=null)  
         * @param params.use_offset (default=false)  
         * @param params.relative_to_mesh (default=null)  
         * @param params.render_method (default=pb2Decoration.RENDER_METHOD_TRANSPARENT)  
         * @param params.x (default=0)  
         * @param params.y (default=0)  
         * @param params.z (default=0)  
         * @param params.rotationX (default=0)  
         * @param params.rotationY (default=0)  
         * @param params.rotationZ (default=0)  
         * @param params.rotation (default=0) Serves same purpose as `rotationZ`  
         * @param params.scale (default=1)  
         * @param params.scaleX (default=scale)  
         * @param params.scaleY (default=scale)  
         * @param params.scaleZ (default=scale)  
         * @param params.blending (default=pb2Decoration.BLENDING_NORMAL)  
         * @param params.shading (default=pb2Decoration.SHADING_INITIAL)  
         * @param params.color_mult (default=new pb2HighRangeColor(0xffffff))  
         * @param params.color_mult_glow (default=new pb2HighRangeColor(0xffffff))  
         * @param params.inherit_effects (default=true)  
         * @param params.hide_relative_to_mesh (default=false)  
         * @param params.visible (default=true)  
         * @param params.opacity (default=1) If this is defined, `alpha` must not be defined  
         * @param params.alpha (default=opacity) If this is defined, `opacity` must not be defined  
         * @param params.glowing_intensity (default=undefined)  
         * @param params.default_visibility (default=true)  
         * @param params.is_static (default=false)  
         * @param params.inverse_filter (default=[])  
         */
        CreateDecoration: (params: {
            source: string,
            model_source?: string | null,
            source_glow?: string | null,
            layer?: TODO,
            offsetX?: number,
            offsetY?: number,
            offsetZ?: number,
            frameWidth?: number,
            frameHeight?: number,
            frameOffsetX?: number,
            frameOffsetY?: number,
            pixelated?: boolean,
            mipmaps?: boolean,
            animation_info?: {
                frame: TODO,
                isPlaying: boolean,
                isRelativeToWorld: boolean,
                frameProgress: number,
                speed: number,
                animation_id: number,
                animations: {
                    firstFrame: number,
                    framesTotal: number,
                    relativeSpeed: number,
                    looped: boolean,
                    report_animation_end: boolean,
                }[],
            } | null,
            use_offset?: boolean,
            relative_to_mesh?: THREE.Mesh | null,
            render_method?: TODO,
            x?: number,
            y?: number,
            z?: number,
            rotationX?: number,
            rotationY?: number,
            rotationZ?: number,
            rotation?: number,
            scale?: number,
            scaleX?: number,
            scaleY?: number,
            scaleZ?: number,
            blending?: TODO,
            shading?: TODO,
            color_mult?: pb2HighRangeColor,
            color_mult_glow?: pb2HighRangeColor,
            inherit_effects?: boolean,
            hide_relative_to_mesh?: boolean,
            visible?: boolean,
            alpha?: number,
            opacity?: number,
            glowing_intensity?: number
            default_visibility?: boolean,
            is_static?: boolean,
            inverse_filter?: (pb2PlayerConnection | pb2Ragdoll/* | typeof pb2GameWorld*/)[],
        }) => pb2Decoration;
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
