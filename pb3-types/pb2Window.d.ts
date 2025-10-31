import type { ClassIdentityProps } from "./internal/helper";

/** unfinished */
export type pb2WindowInstanceBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
    tooltip: unknown;
    readonly type: unknown;
    readonly SetVisibilityFor: unknown;
    readonly SendChanges: unknown;
    visible: unknown;
    requires_ctrl_key: unknown;
    ignore_mouse_events: unknown;
    click_animation: unknown;
    readonly SetText: unknown;
    readonly remove: unknown;
    readonly parent: unknown;
    readonly childs: unknown;
    readonly GetTypeSpecificStructure: unknown;
    readonly SetTypeSpecificStructure: unknown;
    readonly is_being_removed: boolean;
};

declare global {
    /** unfinished auto-generated */
    const pb2Window: ClassIdentityProps<"pb2Window"> & {
        readonly BUTTON: any;
        readonly BUTTON_HOLO: any;
        readonly CAPTION: any;
        readonly CAPTION_CENTERED: any;
        readonly CAPTION_IMPORTANT: any;
        readonly CLOCK: any;
        readonly COLOR_PALETTE: any;
        readonly COLOR_PICKER: any;
        readonly CONTAINER: any;
        CreateWindow(...args: unknown[]): unknown;
        readonly DIALOGBOX: any;
        readonly DRAG_PARENT: any;
        readonly HUD_RECT: any;
        readonly HUD_RECT_SOLID: any;
        readonly ICON_BUTTON: any;
        readonly LEADERBOARD: any;
        readonly LEADERBOARD_PLAYERS_LIST: any;
        readonly PARAM_PANEL: any;
        readonly PERFORMANCE_GRAPH: any;
        readonly PROGRESS_BAR_SEGMENT: any;
        readonly SAYBOX: any;
        readonly SCREEN_BLOCKING_BOX: any;
        readonly SCROLLBAR_CARET: any;
        readonly SCROLLBAR_PAD: any;
        readonly SCROLL_LIST: any;
        readonly STRETCH_PARENT: any;
        readonly icons16_names: any;
        readonly icons16_names_to_id: any;
    };
    
    type pb2WindowInstance = pb2WindowInstanceBase<"pb2Window">;
}
