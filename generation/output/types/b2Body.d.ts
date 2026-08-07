export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface b2Body extends ClassIdentityProps<"b2Body"> {
        SetPos: (x: TODO, y: TODO) => TODO;
        SetPosX: (x: TODO) => TODO;
        SetPosY: (y: TODO) => TODO;
        GetPosX: () => TODO;
        GetPosY: () => TODO;
        AddPos: (x: TODO, y: TODO) => TODO;
        SetVel: (x: TODO, y: TODO) => TODO;
        SetVelX: (x: TODO) => TODO;
        SetVelY: (y: TODO) => TODO;
        GetVelX: () => TODO;
        GetVelY: () => TODO;
        SetAngle: (angle: TODO) => TODO;
        GetAngle: () => TODO;
        GetAngularVelocity: () => TODO;
        SetAngularVelocity: (omega: TODO) => TODO;
        /**
         * @param force   
         * @param point (default=null)   
         */
        ApplyForce: (force: TODO, point?: TODO) => TODO;
        ApplyForceXY: (x: TODO, y: TODO) => TODO;
        ApplyTorque: (torque: TODO) => TODO;
        /**
         * @param impulse   
         * @param point (default=null)   
         */
        ApplyImpulse: (impulse: TODO, point?: TODO) => TODO;
        ApplyImpulseXY: (impulse_x: TODO, impulse_y: TODO) => TODO;
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
