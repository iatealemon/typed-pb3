export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Controller extends ClassIdentityProps<"pb2Controller"> {
        readonly character: pb2Character | null;
        readonly player_connection: TODO | null;
        act_x: number;
        act_y: number;
        look_x: number;
        look_y: number;
        act_fall: number;
        act_fire: number;
        act_fire2: number;
        act_grab: number;
        act_sprint: number;
        readonly _is_typing: undefined;
        readonly _is_in_menu: undefined;
        remove: () => TODO;
        readonly zoom: number;
        /**
         * @param c   
         * @param cGz (default=false)   
         */
        CopyStateFrom: (c: TODO, cGz?: TODO) => TODO;
        /**
         * @param to   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_INVERSEMORPH)   
         */
        StartZoomMorph: (to: TODO, param?: TODO, func?: TODO) => TODO;
        StopZoomMorph: () => TODO;
        /**
         * @param to_x   
         * @param to_y   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_MORPH)   
         */
        StartPositionMorph: (to_x: number, to_y: number, param?: TODO, func?: TODO) => TODO;
        StopPositionMorph: () => TODO;
        readonly camera_position_forced: boolean;
        readonly camera_position_target_x: number;
        readonly camera_position_target_y: number;
        readonly zoom_changing: boolean;
        readonly target_zoom: number;
        /** @param stable (default=false)  */
        ScreenMinX: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMaxX: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMinY: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMaxY: (stable?: TODO) => TODO;
        ai: pb2AIModule | null;
        allow_damage_report_flash: boolean;
        color_mult: pb2HighRangeColor;
        color_add: pb2HighRangeColor;
        readonly UpdateScreenColor: undefined;
        damage_report_flash_current: number;
        player_controllable: boolean;
        readonly damage_dealt_players_tot: number;
        readonly damage_dealt_entities_tot: number;
        readonly eliminations_players_tot: number;
        readonly eliminations_entities_tot: number;
    }
    var pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        default_zoom_on_foot: number;
        default_zoom_driving: number;
        vehicle_in_out_param: number;
        /** Type is unknown. One known value: 3 */
        vehicle_in_out_func: TODO;
        /**
         * @param params Object containing parameters
         * @param params.character (default=null) The character's `controller` property will automatically be set to this controller.
         * @param params.player_controllable (default=false)
         * @param params.ai_preset (default=undefined)
         */
        CreateController: (params: {
            character?: pb2Character | null,
            player_controllable?: boolean,
            ai_preset?: AIPreset | null
        }) => pb2Controller;
        controllers: pb2Controller[];
    }
}
