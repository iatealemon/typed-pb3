export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2GameWorld: ClassIdentityProps<"pb2GameWorld"> & {
        /** Not known if this is always of type pb2Controller */
        controller: pb2Controller;
        /** Type is unknown. One known value: null */
        spectated_ragdoll: unknown;
        /** Not known if this is always of type pb2Controller */
        personal_virtual_controller: pb2Controller;
        /** Type is unknown. One known value: true */
        isHost: unknown;
        /** Type is unknown. One known value: 454 */
        user_uid: unknown;
        /** Type is unknown. One known value: "jeje" */
        nickname_tagged: unknown;
        settings: {
            graphics: {
                /** Type is unknown. One known value: 2 */
                build_3d_environment: unknown;
                /** Type is unknown. One known value: 50 */
                water_reflections: unknown;
                /** Type is unknown. One known value: 2 */
                spawn_3d_debris: unknown;
                /** Type is unknown. One known value: 1 */
                ui_scale: unknown;
            }
            gameplay: {
                /** Type is unknown. One known value: 3 */
                gore_and_violence: unknown;
                /** Type is unknown. One known value: 1 */
                show_damage_numbers: unknown;
                /** Type is unknown. One known value: 2 */
                replay_my_deaths: unknown;
                /** Type is unknown. One known value: 3 */
                camera: unknown;
            }
            input: {
                /** Type is unknown. One known value: 0.125 */
                screen_cursor_follow_speed: unknown;
                /** Type is unknown. One known value: 0.75 */
                screen_character_follow_softness: unknown;
            }
            network: {
                /** Type is unknown. One known value: 61 */
                world_state_receive_rate: unknown;
            }
            __limits_obj: {
                /** Type is unknown. One known value: undefined */
                graphics: unknown;
                /** Type is unknown. One known value: undefined */
                gameplay: unknown;
                /** Type is unknown. One known value: undefined */
                input: unknown;
                /** Type is unknown. One known value: undefined */
                network: unknown;
            }
        }
        GetPing: () => unknown;
        ClearAllKeyActionsAndStates: () => unknown;
        /** @param mode (default=1)  */
        DebugTraceAnyPressedKeys: (mode?: unknown) => unknown;
        /**
         * @param location_keycode_pair   
         * @param onKeyDown (default=null)   
         * @param onKeyUp (default=null)   
         */
        SetKeyActions: (location_keycode_pair: unknown, onKeyDown?: unknown, onKeyUp?: unknown) => unknown;
        GetKeyState: (location_keycode_pair: unknown) => unknown;
        PauseTrustedControlsTemporarily: () => unknown;
        FinalizeWorld: () => unknown;
        FinalizeNewMovables: () => unknown;
        /** @param v (default=true)  */
        EnableSimplePlayerAssignmentLogic: (v?: unknown) => unknown;
        /**
         * @param params   
         * @param mode (default='modules')   
         */
        DownloadModules: (params: unknown, mode?: unknown) => unknown;
        DownloadTextures: (params: unknown) => unknown;
        DownloadSounds: (params: unknown) => unknown;
        DownloadModels: (params: unknown) => unknown;
        /** @param dVG (default=true)  */
        GetAllModules: (dVG?: unknown) => unknown;
        GetInitialModules: () => unknown;
        /**
         * @param params   
         * @param type (default=undefined)   
         */
        CreateBoxShape: (params: unknown, type?: unknown) => unknown;
        /** Type is unknown. One known value: 14542847 */
        sun_color: unknown;
        /** Type is unknown. One known value: 14542847 */
        sky_color: unknown;
        /** Type is unknown. One known value: 16777215 */
        default_lamp_color: unknown;
        /** Type is unknown. One known value: 0.025 */
        sun_intensity: unknown;
        /** Type is unknown. One known value: 0.6 */
        sky_intensity: unknown;
        /** Type is unknown. One known value: 1 */
        light_power_multiplier: unknown;
        /** Type is unknown. One known value: undefined */
        fog_intensity: unknown;
        /** Type is unknown. One known value: false */
        foreground_snow: unknown;
        /** Type is unknown. One known value: false */
        background_snow: unknown;
        /** Type is unknown. One known value: false */
        snowing: unknown;
        /** Type is unknown. One known value: false */
        raining: unknown;
        /** Type is unknown. One known value: 0.8981455553302768 */
        wind_amplitude: unknown;
        /** Type is unknown. One known value: 0.6478880830141565 */
        wind_random_part: unknown;
        /** Type is unknown. One known value: 157627 */
        background_terrain_random_seed: unknown;
        /** Type is unknown. One known value: 42916 */
        foreground_terrain_random_seed: unknown;
        /** Type is unknown. One known value: 21520 */
        foreground_platform_random_seed: unknown;
        /** Type is unknown. One known value: 34732 */
        foliage_random_seed: unknown;
        /** Type is unknown. One known value: 1 */
        foliage_shadow_multiplier: unknown;
        /** Type is unknown. One known value: 1000 */
        foliage_maximum_animation_distance: unknown;
        /** Type is unknown. One known value: 150 */
        sun_shade_x: unknown;
        /** Type is unknown. One known value: 3000 */
        sun_shade_y: unknown;
        /** Type is unknown. One known value: true */
        terrain_enabled: unknown;
        /** Type is unknown. One known value: 0.75 */
        terrain_solve_random_factor: unknown;
        /** Type is unknown. One known value: 0.05 */
        terrain_sky_ground_contrast: unknown;
        /** Type is unknown. One known value: 0.025 */
        terrain_extra_sky_ground_contrast: unknown;
        /** Type is unknown. One known value: 4000 */
        terrain_fractal_cube_size: unknown;
        /** Type is unknown. One known value: 16 */
        terrain_level_influence_factor: unknown;
        /** Type is unknown. One known value: 2000 */
        terrain_extra_space_x: unknown;
        /** Type is unknown. One known value: 500 */
        terrain_extra_space_y: unknown;
        /** Type is unknown. One known value: true */
        terrain_force_low_level_terrain: unknown;
        /** Type is unknown. One known value: 150 */
        terrain_phys_scale: unknown;
        /** Type is unknown. One known value: 40 */
        terrain_size_z: unknown;
        /** Type is unknown. One known value: undefined */
        terrain_start_z: unknown;
        /** Type is unknown. One known value: 0.166 */
        terrain_post_tesselation_grass_noise: unknown;
        /** Type is unknown. One known value: 0 */
        terrain_y_offset: unknown;
        /** Type is unknown. One known value: true */
        terrain_remove_floating_islands: unknown;
        /** Type is unknown. One known value: 24 */
        terrain_uv_relax_iterations: unknown;
        /**
         * @param controller   
         * @param soft (default=true)   
         */
        SetToController: (controller: unknown, soft?: unknown) => unknown;
        SetToSpectateRagdoll: (ragdoll: unknown) => unknown;
        SetToFreeCamera: () => unknown;
        SetDisconnectActionDescriptionStructure: () => unknown;
        IsHostSpectating: () => unknown;
        IsWatchingReplay: () => unknown;
        StartPointOfViewReplay: () => unknown;
        SetReplayTimeScale: () => unknown;
        CancelPointOfViewReplay: () => unknown;
        /** Type is unknown. One known value: true */
        connected: unknown;
        Disconnect: () => unknown;
        /** Type is unknown. One known value: true */
        hud_visible: unknown;
        /** Type is unknown. One known value: true */
        hud_show_character_info: unknown;
        /** Type is unknown. One known value: [] */
        hud_custom_bars: unknown;
        /**
         * @param text   
         * @param user_uid (default=-2)   
         * @param channel_id (default=-1)   
         * @param auto_channel_id (default=-1)   
         * @param message_counter (default=-1)   
         */
        ShowChatMessage: (text: unknown, user_uid?: unknown, channel_id?: unknown, auto_channel_id?: unknown, message_counter?: unknown) => unknown;
        ShakeScreen: (amount: unknown, from_gun: unknown, ignore_when_speculative_player_enabled: unknown) => unknown;
        /** @param amount (default=75)  */
        FlashScreen: (amount?: unknown) => unknown;
        GetBounds: () => unknown;
    }
}
