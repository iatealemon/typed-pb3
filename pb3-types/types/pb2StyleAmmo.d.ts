export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2StyleAmmo extends ClassIdentityProps<"pb2StyleAmmo"> {
        readonly style_id: unknown;
        readonly owner_gun: unknown;
        rounds_total: unknown;
        infinite_ammo: unknown;
        magazine_capacity: unknown;
        rounds_in_magazine: unknown;
        burst_shots: unknown;
        burst_timeout: unknown;
        regen_time: unknown;
        regen_timeout: unknown;
        reload_speed: unknown;
        waste_remain_part: unknown;
        recharge_speed: unknown;
        min_charge: unknown;
        charge_speed: unknown;
        zero_energy_value: unknown;
        energy: unknown;
        speed_up_factor: unknown;
        speed_up_max: unknown;
        charge_to_distance: unknown;
        readonly last_error_reason: unknown;
    }
    
}
