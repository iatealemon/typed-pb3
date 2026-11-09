export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Window extends ClassIdentityProps<"pb2Window"> {
        x: TODO;
        y: TODO;
        x2: TODO;
        y2: TODO;
        w: TODO;
        h: TODO;
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
        readonly is_being_removed: TODO;
    }
    var pb2Window: ClassIdentityProps<"pb2Window"> & {
        CreateWindow: (params: TODO) => TODO;
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
        /** Type is unknown. One known value: ["freeedit","wall","movable","region","pusher","bg","water","compound_character","entity","decoration","gun","usable_switch","lamp","barrel","trigger","timer","info","song","image","scale","surface","group","group_expanded","group_item","group_last","team","area","point","vector","circle","fire","window","set","text","bleeding","frozen","water_class","execute","bullet","usercode","comment","code","instance","boolean","camera","bar","nothing","group_non_item","ragdoll","character","controller","ai_preset","skin","skin_userdata","group_tool","surface_old","crate","lamp_dynamic","visible_1","visible_0","locked_0","locked_1","timer_inline","module","animated_point","cross","sound","sound_preloader","movable_sounds_preset","ai_hint","blue_question","window_hint","var","transform_selection","disabled_0","disabled_1","model_preloader","model","spawner","2cubes","key","chest","teleport","device","device2","exit","in","out","joint","hook","explosion","minigame","armor","ammo","turret","radiation","bubble","spikes","medikit","box","button","coin","tower","aircraft","cake","h","symmetry","refresh","shiny_blue","target","respawn_area","pusherjion","damagerea","damagegion","capsule_r","capsule_g","capsule_b","crystal_r","crystal_g","crystal_b","crystal_w","virus_r","virus_g","virus_b","drone_r","drone_g","drone_b","beacon","defender_r","defender_k","defender_b","compound_character_player","code_bg","code_fg","code_fg_darker"] */
        icons16_names: TODO;
        icons16_names_to_id: {
            /** Type is unknown. One known value: 0 */
            freeedit: TODO;
            /** Type is unknown. One known value: 1 */
            wall: TODO;
            /** Type is unknown. One known value: 2 */
            movable: TODO;
            /** Type is unknown. One known value: 3 */
            region: TODO;
            /** Type is unknown. One known value: 4 */
            pusher: TODO;
            /** Type is unknown. One known value: 5 */
            bg: TODO;
            /** Type is unknown. One known value: 6 */
            water: TODO;
            /** Type is unknown. One known value: 7 */
            compound_character: TODO;
            /** Type is unknown. One known value: 8 */
            entity: TODO;
            /** Type is unknown. One known value: 9 */
            decoration: TODO;
            /** Type is unknown. One known value: 10 */
            gun: TODO;
            /** Type is unknown. One known value: 11 */
            usable_switch: TODO;
            /** Type is unknown. One known value: 12 */
            lamp: TODO;
            /** Type is unknown. One known value: 13 */
            barrel: TODO;
            /** Type is unknown. One known value: 14 */
            trigger: TODO;
            /** Type is unknown. One known value: 15 */
            timer: TODO;
            /** Type is unknown. One known value: 16 */
            info: TODO;
            /** Type is unknown. One known value: 17 */
            song: TODO;
            /** Type is unknown. One known value: 18 */
            image: TODO;
            /** Type is unknown. One known value: 19 */
            scale: TODO;
            /** Type is unknown. One known value: 20 */
            surface: TODO;
            /** Type is unknown. One known value: 21 */
            group: TODO;
            /** Type is unknown. One known value: 22 */
            group_expanded: TODO;
            /** Type is unknown. One known value: 23 */
            group_item: TODO;
            /** Type is unknown. One known value: 24 */
            group_last: TODO;
            /** Type is unknown. One known value: 25 */
            team: TODO;
            /** Type is unknown. One known value: 26 */
            area: TODO;
            /** Type is unknown. One known value: 27 */
            point: TODO;
            /** Type is unknown. One known value: 28 */
            vector: TODO;
            /** Type is unknown. One known value: 29 */
            circle: TODO;
            /** Type is unknown. One known value: 30 */
            fire: TODO;
            /** Type is unknown. One known value: 31 */
            window: TODO;
            /** Type is unknown. One known value: 32 */
            set: TODO;
            /** Type is unknown. One known value: 33 */
            text: TODO;
            /** Type is unknown. One known value: 34 */
            bleeding: TODO;
            /** Type is unknown. One known value: 35 */
            frozen: TODO;
            /** Type is unknown. One known value: 36 */
            water_class: TODO;
            /** Type is unknown. One known value: 37 */
            execute: TODO;
            /** Type is unknown. One known value: 38 */
            bullet: TODO;
            /** Type is unknown. One known value: 39 */
            usercode: TODO;
            /** Type is unknown. One known value: 40 */
            comment: TODO;
            /** Type is unknown. One known value: 41 */
            code: TODO;
            /** Type is unknown. One known value: 42 */
            instance: TODO;
            /** Type is unknown. One known value: 43 */
            boolean: TODO;
            /** Type is unknown. One known value: 44 */
            camera: TODO;
            /** Type is unknown. One known value: 45 */
            bar: TODO;
            /** Type is unknown. One known value: 46 */
            nothing: TODO;
            /** Type is unknown. One known value: 47 */
            group_non_item: TODO;
            /** Type is unknown. One known value: 48 */
            ragdoll: TODO;
            /** Type is unknown. One known value: 49 */
            character: TODO;
            /** Type is unknown. One known value: 50 */
            controller: TODO;
            /** Type is unknown. One known value: 51 */
            ai_preset: TODO;
            /** Type is unknown. One known value: 52 */
            skin: TODO;
            /** Type is unknown. One known value: 53 */
            skin_userdata: TODO;
            /** Type is unknown. One known value: 54 */
            group_tool: TODO;
            /** Type is unknown. One known value: 55 */
            surface_old: TODO;
            /** Type is unknown. One known value: 56 */
            crate: TODO;
            /** Type is unknown. One known value: 57 */
            lamp_dynamic: TODO;
            /** Type is unknown. One known value: 58 */
            visible_1: TODO;
            /** Type is unknown. One known value: 59 */
            visible_0: TODO;
            /** Type is unknown. One known value: 60 */
            locked_0: TODO;
            /** Type is unknown. One known value: 61 */
            locked_1: TODO;
            /** Type is unknown. One known value: 62 */
            timer_inline: TODO;
            /** Type is unknown. One known value: 63 */
            module: TODO;
            /** Type is unknown. One known value: 64 */
            animated_point: TODO;
            /** Type is unknown. One known value: 65 */
            cross: TODO;
            /** Type is unknown. One known value: 66 */
            sound: TODO;
            /** Type is unknown. One known value: 67 */
            sound_preloader: TODO;
            /** Type is unknown. One known value: 68 */
            movable_sounds_preset: TODO;
            /** Type is unknown. One known value: 69 */
            ai_hint: TODO;
            /** Type is unknown. One known value: 70 */
            blue_question: TODO;
            /** Type is unknown. One known value: 71 */
            window_hint: TODO;
            /** Type is unknown. One known value: 72 */
            var: TODO;
            /** Type is unknown. One known value: 73 */
            transform_selection: TODO;
            /** Type is unknown. One known value: 74 */
            disabled_0: TODO;
            /** Type is unknown. One known value: 75 */
            disabled_1: TODO;
            /** Type is unknown. One known value: 76 */
            model_preloader: TODO;
            /** Type is unknown. One known value: 77 */
            model: TODO;
            /** Type is unknown. One known value: 78 */
            spawner: TODO;
            /** Type is unknown. One known value: 79 */
            "2cubes": TODO;
            /** Type is unknown. One known value: 80 */
            key: TODO;
            /** Type is unknown. One known value: 81 */
            chest: TODO;
            /** Type is unknown. One known value: 82 */
            teleport: TODO;
            /** Type is unknown. One known value: 83 */
            device: TODO;
            /** Type is unknown. One known value: 84 */
            device2: TODO;
            /** Type is unknown. One known value: 85 */
            exit: TODO;
            /** Type is unknown. One known value: 86 */
            in: TODO;
            /** Type is unknown. One known value: 87 */
            out: TODO;
            /** Type is unknown. One known value: 88 */
            joint: TODO;
            /** Type is unknown. One known value: 89 */
            hook: TODO;
            /** Type is unknown. One known value: 90 */
            explosion: TODO;
            /** Type is unknown. One known value: 91 */
            minigame: TODO;
            /** Type is unknown. One known value: 92 */
            armor: TODO;
            /** Type is unknown. One known value: 93 */
            ammo: TODO;
            /** Type is unknown. One known value: 94 */
            turret: TODO;
            /** Type is unknown. One known value: 95 */
            radiation: TODO;
            /** Type is unknown. One known value: 96 */
            bubble: TODO;
            /** Type is unknown. One known value: 97 */
            spikes: TODO;
            /** Type is unknown. One known value: 98 */
            medikit: TODO;
            /** Type is unknown. One known value: 99 */
            box: TODO;
            /** Type is unknown. One known value: 100 */
            button: TODO;
            /** Type is unknown. One known value: 101 */
            coin: TODO;
            /** Type is unknown. One known value: 102 */
            tower: TODO;
            /** Type is unknown. One known value: 103 */
            aircraft: TODO;
            /** Type is unknown. One known value: 104 */
            cake: TODO;
            /** Type is unknown. One known value: 105 */
            h: TODO;
            /** Type is unknown. One known value: 106 */
            symmetry: TODO;
            /** Type is unknown. One known value: 107 */
            refresh: TODO;
            /** Type is unknown. One known value: 108 */
            shiny_blue: TODO;
            /** Type is unknown. One known value: 109 */
            target: TODO;
            /** Type is unknown. One known value: 110 */
            respawn_area: TODO;
            /** Type is unknown. One known value: 111 */
            pusherjion: TODO;
            /** Type is unknown. One known value: 112 */
            damagerea: TODO;
            /** Type is unknown. One known value: 113 */
            damagegion: TODO;
            /** Type is unknown. One known value: 114 */
            capsule_r: TODO;
            /** Type is unknown. One known value: 115 */
            capsule_g: TODO;
            /** Type is unknown. One known value: 116 */
            capsule_b: TODO;
            /** Type is unknown. One known value: 117 */
            crystal_r: TODO;
            /** Type is unknown. One known value: 118 */
            crystal_g: TODO;
            /** Type is unknown. One known value: 119 */
            crystal_b: TODO;
            /** Type is unknown. One known value: 120 */
            crystal_w: TODO;
            /** Type is unknown. One known value: 121 */
            virus_r: TODO;
            /** Type is unknown. One known value: 122 */
            virus_g: TODO;
            /** Type is unknown. One known value: 123 */
            virus_b: TODO;
            /** Type is unknown. One known value: 124 */
            drone_r: TODO;
            /** Type is unknown. One known value: 125 */
            drone_g: TODO;
            /** Type is unknown. One known value: 126 */
            drone_b: TODO;
            /** Type is unknown. One known value: 127 */
            beacon: TODO;
            /** Type is unknown. One known value: 128 */
            defender_r: TODO;
            /** Type is unknown. One known value: 129 */
            defender_k: TODO;
            /** Type is unknown. One known value: 130 */
            defender_b: TODO;
            /** Type is unknown. One known value: 131 */
            compound_character_player: TODO;
            /** Type is unknown. One known value: 132 */
            code_bg: TODO;
            /** Type is unknown. One known value: 133 */
            code_fg: TODO;
            /** Type is unknown. One known value: 134 */
            code_fg_darker: TODO;
        }
    }
}
