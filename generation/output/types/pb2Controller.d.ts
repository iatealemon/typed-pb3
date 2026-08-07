export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Controller extends ClassIdentityProps<"pb2Controller"> {
        readonly character: TODO;
        readonly player_connection: TODO;
        act_x: TODO;
        act_y: TODO;
        look_x: TODO;
        look_y: TODO;
        act_fall: TODO;
        act_fire: TODO;
        act_fire2: TODO;
        act_grab: TODO;
        act_sprint: TODO;
        readonly _is_typing: TODO;
        readonly _is_in_menu: TODO;
        remove: () => TODO;
        readonly zoom: TODO;
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
        StartPositionMorph: (to_x: TODO, to_y: TODO, param?: TODO, func?: TODO) => TODO;
        StopPositionMorph: () => TODO;
        readonly camera_position_forced: TODO;
        readonly camera_position_target_x: TODO;
        readonly camera_position_target_y: TODO;
        readonly zoom_changing: TODO;
        readonly target_zoom: TODO;
        /** @param stable (default=false)  */
        ScreenMinX: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMaxX: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMinY: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMaxY: (stable?: TODO) => TODO;
        ai: TODO;
        allow_damage_report_flash: TODO;
        color_mult: TODO;
        color_add: TODO;
        readonly UpdateScreenColor: TODO;
        damage_report_flash_current: TODO;
        player_controllable: TODO;
        readonly damage_dealt_players_tot: TODO;
        readonly damage_dealt_entities_tot: TODO;
        readonly eliminations_players_tot: TODO;
        readonly eliminations_entities_tot: TODO;
    }
    var pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        /** Type is unknown. One known value: 1.2 */
        default_zoom_on_foot: TODO;
        /** Type is unknown. One known value: 0.8 */
        default_zoom_driving: TODO;
        /** Type is unknown. One known value: 0.9 */
        vehicle_in_out_param: TODO;
        /** Type is unknown. One known value: 3 */
        vehicle_in_out_func: TODO;
        CreateController: (params: TODO) => TODO;
        /** Type is unknown. One known value: [] */
        controllers: TODO;
    }
}
