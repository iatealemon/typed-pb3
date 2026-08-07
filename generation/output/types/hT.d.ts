export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface hT extends ClassIdentityProps<"hT"> {
        /** Type is unknown. One known value: 103 */
        readonly classid: TODO;
        x: TODO;
        y: TODO;
        tox: TODO;
        toy: TODO;
        readonly rad: TODO;
        readonly of: TODO;
        Teleport: (ax: TODO, ay: TODO) => TODO;
        GetBody: () => TODO;
        GetPosition: () => TODO;
        DealDamage: (args: TODO) => TODO;
        health_damage_multiplier: TODO;
        limb_damage_multiplier: TODO;
    }
    
}
