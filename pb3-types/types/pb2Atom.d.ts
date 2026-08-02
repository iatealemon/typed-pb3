export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    /** the class is actually called hT but it's renamed here for obvious reasons */
    interface pb2Atom extends ClassIdentityProps<"hT"> {
        /** Type is unknown. One known value: 103 */
        readonly classid: unknown;
        x: number;
        y: number;
        tox: number;
        toy: number;
        readonly rad: number;
        readonly of: pb2Ragdoll | null;
        Teleport: (ax: number, ay: number) => unknown;
        GetBody: () => b2Body;
        GetPosition: () => b2Vec2;
        DealDamage: (args: unknown) => unknown;
        health_damage_multiplier: number;
        limb_damage_multiplier: number;
    }
    
}
