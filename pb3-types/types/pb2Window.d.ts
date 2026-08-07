export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

export type pb2WindowBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
    tooltip: TODO;
    readonly type: TODO;
    /**
     * @param cWC   
     * @param cWE (default=true)   
     * @param Hi (default=true)   
     */
    SetVisibilityFor: (cWC: TODO, cWE?: TODO, Hi?: TODO) => TODO;
    SendChanges: () => TODO;
    visible: TODO;
    requires_ctrl_key: TODO;
    ignore_mouse_events: TODO;
    click_animation: TODO;
    /**
     * @param txt   
     * @param size (default=12)   
     * @param cMI (default=false)   
     * @param nu (default=false)   
     */
    SetText: (txt: TODO, size?: TODO, cMI?: TODO, nu?: TODO) => TODO;
    /** @param c (default=null)  */
    remove: (c?: TODO) => TODO;
    readonly parent: TODO;
    readonly childs: TODO;
    GetTypeSpecificStructure: () => TODO;
    SetTypeSpecificStructure: (Ap: TODO) => TODO;
    readonly is_being_removed: boolean;
};

declare global {
    interface pb2Window extends pb2WindowBase<"pb2Window"> {}
    var pb2Window: ClassIdentityProps<"pb2Window"> & {
        /** return type may be different based on the parameters passed in */
        CreateWindow: (params: TODO) => pb2Window;
        /** Type is unknown. One known value: 0 */
        DIALOGBOX: TODO;
        /** Type is unknown. One known value: 1 */
        BUTTON: TODO;
        /** Type is unknown. One known value: 2 */
        SCREEN_BLOCKING_BOX: TODO;
        /** Type is unknown. One known value: 3 */
        SCROLL_LIST: TODO;
        /** Type is unknown. One known value: 4 */
        SCROLLBAR_PAD: TODO;
        /** Type is unknown. One known value: 5 */
        SCROLLBAR_CARET: TODO;
        /** Type is unknown. One known value: 6 */
        CAPTION_IMPORTANT: TODO;
        /** Type is unknown. One known value: 7 */
        CAPTION: TODO;
        /** Type is unknown. One known value: 8 */
        PARAM_PANEL: TODO;
        /** Type is unknown. One known value: 9 */
        DRAG_PARENT: TODO;
        /** Type is unknown. One known value: 10 */
        COLOR_PICKER: TODO;
        /** Type is unknown. One known value: 11 */
        COLOR_PALETTE: TODO;
        /** Type is unknown. One known value: 12 */
        CONTAINER: TODO;
        /** Type is unknown. One known value: 13 */
        HUD_RECT: TODO;
        /** Type is unknown. One known value: 14 */
        SAYBOX: TODO;
        /** Type is unknown. One known value: 15 */
        ICON_BUTTON: TODO;
        /** Type is unknown. One known value: 16 */
        PROGRESS_BAR_SEGMENT: TODO;
        /** Type is unknown. One known value: 17 */
        STRETCH_PARENT: TODO;
        /** Type is unknown. One known value: 18 */
        LEADERBOARD: TODO;
        /** Type is unknown. One known value: 19 */
        LEADERBOARD_PLAYERS_LIST: TODO;
        /** Type is unknown. One known value: 20 */
        CAPTION_CENTERED: TODO;
        /** Type is unknown. One known value: 21 */
        PERFORMANCE_GRAPH: TODO;
        /** Type is unknown. One known value: 22 */
        CLOCK: TODO;
        /** Type is unknown. One known value: 23 */
        BUTTON_HOLO: TODO;
        /** Type is unknown. One known value: 24 */
        HUD_RECT_SOLID: TODO;
        /** Type is unknown. One known value: ["freeedit","wall","movable","region","pusher","bg","water","compound_character","entity","decoration","gun","usable_switch","lamp","barrel","trigger","timer","info","song","image","scale","surface","group","group_expanded","group_item","group_last","team","area","point","vector","circle","fire","window","set","text","bleeding","frozen","water_class","execute","bullet","usercode","comment","code","instance","boolean","camera","bar","nothing","group_non_item","ragdoll","character","controller","ai_preset","skin","skin_userdata","group_tool","surface_old","crate","lamp_dynamic","visible_1","visible_0","locked_0","locked_1","timer_inline","module","animated_point","cross","sound","sound_preloader","movable_sounds_preset","ai_hint","blue_question","window_hint","var","transform_selection","disabled_0","disabled_1","model_preloader","model"] */
        icons16_names: TODO;
        /** maps name (one of pb2Window.icon16_names) to id */
        icons16_names_to_id: {[k: string]: number};
    }
}
