export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface Circle extends ClassIdentityProps<"Circle"> {
        SetZero: () => unknown;
        Set: (x_: unknown, y_: unknown) => unknown;
        SetSelf: (x_: unknown, y_: unknown) => unknown;
        AddXY: (x_: unknown, y_: unknown) => unknown;
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
        RotatedSinCos: (sin: unknown, cos: unknown) => unknown;
        GetAngle: () => unknown;
        IsValid: () => unknown;
        MoveToUntilDistanceIs: (to: unknown, di: unknown) => unknown;
    }
    var Circle: {
        new (params: unknown): Circle;

    }
}
