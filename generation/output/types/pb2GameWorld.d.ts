export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2GameWorld: ClassIdentityProps<"pb2GameWorld"> & {
        /** Not known if this is always of type pb2Controller */
        controller: pb2Controller;
        /** Type is unknown. One known value: null */
        spectated_ragdoll: TODO;
        /** Not known if this is always of type pb2Controller */
        personal_virtual_controller: pb2Controller;
        /** Type is unknown. One known value: true */
        isHost: TODO;
        /** Type is unknown. One known value: 454 */
        user_uid: TODO;
        /** Type is unknown. One known value: "jeje" */
        nickname_tagged: TODO;
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
        /** Type is unknown. One known value: 14542847 */
        sun_color: TODO;
        /** Type is unknown. One known value: 14542847 */
        sky_color: TODO;
        /** Type is unknown. One known value: 16777215 */
        default_lamp_color: TODO;
        /** Type is unknown. One known value: 0.025 */
        sun_intensity: TODO;
        /** Type is unknown. One known value: 0.6 */
        sky_intensity: TODO;
        /** Type is unknown. One known value: 1 */
        light_power_multiplier: TODO;
        /** Type is unknown. One known value: undefined */
        fog_intensity: TODO;
        /** Type is unknown. One known value: false */
        foreground_snow: TODO;
        /** Type is unknown. One known value: false */
        background_snow: TODO;
        /** Type is unknown. One known value: false */
        snowing: TODO;
        /** Type is unknown. One known value: false */
        raining: TODO;
        /** Type is unknown. One known value: 1.4364187211725885 */
        wind_amplitude: TODO;
        /** Type is unknown. One known value: 0.018334438454257418 */
        wind_random_part: TODO;
        /** Type is unknown. One known value: 161899 */
        background_terrain_random_seed: TODO;
        /** Type is unknown. One known value: 89057 */
        foreground_terrain_random_seed: TODO;
        /** Type is unknown. One known value: 157647 */
        foreground_platform_random_seed: TODO;
        /** Type is unknown. One known value: 36047 */
        foliage_random_seed: TODO;
        /** Type is unknown. One known value: 1 */
        foliage_shadow_multiplier: TODO;
        /** Type is unknown. One known value: 1000 */
        foliage_maximum_animation_distance: TODO;
        /** Type is unknown. One known value: 150 */
        sun_shade_x: TODO;
        /** Type is unknown. One known value: 3000 */
        sun_shade_y: TODO;
        /** Type is unknown. One known value: true */
        terrain_enabled: TODO;
        /** Type is unknown. One known value: 0.75 */
        terrain_solve_random_factor: TODO;
        /** Type is unknown. One known value: 0.05 */
        terrain_sky_ground_contrast: TODO;
        /** Type is unknown. One known value: 0.025 */
        terrain_extra_sky_ground_contrast: TODO;
        /** Type is unknown. One known value: 4000 */
        terrain_fractal_cube_size: TODO;
        /** Type is unknown. One known value: 16 */
        terrain_level_influence_factor: TODO;
        /** Type is unknown. One known value: 2000 */
        terrain_extra_space_x: TODO;
        /** Type is unknown. One known value: 500 */
        terrain_extra_space_y: TODO;
        /** Type is unknown. One known value: true */
        terrain_force_low_level_terrain: TODO;
        /** Type is unknown. One known value: 150 */
        terrain_phys_scale: TODO;
        /** Type is unknown. One known value: 40 */
        terrain_size_z: TODO;
        /** Type is unknown. One known value: undefined */
        terrain_start_z: TODO;
        /** Type is unknown. One known value: 0.166 */
        terrain_post_tesselation_grass_noise: TODO;
        /** Type is unknown. One known value: 0 */
        terrain_y_offset: TODO;
        /** Type is unknown. One known value: true */
        terrain_remove_floating_islands: TODO;
        /** Type is unknown. One known value: 24 */
        terrain_uv_relax_iterations: TODO;
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
        /** Type is unknown. One known value: true */
        connected: TODO;
        Disconnect: () => TODO;
        /** Type is unknown. One known value: true */
        hud_visible: TODO;
        /** Type is unknown. One known value: true */
        hud_show_character_info: TODO;
        /** Type is unknown. One known value: [] */
        hud_custom_bars: TODO;
        /**
         * @param text   
         * @param user_uid (default=-2)   
         * @param channel_id (default=-1)   
         * @param auto_channel_id (default=-1)   
         * @param message_counter (default=-1)   
         */
        ShowChatMessage: (text: TODO, user_uid?: TODO, channel_id?: TODO, auto_channel_id?: TODO, message_counter?: TODO) => TODO;
        ShakeScreen: (amount: TODO, from_gun: TODO, ignore_when_speculative_player_enabled: TODO) => TODO;
        /** @param amount (default=75)  */
        FlashScreen: (amount?: TODO) => TODO;
        GetBounds: () => TODO;
    }
}
