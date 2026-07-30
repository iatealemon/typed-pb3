export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface hT extends ClassIdentityProps<"hT"> {
        /** Type is unknown. One known value: 103 */
        readonly classid: unknown;
        x: unknown;
        y: unknown;
        tox: unknown;
        toy: unknown;
        readonly rad: unknown;
        readonly of: unknown;
        Teleport: (ax: unknown, ay: unknown) => unknown;
        GetBody: () => unknown;
        GetPosition: () => unknown;
        DealDamage: (args: unknown) => unknown;
        health_damage_multiplier: unknown;
        limb_damage_multiplier: unknown;
    }
    
}
