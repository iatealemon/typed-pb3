export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2GameWorld: ClassIdentityProps<"pb2GameWorld"> & {
        controller: pb2Controller | null;
        spectated_ragdoll: pb2Ragdoll | null;
        /** Not known if this is always of type pb2Controller */
        personal_virtual_controller: pb2Controller;
        isHost: boolean;
        user_uid: number;
        nickname_tagged: string;
        settings: {
            graphics: {
                /** Type is unknown. One known value: 2 */
                build_3d_environment: TODO;
                /** Type is unknown. One known value: 50 */
                water_reflections: TODO;
                /** Type is unknown. One known value: 2 */
                spawn_3d_debris: TODO;
                /** Type is unknown. One known value: 1 */
                ui_scale: TODO;
            }
            gameplay: {
                /** Type is unknown. One known value: 3 */
                gore_and_violence: TODO;
                /** Type is unknown. One known value: 1 */
                show_damage_numbers: TODO;
                /** Type is unknown. One known value: 2 */
                replay_my_deaths: TODO;
                /** Type is unknown. One known value: 3 */
                camera: TODO;
            }
            input: {
                /** Type is unknown. One known value: 0.125 */
                screen_cursor_follow_speed: TODO;
                /** Type is unknown. One known value: 0.75 */
                screen_character_follow_softness: TODO;
            }
            network: {
                /** Type is unknown. One known value: 61 */
                world_state_receive_rate: TODO;
            }
            __limits_obj: {
                /** Type is unknown. One known value: undefined */
                graphics: TODO;
                /** Type is unknown. One known value: undefined */
                gameplay: TODO;
                /** Type is unknown. One known value: undefined */
                input: TODO;
                /** Type is unknown. One known value: undefined */
                network: TODO;
            }
        }
        GetPing: () => TODO;
        ClearAllKeyActionsAndStates: () => TODO;
        /** @param mode (default=1)  */
        DebugTraceAnyPressedKeys: (mode?: TODO) => TODO;
        /**
         * @param location_keycode_pair   
         * @param onKeyDown (default=null)   
         * @param onKeyUp (default=null)   
         */
        SetKeyActions: (location_keycode_pair: TODO, onKeyDown?: TODO, onKeyUp?: TODO) => TODO;
        GetKeyState: (location_keycode_pair: TODO) => TODO;
        PauseTrustedControlsTemporarily: () => TODO;
        FinalizeWorld: () => TODO;
        FinalizeNewMovables: () => TODO;
        /** @param v (default=true)  */
        EnableSimplePlayerAssignmentLogic: (v?: TODO) => TODO;
        /**
         * @param params   
         * @param mode (default='modules')   
         */
        DownloadModules: (params: TODO, mode?: TODO) => TODO;
        DownloadTextures: (params: TODO) => TODO;
        DownloadSounds: (params: TODO) => TODO;
        DownloadModels: (params: TODO) => TODO;
        /** @param dVG (default=true)  */
        GetAllModules: (dVG?: TODO) => TODO;
        GetInitialModules: () => TODO;
        /**
         * @param params   
         * @param type (default=undefined)   
         */
        CreateBoxShape: (params: TODO, type?: TODO) => TODO;
        sun_color: number;
        sky_color: number;
        default_lamp_color: number;
        sun_intensity: number;
        sky_intensity: number;
        light_power_multiplier: number;
        fog_intensity: number;
        foreground_snow: boolean;
        background_snow: boolean;
        snowing: boolean;
        raining: boolean;
        wind_amplitude: number;
        wind_random_part: number;
        background_terrain_random_seed: number;
        foreground_terrain_random_seed: number;
        foreground_platform_random_seed: number;
        foliage_random_seed: number;
        foliage_shadow_multiplier: number;
        foliage_maximum_animation_distance: number;
        sun_shade_x: number;
        sun_shade_y: number;
        terrain_enabled: boolean;
        terrain_solve_random_factor: number;
        terrain_sky_ground_contrast: number;
        terrain_extra_sky_ground_contrast: number;
        terrain_fractal_cube_size: number;
        terrain_level_influence_factor: number;
        terrain_extra_space_x: number;
        terrain_extra_space_y: number;
        terrain_force_low_level_terrain: boolean;
        terrain_phys_scale: number;
        terrain_size_z: number;
        terrain_start_z: number | undefined;
        terrain_post_tesselation_grass_noise: number;
        terrain_y_offset: number;
        terrain_remove_floating_islands: boolean;
        terrain_uv_relax_iterations: number;
        /**
         * @param controller   
         * @param soft (default=true)   
         */
        SetToController: (controller: TODO, soft?: TODO) => TODO;
        SetToSpectateRagdoll: (ragdoll: TODO) => TODO;
        SetToFreeCamera: () => TODO;
        SetDisconnectActionDescriptionStructure: () => TODO;
        IsHostSpectating: () => TODO;
        IsWatchingReplay: () => TODO;
        StartPointOfViewReplay: () => TODO;
        SetReplayTimeScale: () => TODO;
        CancelPointOfViewReplay: () => TODO;
        connected: boolean;
        Disconnect: () => TODO;
        hud_visible: boolean;
        hud_show_character_info: boolean;
        hud_custom_bars: TODO[];
        /**
         * @param text   
         * @param user_uid (default=-2)   
         * @param channel_id (default=-1)   
         * @param auto_channel_id (default=-1)   
         * @param message_counter (default=-1)   
         */
        ShowChatMessage: (text: string, user_uid?: TODO, channel_id?: TODO, auto_channel_id?: TODO, message_counter?: TODO) => TODO;
        ShakeScreen: (amount: number, from_gun: TODO, ignore_when_speculative_player_enabled: TODO) => TODO;
        /** @param amount (default=75)  */
        FlashScreen: (amount?: number) => TODO;
        GetBounds: () => TODO;
    }
}
