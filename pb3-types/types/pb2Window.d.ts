export { };

import type { ClassIdentityProps } from "./internal/helper";

export type pb2WindowBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
    tooltip: unknown;
    readonly type: unknown;
    /**
     * @param cWC   
     * @param cWE (default=true)   
     * @param Hi (default=true)   
     */
    SetVisibilityFor: (cWC: unknown, cWE?: unknown, Hi?: unknown) => unknown;
    SendChanges: () => unknown;
    visible: unknown;
    requires_ctrl_key: unknown;
    ignore_mouse_events: unknown;
    click_animation: unknown;
    /**
     * @param txt   
     * @param size (default=12)   
     * @param cMI (default=false)   
     * @param nu (default=false)   
     */
    SetText: (txt: unknown, size?: unknown, cMI?: unknown, nu?: unknown) => unknown;
    /** @param c (default=null)  */
    remove: (c?: unknown) => unknown;
    readonly parent: unknown;
    readonly childs: unknown;
    GetTypeSpecificStructure: () => unknown;
    SetTypeSpecificStructure: (Ap: unknown) => unknown;
    readonly is_being_removed: boolean;
};

declare global {
    interface pb2Window extends pb2WindowBase<"pb2Window"> {}
    var pb2Window: ClassIdentityProps<"pb2Window"> & {
        CreateWindow: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        DIALOGBOX: unknown;
        /** Type is unknown. One known value: 1 */
        BUTTON: unknown;
        /** Type is unknown. One known value: 2 */
        SCREEN_BLOCKING_BOX: unknown;
        /** Type is unknown. One known value: 3 */
        SCROLL_LIST: unknown;
        /** Type is unknown. One known value: 4 */
        SCROLLBAR_PAD: unknown;
        /** Type is unknown. One known value: 5 */
        SCROLLBAR_CARET: unknown;
        /** Type is unknown. One known value: 6 */
        CAPTION_IMPORTANT: unknown;
        /** Type is unknown. One known value: 7 */
        CAPTION: unknown;
        /** Type is unknown. One known value: 8 */
        PARAM_PANEL: unknown;
        /** Type is unknown. One known value: 9 */
        DRAG_PARENT: unknown;
        /** Type is unknown. One known value: 10 */
        COLOR_PICKER: unknown;
        /** Type is unknown. One known value: 11 */
        COLOR_PALETTE: unknown;
        /** Type is unknown. One known value: 12 */
        CONTAINER: unknown;
        /** Type is unknown. One known value: 13 */
        HUD_RECT: unknown;
        /** Type is unknown. One known value: 14 */
        SAYBOX: unknown;
        /** Type is unknown. One known value: 15 */
        ICON_BUTTON: unknown;
        /** Type is unknown. One known value: 16 */
        PROGRESS_BAR_SEGMENT: unknown;
        /** Type is unknown. One known value: 17 */
        STRETCH_PARENT: unknown;
        /** Type is unknown. One known value: 18 */
        LEADERBOARD: unknown;
        /** Type is unknown. One known value: 19 */
        LEADERBOARD_PLAYERS_LIST: unknown;
        /** Type is unknown. One known value: 20 */
        CAPTION_CENTERED: unknown;
        /** Type is unknown. One known value: 21 */
        PERFORMANCE_GRAPH: unknown;
        /** Type is unknown. One known value: 22 */
        CLOCK: unknown;
        /** Type is unknown. One known value: 23 */
        BUTTON_HOLO: unknown;
        /** Type is unknown. One known value: 24 */
        HUD_RECT_SOLID: unknown;
        /** Type is unknown. One known value: ["freeedit","wall","movable","region","pusher","bg","water","compound_character","entity","decoration","gun","usable_switch","lamp","barrel","trigger","timer","info","song","image","scale","surface","group","group_expanded","group_item","group_last","team","area","point","vector","circle","fire","window","set","text","bleeding","frozen","water_class","execute","bullet","usercode","comment","code","instance","boolean","camera","bar","nothing","group_non_item","ragdoll","character","controller","ai_preset","skin","skin_userdata","group_tool","surface_old","crate","lamp_dynamic","visible_1","visible_0","locked_0","locked_1","timer_inline","module","animated_point","cross","sound","sound_preloader","movable_sounds_preset","ai_hint","blue_question","window_hint","var","transform_selection","disabled_0","disabled_1","model_preloader","model"] */
        icons16_names: unknown;
        /** maps name (one of pb2Window.icon16_names) to id */
        icons16_names_to_id: {[k: string]: number};
    }
}
