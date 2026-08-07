export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface b2Body extends ClassIdentityProps<"b2Body"> {
        SetPos: (x: number, y: number) => void;
        SetPosX: (x: number) => void;
        SetPosY: (y: number) => void;
        GetPosX: () => number;
        GetPosY: () => number;
        AddPos: (x: number, y: number) => void;
        SetVel: (x: number, y: number) => void;
        SetVelX: (x: number) => void;
        SetVelY: (y: number) => TODO;
        GetVelX: () => number;
        GetVelY: () => number;
        SetAngle: (angle: number) => void;
        GetAngle: () => number;
        GetAngularVelocity: () => number;
        SetAngularVelocity: (omega: number) => void;
        /**
         * @param force   
         * @param point (default=null)   
         */
        ApplyForce: (force: {x: number, y: number}, point?: {x: number, y: number} | null) => void;
        ApplyForceXY: (x: number, y: number) => void;
        ApplyTorque: (torque: TODO) => TODO;
        /**
         * @param impulse   
         * @param point (default=null)   
         */
        ApplyImpulse: (impulse: TODO, point?: TODO) => TODO;
        ApplyImpulseXY: (impulse_x: number, impulse_y: number) => TODO;
        GetMass: () => TODO;
        GetWorldPoint: (localPoint: TODO) => TODO;
        GetWorldVector: (localVector: TODO) => TODO;
        GetLocalPoint: (worldPoint: TODO) => TODO;
        GetLocalVector: (worldVector: TODO) => TODO;
        GetLinearVelocityFromWorldPoint: (worldPoint: TODO) => TODO;
        GetLinearVelocityFromLocalPoint: (localPoint: TODO) => TODO;
        SetSleepingAllowed: (flag: TODO) => TODO;
        SetAwake: (flag: TODO) => TODO;
        IsAwake: () => TODO;
        SetFixedRotation: (fixed: TODO) => TODO;
        IsFixedRotation: () => TODO;
        IsActive: () => TODO;
        SetBullet: (flag: TODO) => TODO;
        GetWorldCenter: () => TODO;
        SetGravityScale: (v: TODO) => TODO;
        SetAngularDamping: (angularDamping: TODO) => TODO;
        GetAngularDamping: () => TODO;
        SetLinearDamping: (linearDamping: TODO) => TODO;
        GetLinearDamping: () => TODO;
        SetType: (type: TODO) => TODO;
        GetOwner: () => TODO;
        GetOwnerLimbID: () => TODO;
        GetUserData: () => TODO;
    }
    
}
