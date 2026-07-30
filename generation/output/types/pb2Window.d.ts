export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Window extends ClassIdentityProps<"pb2Window"> {
        x: unknown;
        y: unknown;
        x2: unknown;
        y2: unknown;
        w: unknown;
        h: unknown;
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
        readonly is_being_removed: unknown;
    }
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
        icons16_names_to_id: {
            /** Type is unknown. One known value: 0 */
            freeedit: unknown;
            /** Type is unknown. One known value: 1 */
            wall: unknown;
            /** Type is unknown. One known value: 2 */
            movable: unknown;
            /** Type is unknown. One known value: 3 */
            region: unknown;
            /** Type is unknown. One known value: 4 */
            pusher: unknown;
            /** Type is unknown. One known value: 5 */
            bg: unknown;
            /** Type is unknown. One known value: 6 */
            water: unknown;
            /** Type is unknown. One known value: 7 */
            compound_character: unknown;
            /** Type is unknown. One known value: 8 */
            entity: unknown;
            /** Type is unknown. One known value: 9 */
            decoration: unknown;
            /** Type is unknown. One known value: 10 */
            gun: unknown;
            /** Type is unknown. One known value: 11 */
            usable_switch: unknown;
            /** Type is unknown. One known value: 12 */
            lamp: unknown;
            /** Type is unknown. One known value: 13 */
            barrel: unknown;
            /** Type is unknown. One known value: 14 */
            trigger: unknown;
            /** Type is unknown. One known value: 15 */
            timer: unknown;
            /** Type is unknown. One known value: 16 */
            info: unknown;
            /** Type is unknown. One known value: 17 */
            song: unknown;
            /** Type is unknown. One known value: 18 */
            image: unknown;
            /** Type is unknown. One known value: 19 */
            scale: unknown;
            /** Type is unknown. One known value: 20 */
            surface: unknown;
            /** Type is unknown. One known value: 21 */
            group: unknown;
            /** Type is unknown. One known value: 22 */
            group_expanded: unknown;
            /** Type is unknown. One known value: 23 */
            group_item: unknown;
            /** Type is unknown. One known value: 24 */
            group_last: unknown;
            /** Type is unknown. One known value: 25 */
            team: unknown;
            /** Type is unknown. One known value: 26 */
            area: unknown;
            /** Type is unknown. One known value: 27 */
            point: unknown;
            /** Type is unknown. One known value: 28 */
            vector: unknown;
            /** Type is unknown. One known value: 29 */
            circle: unknown;
            /** Type is unknown. One known value: 30 */
            fire: unknown;
            /** Type is unknown. One known value: 31 */
            window: unknown;
            /** Type is unknown. One known value: 32 */
            set: unknown;
            /** Type is unknown. One known value: 33 */
            text: unknown;
            /** Type is unknown. One known value: 34 */
            bleeding: unknown;
            /** Type is unknown. One known value: 35 */
            frozen: unknown;
            /** Type is unknown. One known value: 36 */
            water_class: unknown;
            /** Type is unknown. One known value: 37 */
            execute: unknown;
            /** Type is unknown. One known value: 38 */
            bullet: unknown;
            /** Type is unknown. One known value: 39 */
            usercode: unknown;
            /** Type is unknown. One known value: 40 */
            comment: unknown;
            /** Type is unknown. One known value: 41 */
            code: unknown;
            /** Type is unknown. One known value: 42 */
            instance: unknown;
            /** Type is unknown. One known value: 43 */
            boolean: unknown;
            /** Type is unknown. One known value: 44 */
            camera: unknown;
            /** Type is unknown. One known value: 45 */
            bar: unknown;
            /** Type is unknown. One known value: 46 */
            nothing: unknown;
            /** Type is unknown. One known value: 47 */
            group_non_item: unknown;
            /** Type is unknown. One known value: 48 */
            ragdoll: unknown;
            /** Type is unknown. One known value: 49 */
            character: unknown;
            /** Type is unknown. One known value: 50 */
            controller: unknown;
            /** Type is unknown. One known value: 51 */
            ai_preset: unknown;
            /** Type is unknown. One known value: 52 */
            skin: unknown;
            /** Type is unknown. One known value: 53 */
            skin_userdata: unknown;
            /** Type is unknown. One known value: 54 */
            group_tool: unknown;
            /** Type is unknown. One known value: 55 */
            surface_old: unknown;
            /** Type is unknown. One known value: 56 */
            crate: unknown;
            /** Type is unknown. One known value: 57 */
            lamp_dynamic: unknown;
            /** Type is unknown. One known value: 58 */
            visible_1: unknown;
            /** Type is unknown. One known value: 59 */
            visible_0: unknown;
            /** Type is unknown. One known value: 60 */
            locked_0: unknown;
            /** Type is unknown. One known value: 61 */
            locked_1: unknown;
            /** Type is unknown. One known value: 62 */
            timer_inline: unknown;
            /** Type is unknown. One known value: 63 */
            module: unknown;
            /** Type is unknown. One known value: 64 */
            animated_point: unknown;
            /** Type is unknown. One known value: 65 */
            cross: unknown;
            /** Type is unknown. One known value: 66 */
            sound: unknown;
            /** Type is unknown. One known value: 67 */
            sound_preloader: unknown;
            /** Type is unknown. One known value: 68 */
            movable_sounds_preset: unknown;
            /** Type is unknown. One known value: 69 */
            ai_hint: unknown;
            /** Type is unknown. One known value: 70 */
            blue_question: unknown;
            /** Type is unknown. One known value: 71 */
            window_hint: unknown;
            /** Type is unknown. One known value: 72 */
            var: unknown;
            /** Type is unknown. One known value: 73 */
            transform_selection: unknown;
            /** Type is unknown. One known value: 74 */
            disabled_0: unknown;
            /** Type is unknown. One known value: 75 */
            disabled_1: unknown;
            /** Type is unknown. One known value: 76 */
            model_preloader: unknown;
            /** Type is unknown. One known value: 77 */
            model: unknown;
        }
    }
}
