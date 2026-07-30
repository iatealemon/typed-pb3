export { };

import type { ClassIdentityProps } from "./internal/helper";

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
        SetVelY: (y: number) => unknown;
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
