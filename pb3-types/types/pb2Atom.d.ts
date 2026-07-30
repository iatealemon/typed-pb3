export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    /** the class is actually called hT but it's renamed here for obvious reasons */
    interface pb2Atom extends ClassIdentityProps<"hT"> {
        /** Type is unknown. One known value: 103 */
        readonly classid: unknown;
        x: unknown;
        y: unknown;
        tox: unknown;
        toy: unknown;
        readonly rad: unknown;
        readonly of: unknown;
        Teleport: (ax: unknown, ay: unknown) => unknown;
        GetBody: () => b2Body;
        GetPosition: () => b2Vec2;
        DealDamage: (args: unknown) => unknown;
        health_damage_multiplier: unknown;
        limb_damage_multiplier: unknown;
    }
    
}
