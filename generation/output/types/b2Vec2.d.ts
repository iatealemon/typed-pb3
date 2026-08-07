export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface b2Vec2 extends ClassIdentityProps<"b2Vec2"> {
        SetZero: () => TODO;
        Set: (x_: TODO, y_: TODO) => TODO;
        SetSelf: (x_: TODO, y_: TODO) => TODO;
        AddXY: (x_: TODO, y_: TODO) => TODO;
        SetV: (v: TODO) => TODO;
        dot: (v: TODO) => TODO;
        mul: (a: TODO) => TODO;
        GetNegative: () => TODO;
        GetNegativeTo: (v: TODO) => TODO;
        GetSetFromNegative: (a: TODO) => TODO;
        NegativeSelf: () => TODO;
        GetNegativedSelf: () => TODO;
        Copy: () => TODO;
        Add: (v: TODO) => TODO;
        AddSelf: (v: TODO) => TODO;
        Subtract: (v: TODO) => TODO;
        Multiply: (a: TODO) => TODO;
        MultiplySelf: (a: TODO) => TODO;
        MulM: (A: TODO) => TODO;
        MulTM: (A: TODO) => TODO;
        CrossVF: (s: TODO) => TODO;
        CrossFV: (s: TODO) => TODO;
        MinV: (b: TODO) => TODO;
        MaxV: (b: TODO) => TODO;
        Abs: () => TODO;
        Length: () => TODO;
        LengthSquared: () => TODO;
        Normalize: () => TODO;
        Normalized: () => TODO;
        Rotate: (a: TODO) => TODO;
        Rotated: (a: TODO) => TODO;
        RotatedSinCos: (sin: TODO, cos: TODO) => TODO;
        GetAngle: () => TODO;
        IsValid: () => TODO;
        MoveToUntilDistanceIs: (to: TODO, di: TODO) => TODO;
    }
    var b2Vec2: {
        /**
         * @param x (default=0)   
         * @param y (default=0)   
         * @param seal (default=true)   
         */
        new (x?: TODO, y?: TODO, seal?: TODO): b2Vec2;

    }
}
