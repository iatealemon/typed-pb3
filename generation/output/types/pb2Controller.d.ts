export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Controller extends ClassIdentityProps<"pb2Controller"> {
        readonly character: unknown;
        readonly player_connection: unknown;
        act_x: unknown;
        act_y: unknown;
        look_x: unknown;
        look_y: unknown;
        act_fall: unknown;
        act_fire: unknown;
        act_fire2: unknown;
        act_grab: unknown;
        act_sprint: unknown;
        readonly _is_typing: unknown;
        readonly _is_in_menu: unknown;
        remove: () => unknown;
        readonly zoom: unknown;
        /**
         * @param c   
         * @param cGz (default=false)   
         */
        CopyStateFrom: (c: unknown, cGz?: unknown) => unknown;
        /**
         * @param to   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_INVERSEMORPH)   
         */
        StartZoomMorph: (to: unknown, param?: unknown, func?: unknown) => unknown;
        StopZoomMorph: () => unknown;
        /**
         * @param to_x   
         * @param to_y   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_MORPH)   
         */
        StartPositionMorph: (to_x: unknown, to_y: unknown, param?: unknown, func?: unknown) => unknown;
        StopPositionMorph: () => unknown;
        readonly camera_position_forced: unknown;
        readonly camera_position_target_x: unknown;
        readonly camera_position_target_y: unknown;
        readonly zoom_changing: unknown;
        readonly target_zoom: unknown;
        /** @param stable (default=false)  */
        ScreenMinX: (stable?: unknown) => unknown;
        /** @param stable (default=false)  */
        ScreenMaxX: (stable?: unknown) => unknown;
        /** @param stable (default=false)  */
        ScreenMinY: (stable?: unknown) => unknown;
        /** @param stable (default=false)  */
        ScreenMaxY: (stable?: unknown) => unknown;
        ai: unknown;
        allow_damage_report_flash: unknown;
        color_mult: unknown;
        color_add: unknown;
        readonly UpdateScreenColor: unknown;
        damage_report_flash_current: unknown;
        player_controllable: unknown;
        readonly damage_dealt_players_tot: unknown;
        readonly damage_dealt_entities_tot: unknown;
        readonly eliminations_players_tot: unknown;
        readonly eliminations_entities_tot: unknown;
    }
    var pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        /** Type is unknown. One known value: 1.2 */
        default_zoom_on_foot: unknown;
        /** Type is unknown. One known value: 0.8 */
        default_zoom_driving: unknown;
        /** Type is unknown. One known value: 0.9 */
        vehicle_in_out_param: unknown;
        /** Type is unknown. One known value: 3 */
        vehicle_in_out_func: unknown;
        CreateController: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        controllers: unknown;
    }
}
