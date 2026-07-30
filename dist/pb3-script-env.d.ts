export {};
interface ClassIdentityProps<ClassName extends string> {
    readonly _class: ClassName;
    toString(): `[object ${ClassName}]`;
}

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

declare global {
    interface ColorTransform extends ClassIdentityProps<"ColorTransform"> {
        redMultiplier: number;
        greenMultiplier: number;
        blueMultiplier: number;
        redOffset: number;
        greenOffset: number;
        blueOffset: number;
        clone: () => unknown;
        multiplyHighRangeColor: (v: unknown) => unknown;
    }
    var ColorTransform: {
        /**
         * @param r (default=0)   
         * @param g (default=0)   
         * @param b (default=0)   
         * @param alphaMultiplier (default=1)   
         * @param redOffset (default=0)   
         * @param greenOffset (default=0)   
         * @param blueOffset (default=0)   
         */
        new (r?: number, g?: number, b?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number): ColorTransform;

    }
}

declare global {
    interface Key {

    }
    var Key: {
        new (): Key;
        init_class: () => unknown;
        /** Type is unknown. One known value: [0,32] */
        SPACE: unknown;
        /** Type is unknown. One known value: [0,9] */
        TAB: unknown;
        /** Type is unknown. One known value: [0,8] */
        BACKSPACE: unknown;
        /** Type is unknown. One known value: [0,27] */
        ESCAPE: unknown;
        /** Type is unknown. One known value: [0,13] */
        ENTER: unknown;
        /** Type is unknown. One known value: [0,37] */
        LEFT: unknown;
        /** Type is unknown. One known value: [0,38] */
        UP: unknown;
        /** Type is unknown. One known value: [0,39] */
        RIGHT: unknown;
        /** Type is unknown. One known value: [0,40] */
        DOWN: unknown;
        /** Type is unknown. One known value: [1,17] */
        CONTROL: unknown;
        /** Type is unknown. One known value: [1,16] */
        SHIFT: unknown;
        /** Type is unknown. One known value: [1,18] */
        ALT: unknown;
        /** Type is unknown. One known value: [4,1] */
        MOUSE_LEFT: unknown;
        /** Type is unknown. One known value: [4,3] */
        MOUSE_RIGHT: unknown;
        /** Type is unknown. One known value: [4,3] */
        MOUSE_WHEEL_CLICK: unknown;
        /** Type is unknown. One known value: [5,0] */
        MOUSE_WHEEL_UP: unknown;
        /** Type is unknown. One known value: [5,1] */
        MOUSE_WHEEL_DOWN: unknown;
        /** Type is unknown. One known value: [0,167] */
        HISTORY_FORWARD: unknown;
        /** Type is unknown. One known value: [0,166] */
        HISTORY_BACK: unknown;
        /** Type is unknown. One known value: [0,219] */
        SQUARE_BRACKET_OPEN: unknown;
        /** Type is unknown. One known value: [0,221] */
        SQUARE_BRACKET_CLOSE: unknown;
        /** Type is unknown. One known value: [0,188] */
        COMMA: unknown;
        /** Type is unknown. One known value: [0,190] */
        PERIOD: unknown;
        /** Type is unknown. One known value: [2,16] */
        SLASH: unknown;
        /** Type is unknown. One known value: [0,189] */
        MINUS: unknown;
        /** Type is unknown. One known value: [0,187] */
        PLUS: unknown;
        /** Type is unknown. One known value: [0,220] */
        BACKSLASH: unknown;
        /** Type is unknown. One known value: [0,46] */
        DELETE: unknown;
        /** Type is unknown. One known value: [0,192] */
        TILDE: unknown;
        /** Type is unknown. One known value: [0,96] */
        TILDE_ALT: unknown;
        /** Type is unknown. One known value: [0,126] */
        TILDE_ALT2: unknown;
        /** Type is unknown. One known value: [0,48] */
        DIGIT0: unknown;
        /** Type is unknown. One known value: [0,49] */
        DIGIT1: unknown;
        /** Type is unknown. One known value: [0,50] */
        DIGIT2: unknown;
        /** Type is unknown. One known value: [0,51] */
        DIGIT3: unknown;
        /** Type is unknown. One known value: [0,52] */
        DIGIT4: unknown;
        /** Type is unknown. One known value: [0,53] */
        DIGIT5: unknown;
        /** Type is unknown. One known value: [0,54] */
        DIGIT6: unknown;
        /** Type is unknown. One known value: [0,55] */
        DIGIT7: unknown;
        /** Type is unknown. One known value: [0,56] */
        DIGIT8: unknown;
        /** Type is unknown. One known value: [0,57] */
        DIGIT9: unknown;
        /** Type is unknown. One known value: [0,65] */
        A: unknown;
        /** Type is unknown. One known value: [0,66] */
        B: unknown;
        /** Type is unknown. One known value: [0,67] */
        C: unknown;
        /** Type is unknown. One known value: [0,68] */
        D: unknown;
        /** Type is unknown. One known value: [0,69] */
        E: unknown;
        /** Type is unknown. One known value: [0,70] */
        F: unknown;
        /** Type is unknown. One known value: [0,71] */
        G: unknown;
        /** Type is unknown. One known value: [0,72] */
        H: unknown;
        /** Type is unknown. One known value: [0,73] */
        I: unknown;
        /** Type is unknown. One known value: [0,74] */
        J: unknown;
        /** Type is unknown. One known value: [0,75] */
        K: unknown;
        /** Type is unknown. One known value: [0,76] */
        L: unknown;
        /** Type is unknown. One known value: [0,77] */
        M: unknown;
        /** Type is unknown. One known value: [0,78] */
        N: unknown;
        /** Type is unknown. One known value: [0,79] */
        O: unknown;
        /** Type is unknown. One known value: [0,80] */
        P: unknown;
        /** Type is unknown. One known value: [0,81] */
        Q: unknown;
        /** Type is unknown. One known value: [0,82] */
        R: unknown;
        /** Type is unknown. One known value: [0,83] */
        S: unknown;
        /** Type is unknown. One known value: [0,84] */
        T: unknown;
        /** Type is unknown. One known value: [0,85] */
        U: unknown;
        /** Type is unknown. One known value: [0,86] */
        V: unknown;
        /** Type is unknown. One known value: [0,87] */
        W: unknown;
        /** Type is unknown. One known value: [0,88] */
        X: unknown;
        /** Type is unknown. One known value: [0,89] */
        Y: unknown;
        /** Type is unknown. One known value: [0,90] */
        Z: unknown;
    }
}

declare global {
    interface Point extends ClassIdentityProps<"Point"> {
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
    var Point: {
        new (params: unknown): Point;

    }
}

declare global {
    namespace THREE {
        interface Vector3 extends ClassIdentityProps<"Vector3"> {
            isVector3: boolean;
            set: (x: number, y: number, z: number) => Vector3;
            setScalar: (scalar: number) => Vector3;
            setX: (x: number) => Vector3;
            setY: (y: number) => Vector3;
            setZ: (z: number) => Vector3;
            setComponent: (index: unknown, value: unknown) => unknown;
            getComponent: (index: unknown) => unknown;
            clone: () => unknown;
            copy: (v: unknown) => unknown;
            add: (v: unknown, w: unknown) => unknown;
            addScalar: (s: unknown) => unknown;
            addVectors: (a: unknown, b: unknown) => unknown;
            addScaledVector: (v: unknown, s: unknown) => unknown;
            sub: (v: unknown, w: unknown) => unknown;
            subScalar: (s: unknown) => unknown;
            subVectors: (a: unknown, b: unknown) => unknown;
            multiply: (v: unknown, w: unknown) => unknown;
            multiplyScalar: (scalar: unknown) => unknown;
            multiplyVectors: (a: unknown, b: unknown) => unknown;
            applyEuler: (euler: unknown) => unknown;
            applyAxisAngle: (axis: unknown, angle: unknown) => unknown;
            applyMatrix3: (m: unknown) => unknown;
            applyMatrix4: (m: unknown) => unknown;
            applyQuaternion: (q: unknown) => unknown;
            project: (camera: unknown) => unknown;
            unproject: (camera: unknown) => unknown;
            transformDirection: (m: unknown) => unknown;
            divide: (v: unknown) => unknown;
            divideScalar: (scalar: unknown) => unknown;
            min: (v: unknown) => unknown;
            max: (v: unknown) => unknown;
            clamp: (min: unknown, max: unknown) => unknown;
            clampScalar: (minVal: unknown, maxVal: unknown) => unknown;
            clampLength: (min: unknown, max: unknown) => unknown;
            floor: () => unknown;
            ceil: () => unknown;
            round: () => unknown;
            roundToZero: () => unknown;
            negate: () => unknown;
            dot: (v: unknown) => unknown;
            lengthSq: () => unknown;
            lengthManhattan: () => unknown;
            normalize: () => unknown;
            setLength: (length: unknown) => unknown;
            lerp: (v: unknown, alpha: unknown) => unknown;
            lerpVectors: (v1: unknown, v2: unknown, alpha: unknown) => unknown;
            cross: (v: unknown, w: unknown) => unknown;
            crossVectors: (a: unknown, b: unknown) => unknown;
            projectOnVector: (vector: unknown) => unknown;
            projectOnPlane: (planeNormal: unknown) => unknown;
            reflect: (normal: unknown) => unknown;
            angleTo: (v: unknown) => unknown;
            distanceTo: (v: unknown) => unknown;
            distanceToSquared: (v: unknown) => unknown;
            distanceToManhattan: (v: unknown) => unknown;
            setFromSpherical: (s: unknown) => unknown;
            setFromCylindrical: (c: unknown) => unknown;
            setFromMatrixPosition: (m: unknown) => unknown;
            setFromMatrixScale: (m: unknown) => unknown;
            setFromMatrixColumn: (m: unknown, index: unknown) => unknown;
            equals: (v: unknown) => unknown;
            fromArray: (array: unknown, offset: unknown) => unknown;
            toArray: (array: unknown, offset: unknown) => unknown;
            fromBufferAttribute: (attribute: unknown, index: unknown, offset: unknown) => unknown;
            setEulerFromRotationMatrix: () => unknown;
            setEulerFromQuaternion: () => unknown;
            getPositionFromMatrix: (m: unknown) => unknown;
            getScaleFromMatrix: (m: unknown) => unknown;
            getColumnFromMatrix: (index: unknown, matrix: unknown) => unknown;
            applyProjection: (m: unknown) => unknown;
            fromAttribute: (attribute: unknown, index: unknown, offset: unknown) => unknown;
            // x,y,z failed to be included in generation
            x: number;
            y: number;
            z: number;
        }
        interface Matrix4 extends ClassIdentityProps<"Matrix4"> {
            /** Type is unknown. One known value: true */
            isMatrix4: unknown;
            set: (n11: unknown, n12: unknown, n13: unknown, n14: unknown, n21: unknown, n22: unknown, n23: unknown, n24: unknown, n31: unknown, n32: unknown, n33: unknown, n34: unknown, n41: unknown, n42: unknown, n43: unknown, n44: unknown) => unknown;
            identity: () => unknown;
            clone: () => unknown;
            copy: (m: unknown) => unknown;
            copyPosition: (m: unknown) => unknown;
            extractBasis: (xAxis: unknown, yAxis: unknown, zAxis: unknown) => unknown;
            makeBasis: (xAxis: unknown, yAxis: unknown, zAxis: unknown) => unknown;
            extractRotation: (m: unknown) => unknown;
            makeRotationFromEuler: (euler: unknown) => unknown;
            makeRotationFromQuaternion: (q: unknown) => unknown;
            lookAt: (eye: unknown, target: unknown, up: unknown) => unknown;
            multiply: (m: unknown, n: unknown) => unknown;
            premultiply: (m: unknown) => unknown;
            multiplyMatrices: (a: unknown, b: unknown) => unknown;
            multiplyScalar: (s: unknown) => unknown;
            applyToBufferAttribute: (attribute: unknown) => unknown;
            determinant: () => unknown;
            transpose: () => unknown;
            setPosition: (v: unknown) => unknown;
            getInverse: (m: unknown, throwOnDegenerate: unknown) => unknown;
            scale: (v: unknown) => unknown;
            getMaxScaleOnAxis: () => unknown;
            makeTranslation: (x: unknown, y: unknown, z: unknown) => unknown;
            makeRotationX: (theta: unknown) => unknown;
            makeRotationY: (theta: unknown) => unknown;
            makeRotationZ: (theta: unknown) => unknown;
            makeRotationAxis: (axis: unknown, angle: unknown) => unknown;
            makeScale: (x: unknown, y: unknown, z: unknown) => unknown;
            makeShear: (x: unknown, y: unknown, z: unknown) => unknown;
            /** Type is unknown. One known value: 0 */
            last_transform_hash: unknown;
            /** Type is unknown. One known value: 0 */
            last_transform_hash2: unknown;
            compose: (position: unknown, quaternion: unknown, scale: unknown) => unknown;
            decompose: (position: unknown, quaternion: unknown, scale: unknown) => unknown;
            makePerspective: (left: unknown, right: unknown, top: unknown, bottom: unknown, near: unknown, far: unknown) => unknown;
            makeOrthographic: (left: unknown, right: unknown, top: unknown, bottom: unknown, near: unknown, far: unknown) => unknown;
            equals: (matrix: unknown) => unknown;
            fromArray: (array: unknown, offset: unknown) => unknown;
            toArray: (array: unknown, offset: unknown) => unknown;
            extractPosition: (m: unknown) => unknown;
            flattenToArrayOffset: (array: unknown, offset: unknown) => unknown;
            getPosition: () => unknown;
            setRotationFromQuaternion: (q: unknown) => unknown;
            multiplyToArray: () => unknown;
            multiplyVector3: (vector: unknown) => unknown;
            multiplyVector4: (vector: unknown) => unknown;
            multiplyVector3Array: (a: unknown) => unknown;
            rotateAxis: (v: unknown) => unknown;
            crossVector: (vector: unknown) => unknown;
            translate: () => unknown;
            rotateX: () => unknown;
            rotateY: () => unknown;
            rotateZ: () => unknown;
            rotateByAxis: () => unknown;
            applyToBuffer: (buffer: unknown, offset: unknown, length: unknown) => unknown;
            applyToVector3Array: (array: unknown, offset: unknown, length: unknown) => unknown;
            makeFrustum: (left: unknown, right: unknown, bottom: unknown, top: unknown, near: unknown, far: unknown) => unknown;
            appendTranslation: (x: unknown, y: unknown, z: unknown) => unknown;
            /**
             * @param ang   
             * @param up   
             * @param eoP (default=null)   
             */
            appendRotation: (ang: unknown, up: unknown, eoP?: unknown) => unknown;
            invert: () => unknown;
            eoQ: (v: unknown) => unknown;
            bNj: (v: unknown) => unknown;
        }
        interface Euler extends ClassIdentityProps<"Euler"> {
            x: unknown;
            y: unknown;
            z: unknown;
            order: unknown;
            /** Type is unknown. One known value: true */
            isEuler: unknown;
            set: (x: unknown, y: unknown, z: unknown, order: unknown) => unknown;
            clone: () => unknown;
            copy: (euler: unknown) => unknown;
            setFromRotationMatrix: (m: unknown, order: unknown, update: unknown) => unknown;
            setFromQuaternion: (q: unknown, order: unknown, update: unknown) => unknown;
            setFromVector3: (v: unknown, order: unknown) => unknown;
            reorder: (newOrder: unknown) => unknown;
            equals: (euler: unknown) => unknown;
            fromArray: (array: unknown) => unknown;
            toArray: (array: unknown, offset: unknown) => unknown;
            toVector3: (optionalResult: unknown) => unknown;
            onChange: (callback: unknown) => unknown;
            onChangeCallback: () => unknown;
        }
        interface Object3D extends ClassIdentityProps<"Object3D"> {
            readonly parent: unknown;
            lookAt: (vector: unknown) => unknown;
            readonly position: unknown;
            readonly rotation: unknown;
            readonly scale: unknown;
            readonly matrix: unknown;
            readonly matrixWorld: unknown;
            visible: unknown;
        }
        // failed to be included in generation (extractor didn't search for Object3D subclasses, intentionally)
        interface Mesh extends ClassIdentityProps<"Mesh"> {
            readonly parent: unknown;
            lookAt: (vector: unknown) => unknown;
            readonly position: Vector3;
            readonly rotation: unknown;
            readonly scale: unknown;
            readonly matrix: unknown;
            readonly matrixWorld: unknown;
            visible: unknown;
        }

    }
    var THREE: {
        Vector3: {
            new (): THREE.Vector3;

        }
        Matrix4: {
            new (): THREE.Matrix4;

        }
        Euler: {
            new (): THREE.Euler;

        }

    }
}

declare global {
    interface Vector extends ClassIdentityProps<"Vector"> {
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
    var Vector: {
        new (params: unknown): Vector;

    }
}

declare global {
    /** equals console.log */
    var trace: (...args: any[]) => void;
    var warn: (...args: any[]) => void;
    var error: (...args: unknown[]) => unknown;
    var pb2DebugPermissionVerify: () => unknown;
    /** @param bV (default=false)  */
    var GetMilliseconds: (bV?: boolean) => unknown;
    /** @param bV (default=false)  */
    var GetTime30: (bV?: boolean) => unknown;
    var GetIngameTime: () => number;
    var _pb2ExecTimeTest: () => true;
    var _pb2DebugHook: (coK: unknown, coL: unknown) => void;
    var _pb2DebugLastPtr: (i: number) => void;
    var _pb2DebugReturn: (value: unknown) => void;
    var _pb2DebugPopUp: (...args: unknown[]) => void;
    var _pb2DebugPopUpOnce: (arg: unknown) => void;
    /**
     * @param _coV   
     * @param _cpk (default=1)   
     * @param _cpn (default=1)   
     * @param _cpo (default=null)   
     * @param _cpp (default=1)   
     */
    var _pb2T: (_coV: (...args: any[]) => any, _cpk?: unknown, _cpn?: unknown, _cpo?: unknown, _cpp?: unknown) => unknown;
    var _pb2TU: (t: string) => never;
    var _pb2ClientSideTrigger: (f: unknown) => unknown;
    /**
     * @param x   
     * @param y   
     * @param color (default=0xFF0000)   
     * @param size (default=3)   
     * @param z (default=-1000) depth  
     * @param opacity (default=0.5)   
     * @param eIe (default=0) time to display  
     */
    var DrawDebugPoint: (x: unknown, y: unknown, color?: unknown, size?: unknown, z?: unknown, opacity?: unknown, eIe?: unknown) => unknown;
    /**
     * @param ax start x  
     * @param ay start y  
     * @param bx end x  
     * @param by end y  
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugLine: (ax: unknown, ay: unknown, bx: unknown, by: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
    /**
     * @param ax start x  
     * @param ay start y  
     * @param bx end x  
     * @param by end y  
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugArrow: (ax: unknown, ay: unknown, bx: unknown, by: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
    /**
     * @param minx lower x bound  
     * @param miny lower y bound  
     * @param maxx upper x bound  
     * @param maxy upper y bound  
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugRect: (minx: unknown, miny: unknown, maxx: unknown, maxy: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
    /**
     * @param minx lower x bound  
     * @param miny lower y bound  
     * @param w   
     * @param h   
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugRectByDimensions: (minx: unknown, miny: unknown, w: unknown, h: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;

    // cannot be typed because it would conflict with the declaration for javascript's addEventListener. requires a noLib: true setup with custom ts lib declarations
    //var addEventListener: (event_type: unknown, params: unknown, dVQ?: null | unknown) => void;
    //var removeEventListener: (event_type: unknown, params: unknown, dVQ?: null | unknown) => void;
}

declare global {
    interface Math {
        sumPrecise: () => unknown;
        POSITIVE_INFINITY: unknown;
        NEGATIVE_INFINITY: unknown;
        randomIntegerWithin: (a: number, b: number) => number;
        randomWithin: (a: number, b: number) => number;
    }
    interface StringConstructor {
        eoX: (a: unknown, b: unknown) => unknown;
    }
    interface String {
        split_test: (d: unknown) => unknown;
    }
    interface Array<T> {
        join_test: () => unknown;
        /** Type is unknown. One known value: null */
        any: unknown;
    }
    interface ErrorConstructor {
        captureStackTrace: () => unknown;
        /** Type is unknown. One known value: 10 */
        stackTraceLimit: unknown;
    }
}

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

declare global {
    interface b2Vec2 extends ClassIdentityProps<"b2Vec2"> {
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
    var b2Vec2: {
        /**
         * @param x (default=0)   
         * @param y (default=0)   
         * @param seal (default=true)   
         */
        new (x?: unknown, y?: unknown, seal?: unknown): b2Vec2;

    }
}

declare global {
    var b2World: ClassIdentityProps<"b2World"> & {
        GetAllBodies: () => unknown;
    }
}

declare global {
    interface ep extends ClassIdentityProps<"ep"> {
        /** Type is unknown. One known value: 0 */
        volume: unknown;
        pitch: unknown;
        stop: () => unknown;
        readonly isPlaying: unknown;
        /** Type is unknown. One known value: "" */
        readonly sound_name: unknown;
    }
    
}

type pb2EntityBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    /** Type is unknown. One known value: 2 */
    readonly classid: unknown;
    readonly x: number;
    readonly y: number;
    readonly tox: number;
    readonly toy: number;
    InstallGun: (_tQ: unknown) => unknown;
    DropGun: () => unknown;
    remove: () => unknown;
    /**
     * @param r   
     * @param eQf (default=-1)   
     */
    AddRagdoll: (r: unknown, eQf?: unknown) => unknown;
    /**
     * @param r   
     * @param hv (default=false)   
     */
    ExcludeRagdoll: (r: unknown, hv?: unknown) => unknown;
    /**
     * @param r   
     * @param time (default=-100)   
     * @param eQa (default=false)   
     * @param eQh (default=null)   
     */
    IgnoreRagdoll: (r: unknown, time?: unknown, eQa?: unknown, eQh?: unknown) => unknown;
    /**
     * @param bN   
     * @param xx   
     * @param yy   
     * @param _boD   
     * @param _ben   
     * @param limb_id   
     * @param limb_damage_multiplier (default=1)   
     * @param eTB (default=true)   
     * @param fG (default=0)   
     * @param fE (default=0)   
     * @param eSP (default=null)   
     * @param bqj (default=false)   
     */
    DealDamage: (bN: unknown, xx: unknown, yy: unknown, _boD: unknown, _ben: unknown, limb_id: unknown, limb_damage_multiplier?: unknown, eTB?: unknown, fG?: unknown, fE?: unknown, eSP?: unknown, bqj?: unknown) => unknown;
    MultiplyHealth: (m: unknown) => unknown;
    alpha: unknown;
    readonly is_being_removed: boolean;
    hea: number;
    hmax: number;
    dying_level: unknown;
    team: pb2Team;
    /**
     * @param x   
     * @param dist (default=-123)   
     */
    SetDriverSeatsAndRadius: (x: unknown, dist?: unknown) => unknown;
    /**
     * @param x   
     * @param eQr (default=false)   
     */
    SetSide: (x: unknown, eQr?: unknown) => unknown;
    readonly box2d_bodies: b2Body[];
    addEventListener: (event_type: unknown, params: unknown) => unknown;
    removeEventListener: (event_type: unknown, params: unknown) => unknown;
    GetLimb: (id: unknown) => unknown;
    /** @param id (default=0)  */
    GetMesh: (id?: number) => THREE.Mesh;
};

declare global {
    interface pb2Entity extends pb2EntityBase<"pb2Entity"> {}
    var pb2Entity: ClassIdentityProps<"pb2Entity"> & {
        CreateEntity: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_UNKNOWN: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_SPOILER35: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_BARREL: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_BARREL_PART: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_CRATE: unknown;
        /** Type is unknown. One known value: 5 */
        TYPE_TURRET: unknown;
        /** Type is unknown. One known value: 6 */
        TYPE_SPOILER27: unknown;
        /** Type is unknown. One known value: 7 */
        TYPE_SPOILER29: unknown;
        /** Type is unknown. One known value: 8 */
        TYPE_MOTO: unknown;
        /** Type is unknown. One known value: 9 */
        TYPE_WALKER: unknown;
        /** Type is unknown. One known value: 10 */
        TYPE_SPOILER28: unknown;
        /** Type is unknown. One known value: 11 */
        TYPE_SPOILER30: unknown;
        /** Type is unknown. One known value: 12 */
        TYPE_SPOILER13: unknown;
        /** Type is unknown. One known value: 13 */
        TYPE_SPOILER14: unknown;
        /** Type is unknown. One known value: 14 */
        TYPE_SPOILER15: unknown;
        /** Type is unknown. One known value: 15 */
        TYPE_SPOILER16: unknown;
        /** Type is unknown. One known value: 16 */
        TYPE_SPOILER17: unknown;
        /** Type is unknown. One known value: 17 */
        TYPE_SPOILER19: unknown;
        /** Type is unknown. One known value: 18 */
        TYPE_SPOILER18: unknown;
        /** Type is unknown. One known value: 19 */
        TYPE_SPOILER20: unknown;
        /** Type is unknown. One known value: 20 */
        TYPE_SPOILER21: unknown;
        /** Type is unknown. One known value: 21 */
        TYPE_ANTIGRAVITY: unknown;
        /** Type is unknown. One known value: 22 */
        TYPE_SPOILER33: unknown;
        /** Type is unknown. One known value: 23 */
        TYPE_CORVETTE: unknown;
        /** Type is unknown. One known value: 24 */
        TYPE_FLOATING_ICE: unknown;
        /** Type is unknown. One known value: 25 */
        TYPE_SPOILER34: unknown;
        /** Type is unknown. One known value: ["pb2Entity.TYPE_UNKNOWN","pb2Entity.TYPE_SPOILER35","pb2Entity.TYPE_BARREL","pb2Entity.TYPE_BARREL_PART","pb2Entity.TYPE_CRATE","pb2Entity.TYPE_TURRET","pb2Entity.TYPE_SPOILER27","pb2Entity.TYPE_SPOILER29","pb2Entity.TYPE_MOTO","pb2Entity.TYPE_WALKER","pb2Entity.TYPE_SPOILER28","pb2Entity.TYPE_SPOILER30","pb2Entity.TYPE_SPOILER13","pb2Entity.TYPE_SPOILER14","pb2Entity.TYPE_SPOILER15","pb2Entity.TYPE_SPOILER16","pb2Entity.TYPE_SPOILER17","pb2Entity.TYPE_SPOILER19","pb2Entity.TYPE_SPOILER18","pb2Entity.TYPE_SPOILER20","pb2Entity.TYPE_SPOILER21","pb2Entity.TYPE_ANTIGRAVITY","pb2Entity.TYPE_SPOILER33","pb2Entity.TYPE_CORVETTE","pb2Entity.TYPE_FLOATING_ICE","pb2Entity.TYPE_SPOILER34"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: 0 */
        MATERIAL_METAL: unknown;
        /** Type is unknown. One known value: 1 */
        MATERIAL_GLASS: unknown;
        /** Type is unknown. One known value: 2 */
        MATERIAL_WOOD: unknown;
        /** Type is unknown. One known value: 3 */
        MATERIAL_BLOOD: unknown;
        /** Type is unknown. One known value: 4 */
        MATERIAL_MAGAZINE_PISTOL: unknown;
        /** Type is unknown. One known value: 5 */
        MATERIAL_MAGAZINE_PISTOL3: unknown;
        /** Type is unknown. One known value: 6 */
        MATERIAL_MAGAZINE_RIFLE: unknown;
        /** Type is unknown. One known value: 7 */
        MATERIAL_MAGAZINE_GENERIC_METAL: unknown;
        /** Type is unknown. One known value: 8 */
        MATERIAL_RUBBER: unknown;
        /** Type is unknown. One known value: 9 */
        MATERIAL_METAL_USURP: unknown;
        /** Type is unknown. One known value: 10 */
        MATERIAL_METAL_USURP_BOSS_LEG: unknown;
        /** Type is unknown. One known value: 11 */
        MATERIAL_CONCRETE: unknown;
        /** Type is unknown. One known value: 12 */
        MATERIAL_METAL_SPOILER33: unknown;
        /** Type is unknown. One known value: 13 */
        MATERIAL_MAGAZINE_CANISTER: unknown;
        /** Type is unknown. One known value: 14 */
        MATERIAL_CRAB_SHELL: unknown;
        /** Type is unknown. One known value: 15 */
        MATERIAL_ICE: unknown;
        /** Type is unknown. One known value: 16 */
        MATERIAL_ROCK: unknown;
        /** Type is unknown. One known value: 17 */
        MATERIAL_METAL_MOTO: unknown;
        /** Type is unknown. One known value: [] */
        entities: unknown;
        /**
         * @param yJ   
         * @param x   
         * @param y   
         * @param _width   
         * @param _height   
         * @param eQz (default=null)   
         * @param lw (default=null)   
         * @param eQA (default=null)   
         */
        CountShapesInRect: (yJ: unknown, x: unknown, y: unknown, _width: unknown, _height: unknown, eQz?: unknown, lw?: unknown, eQA?: unknown) => unknown;
    }
}

declare global {
    /** this is an entity that is not currently available in the game. throws an error when constructed */
    interface fU extends pb2EntityBase<"fU"> {}
    
}

declare global {
    interface pb2AIModule extends ClassIdentityProps<"pb2AIModule"> {
        readonly skill: unknown;
        readonly controller: unknown;
        readonly allow_trace_shots: unknown;
        readonly allow_hit_reporting: unknown;
        readonly bot_decided_hunt_threat: unknown;
        bot_decided_teammate_heal: unknown;
        bot_decided_teammate_follow: unknown;
        /**
         * @param x   
         * @param y   
         * @param mode (default=pb2AIModule.GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED)   
         */
        GoTo: (x: unknown, y: unknown, mode?: unknown) => unknown;
        hunt_attacker: unknown;
        hunt_seen_threats: unknown;
        hunt_random_known_threats_range: unknown;
        heal_teammates: unknown;
        hear_range: unknown;
    }
    var pb2AIModule: ClassIdentityProps<"pb2AIModule"> & {
        /** Type is unknown. One known value: null */
        YQ: unknown;
        /** Type is unknown. One known value: 0 */
        BEHAVIOR_IDLE: unknown;
        /** Type is unknown. One known value: 1 */
        BEHAVIOR_LOOK_AROUND: unknown;
        /** Type is unknown. One known value: 2 */
        BEHAVIOR_INVESTIGATE: unknown;
        /** Type is unknown. One known value: 3 */
        BEHAVIOR_MPBOT: unknown;
        /** Type is unknown. One known value: 0 */
        COMBAT_LEVEL_NO_COMBAT: unknown;
        /** Type is unknown. One known value: 1 */
        COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE: unknown;
        /** Type is unknown. One known value: 2 */
        COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS: unknown;
        /** Type is unknown. One known value: 0 */
        TASK_TYPE_BASIC_GOTO: unknown;
        /** Type is unknown. One known value: 1 */
        TASK_TYPE_OXYGEN_RUSH: unknown;
        /** Type is unknown. One known value: 2 */
        TASK_TYPE_THREAT_HUNT: unknown;
        /** Type is unknown. One known value: 3 */
        TASK_TYPE_TEAMMATE_HEAL: unknown;
        /** Type is unknown. One known value: 4 */
        TASK_TYPE_TEAMMATE_FOLLOW: unknown;
        /** Type is unknown. One known value: 0 */
        GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED: unknown;
        /** Type is unknown. One known value: 1 */
        GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED: unknown;
        /** Type is unknown. One known value: 2 */
        GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED: unknown;
        /** Type is unknown. One known value: 9999 */
        NO_SLOT: unknown;
        /** Type is unknown. One known value: -1 */
        FIRST_WEAPON_SLOT: unknown;
        /** Type is unknown. One known value: 0 */
        SEQUENCE_BEHAVIOR_SERIOUS: unknown;
        /** Type is unknown. One known value: 1 */
        SEQUENCE_BEHAVIOR_SILLY: unknown;
        /** Type is unknown. One known value: 2 */
        SEQUENCE_BEHAVIOR_MAD: unknown;
        /** Type is unknown. One known value: 0 */
        WAYPOINT_TYPE_UNDEFINED: unknown;
        /** Type is unknown. One known value: 1 */
        WAYPOINT_TYPE_FLOOR: unknown;
        /** Type is unknown. One known value: 2 */
        WAYPOINT_TYPE_WALL: unknown;
        /** Type is unknown. One known value: 3 */
        WAYPOINT_TYPE_WATER: unknown;
        /** Type is unknown. One known value: 4 */
        WAYPOINT_TYPE_SLIDING_FLOOR: unknown;
        /** Type is unknown. One known value: 0 */
        REACH_TACTIC_UNREACHABLE: unknown;
        /** Type is unknown. One known value: 1 */
        REACH_TACTIC_WALK: unknown;
        /** Type is unknown. One known value: 2 */
        REACH_TACTIC_CROUCH: unknown;
        /** Type is unknown. One known value: 3 */
        REACH_TACTIC_JUMP: unknown;
        /** Type is unknown. One known value: 4 */
        REACH_TACTIC_SWORDJUMP: unknown;
        /** Type is unknown. One known value: 5 */
        REACH_TACTIC_SELFBOOST: unknown;
        /** Type is unknown. One known value: 6 */
        REACH_TACTIC_FALL: unknown;
        /** Type is unknown. One known value: 7 */
        REACH_TACTIC_WALLJUMP_START: unknown;
        /** Type is unknown. One known value: 8 */
        REACH_TACTIC_WALLJUMP_START_SWORDS: unknown;
        /** Type is unknown. One known value: 9 */
        REACH_TACTIC_WALLJUMP_LOOP: unknown;
        /** Type is unknown. One known value: 10 */
        REACH_TACTIC_WALLJUMP_END: unknown;
        /** Type is unknown. One known value: 11 */
        REACH_TACTIC_SWIM: unknown;
        /** Type is unknown. One known value: 12 */
        REACH_TACTIC_SWIM_JUMP: unknown;
        /** Type is unknown. One known value: 13 */
        REACH_TACTIC_SWIM_SELFBOOST: unknown;
        /** Type is unknown. One known value: 14 */
        REACH_TACTIC_HINT: unknown;
        /** Type is unknown. One known value: 15 */
        REACH_TACTIC_CLEARING_PATH: unknown;
        /** Type is unknown. One known value: 16 */
        REACH_TACTIC_SELF_HEALING: unknown;
        /** Type is unknown. One known value: ["unreachable","walk","crouch","jump","sword jump","self-boost","fall","walljump start","walljump start swords","walljump loop","walljump end","swim","swim jump","swim self-boost jump","hint-assisted","clearing movables in path","self-healing"] */
        REACH_TACTIC_NAMES: unknown;
        /** Type is unknown. One known value: [0,1,4,20,24,28,12,10,14,4,10,3,20,28,40,0,0] */
        REACH_TACTIC_PRICES: unknown;
        /** Type is unknown. One known value: [1,1,1,4,20,35,4,20,40,40,4,2,6,35,20,0,0] */
        REACH_TACTIC_THREAT_PRICES: unknown;
        /** Type is unknown. One known value: 1 */
        COEF_MULT_GLOBAL: unknown;
        /** Type is unknown. One known value: -1 */
        FIRE_COEF: unknown;
        /** Type is unknown. One known value: -1 */
        TOXIC_GAS_COEF: unknown;
        /** Type is unknown. One known value: -1 */
        LASER_MINE_COEF: unknown;
        /** Type is unknown. One known value: -1 */
        PROX_MINE_COEF: unknown;
        /** Type is unknown. One known value: 0.25 */
        TIME_WARP_COEF: unknown;
        /** Type is unknown. One known value: 0.5 */
        SHIELDED_COEF: unknown;
        /** Type is unknown. One known value: 1000 */
        VISITED_HINT_LINE_COST: unknown;
        /** Type is unknown. One known value: 1 */
        MOVABLE_ON_A_LINE_COST_PER_HITPOINT: unknown;
        /** Type is unknown. One known value: 50 */
        MOVABLE_ON_A_LINE_COST_PER_MOVABLE: unknown;
        /** Type is unknown. One known value: 10 */
        FAIL_WAY_LINE_COST_PER_FAILURE: unknown;
        /** Type is unknown. One known value: 0 */
        BULLET_COLLISION_LOGIC_PENETRATE: unknown;
        /** Type is unknown. One known value: 1 */
        BULLET_COLLISION_LOGIC_EXPLODE: unknown;
        /** Type is unknown. One known value: 2 */
        BULLET_COLLISION_LOGIC_MIRROR: unknown;
        /** Type is unknown. One known value: 3 */
        BULLET_COLLISION_LOGIC_GRENADE: unknown;
        /** Type is unknown. One known value: 4 */
        BULLET_COLLISION_LOGIC_DRAIN_LIGHT: unknown;
        /** Type is unknown. One known value: 5 */
        BULLET_COLLISION_LOGIC_CHRONO_BEAM: unknown;
        /** Type is unknown. One known value: 0 */
        FILTER_ANY: unknown;
        /** Type is unknown. One known value: 1 */
        FILTER_FLOOR: unknown;
        /** Type is unknown. One known value: 2 */
        FILTER_WATER: unknown;
        /** Type is unknown. One known value: 3 */
        FILTER_FLOOR_AND_WATER: unknown;
        /** Type is unknown. One known value: 4 */
        FILTER_ANY_ANYWHERE: unknown;
        /** Type is unknown. One known value: 5 */
        FILTER_ANY_ANYWHERE_PING_RANGE: unknown;
        /** Type is unknown. One known value: -1 */
        BEST_ATTACK_NOATOM: unknown;
        /** Type is unknown. One known value: -2 */
        BEST_ATTACK_BULLET: unknown;
        /** Type is unknown. One known value: -3 */
        BEST_ATTACK_ENTITY: unknown;
        /** Type is unknown. One known value: -4 */
        BEST_ATTACK_SHAPE: unknown;
        /** Type is unknown. One known value: 0 */
        HINT_ACTION_USE_SWITCH: unknown;
        /** Type is unknown. One known value: 1 */
        HINT_ACTION_JUST_WAIT: unknown;
        /** Type is unknown. One known value: 2 */
        HINT_ACTION_GO_TO: unknown;
        /** Type is unknown. One known value: 3 */
        HINT_ACTION_ATTACK_OBJECT: unknown;
        /** Type is unknown. One known value: 4 */
        HINT_ACTION_SHOOT_AT_POINT: unknown;
        /** Type is unknown. One known value: -1 */
        GUN_MODE_CURRENT: unknown;
        /** Type is unknown. One known value: ["pb2AIModule.YQ","pb2AIModule.BEHAVIOR_IDLE","pb2AIModule.BEHAVIOR_LOOK_AROUND","pb2AIModule.BEHAVIOR_INVESTIGATE","pb2AIModule.BEHAVIOR_MPBOT","pb2AIModule.COMBAT_LEVEL_NO_COMBAT","pb2AIModule.COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE","pb2AIModule.COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS","pb2AIModule.TASK_TYPE_BASIC_GOTO","pb2AIModule.TASK_TYPE_OXYGEN_RUSH","pb2AIModule.TASK_TYPE_THREAT_HUNT","pb2AIModule.TASK_TYPE_TEAMMATE_HEAL","pb2AIModule.TASK_TYPE_TEAMMATE_FOLLOW","pb2AIModule.GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED","pb2AIModule.GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED","pb2AIModule.GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED","pb2AIModule.NO_SLOT","pb2AIModule.FIRST_WEAPON_SLOT","pb2AIModule.SEQUENCE_BEHAVIOR_SERIOUS","pb2AIModule.SEQUENCE_BEHAVIOR_SILLY","pb2AIModule.SEQUENCE_BEHAVIOR_MAD","pb2AIModule.WAYPOINT_TYPE_UNDEFINED","pb2AIModule.WAYPOINT_TYPE_FLOOR","pb2AIModule.WAYPOINT_TYPE_WALL","pb2AIModule.WAYPOINT_TYPE_WATER","pb2AIModule.WAYPOINT_TYPE_SLIDING_FLOOR","pb2AIModule.REACH_TACTIC_UNREACHABLE","pb2AIModule.REACH_TACTIC_WALK","pb2AIModule.REACH_TACTIC_CROUCH","pb2AIModule.REACH_TACTIC_JUMP","pb2AIModule.REACH_TACTIC_SWORDJUMP","pb2AIModule.REACH_TACTIC_SELFBOOST","pb2AIModule.REACH_TACTIC_FALL","pb2AIModule.REACH_TACTIC_WALLJUMP_START","pb2AIModule.REACH_TACTIC_WALLJUMP_START_SWORDS","pb2AIModule.REACH_TACTIC_WALLJUMP_LOOP","pb2AIModule.REACH_TACTIC_WALLJUMP_END","pb2AIModule.REACH_TACTIC_SWIM","pb2AIModule.REACH_TACTIC_SWIM_JUMP","pb2AIModule.REACH_TACTIC_SWIM_SELFBOOST","pb2AIModule.REACH_TACTIC_HINT","pb2AIModule.REACH_TACTIC_CLEARING_PATH","pb2AIModule.REACH_TACTIC_SELF_HEALING","pb2AIModule.REACH_TACTIC_NAMES","pb2AIModule.REACH_TACTIC_PRICES","pb2AIModule.REACH_TACTIC_THREAT_PRICES","pb2AIModule.COEF_MULT_GLOBAL","pb2AIModule.FIRE_COEF","pb2AIModule.TOXIC_GAS_COEF","pb2AIModule.LASER_MINE_COEF","pb2AIModule.PROX_MINE_COEF","pb2AIModule.TIME_WARP_COEF","pb2AIModule.SHIELDED_COEF","pb2AIModule.VISITED_HINT_LINE_COST","pb2AIModule.MOVABLE_ON_A_LINE_COST_PER_HITPOINT","pb2AIModule.MOVABLE_ON_A_LINE_COST_PER_MOVABLE","pb2AIModule.FAIL_WAY_LINE_COST_PER_FAILURE","pb2AIModule.BULLET_COLLISION_LOGIC_PENETRATE","pb2AIModule.BULLET_COLLISION_LOGIC_EXPLODE","pb2AIModule.BULLET_COLLISION_LOGIC_MIRROR","pb2AIModule.BULLET_COLLISION_LOGIC_GRENADE","pb2AIModule.BULLET_COLLISION_LOGIC_DRAIN_LIGHT","pb2AIModule.BULLET_COLLISION_LOGIC_CHRONO_BEAM","pb2AIModule.FILTER_ANY","pb2AIModule.FILTER_FLOOR","pb2AIModule.FILTER_WATER","pb2AIModule.FILTER_FLOOR_AND_WATER","pb2AIModule.FILTER_ANY_ANYWHERE","pb2AIModule.FILTER_ANY_ANYWHERE_PING_RANGE","pb2AIModule.BEST_ATTACK_NOATOM","pb2AIModule.BEST_ATTACK_BULLET","pb2AIModule.BEST_ATTACK_ENTITY","pb2AIModule.BEST_ATTACK_SHAPE","pb2AIModule.HINT_ACTION_USE_SWITCH","pb2AIModule.HINT_ACTION_JUST_WAIT","pb2AIModule.HINT_ACTION_GO_TO","pb2AIModule.HINT_ACTION_ATTACK_OBJECT","pb2AIModule.HINT_ACTION_SHOOT_AT_POINT","pb2AIModule.GUN_MODE_CURRENT"] */
        ALL_TYPES: unknown;
        CreateAI: (params: unknown) => unknown;
        DebugReachTactic: (from: unknown, to: unknown) => unknown;
    }
}

declare global {
    interface pb2AIPathFindingHint extends ClassIdentityProps<"pb2AIPathFindingHint"> {
        enabled: unknown;
        remove: () => unknown;
        action_to_proceed: unknown;
        action_target: unknown;
    }
    var pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        Create: (params: unknown) => unknown;
    }
}

declare global {
    interface pb2AIThreat extends ClassIdentityProps<"pb2AIThreat"> {
        readonly knowledge_owner_team: unknown;
        readonly knowledge_about: unknown;
        ThreatEliminated: () => unknown;
    }
    var pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        /**
         * @param _dHj hunter team  
         * @param _dHk enemy  
         * @param rk null or pb2AIWayPoint instance  
         * @param dHo (default=false) no throw  
         */
        NewThreat: (_dHj: pb2Team, _dHk: pb2Ragdoll, rk: null | unknown, dHo?: boolean) => pb2AIThreat;
    }
}

declare global {
    var pb2ArmsAction: ClassIdentityProps<"pb2ArmsAction"> & {
        /** Type is unknown. One known value: 0 */
        ARMS_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        ARMS_PRIMARY: unknown;
        /** Type is unknown. One known value: 2 */
        ARMS_SECONDARY: unknown;
        /** Type is unknown. One known value: 3 */
        ARMS_BOTH: unknown;
        /** Type is unknown. One known value: 0 */
        LEGS_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        LEGS_BOTH: unknown;
        /** Type is unknown. One known value: 0 */
        ACTION_TYPE_RELOAD_WEAPONS: unknown;
        /** Type is unknown. One known value: 1 */
        ACTION_TYPE_THROW_GRENADE_HE: unknown;
        /** Type is unknown. One known value: 2 */
        ACTION_TYPE_THROW_GRENADE_PORT: unknown;
        /** Type is unknown. One known value: 3 */
        ACTION_TYPE_THROW_GRENADE_SHIELD: unknown;
        /** Type is unknown. One known value: 4 */
        ACTION_TYPE_THROW_GRENADE_TIME: unknown;
        /** Type is unknown. One known value: 5 */
        ACTION_TYPE_THROW_GRENADE_SMOKE: unknown;
        /** Type is unknown. One known value: 6 */
        ACTION_TYPE_THROW_GRENADE_FLASH: unknown;
        /** Type is unknown. One known value: 7 */
        ACTION_TYPE_THROW_GRENADE_TOXIC_GAS: unknown;
        /** Type is unknown. One known value: 8 */
        ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE: unknown;
        /** Type is unknown. One known value: 9 */
        ACTION_TYPE_THROW_GRENADE_LASER_MINE: unknown;
        /** Type is unknown. One known value: 10 */
        ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA: unknown;
        /** Type is unknown. One known value: 11 */
        ACTION_TYPE_THROW_GRENADE_VIRUS: unknown;
        /** Type is unknown. One known value: 12 */
        ACTION_TYPE_THROW_GRENADE_SNOWBALL: unknown;
        /** Type is unknown. One known value: 13 */
        ACTION_TYPE_THROW_GRENADE_HEALER: unknown;
        /** Type is unknown. One known value: 14 */
        ACTION_TYPE_THROW_GRENADE_GLOW: unknown;
        /** Type is unknown. One known value: 15 */
        ACTION_TYPE_THROW_GRENADE_FIRE: unknown;
        /** Type is unknown. One known value: 16 */
        ACTION_TYPE_THROW_GRENADE_TURRET: unknown;
        /** Type is unknown. One known value: 17 */
        ACTION_TYPE_THROW_GRENADE_TURRET2: unknown;
        /** Type is unknown. One known value: 18 */
        ACTION_TYPE_THROW_GRENADE_COLD_NADE: unknown;
        /** Type is unknown. One known value: 19 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET: unknown;
        /** Type is unknown. One known value: 20 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2: unknown;
        /** Type is unknown. One known value: 1 */
        GRENADE_FIRST: unknown;
        /** Type is unknown. One known value: 20 */
        GRENADE_LAST: unknown;
        /** Type is unknown. One known value: 21 */
        ACTION_TYPE_DRAG_RIGIDBODY: unknown;
        /** Type is unknown. One known value: 22 */
        ACTION_TYPE_GRAPPLING_HOOK: unknown;
        /** Type is unknown. One known value: 23 */
        ACTION_TYPE_USE: unknown;
        /** Type is unknown. One known value: 24 */
        ACTION_TYPE_GESTURE_POINT_AT: unknown;
        /** Type is unknown. One known value: 25 */
        ACTION_TYPE_GESTURE_LISTEN_RADIO: unknown;
        /** Type is unknown. One known value: 26 */
        ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER: unknown;
        /** Type is unknown. One known value: 27 */
        ACTION_TYPE_GESTURE_WEAPON_DOWN: unknown;
        /** Type is unknown. One known value: 28 */
        ACTION_TYPE_GESTURE_HAPPY: unknown;
        /** Type is unknown. One known value: 29 */
        ACTION_TYPE_KICK: unknown;
        /** Type is unknown. One known value: 30 */
        ACTION_TYPE_WALLJUMP_FRONT: unknown;
        /** Type is unknown. One known value: 31 */
        ACTION_TYPE_WALLJUMP_BACK: unknown;
        /** Type is unknown. One known value: 32 */
        ACTION_TYPE_SWORDS_ACTIVATION: unknown;
        /** Type is unknown. One known value: 24 */
        GESTURE_FIRST: unknown;
        /** Type is unknown. One known value: 28 */
        GESTURE_LAST: unknown;
        /** Type is unknown. One known value: ["pb2ArmsAction.ARMS_NONE","pb2ArmsAction.ARMS_PRIMARY","pb2ArmsAction.ARMS_SECONDARY","pb2ArmsAction.ARMS_BOTH","pb2ArmsAction.LEGS_NONE","pb2ArmsAction.LEGS_BOTH","pb2ArmsAction.ACTION_TYPE_RELOAD_WEAPONS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_PORT","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SHIELD","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TIME","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SMOKE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FLASH","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TOXIC_GAS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_LASER_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_VIRUS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SNOWBALL","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HEALER","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_GLOW","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FIRE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET2","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_COLD_NADE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2","pb2ArmsAction.GRENADE_FIRST","pb2ArmsAction.GRENADE_LAST","pb2ArmsAction.ACTION_TYPE_DRAG_RIGIDBODY","pb2ArmsAction.ACTION_TYPE_GRAPPLING_HOOK","pb2ArmsAction.ACTION_TYPE_USE","pb2ArmsAction.ACTION_TYPE_GESTURE_POINT_AT","pb2ArmsAction.ACTION_TYPE_GESTURE_LISTEN_RADIO","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_DOWN","pb2ArmsAction.ACTION_TYPE_GESTURE_HAPPY","pb2ArmsAction.ACTION_TYPE_KICK","pb2ArmsAction.ACTION_TYPE_WALLJUMP_FRONT","pb2ArmsAction.ACTION_TYPE_WALLJUMP_BACK","pb2ArmsAction.ACTION_TYPE_SWORDS_ACTIVATION","pb2ArmsAction.GESTURE_FIRST","pb2ArmsAction.GESTURE_LAST"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: ["Grenade C-00n","Teleport Grenade v03 CS-PortNade","Portable Shield v07 CS-Quarium","Portable TimeWarp C-00w","Smoke Nade CS-Dust","Flashbang Nade CS-Flash","Toxic Nade CS-Napkin","Proximity Mine C-00t","Laser Mine CS-Trap","Scanner CS-Stalk","Attack Drone CS-Virus","Snowball","Heal Drone CS-HealVirus","Portable Light CS-GlowFam","Combustion Shell CS-Slash","Sentry Turret DR-Facet","Portable Turret CS-Denier","Freezing Nade CS-Cryo","Scout Drone C-02d","Harasser Drone-CS"] */
        grenade_titles: unknown;
    }
}

declare global {
    /** the class is actually called hT but it's renamed here for obvious reasons */
    interface pb2Atom extends ClassIdentityProps<"hT"> {
        /** Type is unknown. One known value: 103 */
        readonly classid: unknown;
        x: unknown;
        y: unknown;
        tox: unknown;
        toy: unknown;
        readonly rad: unknown;
        readonly of: unknown;
        Teleport: (ax: unknown, ay: unknown) => unknown;
        GetBody: () => b2Body;
        GetPosition: () => b2Vec2;
        DealDamage: (args: unknown) => unknown;
        health_damage_multiplier: unknown;
        limb_damage_multiplier: unknown;
    }
    
}

declare global {
    var pb2Bleeding: ClassIdentityProps<"pb2Bleeding"> & {
        /**
         * @param mesh THREE mesh. gives position
         * @param dXy object containing box2d_body or index of box2d_bodies in dXG. used to add velocity to blood particles
         * @param duration 
         * @param lD color. new pb2Color(0xff0000).toColorTransform
         * @param dXG bleeding character / entity. not sure if type is correct
         * @param is_glowing 
         * @param dXr owner ragdoll / entity ? (if bU() === true (maybe means frozen) then no particles). not sure if type is correct
         */
        BleedAt: (
            mesh: THREE.Mesh, 
            dXy: {box2d_body: b2Body} | number, 
            duration: number, 
            lD: ColorTransform, 
            dXG: pb2Character | pb2Entity, 
            is_glowing: boolean, 
            dXr: pb2Ragdoll | pb2Entity
        ) => void;
    }
}

declare global {
    interface pb2Bullet extends ClassIdentityProps<"pb2Bullet"> {
        /** Type is unknown. One known value: 4 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly owner_ragdoll: unknown;
        readonly owner_gun: unknown;
        readonly initial_grenade_type: unknown;
        readonly is_punch: unknown;
        readonly is_sword: unknown;
        readonly is_bite: unknown;
        readonly is_railgun: unknown;
        readonly is_rocket: unknown;
        readonly is_plasma: unknown;
        readonly is_grenade: unknown;
        readonly is_radioactive: unknown;
        readonly is_beam: unknown;
        readonly is_blaster: unknown;
        readonly is_healgun: unknown;
        readonly is_cloud: unknown;
        readonly is_lightning: unknown;
        readonly is_blinding: unknown;
        readonly rocket_direct_damage_mode: unknown;
        readonly is_wall_sticking: unknown;
        readonly is_nail: unknown;
        Teleport: (dx: unknown, dy: unknown) => unknown;
        readonly box2d_body: unknown;
        /** @param dlv (default=false)  */
        remove: (dlv?: unknown) => unknown;
        readonly is_being_removed: unknown;
        bullet_hp: unknown;
        readonly is_thrown_by: unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: 0 | 1 | 2) => THREE.Mesh | null;
    }
    var pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        /** Type is unknown. One known value: false */
        bullets_damage_guns: unknown;
        /** Type is unknown. One known value: 1 */
        explosive_direct_based_multiplier: unknown;
        /** Type is unknown. One known value: 1.26 */
        held_ragdoll_damage_sword_kick_punch_mult: unknown;
        /** Type is unknown. One known value: 0.66 */
        knock_gun_owner_intensity: unknown;
        /** Type is unknown. One known value: 0.66 */
        knock_sword_owner_intensity: unknown;
        /** Type is unknown. One known value: 1.1 */
        grenade_density: unknown;
        /** Type is unknown. One known value: 1.142857142857143 */
        normal_grenade_mesh_scale: unknown;
        /** Type is unknown. One known value: 6 */
        radius_grenade: unknown;
        /** Type is unknown. One known value: 1 */
        radius_bullet: unknown;
        /** Type is unknown. One known value: 0 */
        radius_beam: unknown;
        /** Type is unknown. One known value: 5 */
        radius_sword: unknown;
        /** Type is unknown. One known value: 30 */
        radius_sword_crosshit: unknown;
        /** Type is unknown. One known value: 20 */
        radius_sword_protection: unknown;
        /** Type is unknown. One known value: 20 */
        radius_sword_bullet_reflection: unknown;
        /** Type is unknown. One known value: 10 */
        radius_cloud: unknown;
        /** Type is unknown. One known value: 7 */
        beam_max_life_time: unknown;
        /** Type is unknown. One known value: 5 */
        time_before_selfhit: unknown;
        /** Type is unknown. One known value: 85 */
        dist_before_selfhit: unknown;
        /** Type is unknown. One known value: 0.24 */
        player_push_power: unknown;
        /** Type is unknown. One known value: 0.18 */
        ragdoll_push_power: unknown;
        /** Type is unknown. One known value: 0.5 */
        ragdoll_push_power_explosion: unknown;
        /** Type is unknown. One known value: 0.5 */
        entity_push_power: unknown;
        /** Type is unknown. One known value: 1.3888888888888888 */
        entity_push_power_explosion: unknown;
        /** Type is unknown. One known value: 2.5 */
        bullet_target_push_multiplayer: unknown;
        /** Type is unknown. One known value: 2.5 */
        bullet_self_push_multiplayer: unknown;
        /** Type is unknown. One known value: 18 */
        beam_hit_spark_multiplier: unknown;
        /** Type is unknown. One known value: 0.333 */
        bullet_gravity_multiplayer: unknown;
        /** Type is unknown. One known value: 0.02 */
        water_push_power: unknown;
        /** Type is unknown. One known value: 0.4 */
        water_push_power_directed: unknown;
        /** Type is unknown. One known value: 0.05 */
        particle_push_power: unknown;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_bullet: unknown;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_beam: unknown;
        /** Type is unknown. One known value: 0.35 */
        ricochet_power_remain_rail: unknown;
        /** Type is unknown. One known value: 0.03 */
        friction_distance_multiplier: unknown;
        /** Type is unknown. One known value: 0.99 */
        friction_air: unknown;
        /** Type is unknown. One known value: 0.9 */
        friction_water: unknown;
        /** Type is unknown. One known value: 0.7 */
        friction_wall: unknown;
        /** Type is unknown. One known value: 0.75 */
        friction_for_beam: unknown;
        /** Type is unknown. One known value: 0.93 */
        friction_for_cloud_air: unknown;
        /** Type is unknown. One known value: 0.4 */
        friction_for_cloud_water: unknown;
        /** Type is unknown. One known value: 0.1 */
        min_damaging_ammount: unknown;
        /** Type is unknown. One known value: 0.05 */
        min_damaging_ammount_nails: unknown;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_AI: unknown;
        /** Type is unknown. One known value: 0.01 */
        min_damaging_ammount_clouds: unknown;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_in_walls: unknown;
        /** Type is unknown. One known value: 0.66 */
        held_gun_knock_multiplier: unknown;
        /** Type is unknown. One known value: 0.01 */
        max_damaging_constant_beam_damage: unknown;
        /** Type is unknown. One known value: 50 */
        blip_time: unknown;
        /** Type is unknown. One known value: 90 */
        max_rocket_fuel: unknown;
        /** Type is unknown. One known value: 0.1 */
        bullet_min_hp: unknown;
        /** Type is unknown. One known value: 1 */
        hp_default_bullet: unknown;
        /** Type is unknown. One known value: 0.65 */
        hp_railgun: unknown;
        /** Type is unknown. One known value: 1 */
        hp_raygun: unknown;
        /** Type is unknown. One known value: 1 */
        hp_sword: unknown;
        /** Type is unknown. One known value: 0.75 */
        hp_rocket: unknown;
        /** Type is unknown. One known value: 0.45 */
        hp_plasma: unknown;
        /** Type is unknown. One known value: 1 */
        hp_plasma_radioactive: unknown;
        /** Type is unknown. One known value: 2 */
        hp_beam: unknown;
        /** Type is unknown. One known value: 1 */
        hp_grenade: unknown;
        /** Type is unknown. One known value: 1.8 */
        hp_nail: unknown;
        /** Type is unknown. One known value: 240 */
        default_bullet_speed: unknown;
        /** Type is unknown. One known value: 30 */
        default_bullet_life: unknown;
        /**
         * @param x   
         * @param y   
         * @param _type   
         * @param cfF (default=true)   
         * @param owner_ragdoll (default=null)   
         * @param PF (default=false)   
         */
        CreateGadget: (x: unknown, y: unknown, _type: unknown, cfF?: unknown, owner_ragdoll?: unknown, PF?: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        bullets: unknown;
    }
}

declare global {
    var pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        AllowDispose: (b: unknown) => unknown;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: unknown;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}

declare global {
    var pb2ByteShifter: ClassIdentityProps<"pb2ByteShifter"> & {
        /** Type is unknown. One known value: 6.944444444444445 */
        send_repeat_delay_for_server: unknown;
    }
}

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: unknown;
        readonly x: number;
        readonly y: number;
        act_x: unknown;
        act_y: unknown;
        act_fall: unknown;
        look_x: unknown;
        look_y: unknown;
        act_fire: unknown;
        act_fire2: unknown;
        auto_fire: unknown;
        auto_fire2: unknown;
        act_single_jump: unknown;
        act_single_fire: unknown;
        act_single_fire2: unknown;
        act_single_fall: unknown;
        act_grab: unknown;
        act_kick: unknown;
        act_reload: unknown;
        act_sprint: unknown;
        readonly can_be_revived: unknown;
        MakeUnrevivable: () => unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        readonly ang: unknown;
        hea: number;
        hmax: number;
        start_hea: unknown;
        readonly ragdoll: pb2Ragdoll | null;
        MoveOn: (nx: unknown, ny: unknown, sx: unknown, sy: unknown) => unknown;
        DealCharacterDamage: (beh: unknown, beg: unknown, bef: unknown, bed: unknown, beo: unknown) => unknown;
        /**
         * @param bN damage amount  
         * @param cqQ (default=true)   
         * @param beo (default=false)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param gv (default=false) mute damage sound  
         * @param cqP (default=false)   
         */
        SubstractHealth: (bN: number, cqQ?: boolean, beo?: boolean, fG?: number, fE?: number, gv?: boolean, cqP?: boolean) => boolean;
        AddGrenades: (cay: unknown, count: unknown) => unknown;
        SetGrenades: (cay: unknown, count: unknown) => unknown;
        GetGrenades: (cay: unknown) => unknown;
        remove: () => unknown;
        addEventListener: (event_type: unknown, params: unknown) => unknown;
        removeEventListener: (event_type: unknown, params: unknown) => unknown;
        removeAllListeners: () => unknown;
        removeListenersByType: (event_type: unknown) => unknown;
        readonly controller: unknown;
        readonly hand_holder: unknown;
        readonly curwea_slot: unknown;
        readonly curwea_slot_animation: unknown;
        curwea_backup_slot: unknown;
        readonly phys_sit: unknown;
        /**
         * @param slot   
         * @param caI (default=true)   
         * @param override_backup_slot_and_dont_ignore_entity_or_freezing_rules (default=true)   
         */
        ChangeGunIfPossible: (slot: unknown, caI?: unknown, override_backup_slot_and_dont_ignore_entity_or_freezing_rules?: unknown) => unknown;
        ReloadGunsIfPossible: () => unknown;
        ChangeGunToBackupIfPossible: () => unknown;
        DoGesture: (caD: unknown) => unknown;
        UseAction: () => unknown;
        /**
         * @param _x   
         * @param _y   
         * @param Vk (default=false)   
         */
        addImpulse: (_x: unknown, _y: unknown, Vk?: unknown) => unknown;
        AddVel: (_x: unknown, _y: unknown) => unknown;
        SetVel: (_x: unknown, _y: unknown) => unknown;
        DimLights: () => unknown;
        UndimLights: () => unknown;
        /** @param underwater (default=undefined)  */
        PlayDeathSound: (underwater?: unknown) => unknown;
        /**
         * @param bps (default=false)   
         * @param gv (default=false)   
         */
        Kill: (bps?: unknown, gv?: unknown) => unknown;
        aim_spread: unknown;
        BodyIsPartOfPlayer: (bodyB: unknown, cpD: unknown) => unknown;
        PickWeapon: (cqN: unknown) => unknown;
        DropWeapon: (cqN: pb2Gun) => void;
        DropGunIfPossible: () => unknown;
        /** @param v (default=0)  */
        SetAllGrenadesCount: (v?: unknown) => unknown;
        GetWeaponGlow: () => unknown;
        WeaponIsBeingChanged: () => unknown;
        CanShootNow: () => unknown;
        /**
         * @param slot   
         * @param primary (default=true)   
         */
        GetWeaponAtSlot: (slot: unknown, primary?: unknown) => unknown;
        GetCurrentAnimationWeapon: (primary: unknown) => unknown;
        HasAnyWeapon: () => unknown;
        ChangeGunToNonSwords: () => unknown;
        GetNonSwordsSlot: () => unknown;
        GetRandomNonSwordsSlot: () => unknown;
        GetFirstHealGunSlot: () => unknown;
        GetBody: (i: 0 | 1) => b2Body;
        stability: unknown;
        DoKick: () => unknown;
        StartGrapplingHookIfPossible: () => unknown;
        /** @param cay (default=-1)  */
        ThrowGrenadeIfPossible: (cay?: unknown) => unknown;
        GetHeldBody: () => unknown;
        forceUnHandHold: (id: unknown) => void;
    }
    var pb2Character: ClassIdentityProps<"pb2Character"> & {
        CreateCharacter: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        DROP_NEVER: unknown;
        /** Type is unknown. One known value: 1 */
        DROP_WHEN_INTENDED_ONLY: unknown;
        /** Type is unknown. One known value: 2 */
        DROP_WHEN_CAN_NOT_BE_REVIVED: unknown;
        /** Type is unknown. One known value: 3 */
        DROP_ALWAYS: unknown;
        characters: pb2Character[];
        /** Type is unknown. One known value: 10 */
        player_half_width: unknown;
        /** Type is unknown. One known value: 20 */
        player_width: unknown;
        /** Type is unknown. One known value: 70 */
        player_height: unknown;
        /** Type is unknown. One known value: 32 */
        player_step_size: unknown;
        /** Type is unknown. One known value: 14 */
        player_sitmax: unknown;
    }
}

declare global {
    var pb2ClassID: ClassIdentityProps<"pb2ClassID"> & {
        /** Type is unknown. One known value: 0 */
        OTHER: unknown;
        /** Type is unknown. One known value: 1 */
        CHARACTER: unknown;
        /** Type is unknown. One known value: 2 */
        ENTITY: unknown;
        /** Type is unknown. One known value: 3 */
        RAGDOLL: unknown;
        /** Type is unknown. One known value: 4 */
        BULLET: unknown;
        /** Type is unknown. One known value: 5 */
        GUN: unknown;
        /** Type is unknown. One known value: 6 */
        SHAPE: unknown;
        /** Type is unknown. One known value: 7 */
        TEAM: unknown;
        /** Type is unknown. One known value: 8 */
        FLOATING_TEXT: unknown;
        /** Type is unknown. One known value: 9 */
        COLLISION_IGNORE: unknown;
        /** Type is unknown. One known value: 10 */
        PHYS3D: unknown;
        /** Type is unknown. One known value: 11 */
        LASER_SIGHT: unknown;
        /** Type is unknown. One known value: 12 */
        BEAM_BULLET_TRAIL: unknown;
        /** Type is unknown. One known value: 13 */
        CONTROLLER: unknown;
        /** Type is unknown. One known value: 14 */
        DATA_CONNECTION: unknown;
        /** Type is unknown. One known value: 15 */
        HAND_HOLDER: unknown;
        /** Type is unknown. One known value: 16 */
        WATER_CLASS: unknown;
        /** Type is unknown. One known value: 17 */
        FIRE: unknown;
        /** Type is unknown. One known value: 18 */
        FIRE_TYPE: unknown;
        /** Type is unknown. One known value: 19 */
        FROZEN_SPOT: unknown;
        /** Type is unknown. One known value: 20 */
        EXPLOSION: unknown;
        /** Type is unknown. One known value: 21 */
        SHIELD: unknown;
        /** Type is unknown. One known value: 22 */
        TIME_WARP_ZONE: unknown;
        /** Type is unknown. One known value: 23 */
        ROPE: unknown;
        /** Type is unknown. One known value: 24 */
        TEMP_HURT_FORCE: unknown;
        /** Type is unknown. One known value: 25 */
        RADIOACTIVE_CLOUD: unknown;
        /** Type is unknown. One known value: 26 */
        MERGED_SOUND_ADD_SOURCE_CALL: unknown;
        /** Type is unknown. One known value: 27 */
        REPLAY_DATA: unknown;
        /** Type is unknown. One known value: 28 */
        SOUND: unknown;
        /** Type is unknown. One known value: 29 */
        HERO_INFO: unknown;
        /** Type is unknown. One known value: 30 */
        HERO_INFO_BAR: unknown;
        /** Type is unknown. One known value: 31 */
        AI_MODULE: unknown;
        /** Type is unknown. One known value: 32 */
        DECORATION: unknown;
        /** Type is unknown. One known value: 33 */
        WINDOW_HINT: unknown;
        /** Type is unknown. One known value: 34 */
        SWITCH: unknown;
        /** Type is unknown. One known value: 35 */
        LIGHT: unknown;
        /** Type is unknown. One known value: 100 */
        WINDOW: unknown;
        /** Type is unknown. One known value: 101 */
        REGION: unknown;
        /** Type is unknown. One known value: 102 */
        VOID: unknown;
        /** Type is unknown. One known value: 103 */
        ATOM: unknown;
    }
}

declare global {
    var pb2Cloth: ClassIdentityProps<"pb2Cloth"> & {
        /** Type is unknown. One known value: 1 */
        TYPE_SCARF: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_CAPE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_TAIL_FOX: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_TAIL_CAT: unknown;
        /** Type is unknown. One known value: 5 */
        TYPE_TAIL_DRAGON: unknown;
        /** Type is unknown. One known value: 6 */
        TYPE_TAIL_DEMONIC: unknown;
        /** Type is unknown. One known value: 7 */
        TYPE_HAT_MAGE: unknown;
        /** Type is unknown. One known value: 8 */
        TYPE_HAT_SANTA: unknown;
        /** Type is unknown. One known value: 9 */
        TYPE_HAT_MAGICIAN: unknown;
        /** Type is unknown. One known value: 10 */
        TYPE_WINGS: unknown;
        /** Type is unknown. One known value: 11 */
        TYPE_NIMBUS: unknown;
        /** Type is unknown. One known value: 12 */
        TYPE_BEARD: unknown;
        /** Type is unknown. One known value: 13 */
        TYPE_HAIR_REGULAR: unknown;
        /** Type is unknown. One known value: 14 */
        TYPE_HAIR_PONYTAIL: unknown;
        /** Type is unknown. One known value: 15 */
        TYPE_SKIRT: unknown;
        /** Type is unknown. One known value: 16 */
        TYPE_PARACHUTE: unknown;
        /** Type is unknown. One known value: 17 */
        TYPE_MINIGUN_BELT: unknown;
        /** Type is unknown. One known value: 18 */
        TYPE_ENTITY_CABLES: unknown;
        /** Type is unknown. One known value: 19 */
        TYPE_WEAPON_FUEL_CABLE: unknown;
        /** Type is unknown. One known value: 20 */
        TYPE_FLOATING_DRONE: unknown;
    }
}

declare global {
    interface pb2Color extends ClassIdentityProps<"pb2Color"> {
        r: unknown;
        g: unknown;
        b: unknown;
        clone: () => unknown;
        /** Type is unknown. One known value: 0 */
        _uint: unknown;
        multiply: (num: unknown) => unknown;
        average: () => unknown;
        toColorTransform: () => unknown;
        /** @param enC (default=1)  */
        random: (enC?: unknown) => unknown;
        multUpToMax: (max: unknown) => unknown;
        setRGB: (r: unknown, g: unknown, b: unknown) => unknown;
        isEqual: (c: unknown) => unknown;
    }
    var pb2Color: {
        /** @param u (default=0xffffff)  */
        new (u?: unknown): pb2Color;

    }
}

declare global {
    interface pb2ColoredText extends ClassIdentityProps<"pb2ColoredText"> {
        text: unknown;
        colors: unknown;
        CapitalRedColors: () => unknown;
        RandomColors: () => unknown;
        WhiteColors: () => unknown;
        /**
         * @param nickname_tagged   
         * @param main_color (default=undefined)   
         */
        FromTagged: (nickname_tagged: unknown, main_color?: unknown) => unknown;
        GetTagged: () => unknown;
    }
    var pb2ColoredText: {
        /** @param txt (default='')  */
        new (txt?: unknown): pb2ColoredText;

    }
}

declare global {
    interface pb2Controller extends ClassIdentityProps<"pb2Controller"> {
        readonly character: unknown;
        readonly player_connection: unknown;
        act_x: unknown;
        act_y: unknown;
        look_x: number;
        look_y: number;
        act_fall: unknown;
        act_fire: unknown;
        act_fire2: unknown;
        act_grab: unknown;
        act_sprint: unknown;
        readonly _is_typing: unknown;
        readonly _is_in_menu: unknown;
        remove: () => unknown;
        readonly zoom: unknown;
        /**
         * @param c   
         * @param cGz (default=false)   
         */
        CopyStateFrom: (c: unknown, cGz?: unknown) => unknown;
        /**
         * @param to   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_INVERSEMORPH)   
         */
        StartZoomMorph: (to: unknown, param?: unknown, func?: unknown) => unknown;
        StopZoomMorph: () => unknown;
        /**
         * @param to_x   
         * @param to_y   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_MORPH)   
         */
        StartPositionMorph: (to_x: unknown, to_y: unknown, param?: unknown, func?: unknown) => unknown;
        StopPositionMorph: () => unknown;
        readonly camera_position_forced: unknown;
        readonly camera_position_target_x: unknown;
        readonly camera_position_target_y: unknown;
        readonly zoom_changing: unknown;
        readonly target_zoom: unknown;
        /** @param stable (default=false)  */
        ScreenMinX: (stable?: unknown) => unknown;
        /** @param stable (default=false)  */
        ScreenMaxX: (stable?: unknown) => unknown;
        /** @param stable (default=false)  */
        ScreenMinY: (stable?: unknown) => unknown;
        /** @param stable (default=false)  */
        ScreenMaxY: (stable?: unknown) => unknown;
        ai: unknown;
        allow_damage_report_flash: unknown;
        color_mult: unknown;
        color_add: unknown;
        readonly UpdateScreenColor: unknown;
        damage_report_flash_current: unknown;
        player_controllable: unknown;
        readonly damage_dealt_players_tot: unknown;
        readonly damage_dealt_entities_tot: unknown;
        readonly eliminations_players_tot: unknown;
        readonly eliminations_entities_tot: unknown;
    }
    var pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        /** Type is unknown. One known value: 1.2 */
        default_zoom_on_foot: unknown;
        /** Type is unknown. One known value: 0.8 */
        default_zoom_driving: unknown;
        /** Type is unknown. One known value: 0.9 */
        vehicle_in_out_param: unknown;
        /** Type is unknown. One known value: 3 */
        vehicle_in_out_func: unknown;
        CreateController: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        controllers: unknown;
    }
}

declare global {
    interface pb2Decoration extends ClassIdentityProps<"pb2Decoration"> {
        /** Type is unknown. One known value: 32 */
        readonly classid: unknown;
        remove: () => unknown;
        GetColor: () => unknown;
        GetColorGlow: () => unknown;
        SetColor: (c: unknown) => unknown;
        SetColorGlow: (c: unknown) => unknown;
        blending: unknown;
        shading: unknown;
        alpha: unknown;
        opacity: unknown;
        glowing_intensity: unknown;
        readonly source: unknown;
        readonly model_source: unknown;
        readonly source_glow: unknown;
        relative_to_mesh: unknown;
        hide_relative_to_mesh: unknown;
        inherit_effects: unknown;
        visible: unknown;
        readonly is_being_removed: unknown;
        readonly position: unknown;
        x: unknown;
        y: unknown;
        z: unknown;
        readonly rotation: unknown;
        readonly scale: unknown;
        /** Type is unknown. One known value: null */
        readonly offset: unknown;
        SetPersonalVisibilityFor: (TK: unknown, value: unknown) => unknown;
        ResetPersonalVisibilityRules: () => unknown;
        default_visibility: unknown;
        PlayAnimation: (animation_id: unknown) => unknown;
        PauseAnimation: () => unknown;
        ResumeAnimation: () => unknown;
        animation_info: unknown;
        UpdateAnimationUVs: () => unknown;
        allow_sync: unknown;
    }
    var pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        CreateDecoration: (params: unknown) => unknown;
        PreloadUserData: (user_data_uid: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        LAYER_WORLD: unknown;
        /** Type is unknown. One known value: 1 */
        LAYER_WORLD_HUD: unknown;
        /** Type is unknown. One known value: 2 */
        LAYER_SCREEN_HUD: unknown;
        /** Type is unknown. One known value: 0 */
        BLENDING_NORMAL: unknown;
        /** Type is unknown. One known value: 1 */
        BLENDING_ADDITIVE: unknown;
        /** Type is unknown. One known value: 2 */
        BLENDING_MULTIPLY: unknown;
        /** Type is unknown. One known value: 0 */
        SHADING_INITIAL: unknown;
        /** Type is unknown. One known value: 1 */
        SHADING_DIMMED: unknown;
        /** Type is unknown. One known value: 2 */
        SHADING_GLOWING: unknown;
        /** Type is unknown. One known value: 0 */
        ATTACHMENT_DISABLED: unknown;
        /** Type is unknown. One known value: 1 */
        ATTACHMENT_NTH_MESH_OF_OBJECT: unknown;
        /** Type is unknown. One known value: 2 */
        ATTACHMENT_EXPRESSION: unknown;
        /** Type is unknown. One known value: 0 */
        RENDER_METHOD_TRANSPARENT: unknown;
        /** Type is unknown. One known value: 1 */
        RENDER_METHOD_TRANSPARENT_BACKGROUND: unknown;
        /** Type is unknown. One known value: 2 */
        RENDER_METHOD_TRANSPARENT_FOREGROUND: unknown;
        /** Type is unknown. One known value: 3 */
        RENDER_METHOD_OPAQUE: unknown;
        /** Type is unknown. One known value: 4 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY: unknown;
        /** Type is unknown. One known value: 5 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND: unknown;
        /** Type is unknown. One known value: 6 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND: unknown;
        /** Type is unknown. One known value: ["pb2Decoration.RENDER_METHOD_TRANSPARENT","pb2Decoration.RENDER_METHOD_TRANSPARENT_BACKGROUND","pb2Decoration.RENDER_METHOD_TRANSPARENT_FOREGROUND","pb2Decoration.RENDER_METHOD_OPAQUE","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND"] */
        ALL_RENDER_METHODS: unknown;
    }
}

declare global {
    interface pb2Disposer extends ClassIdentityProps<"pb2Disposer"> {
        time_to_live: unknown;
        readonly Pause: unknown;
        readonly Resume: unknown;
        readonly paused: unknown;
    }
    var pb2Disposer: ClassIdentityProps<"pb2Disposer"> & {
        GetDisposer: (obj: unknown) => unknown;
    }
}

declare global {
    interface pb2EditorObject extends ClassIdentityProps<"pb2EditorObject"> {
        readonly attributes: unknown;
        readonly children: unknown;
        Recreate: (params: unknown) => unknown;
        GetDeepCopy: () => unknown;
        SetUnsetDefaultAttributes: () => unknown;
        push: (obj: unknown) => unknown;
        unshift: (obj: unknown) => unknown;
        RemoveChild: (rem: unknown) => unknown;
        /**
         * @param where   
         * @param selected (default=null)   
         */
        ListChildren: (where: unknown, selected?: unknown) => unknown;
        /**
         * @param exA (default='Accessory ')   
         * @param exq (default='name')   
         */
        GetUniqueName: (exA?: unknown, exq?: unknown) => unknown;
        /**
         * @param class_name   
         * @param exi (default='*')   
         * @param exq (default='id')   
         */
        FindChild: (class_name: unknown, exi?: unknown, exq?: unknown) => unknown;
        /**
         * @param class_name   
         * @param lW (default=false)   
         */
        FindAllChildren: (class_name: unknown, lW?: unknown) => unknown;
        DragPoints: (wx: unknown, wy: unknown) => unknown;
        fromString: (xml_str: unknown) => unknown;
        /**
         * @param bdI   
         * @param exn (default=false)   
         */
        fromXMLNode: (bdI: unknown, exn?: unknown) => unknown;
    }
    var pb2EditorObject: {
        new (params: unknown): pb2EditorObject;
        /** bugged, the returned value shows up as "Error" */
        GetModificationWorldCopy: () => pb2EditorObject | "Error";
    }
}

declare global {
    /** Not known if this is always of type pb2EditorObject */
    var pb2EngineDatabase: pb2EditorObject;
}

declare global {
    interface pb2EntityAntigravity extends pb2EntityBase<"pb2EntityAntigravity"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: unknown[]): unknown;
        range: unknown;
        strength: unknown;
        mass_cap_scale: unknown;
        cooldown_duration_scale: unknown;
        can_be_damaged: unknown;
        lights_intensity: unknown;
        light_current: unknown;
        light_next_update_in: unknown;
        malfunction_timer: unknown;
    }
    var pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FORCE: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_IMPACT_PREVENTION: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_KINETIC_PUSHER: unknown;
    }
}

declare global {
    interface pb2EntityBarrel extends pb2EntityBase<"pb2EntityBarrel"> {}
    var pb2EntityBarrel: ClassIdentityProps<"pb2EntityBarrel"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_YELLOW: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_BLUE: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_RED: unknown;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_EMPTY: unknown;
        /** Type is unknown. One known value: 5 */
        STYLE_ID_TOXIC_GAS: unknown;
        /** Type is unknown. One known value: 6 */
        STYLE_ID_RED_PBFTTP: unknown;
        /** Type is unknown. One known value: 7 */
        STYLE_ID_FREEZING: unknown;
        /** Type is unknown. One known value: 8 */
        STYLE_ID_RADIOACTIVE: unknown;
    }
}

declare global {
    /** the class is actually called LZ but it's renamed here for obvious reasons */
    interface pb2EntityBarrelPart extends pb2EntityBase<"LZ"> {}
    
}

declare global {
    interface pb2EntityCorvette extends pb2EntityBase<"pb2EntityCorvette"> {}
    
}

declare global {
    interface pb2EntityCrate extends pb2EntityBase<"pb2EntityCrate"> {}
    
}

declare global {
    interface pb2EntityFloatingIce extends pb2EntityBase<"pb2EntityFloatingIce"> {}
    var pb2EntityFloatingIce: ClassIdentityProps<"pb2EntityFloatingIce"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_ICE: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_ROCK: unknown;
    }
}

declare global {
    interface pb2EntityMoto extends pb2EntityBase<"pb2EntityMoto"> {}
    var pb2EntityMoto: ClassIdentityProps<"pb2EntityMoto"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_MOTO: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_MOBILE_CS: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_MOBILE_C9: unknown;
    }
}

declare global {
    interface pb2EntityTurret extends pb2EntityBase<"pb2EntityTurret"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: unknown[]): unknown;
    }
    var pb2EntityTurret: ClassIdentityProps<"pb2EntityTurret"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FACET: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_DENIER: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_SCOUT_DRONE: unknown;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_HARASSER_DRONE: unknown;
    }
}

declare global {
    interface pb2EntityWalker extends pb2EntityBase<"pb2EntityWalker"> {}
    
}

/*
@TODO: check if these are still accurate
// defaults defined as what value would give the same effect as it being undefined
type ExplosionParams = {
    z?: number; // 0 by default 
    sV?: boolean; // false by default
    owner_entity?: null | pb2EntityInstance // null by default
    bcN?: number; // 1 by default
    /** defaults to pb2Fire.yh (instance of Ki aka pb2FireType class). if specified, it would be a pb2FireType instance, but you'll never specify the fire type because the level editor doesn't make that accessible. *\/
    fire_type?: unknown;
    yt?: null | unknown; // null by default
    /**
     * things to be ignored by the explosion, or internally the things that have already been hit by the explosion. [] by default.  
     * the internal array can also include rope parts but it's omitted here because they're not accessible in level editor scripts.
     *\/
    Bi?: (pb2ShapeInstance | b2BodyInstance | pb2GunInstance | pb2BulletInstance | pb2ShieldZoneInstance | pb2AtomInstance)[];
    /** false by default *\/
    Ch?: boolean;
    /** disable particles. false by default *\/
    bBR?: boolean;
    bO?: number; // 1 by default
    kw?: boolean; // true by default
    radius: number;
    x: number;
    y: number;
} & (
    {
        sprite: false;
    } |
    {
        sprite: true;
        color: pb2HighRangeColor;
        color2: pb2HighRangeColor;
    }
) & {
    is_smoke?: boolean; // false by default. has no effect if the point is in water, false is used in that case
    tk?: number; // 1 by default
    jj?: number; // 0 by default
    hI?: number; // 2.5 by default. has no effect if fire_duration > 0, 0.5 is used in that case
} & (
    {
        fire_duration?: 0; // 0 by default, otherwise a positive number
    } |
    {
        fire_duration: number; // 0 by default, otherwise a positive number. 30 = 1 second
        jf: boolean; // spawn fire?
        jH: number; // fire radius
    }
) & {
    owner_ragdoll?: null | pb2RagdollInstance; // null by default
    source_bullet?: pb2BulletInstance | ExplosionParams["owner_ragdoll"]; // equal to owner_ragdoll by default
    damage?: number; // 1 by default
    bh?: number; // value of pb2FloatingText.GetNewHash() by default
    gP?: boolean; // true by default
    sound: any; // one of pb2Explosion.EXPLOSION_* constants
};
*/

declare global {
    interface pb2Explosion extends ClassIdentityProps<"pb2Explosion"> {
        /** Type is unknown. One known value: 20 */
        readonly classid: unknown;
        readonly x: number;
        readonly y: number;
        readonly source_bullet: pb2Bullet | pb2Explosion["owner_ragdoll"];
        readonly owner_ragdoll: pb2Ragdoll | null;
        readonly is_smoke: boolean;
        readonly radius: unknown;
    }
    var pb2Explosion: ClassIdentityProps<"pb2Explosion"> & {
        MakeExplosion: (params: unknown) => pb2Explosion | undefined;
        /** Type is unknown. One known value: 0 */
        EXPLOSION_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        EXPLOSION_BASIC: unknown;
        /** Type is unknown. One known value: 2 */
        EXPLOSION_RADIOACTIVE: unknown;
        /** Type is unknown. One known value: 3 */
        EXPLOSION_PLASMA: unknown;
        /** Type is unknown. One known value: 4 */
        EXPLOSION_COINTOSS: unknown;
        /** Type is unknown. One known value: 5 */
        EXPLOSION_RL2: unknown;
        /** Type is unknown. One known value: 6 */
        EXPLOSION_RL3: unknown;
        /** Type is unknown. One known value: 7 */
        EXPLOSION_DODGE: unknown;
        /** Type is unknown. One known value: 8 */
        EXPLOSION_TROUBLE_HAWK: unknown;
        /** Type is unknown. One known value: 9 */
        EXPLOSION_HOUND_WALKER_PROJECTILE: unknown;
        /** Type is unknown. One known value: 10 */
        EXPLOSION_STORM_GUN: unknown;
        /** Type is unknown. One known value: 11 */
        EXPLOSION_SPOILER9: unknown;
        /** Type is unknown. One known value: 12 */
        EXPLOSION_SPOILER10: unknown;
        /** Type is unknown. One known value: 13 */
        EXPLOSION_SPOILER9_BOSS: unknown;
        /** Type is unknown. One known value: 14 */
        EXPLOSION_FIRE: unknown;
        /** Type is unknown. One known value: 15 */
        EXPLOSION_CORVETTE_RL: unknown;
        /** Type is unknown. One known value: 16 */
        EXPLOSION_CORVETTE_RL2: unknown;
        /** Type is unknown. One known value: 17 */
        EXPLOSION_CAR: unknown;
        /** Type is unknown. One known value: 18 */
        EXPLOSION_SPOILER35: unknown;
        /** Type is unknown. One known value: 19 */
        EXPLOSION_HOUND_WALKER: unknown;
        /** Type is unknown. One known value: 20 */
        EXPLOSION_SPOILER12: unknown;
        /** Type is unknown. One known value: 21 */
        EXPLOSION_SD_DRAIN_RIFLE: unknown;
        /** Type is unknown. One known value: ["pb2Explosion.EXPLOSION_NONE","pb2Explosion.EXPLOSION_BASIC","pb2Explosion.EXPLOSION_RADIOACTIVE","pb2Explosion.EXPLOSION_PLASMA","pb2Explosion.EXPLOSION_COINTOSS","pb2Explosion.EXPLOSION_RL2","pb2Explosion.EXPLOSION_RL3","pb2Explosion.EXPLOSION_DODGE","pb2Explosion.EXPLOSION_TROUBLE_HAWK","pb2Explosion.EXPLOSION_HOUND_WALKER_PROJECTILE","pb2Explosion.EXPLOSION_STORM_GUN","pb2Explosion.EXPLOSION_SPOILER9","pb2Explosion.EXPLOSION_SPOILER10","pb2Explosion.EXPLOSION_SPOILER9_BOSS","pb2Explosion.EXPLOSION_FIRE","pb2Explosion.EXPLOSION_CORVETTE_RL","pb2Explosion.EXPLOSION_CORVETTE_RL2","pb2Explosion.EXPLOSION_CAR","pb2Explosion.EXPLOSION_SPOILER35","pb2Explosion.EXPLOSION_HOUND_WALKER","pb2Explosion.EXPLOSION_SPOILER12","pb2Explosion.EXPLOSION_SD_DRAIN_RIFLE"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: [] */
        explosions: pb2Explosion[];
    }
}

declare global {
    interface pb2Fire extends ClassIdentityProps<"pb2Fire"> {
        /** Type is unknown. One known value: 17 */
        readonly classid: unknown;
        UpdateAndGetWorldPoint: () => unknown;
        readonly size: unknown;
        remove: () => unknown;
    }
    var pb2Fire: ClassIdentityProps<"pb2Fire"> & {
        /** Type is unknown. One known value: [] */
        fires: unknown;
    }
}

declare global {
    /** the class is actually called Ki but it's renamed here for obvious reasons */
    interface pb2FireType extends ClassIdentityProps<"Ki"> {
        /** Type is unknown. One known value: 18 */
        readonly classid: unknown;
        readonly is_permanent: unknown;
        readonly is_being_removed: unknown;
        readonly damage_scale: unknown;
        readonly pitch: unknown;
    }
    
}

declare global {
    var pb2FloatingText: ClassIdentityProps<"pb2FloatingText"> & {
        GetNewHash: () => unknown;
    }
}

declare global {
    var pb2FoliageClass: ClassIdentityProps<"pb2FoliageClass"> & {
        /** Type is unknown. One known value: 0 */
        TEMPLATE_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        TEMPLATE_EARTH: unknown;
        /** Type is unknown. One known value: ["pb2FoliageClass.TEMPLATE_NONE","pb2FoliageClass.TEMPLATE_EARTH"] */
        ALL_TEMPLATE_TYPES: unknown;
    }
}

declare global {
    var pb2GameWorld: ClassIdentityProps<"pb2GameWorld"> & {
        controller: pb2Controller | null;
        /** Type is unknown. One known value: null */
        spectated_ragdoll: unknown;
        /** Not known if this is always of type pb2Controller */
        personal_virtual_controller: pb2Controller;
        /** Type is unknown. One known value: true */
        isHost: unknown;
        /** Type is unknown. One known value: 454 */
        user_uid: unknown;
        /** Type is unknown. One known value: "jeje" */
        nickname_tagged: unknown;
        settings: {
            graphics: {
                /** Type is unknown. One known value: 2 */
                build_3d_environment: unknown;
                /** Type is unknown. One known value: 50 */
                water_reflections: unknown;
                /** Type is unknown. One known value: 2 */
                spawn_3d_debris: unknown;
                /** Type is unknown. One known value: 1 */
                ui_scale: unknown;
            }
            gameplay: {
                /** Type is unknown. One known value: 3 */
                gore_and_violence: unknown;
                /** Type is unknown. One known value: 1 */
                show_damage_numbers: unknown;
                /** Type is unknown. One known value: 2 */
                replay_my_deaths: unknown;
                /** Type is unknown. One known value: 3 */
                camera: unknown;
            }
            input: {
                /** Type is unknown. One known value: 0.125 */
                screen_cursor_follow_speed: unknown;
                /** Type is unknown. One known value: 0.75 */
                screen_character_follow_softness: unknown;
            }
            network: {
                /** Type is unknown. One known value: 61 */
                world_state_receive_rate: unknown;
            }
            __limits_obj: {
                /** Type is unknown. One known value: undefined */
                graphics: unknown;
                /** Type is unknown. One known value: undefined */
                gameplay: unknown;
                /** Type is unknown. One known value: undefined */
                input: unknown;
                /** Type is unknown. One known value: undefined */
                network: unknown;
            }
        }
        GetPing: () => unknown;
        ClearAllKeyActionsAndStates: () => unknown;
        /** @param mode (default=1)  */
        DebugTraceAnyPressedKeys: (mode?: unknown) => unknown;
        /**
         * @param location_keycode_pair   
         * @param onKeyDown (default=null)   
         * @param onKeyUp (default=null)   
         */
        SetKeyActions: (location_keycode_pair: unknown, onKeyDown?: unknown, onKeyUp?: unknown) => unknown;
        GetKeyState: (location_keycode_pair: unknown) => unknown;
        PauseTrustedControlsTemporarily: () => unknown;
        FinalizeWorld: () => unknown;
        FinalizeNewMovables: () => unknown;
        /** @param v (default=true)  */
        EnableSimplePlayerAssignmentLogic: (v?: unknown) => unknown;
        /**
         * @param params   
         * @param mode (default='modules')   
         */
        DownloadModules: (params: unknown, mode?: unknown) => unknown;
        DownloadTextures: (params: unknown) => unknown;
        DownloadSounds: (params: unknown) => unknown;
        DownloadModels: (params: unknown) => unknown;
        /** @param dVG (default=true)  */
        GetAllModules: (dVG?: unknown) => unknown;
        GetInitialModules: () => unknown;
        /**
         * @param params   
         * @param type (default=undefined)   
         */
        CreateBoxShape: (params: unknown, type?: unknown) => unknown;
        /** Type is unknown. One known value: 14542847 */
        sun_color: unknown;
        /** Type is unknown. One known value: 14542847 */
        sky_color: unknown;
        /** Type is unknown. One known value: 16777215 */
        default_lamp_color: unknown;
        /** Type is unknown. One known value: 0.025 */
        sun_intensity: unknown;
        /** Type is unknown. One known value: 0.6 */
        sky_intensity: unknown;
        /** Type is unknown. One known value: 1 */
        light_power_multiplier: unknown;
        /** Type is unknown. One known value: undefined */
        fog_intensity: unknown;
        /** Type is unknown. One known value: false */
        foreground_snow: unknown;
        /** Type is unknown. One known value: false */
        background_snow: unknown;
        /** Type is unknown. One known value: false */
        snowing: unknown;
        /** Type is unknown. One known value: false */
        raining: unknown;
        /** Type is unknown. One known value: 0.8981455553302768 */
        wind_amplitude: unknown;
        /** Type is unknown. One known value: 0.6478880830141565 */
        wind_random_part: unknown;
        /** Type is unknown. One known value: 157627 */
        background_terrain_random_seed: unknown;
        /** Type is unknown. One known value: 42916 */
        foreground_terrain_random_seed: unknown;
        /** Type is unknown. One known value: 21520 */
        foreground_platform_random_seed: unknown;
        /** Type is unknown. One known value: 34732 */
        foliage_random_seed: unknown;
        /** Type is unknown. One known value: 1 */
        foliage_shadow_multiplier: unknown;
        /** Type is unknown. One known value: 1000 */
        foliage_maximum_animation_distance: unknown;
        /** Type is unknown. One known value: 150 */
        sun_shade_x: unknown;
        /** Type is unknown. One known value: 3000 */
        sun_shade_y: unknown;
        /** Type is unknown. One known value: true */
        terrain_enabled: unknown;
        /** Type is unknown. One known value: 0.75 */
        terrain_solve_random_factor: unknown;
        /** Type is unknown. One known value: 0.05 */
        terrain_sky_ground_contrast: unknown;
        /** Type is unknown. One known value: 0.025 */
        terrain_extra_sky_ground_contrast: unknown;
        /** Type is unknown. One known value: 4000 */
        terrain_fractal_cube_size: unknown;
        /** Type is unknown. One known value: 16 */
        terrain_level_influence_factor: unknown;
        /** Type is unknown. One known value: 2000 */
        terrain_extra_space_x: unknown;
        /** Type is unknown. One known value: 500 */
        terrain_extra_space_y: unknown;
        /** Type is unknown. One known value: true */
        terrain_force_low_level_terrain: unknown;
        /** Type is unknown. One known value: 150 */
        terrain_phys_scale: unknown;
        /** Type is unknown. One known value: 40 */
        terrain_size_z: unknown;
        /** Type is unknown. One known value: undefined */
        terrain_start_z: unknown;
        /** Type is unknown. One known value: 0.166 */
        terrain_post_tesselation_grass_noise: unknown;
        /** Type is unknown. One known value: 0 */
        terrain_y_offset: unknown;
        /** Type is unknown. One known value: true */
        terrain_remove_floating_islands: unknown;
        /** Type is unknown. One known value: 24 */
        terrain_uv_relax_iterations: unknown;
        /**
         * @param controller   
         * @param soft (default=true)   
         */
        SetToController: (controller: unknown, soft?: unknown) => unknown;
        SetToSpectateRagdoll: (ragdoll: unknown) => unknown;
        SetToFreeCamera: () => unknown;
        SetDisconnectActionDescriptionStructure: () => unknown;
        IsHostSpectating: () => unknown;
        IsWatchingReplay: () => unknown;
        StartPointOfViewReplay: () => unknown;
        SetReplayTimeScale: () => unknown;
        CancelPointOfViewReplay: () => unknown;
        /** Type is unknown. One known value: true */
        connected: unknown;
        Disconnect: () => unknown;
        /** Type is unknown. One known value: true */
        hud_visible: unknown;
        /** Type is unknown. One known value: true */
        hud_show_character_info: unknown;
        /** Type is unknown. One known value: [] */
        hud_custom_bars: unknown;
        /**
         * @param text   
         * @param user_uid (default=-2)   
         * @param channel_id (default=-1)   
         * @param auto_channel_id (default=-1)   
         * @param message_counter (default=-1)   
         */
        ShowChatMessage: (text: unknown, user_uid?: unknown, channel_id?: unknown, auto_channel_id?: unknown, message_counter?: unknown) => unknown;
        ShakeScreen: (amount: unknown, from_gun: unknown, ignore_when_speculative_player_enabled: unknown) => unknown;
        /** @param amount (default=75)  */
        FlashScreen: (amount?: unknown) => unknown;
        GetBounds: () => unknown;
    }
}

declare global {
    interface pb2GameplayEffects extends ClassIdentityProps<"pb2GameplayEffects"> {
        CreateEffect: (params: unknown) => unknown;
        GetCharacterLogicSpeed: () => unknown;
        GetWeaponLogicSpeed: () => unknown;
        GetBulletModifier: (v: unknown, bfz: unknown) => unknown;
        GetInvisible: () => unknown;
        readonly ragdoll: unknown;
    }
    interface bsW extends ClassIdentityProps<"bsW"> {
        time_to_live: unknown;
        readonly ragdoll: unknown;
        remove: () => unknown;
        readonly cloak_intensity: unknown;
    }
    var pb2GameplayEffects: ClassIdentityProps<"pb2GameplayEffects"> & {
        types: {
            RageRune: ClassIdentityProps<"Function"> & {

            }
            DestructionRune: ClassIdentityProps<"Function"> & {

            }
            TimeLordRune: ClassIdentityProps<"Function"> & {

            }
            InvisibilityRune: ClassIdentityProps<"Function"> & {

            }
            Poisoned: ClassIdentityProps<"Function"> & {

            }
        }

    }
}

declare global {
    interface pb2Gun extends ClassIdentityProps<"pb2Gun"> {
        /** Type is unknown. One known value: 5 */
        readonly classid: unknown;
        x: unknown;
        y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        readonly owner: pb2Character | null;
        readonly owner_entity: pb2Entity | null;
        readonly gun_type: unknown;
        readonly gun_type_string: unknown;
        barrel_spin: unknown;
        heat: unknown;
        main_cooldown: unknown;
        readonly side: 1 | -1;
        Flip: () => void;
        Hide: () => unknown;
        Show: () => unknown;
        /**
         * @param a   
         * @param an   
         * @param offset   
         * @param Xv   
         * @param dRg   
         * @param Xx (default=false)   
         * @param GSPEED (default=Xv)   
         */
        MoveTo: (a: unknown, an: unknown, offset: unknown, Xv: unknown, dRg: unknown, Xx?: unknown, GSPEED?: unknown) => unknown;
        GetPhysSpread: (ang: unknown) => unknown;
        DetachClip: () => unknown;
        AttachClip: () => unknown;
        /**
         * @param dQI (default=false)   
         * @param dQB (default=false)   
         */
        CanShoot: (dQI?: unknown, dQB?: unknown) => unknown;
        CanShootUI: () => unknown;
        /**
         * @param ragdoll   
         * @param dQG   
         * @param dQN   
         * @param GSPEED   
         * @param final   
         * @param dQO (default=0)   
         * @param dQP (default=0)   
         * @param dQQ (default=null)   
         * @param Yq (default=0)   
         */
        Fire: (ragdoll: unknown, dQG: unknown, dQN: unknown, GSPEED: unknown, final: unknown, dQO?: unknown, dQP?: unknown, dQQ?: unknown, Yq?: unknown) => unknown;
        CarryStart: () => unknown;
        activate: () => unknown;
        deactivate: () => unknown;
        /** @param dPA (default=null)  */
        CarryEnd: (dPA?: unknown) => unknown;
        remove: () => unknown;
        readonly is_being_removed: boolean;
        readonly box2d_body: b2Body;
        main_reload_length: unknown;
        readonly is_active: unknown;
        readonly is_being_carried: boolean;
        readonly attachment_atom: unknown;
        readonly clip_out: unknown;
        readonly muzzle_alpha: unknown;
        readonly scale: unknown;
        readonly ammo_style: unknown;
        readonly ammo_style2: unknown;
        addEventListener: (event_type: unknown, params: unknown) => unknown;
        removeEventListener: (event_type: unknown, params: unknown) => unknown;
        readonly is_thrown_by: unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: number) => unknown;
    }
    var pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        guns: unknown;
        /** Type is unknown. One known value: [] */
        pickable_guns: unknown;
    }
}

declare global {
    interface pb2GunClass extends ClassIdentityProps<"pb2GunClass"> {
        inventory_slot: unknown;
        title: unknown;
        forcars: unknown;
        cost: unknown;
        costupg: unknown;
        two_at_a_time: unknown;
        stat_count: unknown;
        spawn_distance: unknown;
        stat_spread: unknown;
        stat_bullets: unknown;
        stat_cursor: unknown;
        projectile_speed: unknown;
        projectile_luminescent: unknown;
        fire_duration: unknown;
        fire_type: unknown;
        auto_fire_if_unready: unknown;
        disabled_laser: unknown;
        mass_mult: unknown;
        secondary_mode_toggle: unknown;
        is_grenade: unknown;
        is_lightning: unknown;
        is_rocket: unknown;
        rocket_direct_damage_mode: unknown;
        projectile_base_color: unknown;
        is_railgun: unknown;
        is_heavy: unknown;
        is_healgun: unknown;
        is_repairgun: unknown;
        is_capturehealgun: unknown;
        is_radioactive: unknown;
        is_cloud: unknown;
        is_snowball: unknown;
        is_beam: unknown;
        is_blaster: unknown;
        is_plasma: unknown;
        is_nail: unknown;
        is_raygun: unknown;
        is_wall_sticking: unknown;
        rocket_damage: unknown;
        xpos1: unknown;
        xpos2: unknown;
        attachment: unknown;
        zpos: unknown;
        zpos2: unknown;
        len1: unknown;
        len2: unknown;
        size1: unknown;
        size2: unknown;
        recoil_factor: unknown;
        chaotic_recoil: unknown;
        constant_beam_damage: unknown;
        speed_to_damage_multiplier: unknown;
        explosion_knock_multiplier: unknown;
        explosion_hp_damage_multiplier: unknown;
        max_life_time: unknown;
        max_life_time_rand: unknown;
        ammo_bullet_price: unknown;
        grenade_density: unknown;
        readonly model_name: unknown;
        reload_length: unknown;
        GetProjectileMovieClip: () => unknown;
        SetProjectileMovieClip: (v: unknown) => unknown;
        GetStuckProjectileMovieClip: () => unknown;
        SetStuckProjectileMovieClip: (v: unknown) => unknown;
        readonly weapon_modes: unknown;
        SetSoundInfo: (category: unknown, KP: unknown) => unknown;
        GetSoundInfo: (category: unknown) => unknown;
        detonates_on_entity_collisions: unknown;
        detonates_on_organic_entities_only: unknown;
        ricochet_speed_condition: unknown;
        ricochet_speed_decay_multiplier: unknown;
        magazine_reload_duration_multiplier: unknown;
        stat_power: unknown;
        muzzle_flash_scale_mult: unknown;
    }
    var pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        /** Type is unknown. One known value: ["gun_pistol","gun_pistol2","gun_rifle","gun_rayrifle","gun_real_rifle","gun_arifle","gun_arifle2","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_railgun2","gun_sniper","gun_rl","gun_apistol","gun_plasmagun","gun_apistol2","gun_gl","gun_bng","gun_defibrillator","gun_vgun","gun_oicw"] */
        non_spoiler_weapons: unknown;
        /** Type is unknown. One known value: ["gun_rifle","gun_anti_rifle","gun_pistol","gun_pistol2","gun_rayrifle","gun_arifle2","gun_arifle","gun_real_rifle","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_shadowstep_railgun","gun_railgun2","gun_sniper","gun_rl","gun_trouble","gun_shaft","gun_rl2","gun_plasmagun","gun_apistol","gun_apistol2","gun_gl","gun_bng","gun_disintegrator","gun_explosiveminigun","gun_firebug","gun_drainlight","gun_drainlight_mg","gun_sniper2","gun_defibrillator","gun_eratrigger","gun_repairgun","gun_dodge","gun_oicw","gun_vgun","gun_nailgun","gun_freezer","gun_pistol3","gun_farheal","gun_flappygun","gun_flame","gun_rl3","gun_vehgun","gun_bng2","gun_chrono","gun_vehcannon","gun_vehcannon2","gun_scout_drone","gun_harasser_drone","gun_cs_vehgun","gun_vehminigun","gun_fttp_vehgun","gun_drain_sniper_rifle"] */
        registered_weapons: unknown;
        GetGunClassByString: (str: unknown) => unknown;
        CachedGunClasses: {

        }
        CreateCustomGunClass: (bjW: unknown, exC: unknown) => unknown;
    }
}

declare global {
    var pb2GunDefinitions: ClassIdentityProps<"pb2GunDefinitions"> & {
        GetDefinitionFor: (s: unknown) => unknown;
    }
}

declare global {
    var pb2GunDisposer: ClassIdentityProps<"pb2GunDisposer"> & {
        AllowDispose: (g: unknown) => unknown;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: unknown;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}

declare global {
    interface pb2HeroInfoBar extends ClassIdentityProps<"pb2HeroInfoBar"> {
        /** Type is unknown. One known value: 30 */
        readonly classid: unknown;
        title: unknown;
        value: unknown;
        value_max: unknown;
        value_handicap: unknown;
        color: unknown;
        color_border: unknown;
        color_delta: unknown;
        color_handicap: unknown;
        color_title: unknown;
    }
    var pb2HeroInfoBar: {
        new (params: unknown): pb2HeroInfoBar;
        /** Type is unknown. One known value: 4 */
        TYPE_SERVER_VAR: unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_SPACER: unknown;
    }
}

declare global {
    interface pb2HighRangeColor extends ClassIdentityProps<"pb2HighRangeColor"> {
        r: unknown;
        g: unknown;
        b: unknown;
        clone: () => unknown;
        addRGB: (_r: unknown, _g: unknown, _b: unknown) => unknown;
        /** @param u (default=0xffffff)  */
        from_uint: (u?: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        _uint: unknown;
        limit: () => unknown;
        multiply: (num: unknown) => unknown;
        multiplyColor: (c: unknown) => unknown;
        add: (num: unknown) => unknown;
        addColor: (c: unknown) => unknown;
        average: () => unknown;
        GetAverageValue: () => unknown;
        rand: () => unknown;
        setRGB: (_r: unknown, _g: unknown, _b: unknown) => unknown;
    }
    var pb2HighRangeColor: {
        /** @param u (default=0xffffff)  */
        new (u?: unknown): pb2HighRangeColor;

    }
}

declare global {
    interface pb2Light extends ClassIdentityProps<"pb2Light"> {
        x: unknown;
        y: unknown;
        z: unknown;
        readonly is_static: unknown;
        color: unknown;
        color_high_range: unknown;
        power: unknown;
        scale: unknown;
        readonly flare: unknown;
        remove: () => unknown;
        /** Type is unknown. One known value: true */
        readonly is_being_removed: unknown;
        SetPosition: (x: unknown, y: unknown, z: unknown) => unknown;
        UpdateMeshFlareColorAndScale: () => unknown;
        angular_range_from: unknown;
        angular_range_length: unknown;
        attachment: unknown;
        attachment_limb_id: unknown;
        attachment_position: unknown;
        attachment_rotation: unknown;
    }
    var pb2Light: ClassIdentityProps<"pb2Light"> & {
        /** Type is unknown. One known value: [] */
        lights_dynamic: unknown;
        /** Type is unknown. One known value: [] */
        lights: unknown;
        CreateLight: (params: unknown) => unknown;
    }
}

declare global {
    var pb2Math: {
        SegmentBBoxIntersection: (x: unknown, y: unknown, tox: unknown, toy: unknown, minx: unknown, miny: unknown, maxx: unknown, maxy: unknown) => unknown;
        GetProjectionOnSegment: (p: unknown, v: unknown, w: unknown) => unknown;
        GetProjectionOnSegmentTo: (p: unknown, v: unknown, w: unknown, ret: unknown) => unknown;
        Dist2D: (x1: unknown, y1: unknown, x2: unknown, y2: unknown) => unknown;
        Dist3D: (x1: unknown, y1: unknown, z1: unknown, x2: unknown, y2: unknown, z2: unknown) => unknown;
        Dist2D_Vector: (tox: unknown, toy: unknown) => unknown;
        inDist2D: (x1: unknown, y1: unknown, x2: unknown, y2: unknown, rad: unknown) => unknown;
    }
}

declare global {
    var pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        /** Type is unknown. One known value: false */
        enabled: unknown;
        /** Type is unknown. One known value: -1 */
        match_uid: unknown;
        /** Type is unknown. One known value: -1 */
        match_host_user_uid: unknown;
        /** Type is unknown. One known value: "???" */
        match_instance_key: unknown;
        /** Type is unknown. One known value: -1 */
        initiator_user_uid: unknown;
        SetMatchProperty: (property: unknown, value: unknown) => unknown;
        GetMatchInfoObject: () => unknown;
        AddMatchTag: (tag: unknown) => unknown;
        GetAllPlayerConnectionsAndSelf: () => unknown;
    }
}

declare global {
    var pb2OverheadHUD: ClassIdentityProps<"pb2OverheadHUD"> & {
        /** Type is unknown. One known value: 0 */
        OVERHEAD_VISIBILITY_HIDDEN: unknown;
        /** Type is unknown. One known value: 1 */
        OVERHEAD_VISIBILITY_TEAMMATES_ONLY: unknown;
        /** Type is unknown. One known value: 2 */
        OVERHEAD_VISIBILITY_EVERYONE: unknown;
        /** Type is unknown. One known value: ["pb2OverheadHUD.OVERHEAD_VISIBILITY_HIDDEN","pb2OverheadHUD.OVERHEAD_VISIBILITY_TEAMMATES_ONLY","pb2OverheadHUD.OVERHEAD_VISIBILITY_EVERYONE"] */
        ALL_TYPES: unknown;
    }
}

declare global {
    var pb2ParticleSystems: ClassIdentityProps<"pb2ParticleSystems"> & {
        /**
         * @param params   
         * @param fbl (default=false)   
         */
        CreateParticleSystem: (params: unknown, fbl?: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_TELEPORT: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_TACTICAL_PING: unknown;
    }
}

declare global {
    interface pb2PendingJoinRequest extends ClassIdentityProps<"pb2PendingJoinRequest"> {
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly response_sent: unknown;
        accept: () => unknown;
        reject: (message: unknown) => unknown;
        /**
         * @param new_match_uid   
         * @param new_match_instance_key   
         * @param new_match_host_user_uid   
         * @param new_match_password (default='')   
         * @param message (default='')   
         */
        redirect: (new_match_uid: unknown, new_match_instance_key: unknown, new_match_host_user_uid: unknown, new_match_password?: unknown, message?: unknown) => unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
    }
    
}

declare global {
    interface pb2PlayerConnection extends ClassIdentityProps<"pb2PlayerConnection"> {
        readonly controller: unknown;
        readonly GetPing: unknown;
        readonly spectated_ragdoll: unknown;
        readonly personal_virtual_controller: unknown;
        readonly isHost: unknown;
        readonly StartPointOfViewReplay: unknown;
        readonly IsWatchingReplay: unknown;
        readonly CancelPointOfViewReplay: unknown;
        readonly SetReplayTimeScale: unknown;
        readonly GetReplayTimeScale: unknown;
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly SetDisconnectActionDescriptionStructure: unknown;
        readonly Disconnect: unknown;
        readonly SetToController: unknown;
        readonly SetToSpectateRagdoll: unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
        controls_trusted: unknown;
        hud_visible: unknown;
        hud_show_character_info: unknown;
        hud_custom_bars: unknown;
        readonly settings: unknown;
        readonly ShowChatMessage: unknown;
        readonly ShakeScreen: unknown;
        readonly FlashScreen: unknown;
        readonly SetToFreeCamera: unknown;
        readonly is_being_removed: unknown;
        readonly PauseTrustedControlsTemporarily: unknown;
        readonly SetKeyActions: unknown;
        readonly ClearAllKeyActionsAndStates: unknown;
        readonly GetKeyState: unknown;
        readonly DebugTraceAnyPressedKeys: unknown;
    }
    
}

declare global {
    interface pb2RadioactiveCloud extends ClassIdentityProps<"pb2RadioactiveCloud"> {
        /** Type is unknown. One known value: 25 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly radius: unknown;
    }
    var pb2RadioactiveCloud: ClassIdentityProps<"pb2RadioactiveCloud"> & {
        /** Type is unknown. One known value: [] */
        clouds: unknown;
    }
}

declare global {
    interface pb2Ragdoll extends ClassIdentityProps<"pb2Ragdoll"> {
        /** Type is unknown. One known value: 3 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        dimmed: unknown;
        readonly owner_character: pb2Character | null;
        /**
         * @param eVZ   
         * @param beh   
         * @param eWu (default=eVZ.GetPosition()   
         */
        DealLimbDamage: (eVZ: unknown, beh: unknown, eWu?: unknown) => unknown;
        HealGunApplied: (self: unknown) => unknown;
        CaptureHealGunApplied: (by: unknown) => unknown;
        SetName: (eUZ: unknown) => unknown;
        GetName: () => unknown;
        /**
         * @param fj   
         * @param eFv (default=-1)   
         */
        MeltDown: (fj: unknown, eFv?: unknown) => unknown;
        ExpireAllHintObjects: () => unknown;
        readonly side: unknown;
        Flip: () => unknown;
        remove: () => unknown;
        readonly is_being_removed: unknown;
        SetVision: (ID: unknown) => unknown;
        GetVision: () => unknown;
        GetBlindness: () => unknown;
        SetBlindness: (v: unknown) => unknown;
        GetDeafness: () => unknown;
        SetDeafness: (v: unknown) => unknown;
        hp_head: unknown;
        hp_body: unknown;
        hp_arms: unknown;
        hp_legs: unknown;
        GetAtomsTotal: () => unknown;
        readonly gameplay_effects: unknown;
        ClearBulletHoles: () => unknown;
        UsesGrapplingHook: () => unknown;
        readonly active_grappling_hook: unknown;
        DetachFromRope: (collapse: unknown) => unknown;
        hud_custom_bars: unknown;
        readonly enforce_skin_limitations: unknown;
        readonly use_skin_properties: unknown;
        readonly team: unknown;
        SetBoostStyle: (v: unknown) => unknown;
        SetSwordsStyle: (v: unknown) => unknown;
        readonly style_boost: unknown;
        GetSwordsStyleID: () => unknown;
        /**
         * @param dx   
         * @param dy   
         * @param dJP (default=0)   
         * @param dJQ (default=0)   
         * @param beD (default=this.local_atoms[pb2Ragdoll.b_pelvis])   
         * @param beF (default=false)   
         * @param ben (default=null)   
         */
        Teleport: (dx: unknown, dy: unknown, dJP?: unknown, dJQ?: unknown, beD?: unknown, beF?: unknown, ben?: unknown) => unknown;
        /**
         * @param sound_name   
         * @param eVL (default=false)   
         * @param cAr (default=false)   
         */
        Speak: (sound_name: unknown, eVL?: unknown, cAr?: unknown) => unknown;
        damage_projectiles: unknown;
        damage_explosions: unknown;
        damage_impacts: unknown;
        damage_radiation: unknown;
        damage_liquids: unknown;
        mobility: unknown;
        readonly scale: unknown;
        readonly voice_preset_pitch: unknown;
        voice_pitch: unknown;
        readonly normalize_all_voice_lines_volume: unknown;
        readonly normalize_custom_voice_lines_volume: unknown;
        /** id is one of the atom id static consts defined on pb2Ragdoll */
        GetAtom: (id: number) => pb2Atom | null;
        /** @param id (default=0)  */
        GetMesh: (id?: number) => unknown;
    }
    var pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        CreateRagdoll: (params: unknown) => unknown;
        CreateRagdollComplete: (p: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        b_pelvis: unknown;
        /** Type is unknown. One known value: 1 */
        b_leg1: unknown;
        /** Type is unknown. One known value: 2 */
        b_leg2: unknown;
        /** Type is unknown. One known value: 3 */
        b_arm1: unknown;
        /** Type is unknown. One known value: 4 */
        b_arm2: unknown;
        /** Type is unknown. One known value: 5 */
        b_body: unknown;
        /** Type is unknown. One known value: 6 */
        b_head_start: unknown;
        /** Type is unknown. One known value: 7 */
        b_head_end: unknown;
        /** Type is unknown. One known value: 8 */
        b_body_brk1: unknown;
        /** Type is unknown. One known value: 9 */
        b_body_brk2: unknown;
        /** Type is unknown. One known value: [true,true,false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true] */
        mc_body_top_pattern: unknown;
        /** Type is unknown. One known value: 0 */
        mc_head: unknown;
        /** Type is unknown. One known value: 1 */
        mc_head_broken: unknown;
        /** Type is unknown. One known value: 2 */
        mc_pelvis: unknown;
        /** Type is unknown. One known value: 3 */
        mc_pelvis_broken: unknown;
        /** Type is unknown. One known value: 4 */
        mc_body: unknown;
        /** Type is unknown. One known value: 5 */
        mc_arm1a: unknown;
        /** Type is unknown. One known value: 6 */
        mc_arm1b: unknown;
        /** Type is unknown. One known value: 7 */
        mc_arm1b_broken: unknown;
        /** Type is unknown. One known value: 8 */
        mc_arm1b_sword: unknown;
        /** Type is unknown. One known value: 9 */
        mc_arm2a: unknown;
        /** Type is unknown. One known value: 10 */
        mc_arm2b: unknown;
        /** Type is unknown. One known value: 11 */
        mc_arm2b_broken: unknown;
        /** Type is unknown. One known value: 12 */
        mc_arm2b_sword: unknown;
        /** Type is unknown. One known value: 13 */
        mc_leg1a: unknown;
        /** Type is unknown. One known value: 14 */
        mc_leg1b: unknown;
        /** Type is unknown. One known value: 15 */
        mc_leg1c: unknown;
        /** Type is unknown. One known value: 16 */
        mc_leg1b_broken: unknown;
        /** Type is unknown. One known value: 17 */
        mc_leg2a: unknown;
        /** Type is unknown. One known value: 18 */
        mc_leg2b: unknown;
        /** Type is unknown. One known value: 19 */
        mc_leg2c: unknown;
        /** Type is unknown. One known value: 20 */
        mc_leg2b_broken: unknown;
        /** Type is unknown. One known value: 21 */
        mc_body_broken: unknown;
        /** Type is unknown. One known value: [] */
        ragdolls: unknown;
    }
}

declare global {
    var pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose: (r: unknown) => unknown;
        /** Type is unknown. One known value: 200 */
        normal_time_to_live: unknown;
        /** Type is unknown. One known value: [] */
        disposers: unknown;
    }
}

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: number;
        readonly y: number;
        readonly w: unknown;
        readonly h: unknown;
        /** Type is unknown. One known value: 101 */
        readonly classid: unknown;
        /** @param recursive (default=true)  */
        remove: (recursive?: unknown) => unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly box2d_body: unknown;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: unknown;
        readonly is_quad: unknown;
        /** Type is unknown. One known value: 5 */
        readonly type: unknown;
        readonly _childs: unknown;
        AddPosition: (x: number, y: number) => void;
        SetPosition: (x: unknown, y: unknown) => unknown;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: unknown, h?: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: unknown, y: unknown, w?: unknown, h?: unknown) => unknown;
        CopyPositionAndSizeFrom: (cP: unknown) => unknown;
        readonly collected_entities_counter: unknown;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        /** Type is unknown. One known value: [] */
        regions: unknown;
    }
}

declare global {
    /** the class is actually called lo but it's renamed here for obvious reasons */
    interface pb2Rope extends ClassIdentityProps<"lo"> {
        /** Type is unknown. One known value: 23 */
        readonly classid: unknown;
        readonly ragdoll: unknown;
        readonly is_collapsing: unknown;
        readonly held_ragdoll: unknown;
        readonly remote_body: unknown;
    }
    
}

declare global {
    interface pb2Shape extends ClassIdentityProps<"pb2Shape"> {
        readonly x: unknown;
        readonly y: unknown;
        readonly w: unknown;
        readonly h: unknown;
        /** Type is unknown. One known value: 6 */
        readonly classid: unknown;
        SetSpeed: (v: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param yg (default=null)   
         */
        StartMove: (x: unknown, y: unknown, yg?: unknown) => unknown;
        /** @param recursive (default=true)  */
        remove: (recursive?: unknown) => unknown;
        /**
         * @param bN   
         * @param pos (default=null)   
         * @param bhS (default=0)   
         * @param Ai (default=0)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param lA (default=null)   
         */
        DealDamage: (bN: unknown, pos?: unknown, bhS?: unknown, Ai?: unknown, fG?: unknown, fE?: unknown, lA?: unknown) => unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly normal: unknown;
        readonly hea: unknown;
        readonly box2d_body: unknown;
        readonly minx: unknown;
        readonly miny: unknown;
        readonly maxx: unknown;
        readonly maxy: unknown;
        readonly corner: unknown;
        readonly is_quad: unknown;
        readonly type: unknown;
        readonly frozen_spots: unknown;
        readonly _childs: unknown;
        SingleTracePoint: (x: unknown, y: unknown) => unknown;
        readonly see_through: unknown;
        SetAIBreakingAllowed: (v: unknown) => unknown;
        SetHitpointsIfPossible: (v: unknown) => unknown;
        /** @param id (default=0)  */
        GetMesh: (id?: 0) => unknown;
    }
    var pb2Shape: ClassIdentityProps<"pb2Shape"> & {
        /** Type is unknown. One known value: 0 */
        WALL: unknown;
        /** Type is unknown. One known value: 2 */
        MOVABLE: unknown;
        /** Type is unknown. One known value: 1 */
        BACKGROUND: unknown;
        /** Type is unknown. One known value: 4 */
        WATER: unknown;
        /** Type is unknown. One known value: 3 */
        CORNER_LEFT_BOTTOM: unknown;
        /** Type is unknown. One known value: 1 */
        CORNER_LEFT_TOP: unknown;
        /** Type is unknown. One known value: 2 */
        CORNER_RIGHT_TOP: unknown;
        /** Type is unknown. One known value: 4 */
        CORNER_RIGHT_BOTTOM: unknown;
        /** Type is unknown. One known value: 3 */
        RIGID: unknown;
        /** Type is unknown. One known value: 5 */
        REGION: unknown;
        /** Type is unknown. One known value: 0 */
        CORNER_NONE: unknown;
        /** Type is unknown. One known value: ["pb2Shape.WALL","pb2Shape.BACKGROUND","pb2Shape.MOVABLE","pb2Shape.RIGID","pb2Shape.WATER","pb2Shape.REGION","pb2Shape.CORNER_NONE","pb2Shape.CORNER_LEFT_TOP","pb2Shape.CORNER_RIGHT_TOP","pb2Shape.CORNER_LEFT_BOTTOM","pb2Shape.CORNER_RIGHT_BOTTOM"] */
        ALL_TYPES: unknown;
        world_shapes: pb2Shape[];
        world_shapes_walls: (pb2Shape & {type: typeof pb2Shape.WALL })[];
        world_shapes_bgs: (pb2Shape & {type: typeof pb2Shape.BACKGROUND })[];
        world_shapes_collide: (pb2Shape & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID | typeof pb2Shape.WATER })[];
        world_shapes_collide_no_water: (pb2Shape & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_nonstatic: (pb2Shape & {type: typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_water: (pb2Shape & {type: typeof pb2Shape.WATER })[];
        /**
         * @param x   
         * @param y   
         * @param eLd (default=null)   
         */
        SnowCanReach: (x: unknown, y: unknown, eLd?: unknown) => unknown;
        CountShapesInRect: (yJ: unknown, x: unknown, y: unknown, _width: unknown, _height: unknown, world_shapes_collide: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param tox   
         * @param toy   
         * @param where   
         * @param QI (default=true)   
         */
        isRayTraceable: (x: unknown, y: unknown, tox: unknown, toy: unknown, where: unknown, QI?: unknown) => unknown;
        isLineTraceable: (x: unknown, y: unknown, tox: unknown, toy: unknown, where: unknown) => unknown;
        GetShapeAtPoint: (x: unknown, y: unknown) => unknown;
        RaycastResult: (x: unknown, y: unknown, tox: unknown, toy: unknown, where: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param eLv (default=true)   
         */
        isWaterAtPoint: (x: unknown, y: unknown, eLv?: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param where (default=null)   
         * @param QI (default=true)   
         */
        isShapesAtPoint: (x: unknown, y: unknown, where?: unknown, QI?: unknown) => unknown;
    }
}

declare global {
    interface pb2ShieldZone extends ClassIdentityProps<"pb2ShieldZone"> {
        /** Type is unknown. One known value: 21 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        /**
         * @param bN   
         * @param xx   
         * @param yy   
         * @param _boD   
         * @param Ox (default=null)   
         */
        DealDamage: (bN: unknown, xx: unknown, yy: unknown, _boD: unknown, Ox?: unknown) => unknown;
        Heal: (bN: unknown) => unknown;
        MoveTo: (xx: unknown, yy: unknown) => unknown;
        /** @param gv (default=false)  */
        Destroy: (gv?: unknown) => unknown;
        remove: () => unknown;
    }
    var pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        /** Type is unknown. One known value: 0 */
        SOUND_PRESET_ID_SILENT: unknown;
        /** Type is unknown. One known value: 1 */
        SOUND_PRESET_ID_SHIELD_GRENADE: unknown;
        /** Type is unknown. One known value: 2 */
        SOUND_PRESET_ID_SPOILER26_SHIELD: unknown;
        /** Type is unknown. One known value: ["pb2ShieldZone.SOUND_PRESET_ID_SILENT","pb2ShieldZone.SOUND_PRESET_ID_SHIELD_GRENADE","pb2ShieldZone.SOUND_PRESET_ID_SPOILER26_SHIELD"] */
        ALL_SOUND_PRESET_IDS: unknown;
        /** Type is unknown. One known value: [] */
        shields: unknown;
    }
}

declare global {
    var pb2SkinEditor: ClassIdentityProps<"pb2SkinEditor"> & {
        SpawnDefaultSkin: (frame: unknown) => unknown;
        /**
         * @param user_data_uid   
         * @param cWI (default=1)   
         */
        SpawnUserDataSkin: (user_data_uid: unknown, cWI?: unknown) => unknown;
        ScheduleCustomSkinUpdate: (skin: unknown) => unknown;
        /**
         * @param skin   
         * @param new_value (default=true)   
         */
        AllowSkinDispose: (skin: unknown, new_value?: unknown) => unknown;
        /**
         * @param dc   
         * @param cWI (default=1)   
         */
        SpawnTemporaryPreferredUserSkin: (dc: unknown, cWI?: unknown) => unknown;
        OpenSkinEditor: (user_data_uid: unknown, user_data_title: unknown) => unknown;
    }
}

declare global {
    var pb2Sound: ClassIdentityProps<"pb2Sound"> & {
        StopAllSounds: () => unknown;
        /** Type is unknown. One known value: 0 */
        PRIORITY_FLOOD: unknown;
        /** Type is unknown. One known value: 1 */
        PRIORITY_FLOOD_TICKS: unknown;
        /** Type is unknown. One known value: 2 */
        PRIORITY_NORMAL: unknown;
        /** Type is unknown. One known value: 3 */
        PRIORITY_GAMEPLAY: unknown;
        /** Type is unknown. One known value: 4 */
        PRIORITY_GAMEPLAY_SPEECH: unknown;
        /** Type is unknown. One known value: 5 */
        PRIORITY_GAMEPLAY_PINGS: unknown;
        /** Type is unknown. One known value: 6 */
        PRIORITY_GAMEPLAY_MERGED_SOUNDS: unknown;
        /** Type is unknown. One known value: 7 */
        PRIORITY_UI: unknown;
        /** Type is unknown. One known value: 8 */
        PRIORITY_ATMOSHPERICS: unknown;
        /** Type is unknown. One known value: 9 */
        PRIORITY_MUSIC: unknown;
        /** Type is unknown. One known value: ["pb2Sound.PRIORITY_FLOOD","pb2Sound.PRIORITY_FLOOD_TICKS","pb2Sound.PRIORITY_NORMAL","pb2Sound.PRIORITY_GAMEPLAY","pb2Sound.PRIORITY_GAMEPLAY_SPEECH","pb2Sound.PRIORITY_GAMEPLAY_PINGS","pb2Sound.PRIORITY_GAMEPLAY_MERGED_SOUNDS","pb2Sound.PRIORITY_UI","pb2Sound.PRIORITY_ATMOSHPERICS","pb2Sound.PRIORITY_MUSIC"] */
        ALL_TYPES: unknown;
        PlayCustomSound: (params: unknown) => unknown;
    }
}

declare global {
    var pb2StartDetails: {
        /** Type is unknown. One known value: true */
        testing_in_level_editor: unknown;
    }
}

declare global {
    var pb2Storage: {
        /**
         * @param dVZ   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetCreationProperty: (dVZ: unknown, then?: unknown, onerror?: unknown) => unknown;
        /**
         * @param dVZ   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetCreationProperty: (dVZ: unknown, value: unknown, then?: unknown, onerror?: unknown) => unknown;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetPlayerProperty: (dVZ: unknown, user_uid: unknown, then?: unknown, onerror?: unknown) => unknown;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetPlayerProperty: (dVZ: unknown, user_uid: unknown, value: unknown, then?: unknown, onerror?: unknown) => unknown;
        ClearPropertyNameToUIDCache: () => unknown;
    }
}

declare global {
    interface pb2StyleAmmo extends ClassIdentityProps<"pb2StyleAmmo"> {
        readonly style_id: unknown;
        readonly owner_gun: unknown;
        rounds_total: unknown;
        infinite_ammo: unknown;
        magazine_capacity: unknown;
        rounds_in_magazine: unknown;
        burst_shots: unknown;
        burst_timeout: unknown;
        regen_time: unknown;
        regen_timeout: unknown;
        reload_speed: unknown;
        waste_remain_part: unknown;
        recharge_speed: unknown;
        min_charge: unknown;
        charge_speed: unknown;
        zero_energy_value: unknown;
        energy: unknown;
        speed_up_factor: unknown;
        speed_up_max: unknown;
        charge_to_distance: unknown;
        readonly last_error_reason: unknown;
    }
    
}

declare global {
    interface pb2StyleBoost extends ClassIdentityProps<"pb2StyleBoost"> {
        readonly ragdoll: unknown;
        readonly style_id: unknown;
        readonly noping_out_boost: unknown;
        readonly noping_out_current_boost: unknown;
        readonly noping_out_boost_ignition: unknown;
        boost: unknown;
        readonly activated: unknown;
        max_fuel: unknown;
        fuel: unknown;
        readonly raycast_less_activation_allowed_timer: unknown;
        readonly reactivation_anti_flood_timer: unknown;
        readonly denied_repeat_cooldown: unknown;
        doublejumps_left: unknown;
        doublejumps_max: unknown;
        readonly current_boost: unknown;
    }
    var pb2StyleBoost: ClassIdentityProps<"pb2StyleBoost"> & {
        /** Type is unknown. One known value: 0 */
        NONE: unknown;
        /** Type is unknown. One known value: 1 */
        SELFBOOST: unknown;
        /** Type is unknown. One known value: 2 */
        JETPACK: unknown;
        /** Type is unknown. One known value: 3 */
        DOUBLEJUMP: unknown;
        /** Type is unknown. One known value: ["pb2StyleBoost.NONE","pb2StyleBoost.SELFBOOST","pb2StyleBoost.JETPACK","pb2StyleBoost.DOUBLEJUMP"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: 20 */
        noping_out_boost_max: unknown;
        /** Type is unknown. One known value: 1 */
        noping_out_boost_regen_speed: unknown;
        /** Type is unknown. One known value: 0.1 */
        noping_out_boost_regen_speed_midair: unknown;
        /** Type is unknown. One known value: 1 */
        noping_out_current_boost_max: unknown;
        /** Type is unknown. One known value: 66 */
        noping_out_boost_strength: unknown;
        /** Type is unknown. One known value: 6 */
        jetpack_loop_loudness: unknown;
        /** Type is unknown. One known value: 30 */
        jetpack_auto_jetpack_on_double_jump_duration: unknown;
        /** Type is unknown. One known value: 2000 */
        jetpack_max_fuel_for_new_ragdolls: unknown;
        /** Type is unknown. One known value: 0.45 */
        selfboost_decay_speed: unknown;
        /** Type is unknown. One known value: 275 */
        selfboost_strength: unknown;
        /** Type is unknown. One known value: 1.5 */
        doublejump_maximum_charge_for_new_ragdolls: unknown;
        /** Type is unknown. One known value: 0.3 */
        doublejump_restore_speed: unknown;
        /** Type is unknown. One known value: 160 */
        doublejump_strength: unknown;
        /** Type is unknown. One known value: 0.1 */
        doublejump_single_boost_duration_decay: unknown;
    }
}

declare global {
    var pb2StyleGrapplingHook: ClassIdentityProps<"pb2StyleGrapplingHook"> & {
        /** Type is unknown. One known value: 0 */
        STYLE_NOTHING: unknown;
        /** Type is unknown. One known value: 1 */
        STYLE_EVERYTHING: unknown;
        /** Type is unknown. One known value: 2 */
        STYLE_WALLS_ONLY: unknown;
        /** Type is unknown. One known value: 3 */
        STYLE_ENTITIES_ONLY: unknown;
        /** Type is unknown. One known value: 4 */
        STYLE_SIMPLE_ROPE: unknown;
        /** Type is unknown. One known value: 5 */
        STYLE_RIGID_BODY_MANIPULATING: unknown;
        /** Type is unknown. One known value: 7 */
        STYLE_FEEDBACKLESS_RIGID_BODY_MANIPULATING: unknown;
        /** Type is unknown. One known value: 8 */
        STYLE_KINETIC_MODULE: unknown;
        /** Type is unknown. One known value: ["pb2StyleGrapplingHook.STYLE_NOTHING","pb2StyleGrapplingHook.STYLE_EVERYTHING","pb2StyleGrapplingHook.STYLE_WALLS_ONLY","pb2StyleGrapplingHook.STYLE_ENTITIES_ONLY","pb2StyleGrapplingHook.STYLE_SIMPLE_ROPE","pb2StyleGrapplingHook.STYLE_RIGID_BODY_MANIPULATING","pb2StyleGrapplingHook.STYLE_FEEDBACKLESS_RIGID_BODY_MANIPULATING","pb2StyleGrapplingHook.STYLE_KINETIC_MODULE"] */
        ALL_TYPES: unknown;
    }
}

declare global {
    var pb2StyleRegen: ClassIdentityProps<"pb2StyleRegen"> & {
        /** Type is unknown. One known value: 0 */
        style_none: unknown;
        /** Type is unknown. One known value: 2 */
        style_delayed_speedup: unknown;
        /** Type is unknown. One known value: ["pb2StyleRegen.style_none","pb2StyleRegen.style_delayed_speedup"] */
        ALL_TYPES: unknown;
    }
}

declare global {
    var pb2StyleSwords: ClassIdentityProps<"pb2StyleSwords"> & {
        /** Type is unknown. One known value: 0 */
        NONE: unknown;
        /** Type is unknown. One known value: 1 */
        BASIC: unknown;
        /** Type is unknown. One known value: 2 */
        LARGE: unknown;
        /** Type is unknown. One known value: 3 */
        COMPACT: unknown;
        /** Type is unknown. One known value: 4 */
        CLIMBER: unknown;
        /** Type is unknown. One known value: 5 */
        STANCE: unknown;
        /** Type is unknown. One known value: 6 */
        RISING_ARC: unknown;
        /** Type is unknown. One known value: 7 */
        BYTE_NAIL: unknown;
        /** Type is unknown. One known value: 8 */
        ARCHWAY: unknown;
        /** Type is unknown. One known value: 9 */
        TRIPLET: unknown;
        /** Type is unknown. One known value: 10 */
        ARROW: unknown;
        /** Type is unknown. One known value: 11 */
        FALCON: unknown;
        /** Type is unknown. One known value: 12 */
        EDGE: unknown;
        /** Type is unknown. One known value: 13 */
        STORM: unknown;
        /** Type is unknown. One known value: 14 */
        PLEXUS: unknown;
        /** Type is unknown. One known value: 15 */
        MYTHIC: unknown;
        /** Type is unknown. One known value: 16 */
        CLAW: unknown;
        /** Type is unknown. One known value: 17 */
        STICK: unknown;
        /** Type is unknown. One known value: 18 */
        WING_KNIFE: unknown;
        /** Type is unknown. One known value: 19 */
        KNIFE: unknown;
        /** Type is unknown. One known value: ["pb2StyleSwords.NONE","pb2StyleSwords.BASIC","pb2StyleSwords.LARGE","pb2StyleSwords.COMPACT","pb2StyleSwords.CLIMBER","pb2StyleSwords.STANCE","pb2StyleSwords.RISING_ARC","pb2StyleSwords.BYTE_NAIL","pb2StyleSwords.ARCHWAY","pb2StyleSwords.TRIPLET","pb2StyleSwords.ARROW","pb2StyleSwords.FALCON","pb2StyleSwords.EDGE","pb2StyleSwords.STORM","pb2StyleSwords.PLEXUS","pb2StyleSwords.MYTHIC","pb2StyleSwords.CLAW","pb2StyleSwords.STICK","pb2StyleSwords.WING_KNIFE","pb2StyleSwords.KNIFE"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: ["None","Basic","Large","Compact","Climber","Stance","Rising-Arc","Byte-Nail","Archway","Triplet","Arrow","Falcon","Edge","Storm","Plexus","Mythic","Claw","Stick","Wing-Knife","Knife"] */
        id_to_name: unknown;
    }
}

declare global {
    interface pb2SurfaceType extends ClassIdentityProps<"pb2SurfaceType"> {
        is_soft: unknown;
        recommended_slices_per_density: unknown;
    }
    var pb2SurfaceType: ClassIdentityProps<"pb2SurfaceType"> & {
        /** Type is unknown. One known value: 0 */
        TYPE_SIMPLE_WALL: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_SIMPLE_BACKGROUND: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_PLATFORM_WALL: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_PB2PLATFORM_WALL: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_STAR_DEFENDING_CUBE: unknown;
        /** Type is unknown. One known value: 5 */
        TYPE_3D_MODEL: unknown;
        /** Type is unknown. One known value: 0 */
        APPEARANCE_NORMAL: unknown;
        /** Type is unknown. One known value: 1 */
        APPEARANCE_FULL_BRIGHT: unknown;
        /** Type is unknown. One known value: 2 */
        APPEARANCE_ADDITIVE: unknown;
        /** Type is unknown. One known value: 3 */
        APPEARANCE_FULL_BRIGHT_NO_GLOW: unknown;
        /** Type is unknown. One known value: 4 */
        APPEARANCE_NORMAL_NO_LIGHT_BLOCKING: unknown;
        /** Type is unknown. One known value: 0 */
        SHADER_GAMEPLAY: unknown;
        /** Type is unknown. One known value: 1 */
        SHADER_ENVIRONMENT: unknown;
        /** Type is unknown. One known value: 0 */
        TERRAIN_LAYER_GROUND: unknown;
        /** Type is unknown. One known value: 1 */
        TERRAIN_LAYER_GRASS: unknown;
        /** Type is unknown. One known value: 2 */
        TERRAIN_LAYER_SAND: unknown;
        /** Type is unknown. One known value: 3 */
        TERRAIN_LAYER_CLIFF: unknown;
        /** Type is unknown. One known value: 4 */
        TERRAIN_LAYER_SNOW: unknown;
        /** Type is unknown. One known value: ["pb2SurfaceType.TYPE_SIMPLE_WALL","pb2SurfaceType.TYPE_SIMPLE_BACKGROUND","pb2SurfaceType.TYPE_PLATFORM_WALL","pb2SurfaceType.TYPE_PB2PLATFORM_WALL","pb2SurfaceType.TYPE_STAR_DEFENDING_CUBE","pb2SurfaceType.TYPE_3D_MODEL","pb2SurfaceType.APPEARANCE_NORMAL","pb2SurfaceType.APPEARANCE_FULL_BRIGHT","pb2SurfaceType.APPEARANCE_ADDITIVE","pb2SurfaceType.APPEARANCE_FULL_BRIGHT_NO_GLOW","pb2SurfaceType.APPEARANCE_NORMAL_NO_LIGHT_BLOCKING","pb2SurfaceType.SHADER_GAMEPLAY","pb2SurfaceType.SHADER_ENVIRONMENT","pb2SurfaceType.TERRAIN_LAYER_GROUND","pb2SurfaceType.TERRAIN_LAYER_GRASS","pb2SurfaceType.TERRAIN_LAYER_SAND","pb2SurfaceType.TERRAIN_LAYER_CLIFF","pb2SurfaceType.TERRAIN_LAYER_SNOW"] */
        ALL_TYPES: unknown;
        /**
         * @param params   
         * @param slot (default=-1)   
         */
        CreateSurfaceType: (params: unknown, slot?: unknown) => unknown;
        SpawnPB2SurfaceTypeParams: (ffS: unknown, is_wall: unknown) => unknown;
    }
}

declare global {
    interface pb2Team extends ClassIdentityProps<"pb2Team"> {
        /** Type is unknown. One known value: 7 */
        readonly classid: unknown;
        readonly ai_in_team: unknown;
        allow_private_communication: unknown;
        friendly_damage_multiplier: unknown;
        friendly_fire: unknown;
        hud_color: unknown;
        hud_color_for_enemies: unknown;
        normal_damage_to_dead_teammates: unknown;
        readonly teammates_collide: unknown;
        title: unknown;
        remove: () => unknown;
    }
    var pb2Team: ClassIdentityProps<"pb2Team"> & {
        CreateTeam: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        teams: unknown;
    }
}

declare global {
    interface pb2TextChannel extends ClassIdentityProps<"pb2TextChannel"> {
        InvitePlayerConnection: (dc: unknown) => unknown;
        UninvitePlayerConnection: (dc: unknown) => unknown;
        remove: () => unknown;
        readonly title: unknown;
        readonly color: unknown;
        readonly show_tag: unknown;
        readonly sync_with_main_server: unknown;
        readonly auto_channel_id: unknown;
        readonly channel_id: unknown;
        readonly is_being_removed: unknown;
        readonly synced: unknown;
        readonly syncing: unknown;
        GetInvitedDataConnections: () => unknown;
    }
    var pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel: (params: unknown) => unknown;
    }
}

declare global {
    interface pb2Texture extends ClassIdentityProps<"pb2Texture"> {
        readonly internal: unknown;
        readonly url: unknown;
    }
    var pb2Texture: ClassIdentityProps<"pb2Texture"> & {
        GetTextureByName: (name: unknown) => unknown;
    }
}

declare global {
    var pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        /** Type is unknown. One known value: 0.999 */
        decal_decay_remain: unknown;
        RemoveAllDecalsAndParticles: () => unknown;
    }
}

declare global {
    interface pb2TimeWarpZone extends ClassIdentityProps<"pb2TimeWarpZone"> {
        /** Type is unknown. One known value: 22 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        MoveTo: (xx: unknown, yy: unknown) => unknown;
        SetTargetSpeed: (v: unknown) => unknown;
        readonly target_speed: unknown;
        decay_speed: unknown;
        remove: () => unknown;
    }
    var pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        /** Type is unknown. One known value: 150 */
        base_range: unknown;
        /** Type is unknown. One known value: 50 */
        blur_range: unknown;
        /** Type is unknown. One known value: 0.35 */
        target_speed: unknown;
        /** Type is unknown. One known value: 0 */
        TEXTURE_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        TEXTURE_TIME_NADE_BLACKOUT: unknown;
        /** Type is unknown. One known value: 2 */
        TEXTURE_GRADIENT: unknown;
        CreateWarpZone: (params: unknown) => unknown;
        /**
         * @param x   
         * @param y   
         * @param eft (default=null)   
         * @param beL (default=null)   
         * @param efv (default=false)   
         */
        GetSpeedAtPoint: (x: unknown, y: unknown, eft?: unknown, beL?: unknown, efv?: unknown) => unknown;
        /**
         * @param body   
         * @param eft (default=null)   
         */
        TimeWarpFunction: (body: unknown, eft?: unknown) => unknown;
        IsBodyChronoFrozen: (body: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        zones: unknown;
    }
}

declare global {
    interface pb2Timer extends ClassIdentityProps<"pb2Timer"> {
        calls_left: unknown;
        current_cycle_time_left: unknown;
        SetCalls: (v: unknown) => unknown;
        SetTimeUntilNextCycle: (v: unknown) => unknown;
        SetDefaultCycleDuration: (v: unknown) => unknown;
        ResetCurrentCycle: () => unknown;
        enabled: unknown;
        Start: () => unknown;
        Stop: () => unknown;
        position_container: unknown;
        readonly type: unknown;
    }
    var pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        /**
         * @param func   
         * @param tim   
         * @param _type (default=0)   
         * @param bql (default=null)   
         */
        CreateTimer: (func: unknown, tim: unknown, _type?: unknown, bql?: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_GAME_TIMESCALE: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_GAME_TIMESCALE_WARPED: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_REAL_WORLD_TIMESCALE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_FULL_FRAME_TICKS: unknown;
        /** Type is unknown. One known value: [] */
        timers_active_game: unknown;
        /** Type is unknown. One known value: [] */
        timers_active_world: unknown;
    }
}

declare global {
    interface pb2UsableSwitch extends ClassIdentityProps<"pb2UsableSwitch"> {
        /** Type is unknown. One known value: 34 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        usable_glow_intensity: unknown;
        is_usable: unknown;
        /** @param Ox (default=null)  */
        Use: (Ox?: unknown) => unknown;
        remove: () => unknown;
        readonly model_frame: unknown;
        SetPosition: (x2: unknown, y2: unknown) => unknown;
        /** Type is unknown. One known value: false */
        readonly is_being_removed: unknown;
    }
    var pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch: (params: unknown) => unknown;
        /** Type is unknown. One known value: [] */
        switches: unknown;
    }
}

declare global {
    var pb2Vision: ClassIdentityProps<"pb2Vision"> & {
        /** Type is unknown. One known value: 1 */
        VISION_EVERYTHING: unknown;
        /** Type is unknown. One known value: 2 */
        VISION_SCREEN_BOX: unknown;
        /** Type is unknown. One known value: 3 */
        VISION_RADIAL_TRACE: unknown;
        /** Type is unknown. One known value: 4 */
        VISION_DIRECTED_TRACE: unknown;
        /** Type is unknown. One known value: ["pb2Vision.VISION_EVERYTHING","pb2Vision.VISION_SCREEN_BOX","pb2Vision.VISION_RADIAL_TRACE","pb2Vision.VISION_DIRECTED_TRACE"] */
        ALL_TYPES: unknown;
    }
}

declare global {
    var pb2Void: ClassIdentityProps<"pb2Void"> & {
        /** Type is unknown. One known value: 102 */
        readonly classid: unknown;
    }
}

declare global {
    interface pb2WaterClass extends ClassIdentityProps<"pb2WaterClass"> {
        readonly shapes: unknown;
    }
    var pb2WaterClass: ClassIdentityProps<"pb2WaterClass"> & {
        /** Type is unknown. One known value: 0 */
        TYPE_WATER: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_TOXIC: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_CORROSIVE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_LAVA: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_FREEZING: unknown;
        /** Type is unknown. One known value: 5 */
        TYPE_ZERO_GRAVITY: unknown;
        /** Type is unknown. One known value: 6 */
        TYPE_ZERO_GRAVITY_NO_MUFFLE: unknown;
        /** Type is unknown. One known value: ["pb2WaterClass.TYPE_WATER","pb2WaterClass.TYPE_TOXIC","pb2WaterClass.TYPE_CORROSIVE","pb2WaterClass.TYPE_LAVA","pb2WaterClass.TYPE_FREEZING","pb2WaterClass.TYPE_ZERO_GRAVITY","pb2WaterClass.TYPE_ZERO_GRAVITY_NO_MUFFLE"] */
        ALL_TYPES: unknown;
        DeclareWaterClass: (params: unknown) => unknown;
    }
}

type pb2WindowBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
    tooltip: unknown;
    readonly type: unknown;
    /**
     * @param cWC   
     * @param cWE (default=true)   
     * @param Hi (default=true)   
     */
    SetVisibilityFor: (cWC: unknown, cWE?: unknown, Hi?: unknown) => unknown;
    SendChanges: () => unknown;
    visible: unknown;
    requires_ctrl_key: unknown;
    ignore_mouse_events: unknown;
    click_animation: unknown;
    /**
     * @param txt   
     * @param size (default=12)   
     * @param cMI (default=false)   
     * @param nu (default=false)   
     */
    SetText: (txt: unknown, size?: unknown, cMI?: unknown, nu?: unknown) => unknown;
    /** @param c (default=null)  */
    remove: (c?: unknown) => unknown;
    readonly parent: unknown;
    readonly childs: unknown;
    GetTypeSpecificStructure: () => unknown;
    SetTypeSpecificStructure: (Ap: unknown) => unknown;
    readonly is_being_removed: boolean;
};

declare global {
    interface pb2Window extends pb2WindowBase<"pb2Window"> {}
    var pb2Window: ClassIdentityProps<"pb2Window"> & {
        CreateWindow: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        DIALOGBOX: unknown;
        /** Type is unknown. One known value: 1 */
        BUTTON: unknown;
        /** Type is unknown. One known value: 2 */
        SCREEN_BLOCKING_BOX: unknown;
        /** Type is unknown. One known value: 3 */
        SCROLL_LIST: unknown;
        /** Type is unknown. One known value: 4 */
        SCROLLBAR_PAD: unknown;
        /** Type is unknown. One known value: 5 */
        SCROLLBAR_CARET: unknown;
        /** Type is unknown. One known value: 6 */
        CAPTION_IMPORTANT: unknown;
        /** Type is unknown. One known value: 7 */
        CAPTION: unknown;
        /** Type is unknown. One known value: 8 */
        PARAM_PANEL: unknown;
        /** Type is unknown. One known value: 9 */
        DRAG_PARENT: unknown;
        /** Type is unknown. One known value: 10 */
        COLOR_PICKER: unknown;
        /** Type is unknown. One known value: 11 */
        COLOR_PALETTE: unknown;
        /** Type is unknown. One known value: 12 */
        CONTAINER: unknown;
        /** Type is unknown. One known value: 13 */
        HUD_RECT: unknown;
        /** Type is unknown. One known value: 14 */
        SAYBOX: unknown;
        /** Type is unknown. One known value: 15 */
        ICON_BUTTON: unknown;
        /** Type is unknown. One known value: 16 */
        PROGRESS_BAR_SEGMENT: unknown;
        /** Type is unknown. One known value: 17 */
        STRETCH_PARENT: unknown;
        /** Type is unknown. One known value: 18 */
        LEADERBOARD: unknown;
        /** Type is unknown. One known value: 19 */
        LEADERBOARD_PLAYERS_LIST: unknown;
        /** Type is unknown. One known value: 20 */
        CAPTION_CENTERED: unknown;
        /** Type is unknown. One known value: 21 */
        PERFORMANCE_GRAPH: unknown;
        /** Type is unknown. One known value: 22 */
        CLOCK: unknown;
        /** Type is unknown. One known value: 23 */
        BUTTON_HOLO: unknown;
        /** Type is unknown. One known value: 24 */
        HUD_RECT_SOLID: unknown;
        /** Type is unknown. One known value: ["freeedit","wall","movable","region","pusher","bg","water","compound_character","entity","decoration","gun","usable_switch","lamp","barrel","trigger","timer","info","song","image","scale","surface","group","group_expanded","group_item","group_last","team","area","point","vector","circle","fire","window","set","text","bleeding","frozen","water_class","execute","bullet","usercode","comment","code","instance","boolean","camera","bar","nothing","group_non_item","ragdoll","character","controller","ai_preset","skin","skin_userdata","group_tool","surface_old","crate","lamp_dynamic","visible_1","visible_0","locked_0","locked_1","timer_inline","module","animated_point","cross","sound","sound_preloader","movable_sounds_preset","ai_hint","blue_question","window_hint","var","transform_selection","disabled_0","disabled_1","model_preloader","model"] */
        icons16_names: unknown;
        /** maps name (one of pb2Window.icon16_names) to id */
        icons16_names_to_id: {[k: string]: number};
    }
}

declare global {
    interface pb2WindowHint extends ClassIdentityProps<"pb2WindowHint"> {
        readonly x: unknown;
        readonly y: unknown;
        readonly text: unknown;
        readonly text_decorated: unknown;
        readonly type: unknown;
        readonly container: unknown;
        readonly attachment_ragdoll: unknown;
        readonly time_current: unknown;
        readonly time_to_live: unknown;
        /**
         * @param s   
         * @param cYr (default=false)   
         */
        SetText: (s: unknown, cYr?: unknown) => unknown;
        SetColor: (color: unknown) => unknown;
        Expire: () => unknown;
        readonly appearance_duration: unknown;
        readonly main_color: unknown;
        GetOptions: () => unknown;
        /**
         * @param options   
         * @param cYr (default=false)   
         */
        SetOptions: (options: unknown, cYr?: unknown) => unknown;
        readonly my_vote_id: unknown;
        readonly votes: unknown;
        sync_to_spectators: unknown;
    }
    var pb2WindowHint: ClassIdentityProps<"pb2WindowHint"> & {
        CreateWindowHint: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        CONTAINER_TOP: unknown;
        /** Type is unknown. One known value: 1 */
        CONTAINER_BOTTOM: unknown;
        /** Type is unknown. One known value: 2 */
        CONTAINER_FLOATING_IN_WORLD: unknown;
        /** Type is unknown. One known value: 0 */
        TYPE_WARNING: unknown;
        /** Type is unknown. One known value: 1 */
        TYPE_RESPONSE_OPTIONS: unknown;
        /** Type is unknown. One known value: 2 */
        TYPE_SUBTITLE: unknown;
        /** Type is unknown. One known value: 3 */
        TYPE_HINT: unknown;
        /** Type is unknown. One known value: 4 */
        TYPE_HEALTHBAR: unknown;
        COLOR_RED: {
            /** Type is unknown. One known value: 1 */
            r: unknown;
            /** Type is unknown. One known value: 0.2 */
            g: unknown;
            /** Type is unknown. One known value: 0.2 */
            b: unknown;
        }
        COLOR_YELLOW: {
            /** Type is unknown. One known value: 1 */
            r: unknown;
            /** Type is unknown. One known value: 1 */
            g: unknown;
            /** Type is unknown. One known value: 0.4666666666666667 */
            b: unknown;
        }
        COLOR_GREEN: {
            /** Type is unknown. One known value: 0.4 */
            r: unknown;
            /** Type is unknown. One known value: 1 */
            g: unknown;
            /** Type is unknown. One known value: 0.4 */
            b: unknown;
        }
        COLOR_WHITE: {
            /** Type is unknown. One known value: 1 */
            r: unknown;
            /** Type is unknown. One known value: 1 */
            g: unknown;
            /** Type is unknown. One known value: 1 */
            b: unknown;
        }
    }
}

declare global {
    // failed to be included in generation (extractor didn't search for pb2Window subclasses)
    interface pb2WindowIconButton extends pb2WindowBase<"pb2WindowIconButton"> {
        icon: unknown;
    }
}

declare global {
    // failed to be included in generation (extractor didn't search for pb2Window subclasses)
    interface pb2WindowLeaderboard extends pb2WindowBase<"pb2WindowLeaderboard"> {
        round_time: unknown;
        round_time_max: unknown;
        players_max: unknown;
        fields: unknown;
        players: unknown;
        teams: unknown;
        my_player_id: unknown;
        my_spectated_id: unknown;
        graphs: unknown;
    }
    var pb2WindowLeaderboard: ClassIdentityProps<"pb2WindowLeaderboard"> & {
        /** Type is unknown. One known value: 0 */
        ICON_ID_REPORT: unknown;
        /** Type is unknown. One known value: 1 */
        ICON_ID_SPECTATE: unknown;
        /** Type is unknown. One known value: 2 */
        ICON_ID_KICK: unknown;
        /** Type is unknown. One known value: 3 */
        ICON_ID_PROMOTE: unknown;
        /** Type is unknown. One known value: 4 */
        ICON_ID_DEMOTE: unknown;
        /** Type is unknown. One known value: 5 */
        ICON_ID_ELIMINATE: unknown;
        /** Type is unknown. One known value: 6 */
        ICON_ID_COIN: unknown;
        /** Type is unknown. One known value: 0 */
        FIELD_TYPE_NUMERIC: unknown;
        /** Type is unknown. One known value: 1 */
        FIELD_TYPE_NUMERIC_ELIMINATIONS: unknown;
        /** Type is unknown. One known value: 2 */
        FIELD_TYPE_NUMERIC_DEATHS: unknown;
        /** Type is unknown. One known value: 3 */
        FIELD_TYPE_NUMERIC_SCORE: unknown;
        /** Type is unknown. One known value: 4 */
        FIELD_TYPE_TEXT_NICKNAME: unknown;
        /** Type is unknown. One known value: 5 */
        FIELD_TYPE_TEXT: unknown;
        /** Type is unknown. One known value: 6 */
        FIELD_TYPE_TEXT_CENTERED: unknown;
        /** Type is unknown. One known value: 7 */
        FIELD_TYPE_BUTTON: unknown;
        /** Type is unknown. One known value: 0 */
        FIELD_WIDTH_AUTO: unknown;
        /** Type is unknown. One known value: -1 */
        FIELD_TEAM_ID_SPECTATORS: unknown;
        /** Type is unknown. One known value: ["pb2WindowLeaderboard.ICON_ID_REPORT","pb2WindowLeaderboard.ICON_ID_SPECTATE","pb2WindowLeaderboard.ICON_ID_KICK","pb2WindowLeaderboard.ICON_ID_PROMOTE","pb2WindowLeaderboard.ICON_ID_DEMOTE","pb2WindowLeaderboard.ICON_ID_ELIMINATE","pb2WindowLeaderboard.ICON_ID_COIN","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_ELIMINATIONS","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_DEATHS","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_SCORE","pb2WindowLeaderboard.FIELD_TYPE_TEXT_NICKNAME","pb2WindowLeaderboard.FIELD_TYPE_TEXT","pb2WindowLeaderboard.FIELD_TYPE_TEXT_CENTERED","pb2WindowLeaderboard.FIELD_TYPE_BUTTON","pb2WindowLeaderboard.FIELD_WIDTH_AUTO","pb2WindowLeaderboard.FIELD_TEAM_ID_SPECTATORS"] */
        ALL_TYPES: unknown;
    }
}

declare global {
    var pb2_mp: ClassIdentityProps<"pb2_mp"> & {
        /** Type is unknown. One known value: 0 */
        GAME_FPS: unknown;
        /** Type is unknown. One known value: 1 */
        FUNCTION_LINEAR: unknown;
        /** Type is unknown. One known value: 2 */
        FUNCTION_MORPH: unknown;
        /** Type is unknown. One known value: 3 */
        FUNCTION_INVERSEMORPH: unknown;
        /** Type is unknown. One known value: 960 */
        ui_offset_x: unknown;
        /** Type is unknown. One known value: 540 */
        ui_offset_y: unknown;
    }
}
