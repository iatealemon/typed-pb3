import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    type b2BodyInstance = ClassIdentityProps<"b2Body"> & {
        SetPos(...args: unknown[]): unknown;
        SetPosX(...args: unknown[]): unknown;
        SetPosY(...args: unknown[]): unknown;
        GetPosX(...args: unknown[]): unknown;
        GetPosY(...args: unknown[]): unknown;
        SetVel(...args: unknown[]): unknown;
        SetVelX(...args: unknown[]): unknown;
        SetVelY(...args: unknown[]): unknown;
        GetVelX(...args: unknown[]): unknown;
        GetVelY(...args: unknown[]): unknown;
        SetAngle(...args: unknown[]): unknown;
        GetAngle(...args: unknown[]): unknown;
        GetAngularVelocity(...args: unknown[]): unknown;
        SetAngularVelocity(...args: unknown[]): unknown;
        ApplyForce(...args: unknown[]): unknown;
        ApplyForceXY(...args: unknown[]): unknown;
        ApplyTorque(...args: unknown[]): unknown;
        ApplyImpulse(...args: unknown[]): unknown;
        ApplyImpulseXY(...args: unknown[]): unknown;
        GetMass(...args: unknown[]): unknown;
        GetWorldPoint(...args: unknown[]): unknown;
        GetWorldVector(...args: unknown[]): unknown;
        GetLocalPoint(...args: unknown[]): unknown;
        GetLocalVector(...args: unknown[]): unknown;
        GetLinearVelocityFromWorldPoint(...args: unknown[]): unknown;
        GetLinearVelocityFromLocalPoint(...args: unknown[]): unknown;
        SetSleepingAllowed(...args: unknown[]): unknown;
        SetAwake(...args: unknown[]): unknown;
        IsAwake(...args: unknown[]): unknown;
        SetFixedRotation(...args: unknown[]): unknown;
        IsFixedRotation(...args: unknown[]): unknown;
        IsActive(...args: unknown[]): unknown;
        SetBullet(...args: unknown[]): unknown;
        GetWorldCenter(...args: unknown[]): unknown;
        SetGravityScale(...args: unknown[]): unknown;
        SetAngularDamping(...args: unknown[]): unknown;
        GetAngularDamping(...args: unknown[]): unknown;
        SetLinearDamping(...args: unknown[]): unknown;
        GetLinearDamping(...args: unknown[]): unknown;
        SetType(...args: unknown[]): unknown;
        GetOwner(...args: unknown[]): unknown;
        GetUserData(...args: unknown[]): unknown;
    };
}