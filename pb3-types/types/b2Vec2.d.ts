export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface b2Vec2 extends ClassIdentityProps<"b2Vec2"> {
        SetZero: () => unknown;
        Set: (x_: number, y_: number) => unknown;
        SetSelf: (x_: unknown, y_: unknown) => unknown;
        AddXY: (x_: number, y_: number) => unknown;
        SetV: (v: unknown) => unknown;
        dot: (v: unknown) => unknown;
        mul: (a: unknown) => unknown;
        GetNegative: () => unknown;
        GetNegativeTo: (v: unknown) => unknown;
        GetSetFromNegative: (a: unknown) => unknown;
        NegativeSelf: () => unknown;
        GetNegativedSelf: () => unknown;
        Copy: () => unknown;
        Add: (v: unknown) => unknown;
        AddSelf: (v: unknown) => unknown;
        Subtract: (v: unknown) => unknown;
        Multiply: (a: unknown) => unknown;
        MultiplySelf: (a: unknown) => unknown;
        MulM: (A: unknown) => unknown;
        MulTM: (A: unknown) => unknown;
        CrossVF: (s: unknown) => unknown;
        CrossFV: (s: unknown) => unknown;
        MinV: (b: unknown) => unknown;
        MaxV: (b: unknown) => unknown;
        Abs: () => unknown;
        Length: () => unknown;
        LengthSquared: () => unknown;
        Normalize: () => unknown;
        Normalized: () => unknown;
        Rotate: (a: unknown) => unknown;
        Rotated: (a: unknown) => unknown;
        RotatedSinCos: (sin: number, cos: number) => unknown;
        GetAngle: () => unknown;
        IsValid: () => unknown;
        MoveToUntilDistanceIs: (to: unknown, di: unknown) => unknown;
    }
    var b2Vec2: {
        /**
         * @param x (default=0)   
         * @param y (default=0)   
         * @param seal (default=true)   
         */
        new (x?: number, y?: number, seal?: boolean): b2Vec2;

    }
}
