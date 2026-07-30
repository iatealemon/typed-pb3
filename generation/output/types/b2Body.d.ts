export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface b2Body extends ClassIdentityProps<"b2Body"> {
        SetPos: (x: unknown, y: unknown) => unknown;
        SetPosX: (x: unknown) => unknown;
        SetPosY: (y: unknown) => unknown;
        GetPosX: () => unknown;
        GetPosY: () => unknown;
        AddPos: (x: unknown, y: unknown) => unknown;
        SetVel: (x: unknown, y: unknown) => unknown;
        SetVelX: (x: unknown) => unknown;
        SetVelY: (y: unknown) => unknown;
        GetVelX: () => unknown;
        GetVelY: () => unknown;
        SetAngle: (angle: unknown) => unknown;
        GetAngle: () => unknown;
        GetAngularVelocity: () => unknown;
        SetAngularVelocity: (omega: unknown) => unknown;
        /**
         * @param force   
         * @param point (default=null)   
         */
        ApplyForce: (force: unknown, point?: unknown) => unknown;
        ApplyForceXY: (x: unknown, y: unknown) => unknown;
        ApplyTorque: (torque: unknown) => unknown;
        /**
         * @param impulse   
         * @param point (default=null)   
         */
        ApplyImpulse: (impulse: unknown, point?: unknown) => unknown;
        ApplyImpulseXY: (impulse_x: unknown, impulse_y: unknown) => unknown;
        GetMass: () => unknown;
        GetWorldPoint: (localPoint: unknown) => unknown;
        GetWorldVector: (localVector: unknown) => unknown;
        GetLocalPoint: (worldPoint: unknown) => unknown;
        GetLocalVector: (worldVector: unknown) => unknown;
        GetLinearVelocityFromWorldPoint: (worldPoint: unknown) => unknown;
        GetLinearVelocityFromLocalPoint: (localPoint: unknown) => unknown;
        SetSleepingAllowed: (flag: unknown) => unknown;
        SetAwake: (flag: unknown) => unknown;
        IsAwake: () => unknown;
        SetFixedRotation: (fixed: unknown) => unknown;
        IsFixedRotation: () => unknown;
        IsActive: () => unknown;
        SetBullet: (flag: unknown) => unknown;
        GetWorldCenter: () => unknown;
        SetGravityScale: (v: unknown) => unknown;
        SetAngularDamping: (angularDamping: unknown) => unknown;
        GetAngularDamping: () => unknown;
        SetLinearDamping: (linearDamping: unknown) => unknown;
        GetLinearDamping: () => unknown;
        SetType: (type: unknown) => unknown;
        GetOwner: () => unknown;
        GetOwnerLimbID: () => unknown;
        GetUserData: () => unknown;
    }
    
}
