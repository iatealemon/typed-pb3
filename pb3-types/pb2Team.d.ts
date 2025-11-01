import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Team: ClassIdentityProps<"pb2Team"> & {
        CreateTeam(...args: unknown[]): unknown;
        teams: unknown;
    };
    
    /** unfinished */
    type pb2TeamInstance = ClassIdentityProps<"pb2Team"> & {
        readonly classid: unknown;
        readonly ai_in_team: unknown;
        allow_private_communication: unknown;
        friendly_damage_multiplier: unknown;
        friendly_fire: unknown;
        hud_color: unknown;
        normal_damage_to_dead_teammates: unknown;
        readonly teammates_collide: unknown;
        title: unknown;
        remove(...args: unknown[]): unknown;
    };
}