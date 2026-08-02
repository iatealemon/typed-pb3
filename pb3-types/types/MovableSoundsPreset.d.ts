export {};

declare global {
    interface MovableSoundsPreset {
        sound_break: string | null;
        sound_break_pitch: number;
        sound_break_volume: number;
        sound_damage: string | null;
        sound_damage_pitch: number;
        sound_damage_volume: number;
        sound_damage_base_volume: number;
        sound_damage_volume_scale_with_damage_factor: number;
        sound_loop: string | null;
        sound_loop_pitch: number;
        sound_loop_volume: number;
        sound_loop_base_speed: number;
        sound_loop_speed_to_pitch_factor: number;
        sound_start: string | null;
        sound_start_pitch: number;
        sound_start_volume: number;
        sound_stop: string | null;
        sound_stop_pitch: number;
        sound_stop_volume: number;
    }
}