import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        CreateController(...args: unknown[]): unknown;
        controllers: unknown;
        readonly default_zoom_driving: unknown;
        readonly default_zoom_on_foot: unknown;
        readonly vehicle_in_out_func: unknown;
        readonly vehicle_in_out_param: unknown;
    };
    
    /** unfinished auto-generated */
    type pb2ControllerInstance = ClassIdentityProps<"pb2Controller"> & {
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
        readonly remove: unknown;
        readonly zoom: unknown;
        readonly CopyStateFrom: unknown;
        readonly StartZoomMorph: unknown;
        readonly StopZoomMorph: unknown;
        readonly StartPositionMorph: unknown;
        readonly StopPositionMorph: unknown;
        readonly camera_position_forced: unknown;
        readonly camera_position_target_x: unknown;
        readonly camera_position_target_y: unknown;
        readonly zoom_changing: unknown;
        readonly target_zoom: unknown;
        readonly ScreenMinX: unknown;
        readonly ScreenMaxX: unknown;
        readonly ScreenMinY: unknown;
        readonly ScreenMaxY: unknown;
        ai: unknown;
        allow_damage_report_flash: unknown;
        color_mult: unknown;
        color_add: unknown;
        readonly UpdateScreenColor: unknown;
        damage_report_flash_current: unknown;
        player_controllable: unknown;
    };
}