export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Team extends ClassIdentityProps<"pb2Team"> {
        /** Type is unknown. One known value: 7 */
        readonly classid: TODO;
        readonly ai_in_team: TODO;
        allow_private_communication: TODO;
        friendly_damage_multiplier: TODO;
        friendly_fire: TODO;
        hud_color: TODO;
        hud_color_for_enemies: TODO;
        normal_damage_to_dead_teammates: TODO;
        readonly teammates_collide: TODO;
        title: TODO;
        remove: () => TODO;
    }
    var pb2Team: ClassIdentityProps<"pb2Team"> & {
        CreateTeam: (params: TODO) => TODO;
        /** Type is unknown. One known value: [] */
        teams: TODO;
    }
}
