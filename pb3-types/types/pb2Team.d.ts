export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Team extends ClassIdentityProps<"pb2Team"> {
        /** Type is unknown. One known value: 7 */
        readonly classid: unknown;
        readonly ai_in_team: unknown;
        allow_private_communication: unknown;
        friendly_damage_multiplier: unknown;
        friendly_fire: unknown;
        hud_color: unknown;
        hud_color_for_enemies: unknown;
        normal_damage_to_dead_teammates: unknown;
        readonly teammates_collide: unknown;
        title: unknown;
        remove: () => unknown;
    }
    var pb2Team: ClassIdentityProps<"pb2Team"> & {
        CreateTeam: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        teams: unknown;
    }
}
