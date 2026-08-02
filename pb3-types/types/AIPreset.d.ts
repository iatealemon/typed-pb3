export {};

declare global {
    interface AIPreset {
        allow_hit_reporting: boolean;
        allow_penetrating_shots: boolean;
        allow_revenge_teamkilling: boolean;
        allow_ricochet_shots: boolean;
        allow_trace_shots: boolean;
        behavior: number;
        factor_for_team_damage_paths_avoidance: number;
        heal_teammates: boolean;
        hear_range: number;
        hunt_attacker: boolean;
        hunt_random_known_threats_range: number;
        hunt_seen_threats: boolean;
        rejection_point_for_team_damage_paths: number | null;
        sequence_behavior: number;
        skill: number;
    }
}