export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2GrenadeFunctions: ClassIdentityProps<"pb2GrenadeFunctions"> & {
        turret_placement_range: number;
        shield_grenade_duration: number;
        time_grenade_duration: number;
        mine_grenade_duration: number;
        laser_grenade_duration: number;
        camera_grenade_duration: number;
        glow_grenade_duration: number;
        mine_seek_radius: number;
        camera_seek_radius: number;
        flashbang_max_dist: number;
        icicle_cold_given: number;
        cold_cloud_cold_given: number;
        cold_explosion_cold_given: number;
        cointoss_explosion_color: number;
        turret_half_width: number;
        turret_half_height: number;
        turret2_half_width: number;
        turret2_half_height: number;
    }
}
