export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface b2Fixture extends ClassIdentityProps<"b2Fixture"> {
        GetBody: () => TODO;
        IsSensor: () => TODO;
        GetNext: () => TODO;
        GetDensity: () => TODO;
        SetDensity: (density: TODO) => TODO;
        GetFriction: () => TODO;
        SetFriction: (friction: TODO) => TODO;
        GetRestitution: () => TODO;
        SetRestitution: (restitution: TODO) => TODO;
    }
    
}
