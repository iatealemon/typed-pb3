export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2StyleAmmo extends ClassIdentityProps<"pb2StyleAmmo"> {
        readonly style_id: TODO;
        readonly owner_gun: TODO;
        rounds_total: TODO;
        infinite_ammo: TODO;
        magazine_capacity: TODO;
        rounds_in_magazine: TODO;
        burst_shots: TODO;
        burst_timeout: TODO;
        regen_time: TODO;
        regen_timeout: TODO;
        reload_speed: TODO;
        waste_remain_part: TODO;
        recharge_speed: TODO;
        min_charge: TODO;
        charge_speed: TODO;
        zero_energy_value: TODO;
        energy: TODO;
        speed_up_factor: TODO;
        speed_up_max: TODO;
        charge_to_distance: TODO;
        readonly last_error_reason: TODO;
    }
    
}
