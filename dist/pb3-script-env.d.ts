export {};
declare global {
    interface AIPreset {
        allow_hit_reporting: boolean;
        allow_penetrating_shots: boolean;
        allow_revenge_teamkilling: boolean;
        allow_ricochet_shots: boolean;
        allow_trace_shots: boolean;
        behavior: number;
        factor_for_team_damage_paths_avoidance: number;
        heal_teammates: boolean;
        hear_range: number;
        hunt_attacker: boolean;
        hunt_random_known_threats_range: number;
        hunt_seen_threats: boolean;
        rejection_point_for_team_damage_paths: number | null;
        sequence_behavior: number;
        skill: number;
    }
}

interface ClassIdentityProps<ClassName extends string> {
    readonly _class: ClassName;
    toString(): `[object ${ClassName}]`;
}

type TODO = any;

declare global {
    interface Circle extends ClassIdentityProps<"Circle"> {
        SetZero: () => TODO;
        Set: (x_: number, y_: number) => TODO;
        SetSelf: (x_: TODO, y_: TODO) => TODO;
        AddXY: (x_: number, y_: number) => TODO;
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
        RotatedSinCos: (sin: number, cos: number) => TODO;
        GetAngle: () => TODO;
        IsValid: () => TODO;
        MoveToUntilDistanceIs: (to: TODO, di: TODO) => TODO;
    }
    var Circle: {
        new (params: TODO): Circle;

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
        clone: () => ColorTransform;
        multiplyHighRangeColor: (v: {r: number, g: number, b: number}) => ColorTransform;
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
        init_class: () => TODO;
        /** Type is unknown. One known value: [0,32] */
        SPACE: TODO;
        /** Type is unknown. One known value: [0,9] */
        TAB: TODO;
        /** Type is unknown. One known value: [0,8] */
        BACKSPACE: TODO;
        /** Type is unknown. One known value: [0,27] */
        ESCAPE: TODO;
        /** Type is unknown. One known value: [0,13] */
        ENTER: TODO;
        /** Type is unknown. One known value: [0,37] */
        LEFT: TODO;
        /** Type is unknown. One known value: [0,38] */
        UP: TODO;
        /** Type is unknown. One known value: [0,39] */
        RIGHT: TODO;
        /** Type is unknown. One known value: [0,40] */
        DOWN: TODO;
        /** Type is unknown. One known value: [1,17] */
        CONTROL: TODO;
        /** Type is unknown. One known value: [1,16] */
        SHIFT: TODO;
        /** Type is unknown. One known value: [1,18] */
        ALT: TODO;
        /** Type is unknown. One known value: [4,1] */
        MOUSE_LEFT: TODO;
        /** Type is unknown. One known value: [4,3] */
        MOUSE_RIGHT: TODO;
        /** Type is unknown. One known value: [4,3] */
        MOUSE_WHEEL_CLICK: TODO;
        /** Type is unknown. One known value: [5,0] */
        MOUSE_WHEEL_UP: TODO;
        /** Type is unknown. One known value: [5,1] */
        MOUSE_WHEEL_DOWN: TODO;
        /** Type is unknown. One known value: [0,167] */
        HISTORY_FORWARD: TODO;
        /** Type is unknown. One known value: [0,166] */
        HISTORY_BACK: TODO;
        /** Type is unknown. One known value: [0,219] */
        SQUARE_BRACKET_OPEN: TODO;
        /** Type is unknown. One known value: [0,221] */
        SQUARE_BRACKET_CLOSE: TODO;
        /** Type is unknown. One known value: [0,188] */
        COMMA: TODO;
        /** Type is unknown. One known value: [0,190] */
        PERIOD: TODO;
        /** Type is unknown. One known value: [2,16] */
        SLASH: TODO;
        /** Type is unknown. One known value: [0,189] */
        MINUS: TODO;
        /** Type is unknown. One known value: [0,187] */
        PLUS: TODO;
        /** Type is unknown. One known value: [0,220] */
        BACKSLASH: TODO;
        /** Type is unknown. One known value: [0,46] */
        DELETE: TODO;
        /** Type is unknown. One known value: [0,192] */
        TILDE: TODO;
        /** Type is unknown. One known value: [0,96] */
        TILDE_ALT: TODO;
        /** Type is unknown. One known value: [0,126] */
        TILDE_ALT2: TODO;
        /** Type is unknown. One known value: [0,48] */
        DIGIT0: TODO;
        /** Type is unknown. One known value: [0,49] */
        DIGIT1: TODO;
        /** Type is unknown. One known value: [0,50] */
        DIGIT2: TODO;
        /** Type is unknown. One known value: [0,51] */
        DIGIT3: TODO;
        /** Type is unknown. One known value: [0,52] */
        DIGIT4: TODO;
        /** Type is unknown. One known value: [0,53] */
        DIGIT5: TODO;
        /** Type is unknown. One known value: [0,54] */
        DIGIT6: TODO;
        /** Type is unknown. One known value: [0,55] */
        DIGIT7: TODO;
        /** Type is unknown. One known value: [0,56] */
        DIGIT8: TODO;
        /** Type is unknown. One known value: [0,57] */
        DIGIT9: TODO;
        /** Type is unknown. One known value: [0,65] */
        A: TODO;
        /** Type is unknown. One known value: [0,66] */
        B: TODO;
        /** Type is unknown. One known value: [0,67] */
        C: TODO;
        /** Type is unknown. One known value: [0,68] */
        D: TODO;
        /** Type is unknown. One known value: [0,69] */
        E: TODO;
        /** Type is unknown. One known value: [0,70] */
        F: TODO;
        /** Type is unknown. One known value: [0,71] */
        G: TODO;
        /** Type is unknown. One known value: [0,72] */
        H: TODO;
        /** Type is unknown. One known value: [0,73] */
        I: TODO;
        /** Type is unknown. One known value: [0,74] */
        J: TODO;
        /** Type is unknown. One known value: [0,75] */
        K: TODO;
        /** Type is unknown. One known value: [0,76] */
        L: TODO;
        /** Type is unknown. One known value: [0,77] */
        M: TODO;
        /** Type is unknown. One known value: [0,78] */
        N: TODO;
        /** Type is unknown. One known value: [0,79] */
        O: TODO;
        /** Type is unknown. One known value: [0,80] */
        P: TODO;
        /** Type is unknown. One known value: [0,81] */
        Q: TODO;
        /** Type is unknown. One known value: [0,82] */
        R: TODO;
        /** Type is unknown. One known value: [0,83] */
        S: TODO;
        /** Type is unknown. One known value: [0,84] */
        T: TODO;
        /** Type is unknown. One known value: [0,85] */
        U: TODO;
        /** Type is unknown. One known value: [0,86] */
        V: TODO;
        /** Type is unknown. One known value: [0,87] */
        W: TODO;
        /** Type is unknown. One known value: [0,88] */
        X: TODO;
        /** Type is unknown. One known value: [0,89] */
        Y: TODO;
        /** Type is unknown. One known value: [0,90] */
        Z: TODO;
    }
}

declare global {
    interface MovableSoundsPreset {
        sound_break: string | null;
        sound_break_pitch: number;
        sound_break_volume: number;
        sound_damage: string | null;
        sound_damage_pitch: number;
        sound_damage_volume: number;
        sound_damage_base_volume: number;
        sound_damage_volume_scale_with_damage_factor: number;
        sound_loop: string | null;
        sound_loop_pitch: number;
        sound_loop_volume: number;
        sound_loop_base_speed: number;
        sound_loop_speed_to_pitch_factor: number;
        sound_start: string | null;
        sound_start_pitch: number;
        sound_start_volume: number;
        sound_stop: string | null;
        sound_stop_pitch: number;
        sound_stop_volume: number;
    }
}

declare global {
    interface Point extends ClassIdentityProps<"Point"> {
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
    var Point: {
        new (params: TODO): Point;

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
            setComponent: (index: number, value: number) => TODO;
            getComponent: (index: number) => number;
            clone: () => Vector3;
            copy: (v: TODO) => TODO;
            add: (v: TODO, w: TODO) => TODO;
            addScalar: (s: TODO) => TODO;
            addVectors: (a: TODO, b: TODO) => TODO;
            addScaledVector: (v: TODO, s: TODO) => TODO;
            sub: (v: TODO, w: TODO) => TODO;
            subScalar: (s: number) => TODO;
            subVectors: (a: TODO, b: TODO) => TODO;
            multiply: (v: TODO, w: TODO) => TODO;
            multiplyScalar: (scalar: number) => TODO;
            multiplyVectors: (a: TODO, b: TODO) => TODO;
            applyEuler: (euler: TODO) => TODO;
            applyAxisAngle: (axis: TODO, angle: TODO) => TODO;
            applyMatrix3: (m: TODO) => TODO;
            applyMatrix4: (m: TODO) => TODO;
            applyQuaternion: (q: TODO) => TODO;
            project: (camera: TODO) => TODO;
            unproject: (camera: TODO) => TODO;
            transformDirection: (m: TODO) => TODO;
            divide: (v: TODO) => TODO;
            divideScalar: (scalar: number) => TODO;
            min: (v: TODO) => TODO;
            max: (v: TODO) => TODO;
            clamp: (min: TODO, max: TODO) => TODO;
            clampScalar: (minVal: number, maxVal: number) => TODO;
            clampLength: (min: TODO, max: TODO) => TODO;
            floor: () => TODO;
            ceil: () => TODO;
            round: () => TODO;
            roundToZero: () => TODO;
            negate: () => TODO;
            dot: (v: TODO) => TODO;
            lengthSq: () => TODO;
            lengthManhattan: () => TODO;
            normalize: () => TODO;
            setLength: (length: TODO) => TODO;
            lerp: (v: TODO, alpha: TODO) => TODO;
            lerpVectors: (v1: TODO, v2: TODO, alpha: TODO) => TODO;
            cross: (v: TODO, w: TODO) => TODO;
            crossVectors: (a: TODO, b: TODO) => TODO;
            projectOnVector: (vector: TODO) => TODO;
            projectOnPlane: (planeNormal: TODO) => TODO;
            reflect: (normal: TODO) => TODO;
            angleTo: (v: TODO) => TODO;
            distanceTo: (v: TODO) => TODO;
            distanceToSquared: (v: TODO) => TODO;
            distanceToManhattan: (v: TODO) => TODO;
            setFromSpherical: (s: TODO) => TODO;
            setFromCylindrical: (c: TODO) => TODO;
            setFromMatrixPosition: (m: TODO) => TODO;
            setFromMatrixScale: (m: TODO) => TODO;
            setFromMatrixColumn: (m: TODO, index: TODO) => TODO;
            equals: (v: TODO) => TODO;
            fromArray: (array: TODO, offset: TODO) => TODO;
            toArray: (array: TODO, offset: TODO) => TODO;
            fromBufferAttribute: (attribute: TODO, index: TODO, offset: TODO) => TODO;
            setEulerFromRotationMatrix: () => TODO;
            setEulerFromQuaternion: () => TODO;
            getPositionFromMatrix: (m: TODO) => TODO;
            getScaleFromMatrix: (m: TODO) => TODO;
            getColumnFromMatrix: (index: TODO, matrix: TODO) => TODO;
            applyProjection: (m: TODO) => TODO;
            fromAttribute: (attribute: TODO, index: TODO, offset: TODO) => TODO;
            // x,y,z failed to be included in generation
            x: number;
            y: number;
            z: number;
        }
        interface Matrix4 extends ClassIdentityProps<"Matrix4"> {
            isMatrix4: boolean;
            set: (n11: TODO, n12: TODO, n13: TODO, n14: TODO, n21: TODO, n22: TODO, n23: TODO, n24: TODO, n31: TODO, n32: TODO, n33: TODO, n34: TODO, n41: TODO, n42: TODO, n43: TODO, n44: TODO) => TODO;
            identity: () => TODO;
            clone: () => TODO;
            copy: (m: TODO) => TODO;
            copyPosition: (m: TODO) => TODO;
            extractBasis: (xAxis: TODO, yAxis: TODO, zAxis: TODO) => TODO;
            makeBasis: (xAxis: TODO, yAxis: TODO, zAxis: TODO) => TODO;
            extractRotation: (m: TODO) => TODO;
            makeRotationFromEuler: (euler: TODO) => TODO;
            makeRotationFromQuaternion: (q: TODO) => TODO;
            lookAt: (eye: TODO, target: TODO, up: TODO) => TODO;
            multiply: (m: TODO, n: TODO) => TODO;
            premultiply: (m: TODO) => TODO;
            multiplyMatrices: (a: TODO, b: TODO) => TODO;
            multiplyScalar: (s: number) => TODO;
            applyToBufferAttribute: (attribute: TODO) => TODO;
            determinant: () => TODO;
            transpose: () => TODO;
            setPosition: (v: TODO) => TODO;
            getInverse: (m: TODO, throwOnDegenerate: TODO) => TODO;
            scale: (v: TODO) => TODO;
            getMaxScaleOnAxis: () => TODO;
            makeTranslation: (x: TODO, y: TODO, z: TODO) => TODO;
            makeRotationX: (theta: TODO) => TODO;
            makeRotationY: (theta: TODO) => TODO;
            makeRotationZ: (theta: TODO) => TODO;
            makeRotationAxis: (axis: TODO, angle: TODO) => TODO;
            makeScale: (x: TODO, y: TODO, z: TODO) => TODO;
            makeShear: (x: TODO, y: TODO, z: TODO) => TODO;
            /** Type is unknown. One known value: 0 */
            last_transform_hash: TODO;
            /** Type is unknown. One known value: 0 */
            last_transform_hash2: TODO;
            compose: (position: TODO, quaternion: TODO, scale: TODO) => TODO;
            decompose: (position: TODO, quaternion: TODO, scale: TODO) => TODO;
            makePerspective: (left: TODO, right: TODO, top: TODO, bottom: TODO, near: TODO, far: TODO) => TODO;
            makeOrthographic: (left: TODO, right: TODO, top: TODO, bottom: TODO, near: TODO, far: TODO) => TODO;
            equals: (matrix: TODO) => TODO;
            fromArray: (array: TODO, offset: TODO) => TODO;
            toArray: (array: TODO, offset: TODO) => TODO;
            extractPosition: (m: TODO) => TODO;
            flattenToArrayOffset: (array: TODO, offset: TODO) => TODO;
            getPosition: () => TODO;
            setRotationFromQuaternion: (q: TODO) => TODO;
            multiplyToArray: () => TODO;
            multiplyVector3: (vector: TODO) => TODO;
            multiplyVector4: (vector: TODO) => TODO;
            multiplyVector3Array: (a: TODO) => TODO;
            rotateAxis: (v: TODO) => TODO;
            crossVector: (vector: TODO) => TODO;
            translate: () => TODO;
            rotateX: () => TODO;
            rotateY: () => TODO;
            rotateZ: () => TODO;
            rotateByAxis: () => TODO;
            applyToBuffer: (buffer: TODO, offset: TODO, length: TODO) => TODO;
            applyToVector3Array: (array: TODO, offset: TODO, length: TODO) => TODO;
            makeFrustum: (left: TODO, right: TODO, bottom: TODO, top: TODO, near: TODO, far: TODO) => TODO;
            appendTranslation: (x: TODO, y: TODO, z: TODO) => TODO;
            /**
             * @param ang   
             * @param up   
             * @param eoP (default=null)   
             */
            appendRotation: (ang: TODO, up: TODO, eoP?: TODO) => TODO;
            invert: () => TODO;
            eoQ: (v: TODO) => TODO;
            bNj: (v: TODO) => TODO;
        }
        interface Euler extends ClassIdentityProps<"Euler"> {
            x: number;
            y: number;
            z: number;
            order: TODO;
            isEuler: boolean;
            set: (x: number, y: number, z: number, order: TODO) => TODO;
            clone: () => TODO;
            copy: (euler: TODO) => TODO;
            setFromRotationMatrix: (m: TODO, order: TODO, update: TODO) => TODO;
            setFromQuaternion: (q: TODO, order: TODO, update: TODO) => TODO;
            setFromVector3: (v: TODO, order: TODO) => TODO;
            reorder: (newOrder: TODO) => TODO;
            equals: (euler: TODO) => TODO;
            fromArray: (array: TODO) => TODO;
            toArray: (array: TODO, offset: TODO) => TODO;
            toVector3: (optionalResult: TODO) => TODO;
            onChange: (callback: TODO) => TODO;
            onChangeCallback: () => TODO;
        }
        interface Object3D extends ClassIdentityProps<"Object3D"> {
            readonly parent: TODO;
            lookAt: (vector: TODO) => TODO;
            readonly position: Vector3;
            readonly rotation: TODO;
            readonly scale: TODO;
            readonly matrix: TODO;
            readonly matrixWorld: TODO;
            visible: boolean;
        }
        // failed to be included in generation (extractor didn't search for Object3D subclasses, intentionally)
        interface Mesh extends ClassIdentityProps<"Mesh"> {
            readonly parent: TODO;
            lookAt: (vector: TODO) => TODO;
            readonly position: Vector3;
            readonly rotation: TODO;
            readonly scale: TODO;
            readonly matrix: TODO;
            readonly matrixWorld: TODO;
            visible: boolean;
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
    var Vector: {
        new (params: TODO): Vector;

    }
}

declare global {
    /** equals console.log */
    var trace: (...args: any[]) => void;
    var warn: (...args: any[]) => void;
    var error: (...args: TODO[]) => TODO;
    var pb2DebugPermissionVerify: () => TODO;
    /** @param bV (default=false)  */
    var GetMilliseconds: (bV?: boolean) => TODO;
    /** @param bV (default=false)  */
    var GetTime30: (bV?: boolean) => TODO;
    var GetIngameTime: () => number;
    var _pb2ExecTimeTest: () => true;
    var _pb2DebugHook: (coK: TODO, coL: TODO) => void;
    var _pb2DebugLastPtr: (i: number) => void;
    var _pb2DebugReturn: (value: TODO) => void;
    var _pb2DebugPopUp: (...args: TODO[]) => void;
    var _pb2DebugPopUpOnce: (arg: TODO) => void;
    /**
     * @param _coV   
     * @param _cpk (default=1)   
     * @param _cpn (default=1)   
     * @param _cpo (default=null)   
     * @param _cpp (default=1)   
     */
    var _pb2T: (_coV: (...args: any[]) => any, _cpk?: TODO, _cpn?: TODO, _cpo?: TODO, _cpp?: TODO) => TODO;
    /** responsible for throwing error if a trigger is called before it's spawned */
    var _pb2TU: (t: string) => never;
    var _pb2ClientSideTrigger: (f: TODO) => TODO;
    /**
     * @param x   
     * @param y   
     * @param color (default=0xFF0000)   
     * @param size (default=3)   
     * @param z (default=-1000) depth  
     * @param opacity (default=0.5)   
     * @param eIe (default=0) time to display  
     */
    var DrawDebugPoint: (x: number, y: number, color?: TODO, size?: number, z?: number, opacity?: number, eIe?: number) => TODO;
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
    var DrawDebugLine: (ax: number, ay: number, bx: number, by: number, color?: TODO, opacity?: number, y?: number, eIe?: number) => TODO;
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
    var DrawDebugArrow: (ax: number, ay: number, bx: number, by: number, color?: TODO, opacity?: number, y?: number, eIe?: number) => TODO;
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
    var DrawDebugRect: (minx: number, miny: number, maxx: number, maxy: number, color?: TODO, opacity?: number, y?: number, eIe?: number) => TODO;
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
    var DrawDebugRectByDimensions: (minx: number, miny: number, w: number, h: number, color?: TODO, opacity?: number, y?: number, eIe?: number) => TODO;

    // cannot be typed because it would conflict with the declaration for javascript's addEventListener. requires a noLib: true setup with custom ts lib declarations
    //var addEventListener: (event_type: TODO, params: TODO, dVQ?: null | TODO) => void;
    //var removeEventListener: (event_type: TODO, params: TODO, dVQ?: null | TODO) => void;
}

declare global {
    interface Math {
        sumPrecise: (numbers: Iterable<number>) => number;
        /** Accessing this throws an error */
        POSITIVE_INFINITY: number;
        /** Accessing this throws an error */
        NEGATIVE_INFINITY: number;
        randomIntegerWithin: (a: number, b: number) => number;
        randomWithin: (a: number, b: number) => number;
    }
    interface StringConstructor {
        eoX: (a: TODO, b: TODO) => TODO;
    }
    interface String {
        split_test: (d: TODO) => TODO;
    }
    interface Array<T> {
        join_test: () => TODO;
        /** Getter which returns a random element. Proper usage example: [ 0, 1, 2 ].any */
        get any(): T;
    }
    interface ErrorConstructor {
        captureStackTrace: () => TODO;
        stackTraceLimit: number;
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

declare global {
    interface b2Vec2 extends ClassIdentityProps<"b2Vec2"> {
        SetZero: () => TODO;
        Set: (x_: number, y_: number) => TODO;
        SetSelf: (x_: TODO, y_: TODO) => TODO;
        AddXY: (x_: number, y_: number) => TODO;
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
        RotatedSinCos: (sin: number, cos: number) => TODO;
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
        new (x?: number, y?: number, seal?: boolean): b2Vec2;

    }
}

declare global {
    var b2World: ClassIdentityProps<"b2World"> & {
        GetAllBodies: () => b2Body[];
    }
}

declare global {
    interface ep extends ClassIdentityProps<"ep"> {
        volume: number;
        pitch: number;
        stop: () => TODO;
        readonly isPlaying: boolean;
        /** Type is unknown. One known value: "" */
        readonly sound_name: TODO;
    }
    
}

declare global {
    interface pb2AIModule extends ClassIdentityProps<"pb2AIModule"> {
        readonly skill: number;
        readonly controller: TODO;
        readonly allow_trace_shots: boolean;
        readonly allow_hit_reporting: boolean;
        readonly bot_decided_hunt_threat: TODO;
        bot_decided_teammate_heal: TODO;
        bot_decided_teammate_follow: TODO;
        /**
         * @param x   
         * @param y   
         * @param mode (default=pb2AIModule.GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED)   
         */
        GoTo: (x: number, y: number, mode?: TODO) => TODO;
        hunt_attacker: boolean;
        hunt_seen_threats: boolean;
        hunt_random_known_threats_range: number;
        heal_teammates: boolean;
        hear_range: number;
    }
    var pb2AIModule: ClassIdentityProps<"pb2AIModule"> & {
        /** Type is unknown. One known value: null */
        YQ: TODO;
        /** Type is unknown. One known value: 0 */
        BEHAVIOR_IDLE: TODO;
        /** Type is unknown. One known value: 1 */
        BEHAVIOR_LOOK_AROUND: TODO;
        /** Type is unknown. One known value: 2 */
        BEHAVIOR_INVESTIGATE: TODO;
        /** Type is unknown. One known value: 3 */
        BEHAVIOR_MPBOT: TODO;
        /** Type is unknown. One known value: 0 */
        COMBAT_LEVEL_NO_COMBAT: TODO;
        /** Type is unknown. One known value: 1 */
        COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE: TODO;
        /** Type is unknown. One known value: 2 */
        COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS: TODO;
        /** Type is unknown. One known value: 0 */
        TASK_TYPE_BASIC_GOTO: TODO;
        /** Type is unknown. One known value: 1 */
        TASK_TYPE_OXYGEN_RUSH: TODO;
        /** Type is unknown. One known value: 2 */
        TASK_TYPE_THREAT_HUNT: TODO;
        /** Type is unknown. One known value: 3 */
        TASK_TYPE_TEAMMATE_HEAL: TODO;
        /** Type is unknown. One known value: 4 */
        TASK_TYPE_TEAMMATE_FOLLOW: TODO;
        /** Type is unknown. One known value: 0 */
        GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED: TODO;
        /** Type is unknown. One known value: 1 */
        GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED: TODO;
        /** Type is unknown. One known value: 2 */
        GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED: TODO;
        /** Type is unknown. One known value: 9999 */
        NO_SLOT: TODO;
        /** Type is unknown. One known value: -1 */
        FIRST_WEAPON_SLOT: TODO;
        /** Type is unknown. One known value: 0 */
        SEQUENCE_BEHAVIOR_SERIOUS: TODO;
        /** Type is unknown. One known value: 1 */
        SEQUENCE_BEHAVIOR_SILLY: TODO;
        /** Type is unknown. One known value: 2 */
        SEQUENCE_BEHAVIOR_MAD: TODO;
        /** Type is unknown. One known value: 0 */
        WAYPOINT_TYPE_UNDEFINED: TODO;
        /** Type is unknown. One known value: 1 */
        WAYPOINT_TYPE_FLOOR: TODO;
        /** Type is unknown. One known value: 2 */
        WAYPOINT_TYPE_WALL: TODO;
        /** Type is unknown. One known value: 3 */
        WAYPOINT_TYPE_WATER: TODO;
        /** Type is unknown. One known value: 4 */
        WAYPOINT_TYPE_SLIDING_FLOOR: TODO;
        /** Type is unknown. One known value: 0 */
        REACH_TACTIC_UNREACHABLE: TODO;
        /** Type is unknown. One known value: 1 */
        REACH_TACTIC_WALK: TODO;
        /** Type is unknown. One known value: 2 */
        REACH_TACTIC_CROUCH: TODO;
        /** Type is unknown. One known value: 3 */
        REACH_TACTIC_JUMP: TODO;
        /** Type is unknown. One known value: 4 */
        REACH_TACTIC_SWORDJUMP: TODO;
        /** Type is unknown. One known value: 5 */
        REACH_TACTIC_SELFBOOST: TODO;
        /** Type is unknown. One known value: 6 */
        REACH_TACTIC_FALL: TODO;
        /** Type is unknown. One known value: 7 */
        REACH_TACTIC_WALLJUMP_START: TODO;
        /** Type is unknown. One known value: 8 */
        REACH_TACTIC_WALLJUMP_START_SWORDS: TODO;
        /** Type is unknown. One known value: 9 */
        REACH_TACTIC_WALLJUMP_LOOP: TODO;
        /** Type is unknown. One known value: 10 */
        REACH_TACTIC_WALLJUMP_END: TODO;
        /** Type is unknown. One known value: 11 */
        REACH_TACTIC_SWIM: TODO;
        /** Type is unknown. One known value: 12 */
        REACH_TACTIC_SWIM_JUMP: TODO;
        /** Type is unknown. One known value: 13 */
        REACH_TACTIC_SWIM_SELFBOOST: TODO;
        /** Type is unknown. One known value: 14 */
        REACH_TACTIC_HINT: TODO;
        /** Type is unknown. One known value: 15 */
        REACH_TACTIC_CLEARING_PATH: TODO;
        /** Type is unknown. One known value: 16 */
        REACH_TACTIC_SELF_HEALING: TODO;
        /** Type is unknown. One known value: ["unreachable","walk","crouch","jump","sword jump","self-boost","fall","walljump start","walljump start swords","walljump loop","walljump end","swim","swim jump","swim self-boost jump","hint-assisted","clearing movables in path","self-healing"] */
        REACH_TACTIC_NAMES: TODO;
        /** Type is unknown. One known value: [0,1,4,20,24,28,12,10,14,4,10,3,20,28,40,0,0] */
        REACH_TACTIC_PRICES: TODO;
        /** Type is unknown. One known value: [1,1,1,4,20,35,4,20,40,40,4,2,6,35,20,0,0] */
        REACH_TACTIC_THREAT_PRICES: TODO;
        /** Type is unknown. One known value: 1 */
        COEF_MULT_GLOBAL: TODO;
        /** Type is unknown. One known value: -1 */
        FIRE_COEF: TODO;
        /** Type is unknown. One known value: -1 */
        TOXIC_GAS_COEF: TODO;
        /** Type is unknown. One known value: -1 */
        LASER_MINE_COEF: TODO;
        /** Type is unknown. One known value: -1 */
        PROX_MINE_COEF: TODO;
        /** Type is unknown. One known value: 0.25 */
        TIME_WARP_COEF: TODO;
        /** Type is unknown. One known value: 0.5 */
        SHIELDED_COEF: TODO;
        /** Type is unknown. One known value: 1000 */
        VISITED_HINT_LINE_COST: TODO;
        /** Type is unknown. One known value: 1 */
        MOVABLE_ON_A_LINE_COST_PER_HITPOINT: TODO;
        /** Type is unknown. One known value: 50 */
        MOVABLE_ON_A_LINE_COST_PER_MOVABLE: TODO;
        /** Type is unknown. One known value: 10 */
        FAIL_WAY_LINE_COST_PER_FAILURE: TODO;
        /** Type is unknown. One known value: 0 */
        BULLET_COLLISION_LOGIC_PENETRATE: TODO;
        /** Type is unknown. One known value: 1 */
        BULLET_COLLISION_LOGIC_EXPLODE: TODO;
        /** Type is unknown. One known value: 2 */
        BULLET_COLLISION_LOGIC_MIRROR: TODO;
        /** Type is unknown. One known value: 3 */
        BULLET_COLLISION_LOGIC_GRENADE: TODO;
        /** Type is unknown. One known value: 4 */
        BULLET_COLLISION_LOGIC_DRAIN_LIGHT: TODO;
        /** Type is unknown. One known value: 5 */
        BULLET_COLLISION_LOGIC_CHRONO_BEAM: TODO;
        /** Type is unknown. One known value: 0 */
        FILTER_ANY: TODO;
        /** Type is unknown. One known value: 1 */
        FILTER_FLOOR: TODO;
        /** Type is unknown. One known value: 2 */
        FILTER_WATER: TODO;
        /** Type is unknown. One known value: 3 */
        FILTER_FLOOR_AND_WATER: TODO;
        /** Type is unknown. One known value: 4 */
        FILTER_ANY_ANYWHERE: TODO;
        /** Type is unknown. One known value: 5 */
        FILTER_ANY_ANYWHERE_PING_RANGE: TODO;
        /** Type is unknown. One known value: -1 */
        BEST_ATTACK_NOATOM: TODO;
        /** Type is unknown. One known value: -2 */
        BEST_ATTACK_BULLET: TODO;
        /** Type is unknown. One known value: -3 */
        BEST_ATTACK_ENTITY: TODO;
        /** Type is unknown. One known value: -4 */
        BEST_ATTACK_SHAPE: TODO;
        /** Type is unknown. One known value: 0 */
        HINT_ACTION_USE_SWITCH: TODO;
        /** Type is unknown. One known value: 1 */
        HINT_ACTION_JUST_WAIT: TODO;
        /** Type is unknown. One known value: 2 */
        HINT_ACTION_GO_TO: TODO;
        /** Type is unknown. One known value: 3 */
        HINT_ACTION_ATTACK_OBJECT: TODO;
        /** Type is unknown. One known value: 4 */
        HINT_ACTION_SHOOT_AT_POINT: TODO;
        /** Type is unknown. One known value: -1 */
        GUN_MODE_CURRENT: TODO;
        /** Type is unknown. One known value: ["pb2AIModule.YQ","pb2AIModule.BEHAVIOR_IDLE","pb2AIModule.BEHAVIOR_LOOK_AROUND","pb2AIModule.BEHAVIOR_INVESTIGATE","pb2AIModule.BEHAVIOR_MPBOT","pb2AIModule.COMBAT_LEVEL_NO_COMBAT","pb2AIModule.COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE","pb2AIModule.COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS","pb2AIModule.TASK_TYPE_BASIC_GOTO","pb2AIModule.TASK_TYPE_OXYGEN_RUSH","pb2AIModule.TASK_TYPE_THREAT_HUNT","pb2AIModule.TASK_TYPE_TEAMMATE_HEAL","pb2AIModule.TASK_TYPE_TEAMMATE_FOLLOW","pb2AIModule.GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED","pb2AIModule.GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED","pb2AIModule.GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED","pb2AIModule.NO_SLOT","pb2AIModule.FIRST_WEAPON_SLOT","pb2AIModule.SEQUENCE_BEHAVIOR_SERIOUS","pb2AIModule.SEQUENCE_BEHAVIOR_SILLY","pb2AIModule.SEQUENCE_BEHAVIOR_MAD","pb2AIModule.WAYPOINT_TYPE_UNDEFINED","pb2AIModule.WAYPOINT_TYPE_FLOOR","pb2AIModule.WAYPOINT_TYPE_WALL","pb2AIModule.WAYPOINT_TYPE_WATER","pb2AIModule.WAYPOINT_TYPE_SLIDING_FLOOR","pb2AIModule.REACH_TACTIC_UNREACHABLE","pb2AIModule.REACH_TACTIC_WALK","pb2AIModule.REACH_TACTIC_CROUCH","pb2AIModule.REACH_TACTIC_JUMP","pb2AIModule.REACH_TACTIC_SWORDJUMP","pb2AIModule.REACH_TACTIC_SELFBOOST","pb2AIModule.REACH_TACTIC_FALL","pb2AIModule.REACH_TACTIC_WALLJUMP_START","pb2AIModule.REACH_TACTIC_WALLJUMP_START_SWORDS","pb2AIModule.REACH_TACTIC_WALLJUMP_LOOP","pb2AIModule.REACH_TACTIC_WALLJUMP_END","pb2AIModule.REACH_TACTIC_SWIM","pb2AIModule.REACH_TACTIC_SWIM_JUMP","pb2AIModule.REACH_TACTIC_SWIM_SELFBOOST","pb2AIModule.REACH_TACTIC_HINT","pb2AIModule.REACH_TACTIC_CLEARING_PATH","pb2AIModule.REACH_TACTIC_SELF_HEALING","pb2AIModule.REACH_TACTIC_NAMES","pb2AIModule.REACH_TACTIC_PRICES","pb2AIModule.REACH_TACTIC_THREAT_PRICES","pb2AIModule.COEF_MULT_GLOBAL","pb2AIModule.FIRE_COEF","pb2AIModule.TOXIC_GAS_COEF","pb2AIModule.LASER_MINE_COEF","pb2AIModule.PROX_MINE_COEF","pb2AIModule.TIME_WARP_COEF","pb2AIModule.SHIELDED_COEF","pb2AIModule.VISITED_HINT_LINE_COST","pb2AIModule.MOVABLE_ON_A_LINE_COST_PER_HITPOINT","pb2AIModule.MOVABLE_ON_A_LINE_COST_PER_MOVABLE","pb2AIModule.FAIL_WAY_LINE_COST_PER_FAILURE","pb2AIModule.BULLET_COLLISION_LOGIC_PENETRATE","pb2AIModule.BULLET_COLLISION_LOGIC_EXPLODE","pb2AIModule.BULLET_COLLISION_LOGIC_MIRROR","pb2AIModule.BULLET_COLLISION_LOGIC_GRENADE","pb2AIModule.BULLET_COLLISION_LOGIC_DRAIN_LIGHT","pb2AIModule.BULLET_COLLISION_LOGIC_CHRONO_BEAM","pb2AIModule.FILTER_ANY","pb2AIModule.FILTER_FLOOR","pb2AIModule.FILTER_WATER","pb2AIModule.FILTER_FLOOR_AND_WATER","pb2AIModule.FILTER_ANY_ANYWHERE","pb2AIModule.FILTER_ANY_ANYWHERE_PING_RANGE","pb2AIModule.BEST_ATTACK_NOATOM","pb2AIModule.BEST_ATTACK_BULLET","pb2AIModule.BEST_ATTACK_ENTITY","pb2AIModule.BEST_ATTACK_SHAPE","pb2AIModule.HINT_ACTION_USE_SWITCH","pb2AIModule.HINT_ACTION_JUST_WAIT","pb2AIModule.HINT_ACTION_GO_TO","pb2AIModule.HINT_ACTION_ATTACK_OBJECT","pb2AIModule.HINT_ACTION_SHOOT_AT_POINT","pb2AIModule.GUN_MODE_CURRENT"] */
        ALL_TYPES: TODO;
        CreateAI: (params: TODO) => pb2AIModule;
        DebugReachTactic: (from: TODO, to: TODO) => TODO;
    }
}

declare global {
    interface pb2AIPathFindingHint extends ClassIdentityProps<"pb2AIPathFindingHint"> {
        enabled: boolean;
        remove: () => TODO;
        action_to_proceed: TODO;
        action_target: TODO;
    }
    var pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        Create: (params: TODO) => pb2AIPathFindingHint;
    }
}

declare global {
    interface pb2AIThreat extends ClassIdentityProps<"pb2AIThreat"> {
        readonly knowledge_owner_team: TODO;
        readonly knowledge_about: TODO;
        ThreatEliminated: () => TODO;
    }
    var pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        /**
         * @param _dHj hunter team  
         * @param _dHk enemy  
         * @param rk null or pb2AIWayPoint instance  
         * @param dHo (default=false) no throw  
         */
        NewThreat: (_dHj: pb2Team, _dHk: pb2Ragdoll, rk: null | TODO, dHo?: boolean) => pb2AIThreat;
    }
}

declare global {
    var pb2ArmsAction: ClassIdentityProps<"pb2ArmsAction"> & {
        /** Type is unknown. One known value: 0 */
        ARMS_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        ARMS_PRIMARY: TODO;
        /** Type is unknown. One known value: 2 */
        ARMS_SECONDARY: TODO;
        /** Type is unknown. One known value: 3 */
        ARMS_BOTH: TODO;
        /** Type is unknown. One known value: 0 */
        LEGS_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        LEGS_BOTH: TODO;
        /** Type is unknown. One known value: 0 */
        ACTION_TYPE_RELOAD_WEAPONS: TODO;
        /** Type is unknown. One known value: 1 */
        ACTION_TYPE_THROW_GRENADE_HE: TODO;
        /** Type is unknown. One known value: 2 */
        ACTION_TYPE_THROW_GRENADE_PORT: TODO;
        /** Type is unknown. One known value: 3 */
        ACTION_TYPE_THROW_GRENADE_SHIELD: TODO;
        /** Type is unknown. One known value: 4 */
        ACTION_TYPE_THROW_GRENADE_TIME: TODO;
        /** Type is unknown. One known value: 5 */
        ACTION_TYPE_THROW_GRENADE_SMOKE: TODO;
        /** Type is unknown. One known value: 6 */
        ACTION_TYPE_THROW_GRENADE_FLASH: TODO;
        /** Type is unknown. One known value: 7 */
        ACTION_TYPE_THROW_GRENADE_TOXIC_GAS: TODO;
        /** Type is unknown. One known value: 8 */
        ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE: TODO;
        /** Type is unknown. One known value: 9 */
        ACTION_TYPE_THROW_GRENADE_LASER_MINE: TODO;
        /** Type is unknown. One known value: 10 */
        ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA: TODO;
        /** Type is unknown. One known value: 11 */
        ACTION_TYPE_THROW_GRENADE_VIRUS: TODO;
        /** Type is unknown. One known value: 12 */
        ACTION_TYPE_THROW_GRENADE_SNOWBALL: TODO;
        /** Type is unknown. One known value: 13 */
        ACTION_TYPE_THROW_GRENADE_HEALER: TODO;
        /** Type is unknown. One known value: 14 */
        ACTION_TYPE_THROW_GRENADE_GLOW: TODO;
        /** Type is unknown. One known value: 15 */
        ACTION_TYPE_THROW_GRENADE_FIRE: TODO;
        /** Type is unknown. One known value: 16 */
        ACTION_TYPE_THROW_GRENADE_TURRET: TODO;
        /** Type is unknown. One known value: 17 */
        ACTION_TYPE_THROW_GRENADE_TURRET2: TODO;
        /** Type is unknown. One known value: 18 */
        ACTION_TYPE_THROW_GRENADE_COLD_NADE: TODO;
        /** Type is unknown. One known value: 19 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET: TODO;
        /** Type is unknown. One known value: 20 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2: TODO;
        /** Type is unknown. One known value: 1 */
        GRENADE_FIRST: TODO;
        /** Type is unknown. One known value: 20 */
        GRENADE_LAST: TODO;
        /** Type is unknown. One known value: 21 */
        ACTION_TYPE_DRAG_RIGIDBODY: TODO;
        /** Type is unknown. One known value: 22 */
        ACTION_TYPE_GRAPPLING_HOOK: TODO;
        /** Type is unknown. One known value: 23 */
        ACTION_TYPE_USE: TODO;
        /** Type is unknown. One known value: 24 */
        ACTION_TYPE_GESTURE_POINT_AT: TODO;
        /** Type is unknown. One known value: 25 */
        ACTION_TYPE_GESTURE_LISTEN_RADIO: TODO;
        /** Type is unknown. One known value: 26 */
        ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER: TODO;
        /** Type is unknown. One known value: 27 */
        ACTION_TYPE_GESTURE_WEAPON_DOWN: TODO;
        /** Type is unknown. One known value: 28 */
        ACTION_TYPE_GESTURE_HAPPY: TODO;
        /** Type is unknown. One known value: 29 */
        ACTION_TYPE_KICK: TODO;
        /** Type is unknown. One known value: 30 */
        ACTION_TYPE_WALLJUMP_FRONT: TODO;
        /** Type is unknown. One known value: 31 */
        ACTION_TYPE_WALLJUMP_BACK: TODO;
        /** Type is unknown. One known value: 32 */
        ACTION_TYPE_SWORDS_ACTIVATION: TODO;
        /** Type is unknown. One known value: 24 */
        GESTURE_FIRST: TODO;
        /** Type is unknown. One known value: 28 */
        GESTURE_LAST: TODO;
        /** Type is unknown. One known value: ["pb2ArmsAction.ARMS_NONE","pb2ArmsAction.ARMS_PRIMARY","pb2ArmsAction.ARMS_SECONDARY","pb2ArmsAction.ARMS_BOTH","pb2ArmsAction.LEGS_NONE","pb2ArmsAction.LEGS_BOTH","pb2ArmsAction.ACTION_TYPE_RELOAD_WEAPONS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_PORT","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SHIELD","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TIME","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SMOKE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FLASH","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TOXIC_GAS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_LASER_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_VIRUS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SNOWBALL","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HEALER","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_GLOW","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FIRE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET2","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_COLD_NADE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2","pb2ArmsAction.GRENADE_FIRST","pb2ArmsAction.GRENADE_LAST","pb2ArmsAction.ACTION_TYPE_DRAG_RIGIDBODY","pb2ArmsAction.ACTION_TYPE_GRAPPLING_HOOK","pb2ArmsAction.ACTION_TYPE_USE","pb2ArmsAction.ACTION_TYPE_GESTURE_POINT_AT","pb2ArmsAction.ACTION_TYPE_GESTURE_LISTEN_RADIO","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_DOWN","pb2ArmsAction.ACTION_TYPE_GESTURE_HAPPY","pb2ArmsAction.ACTION_TYPE_KICK","pb2ArmsAction.ACTION_TYPE_WALLJUMP_FRONT","pb2ArmsAction.ACTION_TYPE_WALLJUMP_BACK","pb2ArmsAction.ACTION_TYPE_SWORDS_ACTIVATION","pb2ArmsAction.GESTURE_FIRST","pb2ArmsAction.GESTURE_LAST"] */
        ALL_TYPES: TODO;
        /** Type is unknown. One known value: ["Grenade C-00n","Teleport Grenade v03 CS-PortNade","Portable Shield v07 CS-Quarium","Portable TimeWarp C-00w","Smoke Nade CS-Dust","Flashbang Nade CS-Flash","Toxic Nade CS-Napkin","Proximity Mine C-00t","Laser Mine CS-Trap","Scanner CS-Stalk","Attack Drone CS-Virus","Snowball","Heal Drone CS-HealVirus","Portable Light CS-GlowFam","Combustion Shell CS-Slash","Sentry Turret DR-Facet","Portable Turret CS-Denier","Freezing Nade CS-Cryo","Scout Drone C-02d","Harasser Drone-CS"] */
        grenade_titles: TODO;
    }
}

declare global {
    /** the class is actually called hT but it's renamed here for obvious reasons */
    interface pb2Atom extends ClassIdentityProps<"hT"> {
        /** Type is unknown. One known value: 103 */
        readonly classid: TODO;
        x: number;
        y: number;
        tox: number;
        toy: number;
        readonly rad: number;
        readonly of: pb2Ragdoll | null;
        Teleport: (ax: number, ay: number) => TODO;
        GetBody: () => b2Body;
        GetPosition: () => b2Vec2;
        DealDamage: (args: TODO) => TODO;
        health_damage_multiplier: number;
        limb_damage_multiplier: number;
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
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly owner_ragdoll: TODO;
        readonly owner_gun: TODO;
        readonly initial_grenade_type: TODO;
        readonly is_punch: boolean;
        readonly is_sword: boolean;
        readonly is_bite: boolean;
        readonly is_railgun: boolean;
        readonly is_rocket: boolean;
        readonly is_plasma: boolean;
        readonly is_grenade: boolean;
        readonly is_radioactive: boolean;
        readonly is_beam: boolean;
        readonly is_blaster: boolean;
        readonly is_healgun: boolean;
        readonly is_cloud: boolean;
        readonly is_lightning: boolean;
        readonly is_blinding: boolean;
        readonly rocket_direct_damage_mode: TODO;
        readonly is_wall_sticking: boolean;
        readonly is_nail: boolean;
        Teleport: (dx: number, dy: number) => TODO;
        readonly box2d_body: b2Body;
        /** @param dlv (default=false)  */
        remove: (dlv?: TODO) => TODO;
        readonly is_being_removed: boolean;
        bullet_hp: number;
        readonly is_thrown_by: TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: 0 | 1 | 2) => THREE.Mesh | null;
    }
    var pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        /** Type is unknown. One known value: false */
        bullets_damage_guns: TODO;
        /** Type is unknown. One known value: 1 */
        explosive_direct_based_multiplier: TODO;
        /** Type is unknown. One known value: 1.26 */
        held_ragdoll_damage_sword_kick_punch_mult: TODO;
        /** Type is unknown. One known value: 0.66 */
        knock_gun_owner_intensity: TODO;
        /** Type is unknown. One known value: 0.66 */
        knock_sword_owner_intensity: TODO;
        /** Type is unknown. One known value: 1.1 */
        grenade_density: TODO;
        /** Type is unknown. One known value: 1.142857142857143 */
        normal_grenade_mesh_scale: TODO;
        /** Type is unknown. One known value: 6 */
        radius_grenade: TODO;
        /** Type is unknown. One known value: 1 */
        radius_bullet: TODO;
        /** Type is unknown. One known value: 0 */
        radius_beam: TODO;
        /** Type is unknown. One known value: 5 */
        radius_sword: TODO;
        /** Type is unknown. One known value: 30 */
        radius_sword_crosshit: TODO;
        /** Type is unknown. One known value: 20 */
        radius_sword_protection: TODO;
        /** Type is unknown. One known value: 20 */
        radius_sword_bullet_reflection: TODO;
        /** Type is unknown. One known value: 10 */
        radius_cloud: TODO;
        /** Type is unknown. One known value: 7 */
        beam_max_life_time: TODO;
        /** Type is unknown. One known value: 5 */
        time_before_selfhit: TODO;
        /** Type is unknown. One known value: 85 */
        dist_before_selfhit: TODO;
        /** Type is unknown. One known value: 0.24 */
        player_push_power: TODO;
        /** Type is unknown. One known value: 0.18 */
        ragdoll_push_power: TODO;
        /** Type is unknown. One known value: 0.5 */
        ragdoll_push_power_explosion: TODO;
        /** Type is unknown. One known value: 0.5 */
        entity_push_power: TODO;
        /** Type is unknown. One known value: 1.3888888888888888 */
        entity_push_power_explosion: TODO;
        /** Type is unknown. One known value: 2.5 */
        bullet_target_push_multiplayer: TODO;
        /** Type is unknown. One known value: 2.5 */
        bullet_self_push_multiplayer: TODO;
        /** Type is unknown. One known value: 18 */
        beam_hit_spark_multiplier: TODO;
        /** Type is unknown. One known value: 0.333 */
        bullet_gravity_multiplayer: TODO;
        /** Type is unknown. One known value: 0.02 */
        water_push_power: TODO;
        /** Type is unknown. One known value: 0.4 */
        water_push_power_directed: TODO;
        /** Type is unknown. One known value: 0.05 */
        particle_push_power: TODO;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_bullet: TODO;
        /** Type is unknown. One known value: 0.25 */
        ricochet_power_remain_beam: TODO;
        /** Type is unknown. One known value: 0.35 */
        ricochet_power_remain_rail: TODO;
        /** Type is unknown. One known value: 0.03 */
        friction_distance_multiplier: TODO;
        /** Type is unknown. One known value: 0.99 */
        friction_air: TODO;
        /** Type is unknown. One known value: 0.9 */
        friction_water: TODO;
        /** Type is unknown. One known value: 0.7 */
        friction_wall: TODO;
        /** Type is unknown. One known value: 0.75 */
        friction_for_beam: TODO;
        /** Type is unknown. One known value: 0.93 */
        friction_for_cloud_air: TODO;
        /** Type is unknown. One known value: 0.4 */
        friction_for_cloud_water: TODO;
        /** Type is unknown. One known value: 0.1 */
        min_damaging_ammount: TODO;
        /** Type is unknown. One known value: 0.05 */
        min_damaging_ammount_nails: TODO;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_AI: TODO;
        /** Type is unknown. One known value: 0.01 */
        min_damaging_ammount_clouds: TODO;
        /** Type is unknown. One known value: 0.25 */
        min_damaging_ammount_in_walls: TODO;
        /** Type is unknown. One known value: 0.66 */
        held_gun_knock_multiplier: TODO;
        /** Type is unknown. One known value: 0.01 */
        max_damaging_constant_beam_damage: TODO;
        /** Type is unknown. One known value: 50 */
        blip_time: TODO;
        /** Type is unknown. One known value: 90 */
        max_rocket_fuel: TODO;
        /** Type is unknown. One known value: 0.1 */
        bullet_min_hp: TODO;
        /** Type is unknown. One known value: 1 */
        hp_default_bullet: TODO;
        /** Type is unknown. One known value: 0.65 */
        hp_railgun: TODO;
        /** Type is unknown. One known value: 1 */
        hp_raygun: TODO;
        /** Type is unknown. One known value: 1 */
        hp_sword: TODO;
        /** Type is unknown. One known value: 0.75 */
        hp_rocket: TODO;
        /** Type is unknown. One known value: 0.45 */
        hp_plasma: TODO;
        /** Type is unknown. One known value: 1 */
        hp_plasma_radioactive: TODO;
        /** Type is unknown. One known value: 2 */
        hp_beam: TODO;
        /** Type is unknown. One known value: 1 */
        hp_grenade: TODO;
        /** Type is unknown. One known value: 1.8 */
        hp_nail: TODO;
        /** Type is unknown. One known value: 240 */
        default_bullet_speed: TODO;
        /** Type is unknown. One known value: 30 */
        default_bullet_life: TODO;
        /**
         * @param x   
         * @param y   
         * @param _type   
         * @param cfF (default=true)   
         * @param owner_ragdoll (default=null)   
         * @param PF (default=false)   
         */
        CreateGadget: (x: number, y: number, _type: TODO, cfF?: TODO, owner_ragdoll?: TODO, PF?: TODO) => TODO;
        bullets: pb2Bullet[];
    }
}

declare global {
    var pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        AllowDispose: (b: TODO) => TODO;
        normal_time_to_live: number;
        disposers: TODO[];
    }
}

declare global {
    var pb2ByteShifter: ClassIdentityProps<"pb2ByteShifter"> & {
        send_repeat_delay_for_server: number;
    }
}

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        act_x: TODO;
        act_y: TODO;
        act_fall: TODO;
        look_x: number;
        look_y: number;
        act_fire: TODO;
        act_fire2: TODO;
        auto_fire: TODO;
        auto_fire2: TODO;
        act_single_jump: TODO;
        act_single_fire: TODO;
        act_single_fire2: TODO;
        act_single_fall: TODO;
        act_grab: TODO;
        act_kick: TODO;
        act_reload: TODO;
        act_sprint: TODO;
        readonly can_be_revived: boolean;
        MakeUnrevivable: () => TODO;
        readonly tox: number;
        readonly toy: number;
        readonly ang: TODO;
        hea: number;
        hmax: number;
        start_hea: TODO;
        readonly ragdoll: pb2Ragdoll | null;
        MoveOn: (nx: number, ny: number, sx: number, sy: number) => TODO;
        DealCharacterDamage: (beh: number, beg: TODO, bef: TODO, bed: TODO, beo: TODO) => TODO;
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
        AddGrenades: (cay: TODO, count: TODO) => TODO;
        SetGrenades: (cay: TODO, count: TODO) => TODO;
        GetGrenades: (cay: TODO) => TODO;
        remove: () => TODO;
        addEventListener: (event_type: TODO, params: TODO) => TODO;
        removeEventListener: (event_type: TODO, params: TODO) => TODO;
        removeAllListeners: () => TODO;
        removeListenersByType: (event_type: TODO) => TODO;
        readonly controller: TODO;
        readonly hand_holder: TODO;
        readonly curwea_slot: TODO;
        readonly curwea_slot_animation: TODO;
        curwea_backup_slot: TODO;
        readonly phys_sit: TODO;
        /**
         * @param slot   
         * @param caI (default=true)   
         * @param override_backup_slot_and_dont_ignore_entity_or_freezing_rules (default=true)   
         */
        ChangeGunIfPossible: (slot: TODO, caI?: TODO, override_backup_slot_and_dont_ignore_entity_or_freezing_rules?: TODO) => TODO;
        ReloadGunsIfPossible: () => TODO;
        ChangeGunToBackupIfPossible: () => TODO;
        DoGesture: (caD: TODO) => TODO;
        UseAction: () => TODO;
        /**
         * @param _x   
         * @param _y   
         * @param Vk (default=false)   
         */
        addImpulse: (_x: number, _y: number, Vk?: TODO) => TODO;
        AddVel: (_x: number, _y: number) => TODO;
        SetVel: (_x: number, _y: number) => TODO;
        DimLights: () => TODO;
        UndimLights: () => TODO;
        /** @param underwater (default=undefined)  */
        PlayDeathSound: (underwater?: TODO) => TODO;
        /**
         * @param bps (default=false)   
         * @param gv (default=false)   
         */
        Kill: (bps?: TODO, gv?: TODO) => TODO;
        aim_spread: TODO;
        BodyIsPartOfPlayer: (bodyB: TODO, cpD: TODO) => TODO;
        PickWeapon: (cqN: TODO) => TODO;
        DropWeapon: (cqN: pb2Gun) => void;
        DropGunIfPossible: () => TODO;
        /** @param v (default=0)  */
        SetAllGrenadesCount: (v?: TODO) => TODO;
        GetWeaponGlow: () => TODO;
        WeaponIsBeingChanged: () => TODO;
        CanShootNow: () => TODO;
        /**
         * @param slot   
         * @param primary (default=true)   
         */
        GetWeaponAtSlot: (slot: TODO, primary?: TODO) => TODO;
        GetCurrentAnimationWeapon: (primary: TODO) => TODO;
        HasAnyWeapon: () => TODO;
        ChangeGunToNonSwords: () => TODO;
        GetNonSwordsSlot: () => TODO;
        GetRandomNonSwordsSlot: () => TODO;
        GetFirstHealGunSlot: () => TODO;
        GetBody: (i: 0 | 1) => b2Body;
        stability: number;
        DoKick: () => TODO;
        StartGrapplingHookIfPossible: () => TODO;
        /** @param cay (default=-1)  */
        ThrowGrenadeIfPossible: (cay?: TODO) => TODO;
        GetHeldBody: () => TODO;
        forceUnHandHold: (id: TODO) => void;
    }
    var pb2Character: ClassIdentityProps<"pb2Character"> & {
        /**
         * @param params Object containing parameters
         * @param params.ragdoll Must be defined or an error is thrown. The ragdoll's `owner_character` property will automatically be set to this character.
         * @param params.controller (default=null)
         * @param params.x (default=params.ragdoll.x)
         * @param params.y (default=params.ragdoll.y)
         * @param params.tox (default=0)
         * @param params.toy (default=0)
         * @param params.hmax (default=pb2Character.bXF)
         * @param params.hea (default=this.hmax)
         * @param params.start_hea (default=this.hmax)
         * @param params.hmax_damage_multiplier (default=pb2Character.hmax_damage_multiplier)
         * @param params.side If unspecified, the character will spawn looking at the world origin
         * @param params.stability (default=1)
         * @param params.block_instant_midair_jump (default=false)
         * @param params.drop_guns_on_death (default=pb2Character.DROP_ALWAYS)
         * @param params.drop_grenades_on_death (default=pb2Character.DROP_WHEN_INTENDED_ONLY)
         * @param params.can_be_revived (default=undefined) Can be left unspecified, but the value will be `undefined` (falsy) rather than a boolean value.
         * @param params.Gd (default=false) If true, body part hp values on the ragdoll will not be set
         * @param params.regen_module (default=pb2StyleRegen.style_delayed_speedup)
         * @param params.onDeath Optional function or trigger that gets added as an "OBJECT_DIED" event listener on the character
         * @param params.onAbility Optional function or trigger that gets added as a "CHARACTER_ABILITY" event listener on the character
         */
        CreateCharacter: (params: {
            // roughly ordered by importance and category
            ragdoll: pb2Ragdoll,
            controller?: pb2Controller | null,
            x?: number,
            y?: number,
            tox?: number,
            toy?: number,
            hmax?: number,
            hea?: number,
            start_hea?: number,
            hmax_damage_multiplier?: number,
            side?: number,
            stability?: number,
            block_instant_midair_jump?: boolean,
            drop_guns_on_death?: TODO,
            drop_grenades_on_death?: TODO,
            can_be_revived?: boolean,
            Gd?: boolean,
            regen_module?: TODO | null,
            onDeath?: (
                died: pb2Character, 
                killers: pb2Ragdoll[], // entities don't count
                damage_dealt: number[], 
                using: (pb2Gun | pb2Bullet)[]
            ) => void,
            onAbility?: (user: pb2Character) => void,
        }) => pb2Character; // technically can return null but it seems like an edge case
        /** Type is unknown. One known value: 0 */
        DROP_NEVER: TODO;
        /** Type is unknown. One known value: 1 */
        DROP_WHEN_INTENDED_ONLY: TODO;
        /** Type is unknown. One known value: 2 */
        DROP_WHEN_CAN_NOT_BE_REVIVED: TODO;
        /** Type is unknown. One known value: 3 */
        DROP_ALWAYS: TODO;
        characters: pb2Character[];
        player_half_width: number;
        player_width: number;
        player_height: number;
        player_step_size: number;
        player_sitmax: number;
    }
}

declare global {
    var pb2ClassID: ClassIdentityProps<"pb2ClassID"> & {
        /** Type is unknown. One known value: 0 */
        OTHER: TODO;
        /** Type is unknown. One known value: 1 */
        CHARACTER: TODO;
        /** Type is unknown. One known value: 2 */
        ENTITY: TODO;
        /** Type is unknown. One known value: 3 */
        RAGDOLL: TODO;
        /** Type is unknown. One known value: 4 */
        BULLET: TODO;
        /** Type is unknown. One known value: 5 */
        GUN: TODO;
        /** Type is unknown. One known value: 6 */
        SHAPE: TODO;
        /** Type is unknown. One known value: 7 */
        TEAM: TODO;
        /** Type is unknown. One known value: 8 */
        FLOATING_TEXT: TODO;
        /** Type is unknown. One known value: 9 */
        COLLISION_IGNORE: TODO;
        /** Type is unknown. One known value: 10 */
        PHYS3D: TODO;
        /** Type is unknown. One known value: 11 */
        LASER_SIGHT: TODO;
        /** Type is unknown. One known value: 12 */
        BEAM_BULLET_TRAIL: TODO;
        /** Type is unknown. One known value: 13 */
        CONTROLLER: TODO;
        /** Type is unknown. One known value: 14 */
        DATA_CONNECTION: TODO;
        /** Type is unknown. One known value: 15 */
        HAND_HOLDER: TODO;
        /** Type is unknown. One known value: 16 */
        WATER_CLASS: TODO;
        /** Type is unknown. One known value: 17 */
        FIRE: TODO;
        /** Type is unknown. One known value: 18 */
        FIRE_TYPE: TODO;
        /** Type is unknown. One known value: 19 */
        FROZEN_SPOT: TODO;
        /** Type is unknown. One known value: 20 */
        EXPLOSION: TODO;
        /** Type is unknown. One known value: 21 */
        SHIELD: TODO;
        /** Type is unknown. One known value: 22 */
        TIME_WARP_ZONE: TODO;
        /** Type is unknown. One known value: 23 */
        ROPE: TODO;
        /** Type is unknown. One known value: 24 */
        TEMP_HURT_FORCE: TODO;
        /** Type is unknown. One known value: 25 */
        RADIOACTIVE_CLOUD: TODO;
        /** Type is unknown. One known value: 26 */
        MERGED_SOUND_ADD_SOURCE_CALL: TODO;
        /** Type is unknown. One known value: 27 */
        REPLAY_DATA: TODO;
        /** Type is unknown. One known value: 28 */
        SOUND: TODO;
        /** Type is unknown. One known value: 29 */
        HERO_INFO: TODO;
        /** Type is unknown. One known value: 30 */
        HERO_INFO_BAR: TODO;
        /** Type is unknown. One known value: 31 */
        AI_MODULE: TODO;
        /** Type is unknown. One known value: 32 */
        DECORATION: TODO;
        /** Type is unknown. One known value: 33 */
        WINDOW_HINT: TODO;
        /** Type is unknown. One known value: 34 */
        SWITCH: TODO;
        /** Type is unknown. One known value: 35 */
        LIGHT: TODO;
        /** Type is unknown. One known value: 100 */
        WINDOW: TODO;
        /** Type is unknown. One known value: 101 */
        REGION: TODO;
        /** Type is unknown. One known value: 102 */
        VOID: TODO;
        /** Type is unknown. One known value: 103 */
        ATOM: TODO;
    }
}

declare global {
    var pb2Cloth: ClassIdentityProps<"pb2Cloth"> & {
        /** Type is unknown. One known value: 1 */
        TYPE_SCARF: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_CAPE: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_TAIL_FOX: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_TAIL_CAT: TODO;
        /** Type is unknown. One known value: 5 */
        TYPE_TAIL_DRAGON: TODO;
        /** Type is unknown. One known value: 6 */
        TYPE_TAIL_DEMONIC: TODO;
        /** Type is unknown. One known value: 7 */
        TYPE_HAT_MAGE: TODO;
        /** Type is unknown. One known value: 8 */
        TYPE_HAT_SANTA: TODO;
        /** Type is unknown. One known value: 9 */
        TYPE_HAT_MAGICIAN: TODO;
        /** Type is unknown. One known value: 10 */
        TYPE_WINGS: TODO;
        /** Type is unknown. One known value: 11 */
        TYPE_NIMBUS: TODO;
        /** Type is unknown. One known value: 12 */
        TYPE_BEARD: TODO;
        /** Type is unknown. One known value: 13 */
        TYPE_HAIR_REGULAR: TODO;
        /** Type is unknown. One known value: 14 */
        TYPE_HAIR_PONYTAIL: TODO;
        /** Type is unknown. One known value: 15 */
        TYPE_SKIRT: TODO;
        /** Type is unknown. One known value: 16 */
        TYPE_PARACHUTE: TODO;
        /** Type is unknown. One known value: 17 */
        TYPE_MINIGUN_BELT: TODO;
        /** Type is unknown. One known value: 18 */
        TYPE_ENTITY_CABLES: TODO;
        /** Type is unknown. One known value: 19 */
        TYPE_WEAPON_FUEL_CABLE: TODO;
        /** Type is unknown. One known value: 20 */
        TYPE_FLOATING_DRONE: TODO;
    }
}

declare global {
    interface pb2Color extends ClassIdentityProps<"pb2Color"> {
        r: number;
        g: number;
        b: number;
        clone: () => pb2Color;
        _uint: number;
        multiply: (num: number) => pb2Color;
        /** sets every color channel value to their average */
        average: () => pb2Color;
        toColorTransform: () => ColorTransform;
        /** @param enC (default=1) proportion (in range 0-1) */
        random: (enC?: number) => pb2Color;
        multUpToMax: (max: number) => pb2Color;
        setRGB: (r: number, g: number, b: number) => pb2Color;
        isEqual: (c: pb2Color) => boolean;
    }
    var pb2Color: {
        /** @param u (default=0xffffff)  */
        new (u?: number): pb2Color;

    }
}

declare global {
    interface pb2ColoredText extends ClassIdentityProps<"pb2ColoredText"> {
        text: TODO;
        colors: TODO;
        CapitalRedColors: () => TODO;
        /**
         * Bugged. Tries to set every color to `new pb2HighRangeColor().random(1)` but `random` doesn't exist on pb2HighRangeColor.  
         * 
         * Working alternative:
         * ```js
         * for (let i = 0; i < coloredText.text.length; i++)
         *     coloredText.colors[i] = new pb2HighRangeColor(Math.random() * Math.pow(16, 6));
         * ```
         */
        RandomColors: () => pb2ColoredText;
        WhiteColors: () => TODO;
        /**
         * @param nickname_tagged   
         * @param main_color (default=undefined)   
         */
        FromTagged: (nickname_tagged: TODO, main_color?: TODO) => TODO;
        GetTagged: () => TODO;
    }
    var pb2ColoredText: {
        /** @param txt (default='')  */
        new (txt?: TODO): pb2ColoredText;

    }
}

declare global {
    interface pb2Controller extends ClassIdentityProps<"pb2Controller"> {
        readonly character: TODO;
        readonly player_connection: TODO;
        act_x: TODO;
        act_y: TODO;
        look_x: number;
        look_y: number;
        act_fall: TODO;
        act_fire: TODO;
        act_fire2: TODO;
        act_grab: TODO;
        act_sprint: TODO;
        readonly _is_typing: TODO;
        readonly _is_in_menu: TODO;
        remove: () => TODO;
        readonly zoom: TODO;
        /**
         * @param c   
         * @param cGz (default=false)   
         */
        CopyStateFrom: (c: TODO, cGz?: TODO) => TODO;
        /**
         * @param to   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_INVERSEMORPH)   
         */
        StartZoomMorph: (to: TODO, param?: TODO, func?: TODO) => TODO;
        StopZoomMorph: () => TODO;
        /**
         * @param to_x   
         * @param to_y   
         * @param param (default=0.9)   
         * @param func (default=pb2_mp.FUNCTION_MORPH)   
         */
        StartPositionMorph: (to_x: number, to_y: number, param?: TODO, func?: TODO) => TODO;
        StopPositionMorph: () => TODO;
        readonly camera_position_forced: TODO;
        readonly camera_position_target_x: TODO;
        readonly camera_position_target_y: TODO;
        readonly zoom_changing: TODO;
        readonly target_zoom: TODO;
        /** @param stable (default=false)  */
        ScreenMinX: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMaxX: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMinY: (stable?: TODO) => TODO;
        /** @param stable (default=false)  */
        ScreenMaxY: (stable?: TODO) => TODO;
        ai: TODO;
        allow_damage_report_flash: TODO;
        color_mult: TODO;
        color_add: TODO;
        readonly UpdateScreenColor: TODO;
        damage_report_flash_current: TODO;
        player_controllable: TODO;
        readonly damage_dealt_players_tot: TODO;
        readonly damage_dealt_entities_tot: TODO;
        readonly eliminations_players_tot: TODO;
        readonly eliminations_entities_tot: TODO;
    }
    var pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        /** Type is unknown. One known value: 1.2 */
        default_zoom_on_foot: TODO;
        /** Type is unknown. One known value: 0.8 */
        default_zoom_driving: TODO;
        /** Type is unknown. One known value: 0.9 */
        vehicle_in_out_param: TODO;
        /** Type is unknown. One known value: 3 */
        vehicle_in_out_func: TODO;
        /**
         * @param params Object containing parameters
         * @param params.character (default=null) The character's `controller` property will automatically be set to this controller.
         * @param params.player_controllable (default=false)
         * @param params.ai_preset (default=undefined)
         */
        CreateController: (params: {
            character?: pb2Character | null,
            player_controllable?: boolean,
            ai_preset?: AIPreset | null
        }) => pb2Controller;
        controllers: pb2Controller[];
    }
}

declare global {
    interface pb2Decoration extends ClassIdentityProps<"pb2Decoration"> {
        /** Type is unknown. One known value: 32 */
        readonly classid: TODO;
        remove: () => TODO;
        GetColor: () => TODO;
        GetColorGlow: () => TODO;
        SetColor: (c: TODO) => TODO;
        SetColorGlow: (c: TODO) => TODO;
        blending: TODO;
        shading: TODO;
        alpha: TODO;
        opacity: TODO;
        glowing_intensity: TODO;
        readonly source: TODO;
        readonly model_source: TODO;
        readonly source_glow: TODO;
        relative_to_mesh: TODO;
        hide_relative_to_mesh: TODO;
        inherit_effects: TODO;
        visible: TODO;
        readonly is_being_removed: boolean;
        readonly position: TODO;
        x: number;
        y: number;
        z: number;
        readonly rotation: TODO;
        readonly scale: TODO;
        /** Type is unknown. One known value: null */
        readonly offset: TODO;
        SetPersonalVisibilityFor: (TK: TODO, value: TODO) => TODO;
        ResetPersonalVisibilityRules: () => TODO;
        default_visibility: TODO;
        PlayAnimation: (animation_id: TODO) => TODO;
        PauseAnimation: () => TODO;
        ResumeAnimation: () => TODO;
        animation_info: TODO;
        UpdateAnimationUVs: () => TODO;
        allow_sync: TODO;
    }
    var pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        CreateDecoration: (params: TODO) => pb2Decoration;
        PreloadUserData: (user_data_uid: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        LAYER_WORLD: TODO;
        /** Type is unknown. One known value: 1 */
        LAYER_WORLD_HUD: TODO;
        /** Type is unknown. One known value: 2 */
        LAYER_SCREEN_HUD: TODO;
        /** Type is unknown. One known value: 0 */
        BLENDING_NORMAL: TODO;
        /** Type is unknown. One known value: 1 */
        BLENDING_ADDITIVE: TODO;
        /** Type is unknown. One known value: 2 */
        BLENDING_MULTIPLY: TODO;
        /** Type is unknown. One known value: 0 */
        SHADING_INITIAL: TODO;
        /** Type is unknown. One known value: 1 */
        SHADING_DIMMED: TODO;
        /** Type is unknown. One known value: 2 */
        SHADING_GLOWING: TODO;
        /** Type is unknown. One known value: 0 */
        ATTACHMENT_DISABLED: TODO;
        /** Type is unknown. One known value: 1 */
        ATTACHMENT_NTH_MESH_OF_OBJECT: TODO;
        /** Type is unknown. One known value: 2 */
        ATTACHMENT_EXPRESSION: TODO;
        /** Type is unknown. One known value: 0 */
        RENDER_METHOD_TRANSPARENT: TODO;
        /** Type is unknown. One known value: 1 */
        RENDER_METHOD_TRANSPARENT_BACKGROUND: TODO;
        /** Type is unknown. One known value: 2 */
        RENDER_METHOD_TRANSPARENT_FOREGROUND: TODO;
        /** Type is unknown. One known value: 3 */
        RENDER_METHOD_OPAQUE: TODO;
        /** Type is unknown. One known value: 4 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY: TODO;
        /** Type is unknown. One known value: 5 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND: TODO;
        /** Type is unknown. One known value: 6 */
        RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND: TODO;
        /** Type is unknown. One known value: ["pb2Decoration.RENDER_METHOD_TRANSPARENT","pb2Decoration.RENDER_METHOD_TRANSPARENT_BACKGROUND","pb2Decoration.RENDER_METHOD_TRANSPARENT_FOREGROUND","pb2Decoration.RENDER_METHOD_OPAQUE","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_BACKGROUND","pb2Decoration.RENDER_METHOD_OPAQUE_WITH_BINARY_TRANSPARENCY_FOREGROUND"] */
        ALL_RENDER_METHODS: TODO;
    }
}

declare global {
    interface pb2Disposer extends ClassIdentityProps<"pb2Disposer"> {
        time_to_live: number;
        readonly Pause: TODO;
        readonly Resume: TODO;
        readonly paused: TODO;
    }
    var pb2Disposer: ClassIdentityProps<"pb2Disposer"> & {
        GetDisposer: (obj: TODO) => TODO;
    }
}

declare global {
    interface pb2EditorObject extends ClassIdentityProps<"pb2EditorObject"> {
        readonly attributes: TODO;
        readonly children: TODO;
        Recreate: (params: TODO) => TODO;
        GetDeepCopy: () => TODO;
        SetUnsetDefaultAttributes: () => TODO;
        push: (obj: TODO) => TODO;
        unshift: (obj: TODO) => TODO;
        RemoveChild: (rem: TODO) => TODO;
        /**
         * @param where   
         * @param selected (default=null)   
         */
        ListChildren: (where: TODO, selected?: TODO) => TODO;
        /**
         * @param exA (default='Accessory ')   
         * @param exq (default='name')   
         */
        GetUniqueName: (exA?: TODO, exq?: TODO) => TODO;
        /**
         * @param class_name   
         * @param exi (default='*')   
         * @param exq (default='id')   
         */
        FindChild: (class_name: TODO, exi?: TODO, exq?: TODO) => TODO;
        /**
         * @param class_name   
         * @param lW (default=false)   
         */
        FindAllChildren: (class_name: TODO, lW?: TODO) => TODO;
        DragPoints: (wx: TODO, wy: TODO) => TODO;
        fromString: (xml_str: TODO) => TODO;
        /**
         * @param bdI   
         * @param exn (default=false)   
         */
        fromXMLNode: (bdI: TODO, exn?: TODO) => TODO;
    }
    var pb2EditorObject: {
        new (params: TODO): pb2EditorObject;
        /** bugged, the returned value shows up as "Error" */
        GetModificationWorldCopy: () => pb2EditorObject | "Error";
    }
}

declare global {
    /** Not known if this is always of type pb2EditorObject */
    var pb2EngineDatabase: pb2EditorObject;
}

type pb2EntityBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    /** Type is unknown. One known value: 2 */
    readonly classid: TODO;
    readonly x: number;
    readonly y: number;
    readonly tox: number;
    readonly toy: number;
    InstallGun: (_tQ: TODO) => TODO;
    DropGun: () => TODO;
    remove: () => TODO;
    /**
     * @param r   
     * @param eQf (default=-1)   
     */
    AddRagdoll: (r: TODO, eQf?: TODO) => TODO;
    /**
     * @param r   
     * @param hv (default=false)   
     */
    ExcludeRagdoll: (r: TODO, hv?: TODO) => TODO;
    /**
     * @param r   
     * @param time (default=-100)   
     * @param eQa (default=false)   
     * @param eQh (default=null)   
     */
    IgnoreRagdoll: (r: TODO, time?: TODO, eQa?: TODO, eQh?: TODO) => TODO;
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
    DealDamage: (bN: TODO, xx: TODO, yy: TODO, _boD: TODO, _ben: TODO, limb_id: TODO, limb_damage_multiplier?: TODO, eTB?: TODO, fG?: TODO, fE?: TODO, eSP?: TODO, bqj?: TODO) => TODO;
    MultiplyHealth: (m: TODO) => TODO;
    alpha: TODO;
    readonly is_being_removed: boolean;
    hea: number;
    hmax: number;
    dying_level: TODO;
    team: pb2Team;
    /**
     * @param x   
     * @param dist (default=-123)   
     */
    SetDriverSeatsAndRadius: (x: number, dist?: number) => TODO;
    /**
     * @param x   
     * @param eQr (default=false)   
     */
    SetSide: (x: TODO, eQr?: TODO) => TODO;
    readonly box2d_bodies: b2Body[];
    addEventListener: (event_type: TODO, params: TODO) => TODO;
    removeEventListener: (event_type: TODO, params: TODO) => TODO;
    GetLimb: (id: TODO) => TODO;
    /** @param id (default=0)  */
    GetMesh: (id?: number) => THREE.Mesh;
};

declare global {
    interface pb2Entity extends pb2EntityBase<"pb2Entity"> {}
    var pb2Entity: ClassIdentityProps<"pb2Entity"> & {
        /** return type may be different based on the parameters passed in */
        CreateEntity: (params: TODO) => pb2Entity;
        /** Type is unknown. One known value: 0 */
        TYPE_UNKNOWN: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_SPOILER35: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_BARREL: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_BARREL_PART: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_CRATE: TODO;
        /** Type is unknown. One known value: 5 */
        TYPE_TURRET: TODO;
        /** Type is unknown. One known value: 6 */
        TYPE_SPOILER27: TODO;
        /** Type is unknown. One known value: 7 */
        TYPE_SPOILER29: TODO;
        /** Type is unknown. One known value: 8 */
        TYPE_MOTO: TODO;
        /** Type is unknown. One known value: 9 */
        TYPE_WALKER: TODO;
        /** Type is unknown. One known value: 10 */
        TYPE_SPOILER28: TODO;
        /** Type is unknown. One known value: 11 */
        TYPE_SPOILER30: TODO;
        /** Type is unknown. One known value: 12 */
        TYPE_SPOILER13: TODO;
        /** Type is unknown. One known value: 13 */
        TYPE_SPOILER14: TODO;
        /** Type is unknown. One known value: 14 */
        TYPE_SPOILER15: TODO;
        /** Type is unknown. One known value: 15 */
        TYPE_SPOILER16: TODO;
        /** Type is unknown. One known value: 16 */
        TYPE_SPOILER17: TODO;
        /** Type is unknown. One known value: 17 */
        TYPE_SPOILER19: TODO;
        /** Type is unknown. One known value: 18 */
        TYPE_SPOILER18: TODO;
        /** Type is unknown. One known value: 19 */
        TYPE_SPOILER20: TODO;
        /** Type is unknown. One known value: 20 */
        TYPE_SPOILER21: TODO;
        /** Type is unknown. One known value: 21 */
        TYPE_ANTIGRAVITY: TODO;
        /** Type is unknown. One known value: 22 */
        TYPE_SPOILER33: TODO;
        /** Type is unknown. One known value: 23 */
        TYPE_CORVETTE: TODO;
        /** Type is unknown. One known value: 24 */
        TYPE_FLOATING_ICE: TODO;
        /** Type is unknown. One known value: 25 */
        TYPE_SPOILER34: TODO;
        /** Type is unknown. One known value: ["pb2Entity.TYPE_UNKNOWN","pb2Entity.TYPE_SPOILER35","pb2Entity.TYPE_BARREL","pb2Entity.TYPE_BARREL_PART","pb2Entity.TYPE_CRATE","pb2Entity.TYPE_TURRET","pb2Entity.TYPE_SPOILER27","pb2Entity.TYPE_SPOILER29","pb2Entity.TYPE_MOTO","pb2Entity.TYPE_WALKER","pb2Entity.TYPE_SPOILER28","pb2Entity.TYPE_SPOILER30","pb2Entity.TYPE_SPOILER13","pb2Entity.TYPE_SPOILER14","pb2Entity.TYPE_SPOILER15","pb2Entity.TYPE_SPOILER16","pb2Entity.TYPE_SPOILER17","pb2Entity.TYPE_SPOILER19","pb2Entity.TYPE_SPOILER18","pb2Entity.TYPE_SPOILER20","pb2Entity.TYPE_SPOILER21","pb2Entity.TYPE_ANTIGRAVITY","pb2Entity.TYPE_SPOILER33","pb2Entity.TYPE_CORVETTE","pb2Entity.TYPE_FLOATING_ICE","pb2Entity.TYPE_SPOILER34"] */
        ALL_TYPES: TODO;
        /** Type is unknown. One known value: 0 */
        MATERIAL_METAL: TODO;
        /** Type is unknown. One known value: 1 */
        MATERIAL_GLASS: TODO;
        /** Type is unknown. One known value: 2 */
        MATERIAL_WOOD: TODO;
        /** Type is unknown. One known value: 3 */
        MATERIAL_BLOOD: TODO;
        /** Type is unknown. One known value: 4 */
        MATERIAL_MAGAZINE_PISTOL: TODO;
        /** Type is unknown. One known value: 5 */
        MATERIAL_MAGAZINE_PISTOL3: TODO;
        /** Type is unknown. One known value: 6 */
        MATERIAL_MAGAZINE_RIFLE: TODO;
        /** Type is unknown. One known value: 7 */
        MATERIAL_MAGAZINE_GENERIC_METAL: TODO;
        /** Type is unknown. One known value: 8 */
        MATERIAL_RUBBER: TODO;
        /** Type is unknown. One known value: 9 */
        MATERIAL_METAL_USURP: TODO;
        /** Type is unknown. One known value: 10 */
        MATERIAL_METAL_USURP_BOSS_LEG: TODO;
        /** Type is unknown. One known value: 11 */
        MATERIAL_CONCRETE: TODO;
        /** Type is unknown. One known value: 12 */
        MATERIAL_METAL_SPOILER33: TODO;
        /** Type is unknown. One known value: 13 */
        MATERIAL_MAGAZINE_CANISTER: TODO;
        /** Type is unknown. One known value: 14 */
        MATERIAL_CRAB_SHELL: TODO;
        /** Type is unknown. One known value: 15 */
        MATERIAL_ICE: TODO;
        /** Type is unknown. One known value: 16 */
        MATERIAL_ROCK: TODO;
        /** Type is unknown. One known value: 17 */
        MATERIAL_METAL_MOTO: TODO;
        /** Type is unknown. One known value: [] */
        entities: TODO;
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
        CountShapesInRect: (yJ: TODO, x: number, y: number, _width: number, _height: number, eQz?: TODO, lw?: TODO, eQA?: TODO) => TODO;
    }
}

declare global {
    interface pb2EntityAntigravity extends pb2EntityBase<"pb2EntityAntigravity"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: TODO[]): TODO;
        range: number;
        strength: number;
        mass_cap_scale: number;
        cooldown_duration_scale: number;
        can_be_damaged: boolean;
        lights_intensity: TODO;
        light_current: TODO;
        light_next_update_in: TODO;
        malfunction_timer: TODO;
    }
    var pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FORCE: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_IMPACT_PREVENTION: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_KINETIC_PUSHER: TODO;
    }
}

declare global {
    interface pb2EntityBarrel extends pb2EntityBase<"pb2EntityBarrel"> {}
    var pb2EntityBarrel: ClassIdentityProps<"pb2EntityBarrel"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_YELLOW: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_BLUE: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_RED: TODO;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_EMPTY: TODO;
        /** Type is unknown. One known value: 5 */
        STYLE_ID_TOXIC_GAS: TODO;
        /** Type is unknown. One known value: 6 */
        STYLE_ID_RED_PBFTTP: TODO;
        /** Type is unknown. One known value: 7 */
        STYLE_ID_FREEZING: TODO;
        /** Type is unknown. One known value: 8 */
        STYLE_ID_RADIOACTIVE: TODO;
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
        STYLE_ID_ICE: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_ROCK: TODO;
    }
}

declare global {
    interface pb2EntityMoto extends pb2EntityBase<"pb2EntityMoto"> {}
    var pb2EntityMoto: ClassIdentityProps<"pb2EntityMoto"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_MOTO: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_MOBILE_CS: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_MOBILE_C9: TODO;
    }
}

declare global {
    /** this is an entity that is not currently available in the game. throws an error when constructed */
    interface pb2EntitySpoiler extends pb2EntityBase<"fU"> {}
    
}

declare global {
    interface pb2EntityTurret extends pb2EntityBase<"pb2EntityTurret"> {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        // failed to be included in generation (depends on value of this.oh which doesn't have a proper value on the fake instances)
        Detach(...args: TODO[]): TODO;
    }
    var pb2EntityTurret: ClassIdentityProps<"pb2EntityTurret"> & {
        /** Type is unknown. One known value: 1 */
        STYLE_ID_FACET: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_ID_DENIER: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ID_SCOUT_DRONE: TODO;
        /** Type is unknown. One known value: 4 */
        STYLE_ID_HARASSER_DRONE: TODO;
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
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly source_bullet: pb2Bullet | pb2Explosion["owner_ragdoll"];
        readonly owner_ragdoll: pb2Ragdoll | null;
        readonly is_smoke: boolean;
        readonly radius: number;
    }
    var pb2Explosion: ClassIdentityProps<"pb2Explosion"> & {
        MakeExplosion: (params: TODO) => pb2Explosion;
        /** Type is unknown. One known value: 0 */
        EXPLOSION_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        EXPLOSION_BASIC: TODO;
        /** Type is unknown. One known value: 2 */
        EXPLOSION_RADIOACTIVE: TODO;
        /** Type is unknown. One known value: 3 */
        EXPLOSION_PLASMA: TODO;
        /** Type is unknown. One known value: 4 */
        EXPLOSION_COINTOSS: TODO;
        /** Type is unknown. One known value: 5 */
        EXPLOSION_RL2: TODO;
        /** Type is unknown. One known value: 6 */
        EXPLOSION_RL3: TODO;
        /** Type is unknown. One known value: 7 */
        EXPLOSION_DODGE: TODO;
        /** Type is unknown. One known value: 8 */
        EXPLOSION_TROUBLE_HAWK: TODO;
        /** Type is unknown. One known value: 9 */
        EXPLOSION_HOUND_WALKER_PROJECTILE: TODO;
        /** Type is unknown. One known value: 10 */
        EXPLOSION_STORM_GUN: TODO;
        /** Type is unknown. One known value: 11 */
        EXPLOSION_SPOILER9: TODO;
        /** Type is unknown. One known value: 12 */
        EXPLOSION_SPOILER10: TODO;
        /** Type is unknown. One known value: 13 */
        EXPLOSION_SPOILER9_BOSS: TODO;
        /** Type is unknown. One known value: 14 */
        EXPLOSION_FIRE: TODO;
        /** Type is unknown. One known value: 15 */
        EXPLOSION_CORVETTE_RL: TODO;
        /** Type is unknown. One known value: 16 */
        EXPLOSION_CORVETTE_RL2: TODO;
        /** Type is unknown. One known value: 17 */
        EXPLOSION_CAR: TODO;
        /** Type is unknown. One known value: 18 */
        EXPLOSION_SPOILER35: TODO;
        /** Type is unknown. One known value: 19 */
        EXPLOSION_HOUND_WALKER: TODO;
        /** Type is unknown. One known value: 20 */
        EXPLOSION_SPOILER12: TODO;
        /** Type is unknown. One known value: 21 */
        EXPLOSION_SD_DRAIN_RIFLE: TODO;
        /** Type is unknown. One known value: ["pb2Explosion.EXPLOSION_NONE","pb2Explosion.EXPLOSION_BASIC","pb2Explosion.EXPLOSION_RADIOACTIVE","pb2Explosion.EXPLOSION_PLASMA","pb2Explosion.EXPLOSION_COINTOSS","pb2Explosion.EXPLOSION_RL2","pb2Explosion.EXPLOSION_RL3","pb2Explosion.EXPLOSION_DODGE","pb2Explosion.EXPLOSION_TROUBLE_HAWK","pb2Explosion.EXPLOSION_HOUND_WALKER_PROJECTILE","pb2Explosion.EXPLOSION_STORM_GUN","pb2Explosion.EXPLOSION_SPOILER9","pb2Explosion.EXPLOSION_SPOILER10","pb2Explosion.EXPLOSION_SPOILER9_BOSS","pb2Explosion.EXPLOSION_FIRE","pb2Explosion.EXPLOSION_CORVETTE_RL","pb2Explosion.EXPLOSION_CORVETTE_RL2","pb2Explosion.EXPLOSION_CAR","pb2Explosion.EXPLOSION_SPOILER35","pb2Explosion.EXPLOSION_HOUND_WALKER","pb2Explosion.EXPLOSION_SPOILER12","pb2Explosion.EXPLOSION_SD_DRAIN_RIFLE"] */
        ALL_TYPES: TODO;
        explosions: pb2Explosion[];
    }
}

declare global {
    interface pb2Fire extends ClassIdentityProps<"pb2Fire"> {
        /** Type is unknown. One known value: 17 */
        readonly classid: TODO;
        UpdateAndGetWorldPoint: () => TODO;
        readonly size: TODO;
        remove: () => TODO;
    }
    var pb2Fire: ClassIdentityProps<"pb2Fire"> & {
        fires: pb2Fire[];
    }
}

declare global {
    /** the class is actually called Ki but it's renamed here for obvious reasons */
    interface pb2FireType extends ClassIdentityProps<"Ki"> {
        /** Type is unknown. One known value: 18 */
        readonly classid: TODO;
        readonly is_permanent: boolean;
        readonly is_being_removed: boolean;
        readonly damage_scale: number;
        readonly pitch: TODO;
    }
    
}

declare global {
    var pb2FloatingText: ClassIdentityProps<"pb2FloatingText"> & {
        GetNewHash: () => number;
    }
}

declare global {
    var pb2FoliageClass: ClassIdentityProps<"pb2FoliageClass"> & {
        /** Type is unknown. One known value: 0 */
        TEMPLATE_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        TEMPLATE_EARTH: TODO;
        /** Type is unknown. One known value: ["pb2FoliageClass.TEMPLATE_NONE","pb2FoliageClass.TEMPLATE_EARTH"] */
        ALL_TEMPLATE_TYPES: TODO;
    }
}

declare global {
    var pb2GameWorld: ClassIdentityProps<"pb2GameWorld"> & {
        controller: pb2Controller | null;
        spectated_ragdoll: pb2Ragdoll | null;
        /** Not known if this is always of type pb2Controller */
        personal_virtual_controller: pb2Controller;
        isHost: boolean;
        user_uid: number;
        nickname_tagged: string;
        settings: {
            graphics: {
                /** Type is unknown. One known value: 2 */
                build_3d_environment: TODO;
                /** Type is unknown. One known value: 50 */
                water_reflections: TODO;
                /** Type is unknown. One known value: 2 */
                spawn_3d_debris: TODO;
                /** Type is unknown. One known value: 1 */
                ui_scale: TODO;
            }
            gameplay: {
                /** Type is unknown. One known value: 3 */
                gore_and_violence: TODO;
                /** Type is unknown. One known value: 1 */
                show_damage_numbers: TODO;
                /** Type is unknown. One known value: 2 */
                replay_my_deaths: TODO;
                /** Type is unknown. One known value: 3 */
                camera: TODO;
            }
            input: {
                /** Type is unknown. One known value: 0.125 */
                screen_cursor_follow_speed: TODO;
                /** Type is unknown. One known value: 0.75 */
                screen_character_follow_softness: TODO;
            }
            network: {
                /** Type is unknown. One known value: 61 */
                world_state_receive_rate: TODO;
            }
            __limits_obj: {
                /** Type is unknown. One known value: undefined */
                graphics: TODO;
                /** Type is unknown. One known value: undefined */
                gameplay: TODO;
                /** Type is unknown. One known value: undefined */
                input: TODO;
                /** Type is unknown. One known value: undefined */
                network: TODO;
            }
        }
        GetPing: () => TODO;
        ClearAllKeyActionsAndStates: () => TODO;
        /** @param mode (default=1)  */
        DebugTraceAnyPressedKeys: (mode?: TODO) => TODO;
        /**
         * @param location_keycode_pair   
         * @param onKeyDown (default=null)   
         * @param onKeyUp (default=null)   
         */
        SetKeyActions: (location_keycode_pair: TODO, onKeyDown?: TODO, onKeyUp?: TODO) => TODO;
        GetKeyState: (location_keycode_pair: TODO) => TODO;
        PauseTrustedControlsTemporarily: () => TODO;
        FinalizeWorld: () => TODO;
        FinalizeNewMovables: () => TODO;
        /** @param v (default=true)  */
        EnableSimplePlayerAssignmentLogic: (v?: TODO) => TODO;
        /**
         * @param params   
         * @param mode (default='modules')   
         */
        DownloadModules: (params: TODO, mode?: TODO) => TODO;
        DownloadTextures: (params: TODO) => TODO;
        DownloadSounds: (params: TODO) => TODO;
        DownloadModels: (params: TODO) => TODO;
        /** @param dVG (default=true)  */
        GetAllModules: (dVG?: TODO) => TODO;
        GetInitialModules: () => TODO;
        /**
         * @param params   
         * @param type (default=undefined)   
         */
        CreateBoxShape: (params: TODO, type?: TODO) => TODO;
        sun_color: number;
        sky_color: number;
        default_lamp_color: number;
        sun_intensity: number;
        sky_intensity: number;
        light_power_multiplier: number;
        fog_intensity: number;
        foreground_snow: boolean;
        background_snow: boolean;
        snowing: boolean;
        raining: boolean;
        wind_amplitude: number;
        wind_random_part: number;
        background_terrain_random_seed: number;
        foreground_terrain_random_seed: number;
        foreground_platform_random_seed: number;
        foliage_random_seed: number;
        foliage_shadow_multiplier: number;
        foliage_maximum_animation_distance: number;
        sun_shade_x: number;
        sun_shade_y: number;
        terrain_enabled: boolean;
        terrain_solve_random_factor: number;
        terrain_sky_ground_contrast: number;
        terrain_extra_sky_ground_contrast: number;
        terrain_fractal_cube_size: number;
        terrain_level_influence_factor: number;
        terrain_extra_space_x: number;
        terrain_extra_space_y: number;
        terrain_force_low_level_terrain: boolean;
        terrain_phys_scale: number;
        terrain_size_z: number;
        terrain_start_z: number | undefined;
        terrain_post_tesselation_grass_noise: number;
        terrain_y_offset: number;
        terrain_remove_floating_islands: boolean;
        terrain_uv_relax_iterations: number;
        /**
         * @param controller   
         * @param soft (default=true)   
         */
        SetToController: (controller: TODO, soft?: TODO) => TODO;
        SetToSpectateRagdoll: (ragdoll: TODO) => TODO;
        SetToFreeCamera: () => TODO;
        SetDisconnectActionDescriptionStructure: () => TODO;
        IsHostSpectating: () => TODO;
        IsWatchingReplay: () => TODO;
        StartPointOfViewReplay: () => TODO;
        SetReplayTimeScale: () => TODO;
        CancelPointOfViewReplay: () => TODO;
        connected: boolean;
        Disconnect: () => TODO;
        hud_visible: boolean;
        hud_show_character_info: boolean;
        hud_custom_bars: TODO[];
        /**
         * @param text   
         * @param user_uid (default=-2)   
         * @param channel_id (default=-1)   
         * @param auto_channel_id (default=-1)   
         * @param message_counter (default=-1)   
         */
        ShowChatMessage: (text: string, user_uid?: TODO, channel_id?: TODO, auto_channel_id?: TODO, message_counter?: TODO) => TODO;
        ShakeScreen: (amount: number, from_gun: TODO, ignore_when_speculative_player_enabled: TODO) => TODO;
        /** @param amount (default=75)  */
        FlashScreen: (amount?: number) => TODO;
        GetBounds: () => TODO;
    }
}

declare global {
    interface pb2GameplayEffects extends ClassIdentityProps<"pb2GameplayEffects"> {
        CreateEffect: (params: TODO) => TODO;
        GetCharacterLogicSpeed: () => TODO;
        GetWeaponLogicSpeed: () => TODO;
        GetBulletModifier: (v: TODO, bfz: TODO) => TODO;
        GetInvisible: () => TODO;
        readonly ragdoll: TODO;
    }
    interface bsW extends ClassIdentityProps<"bsW"> {
        time_to_live: TODO;
        readonly ragdoll: TODO;
        remove: () => TODO;
        readonly cloak_intensity: TODO;
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
        readonly classid: TODO;
        x: number;
        y: number;
        readonly tox: number;
        readonly toy: number;
        readonly owner: pb2Character | null;
        readonly owner_entity: pb2Entity | null;
        readonly gun_type: TODO;
        readonly gun_type_string: TODO;
        barrel_spin: TODO;
        heat: TODO;
        main_cooldown: TODO;
        readonly side: 1 | -1;
        Flip: () => void;
        Hide: () => TODO;
        Show: () => TODO;
        /**
         * @param a   
         * @param an   
         * @param offset   
         * @param Xv   
         * @param dRg   
         * @param Xx (default=false)   
         * @param GSPEED (default=Xv)   
         */
        MoveTo: (a: TODO, an: TODO, offset: TODO, Xv: TODO, dRg: TODO, Xx?: TODO, GSPEED?: TODO) => TODO;
        GetPhysSpread: (ang: TODO) => TODO;
        DetachClip: () => TODO;
        AttachClip: () => TODO;
        /**
         * @param dQI (default=false)   
         * @param dQB (default=false)   
         */
        CanShoot: (dQI?: TODO, dQB?: TODO) => TODO;
        CanShootUI: () => TODO;
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
        Fire: (ragdoll: TODO, dQG: TODO, dQN: TODO, GSPEED: TODO, final: TODO, dQO?: TODO, dQP?: TODO, dQQ?: TODO, Yq?: TODO) => TODO;
        CarryStart: () => TODO;
        activate: () => TODO;
        deactivate: () => TODO;
        /** @param dPA (default=null)  */
        CarryEnd: (dPA?: TODO) => TODO;
        remove: () => TODO;
        readonly is_being_removed: boolean;
        readonly box2d_body: b2Body;
        main_reload_length: TODO;
        readonly is_active: TODO;
        readonly is_being_carried: boolean;
        readonly attachment_atom: TODO;
        readonly clip_out: TODO;
        readonly muzzle_alpha: TODO;
        readonly scale: TODO;
        readonly ammo_style: TODO;
        readonly ammo_style2: TODO;
        addEventListener: (event_type: TODO, params: TODO) => TODO;
        removeEventListener: (event_type: TODO, params: TODO) => TODO;
        readonly is_thrown_by: TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: number) => TODO;
    }
    var pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun: (params: TODO) => pb2Gun;
        guns: pb2Gun[];
        pickable_guns: TODO[];
    }
}

declare global {
    interface pb2GunClass extends ClassIdentityProps<"pb2GunClass"> {
        inventory_slot: TODO;
        title: TODO;
        forcars: TODO;
        cost: TODO;
        costupg: TODO;
        two_at_a_time: TODO;
        stat_count: TODO;
        spawn_distance: TODO;
        stat_spread: TODO;
        stat_bullets: TODO;
        stat_cursor: TODO;
        projectile_speed: number;
        projectile_luminescent: TODO;
        fire_duration: TODO;
        fire_type: TODO;
        auto_fire_if_unready: TODO;
        disabled_laser: TODO;
        mass_mult: number;
        secondary_mode_toggle: TODO;
        is_grenade: boolean;
        is_lightning: boolean;
        is_rocket: boolean;
        rocket_direct_damage_mode: TODO;
        projectile_base_color: TODO;
        is_railgun: boolean;
        is_heavy: boolean;
        is_healgun: boolean;
        is_repairgun: boolean;
        is_capturehealgun: boolean;
        is_radioactive: boolean;
        is_cloud: boolean;
        is_snowball: boolean;
        is_beam: boolean;
        is_blaster: boolean;
        is_plasma: boolean;
        is_nail: boolean;
        is_raygun: boolean;
        is_wall_sticking: boolean;
        rocket_damage: TODO;
        xpos1: TODO;
        xpos2: TODO;
        attachment: TODO;
        zpos: TODO;
        zpos2: TODO;
        len1: TODO;
        len2: TODO;
        size1: TODO;
        size2: TODO;
        recoil_factor: number;
        chaotic_recoil: TODO;
        constant_beam_damage: number;
        speed_to_damage_multiplier: number;
        explosion_knock_multiplier: number;
        explosion_hp_damage_multiplier: number;
        max_life_time: number;
        max_life_time_rand: TODO;
        ammo_bullet_price: TODO;
        grenade_density: TODO;
        readonly model_name: TODO;
        reload_length: number;
        GetProjectileMovieClip: () => TODO;
        SetProjectileMovieClip: (v: TODO) => TODO;
        GetStuckProjectileMovieClip: () => TODO;
        SetStuckProjectileMovieClip: (v: TODO) => TODO;
        readonly weapon_modes: TODO;
        SetSoundInfo: (category: TODO, KP: TODO) => TODO;
        GetSoundInfo: (category: TODO) => TODO;
        detonates_on_entity_collisions: boolean;
        detonates_on_organic_entities_only: boolean;
        ricochet_speed_condition: TODO;
        ricochet_speed_decay_multiplier: number;
        magazine_reload_duration_multiplier: number;
        stat_power: TODO;
        muzzle_flash_scale_mult: number;
    }
    var pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        /** Type is unknown. One known value: ["gun_pistol","gun_pistol2","gun_rifle","gun_rayrifle","gun_real_rifle","gun_arifle","gun_arifle2","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_railgun2","gun_sniper","gun_rl","gun_apistol","gun_plasmagun","gun_apistol2","gun_gl","gun_bng","gun_defibrillator","gun_vgun","gun_oicw"] */
        non_spoiler_weapons: TODO;
        /** Type is unknown. One known value: ["gun_rifle","gun_anti_rifle","gun_pistol","gun_pistol2","gun_rayrifle","gun_arifle2","gun_arifle","gun_real_rifle","gun_shotgun","gun_raygun","gun_minigun","gun_real_shotgun","gun_railgun","gun_shadowstep_railgun","gun_railgun2","gun_sniper","gun_rl","gun_trouble","gun_shaft","gun_rl2","gun_plasmagun","gun_apistol","gun_apistol2","gun_gl","gun_bng","gun_disintegrator","gun_explosiveminigun","gun_firebug","gun_drainlight","gun_drainlight_mg","gun_sniper2","gun_defibrillator","gun_eratrigger","gun_repairgun","gun_dodge","gun_oicw","gun_vgun","gun_nailgun","gun_freezer","gun_pistol3","gun_farheal","gun_flappygun","gun_flame","gun_rl3","gun_vehgun","gun_bng2","gun_chrono","gun_vehcannon","gun_vehcannon2","gun_scout_drone","gun_harasser_drone","gun_cs_vehgun","gun_vehminigun","gun_fttp_vehgun","gun_drain_sniper_rifle"] */
        registered_weapons: TODO;
        GetGunClassByString: (str: string) => pb2GunClass;
        CachedGunClasses: {[k: string]: pb2GunClass}
        CreateCustomGunClass: (bjW: TODO, exC: TODO) => void;
    }
}

declare global {
    var pb2GunDefinitions: ClassIdentityProps<"pb2GunDefinitions"> & {
        GetDefinitionFor: (s: TODO) => TODO;
    }
}

declare global {
    var pb2GunDisposer: ClassIdentityProps<"pb2GunDisposer"> & {
        AllowDispose: (g: TODO) => TODO;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: TODO;
    }
}

declare global {
    interface pb2HeroInfoBar extends ClassIdentityProps<"pb2HeroInfoBar"> {
        /** Type is unknown. One known value: 30 */
        readonly classid: TODO;
        title: string;
        value: number;
        value_max: number;
        value_handicap: number;
        color: pb2HighRangeColor;
        color_border: pb2HighRangeColor;
        color_delta: pb2HighRangeColor | null;
        color_handicap: pb2HighRangeColor | null;
        color_title: pb2HighRangeColor;
    }
    var pb2HeroInfoBar: {
        /**
         * @param params Object containing parameters
         * @param params.type (default=pb2HeroInfoBar.TYPE_SERVER_VAR)
         * @param params.order (default=1)
         * @param params.title (default="")
         * @param params.value (default=0)
         * @param params.value_max (default=100)
         * @param params.value_handicap (default=0)
         * @param params.color (default=new pb2HighRangeColor(0xd81a1a))
         * @param params.color_border (default=new pb2HighRangeColor(0xff4747))
         * @param params.color_delta (default=null)
         * @param params.color_handicap (default=null)
         * @param params.color_title (default=new pb2HighRangeColor(0xff4747))
         */
        new (params: {
            type?: TODO,
            order?: number,
            title?: string,
            value?: number,
            value_max?: number,
            value_handicap?: number,
            color?: pb2HighRangeColor,
            color_border?: pb2HighRangeColor,
            color_delta?: pb2HighRangeColor,
            color_handicap?: pb2HighRangeColor,
            color_title?: pb2HighRangeColor,
        }): pb2HeroInfoBar;
        /** Type is unknown. One known value: 4 */
        TYPE_SERVER_VAR: TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_SPACER: TODO;
    }
}

declare global {
    interface pb2HighRangeColor extends ClassIdentityProps<"pb2HighRangeColor"> {
        r: number;
        g: number;
        b: number;
        clone: () => pb2HighRangeColor;
        addRGB: (_r: number, _g: number, _b: number) => TODO;
        /** @param u (default=0xffffff)  */
        from_uint: (u?: number) => TODO;
        _uint: number;
        limit: () => TODO;
        multiply: (num: number) => TODO;
        multiplyColor: (c: TODO) => TODO;
        add: (num: number) => TODO;
        addColor: (c: TODO) => TODO;
        average: () => TODO;
        GetAverageValue: () => TODO;
        rand: () => TODO;
        setRGB: (_r: number, _g: number, _b: number) => TODO;
    }
    var pb2HighRangeColor: {
        /** @param u (default=0xffffff)  */
        new (u?: number): pb2HighRangeColor;

    }
}

declare global {
    interface pb2Light extends ClassIdentityProps<"pb2Light"> {
        x: number;
        y: number;
        z: number;
        readonly is_static: boolean;
        color: TODO;
        color_high_range: TODO;
        power: number;
        scale: number;
        readonly flare: boolean;
        remove: () => TODO;
        readonly is_being_removed: boolean;
        SetPosition: (x: number, y: number, z: number) => TODO;
        UpdateMeshFlareColorAndScale: () => TODO;
        angular_range_from: TODO;
        angular_range_length: TODO;
        attachment: TODO;
        attachment_limb_id: TODO;
        attachment_position: TODO;
        attachment_rotation: TODO;
    }
    var pb2Light: ClassIdentityProps<"pb2Light"> & {
        lights_dynamic: TODO[];
        lights: pb2Light[];
        CreateLight: (params: TODO) => pb2Light;
    }
}

declare global {
    var pb2Math: {
        SegmentBBoxIntersection: (x: number, y: number, tox: number, toy: number, minx: number, miny: number, maxx: number, maxy: number) => TODO;
        GetProjectionOnSegment: (p: TODO, v: TODO, w: TODO) => TODO;
        GetProjectionOnSegmentTo: (p: TODO, v: TODO, w: TODO, ret: TODO) => TODO;
        Dist2D: (x1: number, y1: number, x2: number, y2: number) => number;
        Dist3D: (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => number;
        Dist2D_Vector: (tox: number, toy: number) => number;
        inDist2D: (x1: number, y1: number, x2: number, y2: number, rad: number) => TODO;
    }
}

declare global {
    var pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        enabled: boolean;
        /** Type is unknown. One known value: -1 */
        match_uid: TODO;
        match_host_user_uid: number;
        /** Type is unknown. One known value: "???" */
        match_instance_key: TODO;
        initiator_user_uid: number;
        SetMatchProperty: (property: TODO, value: TODO) => TODO;
        GetMatchInfoObject: () => TODO;
        AddMatchTag: (tag: TODO) => TODO;
        GetAllPlayerConnectionsAndSelf: () => TODO;
    }
}

declare global {
    var pb2OverheadHUD: ClassIdentityProps<"pb2OverheadHUD"> & {
        /** Type is unknown. One known value: 0 */
        OVERHEAD_VISIBILITY_HIDDEN: TODO;
        /** Type is unknown. One known value: 1 */
        OVERHEAD_VISIBILITY_TEAMMATES_ONLY: TODO;
        /** Type is unknown. One known value: 2 */
        OVERHEAD_VISIBILITY_EVERYONE: TODO;
        /** Type is unknown. One known value: ["pb2OverheadHUD.OVERHEAD_VISIBILITY_HIDDEN","pb2OverheadHUD.OVERHEAD_VISIBILITY_TEAMMATES_ONLY","pb2OverheadHUD.OVERHEAD_VISIBILITY_EVERYONE"] */
        ALL_TYPES: TODO;
    }
}

declare global {
    var pb2ParticleSystems: ClassIdentityProps<"pb2ParticleSystems"> & {
        /**
         * @param params   
         * @param fbl (default=false)   
         */
        CreateParticleSystem: (params: TODO, fbl?: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_TELEPORT: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_TACTICAL_PING: TODO;
    }
}

declare global {
    interface pb2PendingJoinRequest extends ClassIdentityProps<"pb2PendingJoinRequest"> {
        readonly user_uid: number;
        readonly connection_uid: TODO;
        readonly response_sent: TODO;
        accept: () => TODO;
        reject: (message: TODO) => TODO;
        /**
         * @param new_match_uid   
         * @param new_match_instance_key   
         * @param new_match_host_user_uid   
         * @param new_match_password (default='')   
         * @param message (default='')   
         */
        redirect: (new_match_uid: TODO, new_match_instance_key: TODO, new_match_host_user_uid: TODO, new_match_password?: TODO, message?: TODO) => TODO;
        readonly nickname_tagged: TODO;
        readonly skin_info: TODO;
    }
    
}

declare global {
    interface pb2PlayerConnection extends ClassIdentityProps<"pb2PlayerConnection"> {
        readonly controller: TODO;
        readonly GetPing: TODO;
        readonly spectated_ragdoll: TODO;
        readonly personal_virtual_controller: TODO;
        readonly isHost: TODO;
        readonly StartPointOfViewReplay: TODO;
        readonly IsWatchingReplay: TODO;
        readonly CancelPointOfViewReplay: TODO;
        readonly SetReplayTimeScale: TODO;
        readonly GetReplayTimeScale: TODO;
        readonly user_uid: TODO;
        readonly connection_uid: TODO;
        readonly SetDisconnectActionDescriptionStructure: TODO;
        readonly Disconnect: TODO;
        readonly SetToController: TODO;
        readonly SetToSpectateRagdoll: TODO;
        readonly nickname_tagged: TODO;
        readonly skin_info: TODO;
        controls_trusted: TODO;
        hud_visible: TODO;
        hud_show_character_info: TODO;
        hud_custom_bars: TODO;
        readonly settings: TODO;
        readonly ShowChatMessage: TODO;
        readonly ShakeScreen: TODO;
        readonly FlashScreen: TODO;
        readonly SetToFreeCamera: TODO;
        readonly is_being_removed: TODO;
        readonly PauseTrustedControlsTemporarily: TODO;
        readonly SetKeyActions: TODO;
        readonly ClearAllKeyActionsAndStates: TODO;
        readonly GetKeyState: TODO;
        readonly DebugTraceAnyPressedKeys: TODO;
    }
    
}

declare global {
    interface pb2RadioactiveCloud extends ClassIdentityProps<"pb2RadioactiveCloud"> {
        /** Type is unknown. One known value: 25 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly radius: number;
    }
    var pb2RadioactiveCloud: ClassIdentityProps<"pb2RadioactiveCloud"> & {
        clouds: pb2RadioactiveCloud[];
    }
}

type pb2StyleBoostBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    readonly activated: TODO;
    boost: TODO;
    readonly current_boost: TODO;
    readonly denied_repeat_cooldown: TODO;
    doublejumps_left: number;
    doublejumps_max: number;
    fuel: TODO;
    max_fuel: TODO;
    readonly noping_out_boost: TODO;
    readonly noping_out_boost_ignition: TODO;
    readonly noping_out_current_boost: TODO;
    readonly ragdoll: TODO;
    readonly raycast_less_activation_allowed_timer: TODO;
    readonly reactivation_anti_flood_timer: TODO;
    readonly style_id: TODO;
}

declare global {
    interface pb2StyleBoost extends pb2StyleBoostBase<"pb2StyleBoost"> {} // pb2StyleBoost.NONE
    interface pb2StyleBoostSelfboost extends pb2StyleBoostBase<"fnR"> {} // pb2StyleBoost.SELFBOOST
    interface pb2StyleBoostJetpack extends pb2StyleBoostBase<"fnC"> {} // pb2StyleBoost.JETPACK
    interface pb2StyleBoostDoublejump extends pb2StyleBoostBase<"fnD"> {} // pb2StyleBoost.DOUBLEJUMP
    var pb2StyleBoost: ClassIdentityProps<"pb2StyleBoost"> & {
        /** Type is unknown. One known value: 0 */
        NONE: TODO;
        /** Type is unknown. One known value: 1 */
        SELFBOOST: TODO;
        /** Type is unknown. One known value: 2 */
        JETPACK: TODO;
        /** Type is unknown. One known value: 3 */
        DOUBLEJUMP: TODO;
        /** Type is unknown. One known value: ["pb2StyleBoost.NONE","pb2StyleBoost.SELFBOOST","pb2StyleBoost.JETPACK","pb2StyleBoost.DOUBLEJUMP"] */
        ALL_TYPES: TODO;
        noping_out_boost_max: number;
        noping_out_boost_regen_speed: number;
        noping_out_boost_regen_speed_midair: number;
        noping_out_current_boost_max: number;
        noping_out_boost_strength: number;
        jetpack_loop_loudness: number;
        jetpack_auto_jetpack_on_double_jump_duration: number;
        jetpack_max_fuel_for_new_ragdolls: number;
        selfboost_decay_speed: number;
        selfboost_strength: number;
        doublejump_maximum_charge_for_new_ragdolls: number;
        doublejump_restore_speed: number;
        doublejump_strength: number;
        doublejump_single_boost_duration_decay: number;
    }
}

declare global {
    interface pb2Ragdoll extends ClassIdentityProps<"pb2Ragdoll"> {
        /** Type is unknown. One known value: 3 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly tox: number;
        readonly toy: number;
        dimmed: boolean;
        readonly owner_character: pb2Character | null;
        /**
         * Damages a limb. This also reduces current hp of the character.
         * @param atom Ragdoll atom  
         * @param dmg Damage amount  
         * @param eWu (default=atom.GetPosition())   
         * @param beg (default=pb2Void.bh)   
         * @param eWw (default=1) affects damage in some way  
         * @param dir_x (default=0) Damage direction vector x  
         * @param dir_y (default=0) Damage direction vector y  
         * @param beo (default=true)   
         * @param limb_damage_multiplier (default=1)   
         * @param eWx (default=null)   
         */
        DealLimbDamage: (atom: pb2Atom, dmg: number, eWu?: TODO, beg?: TODO, eWw?: TODO, dir_x?: number, dir_y?: number, beo?: TODO, limb_damage_multiplier?: number, eWx?: TODO) => number;
        /**
         * Apply defibrillator effect
         * @param self If false, healing will be applied regardless of the character's dying state. 
         * @returns Boolean telling if the player healed
         */
        HealGunApplied: (self: boolean) => boolean;
        /**
         * Apply capture defibrillator effect. Target will become a teammate of `by`  
         * Used by gun class "gun_eratrigger" or any gun class with is_healgun and is_capturehealgun set to true.
         * @param by 
         */
        CaptureHealGunApplied: (by: pb2Ragdoll) => void;
        /**
         * Sets the displayed name of the ragdoll.  
         * Note that the team's `recolor_nicknames_on_overhead` property can cause colors to be displayed differently.
         * @param name New name
         */
        SetName: (name: pb2ColoredText) => void;
        /** Gets the displayed name of the ragdoll */
        GetName: () => pb2ColoredText;
        /**
         * Destroys the ragdoll in an explosion of particles.  
         * 
         * The whole body will be destroyed if the ragdoll's hp_body is over 0 or `atom_id` is -1.  
         * 
         * `atom_id` may be specified to destroy only the lower or upper half of the body. 
         * The half that atom `atom_id` belongs to will be destroyed.  
         * For example:  
         * pb2Ragdoll.b_pelvis -> destroy lower body  
         * pb2Ragdoll.b_body -> destroy upper body
         * @param color Particle color  
         * @param atom_id (default=-1) Atom id that specifies which half of the body should be destroyed.  
         */
        MeltDown: (color: pb2Color, atom_id?: number) => void;
        /**
         * Starts removal of all floating text bubbles (pb2WindowHints) attached to the ragdoll.
         */
        ExpireAllHintObjects: () => void;
        readonly side: -1 | 1;
        /** Flips the ragdoll horizontally. Has no effect if the character is alive. */
        Flip: () => void;
        /** Removes the ragdoll and its owner_character if it exists. */
        remove: () => TODO;
        readonly is_being_removed: boolean;
        /**
         * Sets the ragdoll's vision type.
         * @param ID One of the vision types defined on pb2Vision, such as pb2Vision.VISION_SCREEN_BOX
         */
        SetVision: (ID: TODO) => void;
        /** Gets the ragdoll's vision type. */
        GetVision: () => TODO;
        /** Get blindness time/amount */
        GetBlindness: () => number;
        /**
         * Set blindness time/amount. Prevents players and NPCs from seeing.
         * @param v 
         */
        SetBlindness: (v: number) => void;
        /** Get deafness time/amount */
        GetDeafness: () => number;
        /**
         * Set deafness time/amount. Prevents players and NPCs from hearing.
         * @param v 
         */
        SetDeafness: (v: number) => void;
        hp_head: number;
        hp_body: number;
        hp_arms: number;
        hp_legs: number;
        /** Gets the number of atoms in the ragdoll. Varies based on hp_body. */
        GetAtomsTotal: () => number;
        readonly gameplay_effects: pb2GameplayEffects;
        /** Removes visible bullet holes from the ragdoll */
        ClearBulletHoles: () => void;
        /** Returns a boolean telling if the ragdoll is currently using a grappling hook */
        UsesGrapplingHook: () => boolean;
        readonly active_grappling_hook: pb2Rope | null;
        /**
         * Forces the ragdoll's grappling hook to detach
         * @param collapse Pull in rope (true) or detach from both ends (false)
         */
        DetachFromRope: (collapse: boolean) => void;
        /**
         * Can be used to add custom bars.  
         * Example:
         * ```js
         * ragdoll.hud_custom_bars.push(new pb2HeroInfoBar({title: "Energy"}))
         * ```
         */
        hud_custom_bars: pb2HeroInfoBar[];
        readonly enforce_skin_limitations: boolean;
        readonly use_skin_properties: boolean;
        readonly team: pb2Team;
        /**
         * Sets the ragdoll's boost style type.
         * @param v One of the boost style types defined on pb2StyleBoost, such as pb2StyleBoost.SELFBOOST
         */
        SetBoostStyle: (v: TODO) => void;
        /**
         * Sets the ragdoll's swords style type.
         * @param v One of the swords style types defined on pb2StyleSwords, such as pb2StyleSwords.BASIC
         */
        SetSwordsStyle: (v: TODO) => void;
        readonly style_boost: pb2StyleBoostBase<string>;
        /** Gets the ragdoll's sword style type. */
        GetSwordsStyleID: () => TODO;
        /**
         * @param dx Difference in X  
         * @param dy Difference in y  
         * @param dtox (default=0) Added X speed  
         * @param dtoy (default=0) Added Y speed  
         * @param atom (default=this.local_atoms[pb2Ragdoll.b_pelvis]) Atom to teleport. If `hp_body <= 0` or `split` is true, only the half of the body that the atom belongs to will be teleported.   
         * @param split (default=false) Force body halves to split and only teleport the half containing `atom`. Kills the character if not already dead. 
         * @param color (default=null) Particle color, or null for teleport effect and sound  
         */
        Teleport: (dx: number, dy: number, dtox?: number, dtoy?: number, atom?: pb2Atom, split?: boolean, color?: ColorTransform | null) => void;
        /**
         * Plays a sound at the ragdoll.  
         * ```js
         * // Play the ragdoll's death_underwater sound
         * ragdoll.Speak("death_underwater") 
         * // Play a sound from the library
         * ragdoll.Speak("s_explode3") 
         * ```
         * @param sound_name   
         * @param eVL (default=false)   
         * @param team_only (default=false) Only for own team  
         */
        Speak: (sound_name: string, eVL?: boolean, team_only?: boolean) => void;
        damage_projectiles: number;
        damage_explosions: number;
        damage_impacts: number;
        damage_radiation: number;
        damage_liquids: number;
        mobility: number;
        readonly scale: number;
        readonly voice_preset_pitch: number;
        voice_pitch: undefined | null;
        readonly normalize_all_voice_lines_volume: boolean;
        readonly normalize_custom_voice_lines_volume: boolean;
        /**
         * Gets the ragdoll's atom (i.e. body part) with the specified ID. 
         * @param id One of the atom IDs defined on pb2Ragdoll, such as pb2Ragdoll.b_pelvis
         */
        GetAtom: (id: number) => pb2Atom;
        /**
         * Gets the ragdoll's mesh with the specified ID. 
         * @param id (default=0) One of the mesh IDs defined on pb2Ragdoll, such as pb2Ragdoll.mc_arm1b_sword  
         */
        GetMesh: (id?: number) => THREE.Mesh;
    }
    var pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        /**
         * Creates a new ragdoll. The ragdoll will be lifeless if params.owner_character is unspecified, pass in a pb2Character
         * or use CreateRagdollComplete to create a ragdoll with an accompanying pb2Character and pb2Controller.  
         * @param params Object containing parameters  
         * @param params.team Required.  
         * @param params.skin Required. Skin editor object created using pb2SkinEditor functions  
         * @param params.owner_character (default=null)  
         * @param params.x (default=0)  
         * @param params.y (default=0)  
         * @param params.tox (default=0)  
         * @param params.toy (default=0)  
         * @param params.rotation (default=0)  
         * @param params.side (default=1)  
         * @param params.scale (default=1)  
         * @param params.name (default=null) Can be a pb2ColoredText or a string optionally containing color tags like "[#00FFFF]John[/] Doe"  
         * @param params.style_swords (default=pb2StyleSwords.NONE)  
         * @param params.style_grappling_hook (default=pb2StyleGrapplingHook.STYLE_NOTHING)  
         * @param params.style_boost (default=pb2StyleBoost.NONE)  
         * @param params.vision (default=pb2Vision.VISION_RADIAL_TRACE)  
         * @param params.can_breathe_in_water (default=false)  
         * @param params.can_breathe_in_toxic_clouds (default=false)  
         * @param params.enforce_skin_limitations (default=false)  
         * @param params.use_skin_properties (default=false)  
         * @param params.sword_projectile_reflection (default=false)  
         * @param params.normalize_all_voice_lines_volume (default=false)  
         * @param params.normalize_custom_voice_lines_volume (default=false)  
         * @param params.voice_pitch (default=undefined) If undefined, pitch will be based on the ragdoll scale and voice preset pitch  
         * @param params.driver_of (default=null)  
         */
        CreateRagdoll: (params: {
            // roughly ordered by importance and category
            team: pb2Team,
            skin: pb2EditorObject,
            owner_character?: pb2Character | null
            x?: number,
            y?: number,
            tox?: number,
            toy?: number,
            rotation?: number,
            side?: -1 | 1,
            scale?: number,
            name?: pb2ColoredText | string,
            style_swords?: TODO,
            style_grappling_hook?: TODO,
            style_boost?: TODO,
            vision?: TODO,
            can_breathe_in_water?: boolean,
            can_breathe_in_toxic_clouds?: boolean,
            enforce_skin_limitations?: boolean,
            use_skin_properties?: boolean,
            sword_projectile_reflection?: boolean,
            normalize_all_voice_lines_volume?: boolean,
            normalize_custom_voice_lines_volume?: boolean,
            voice_pitch?: number | undefined,
            driver_of?: pb2EntityBase<string> | null,
        }) => pb2Ragdoll; // technically this can also return null but it seems that only happens in an edge case, so maybe null should be omitted for convenience?
        /**
         * Same as CreateRagdoll, but a pb2Character and pb2Controller are also created.
         * @param p Object containing parameters
         * @param params.team Required.  
         * @param params.skin Required. Skin editor object created using pb2SkinEditor functions  
         * @param params.x (default=0)  
         * @param params.y (default=0)  
         * @param params.tox (default=0)  
         * @param params.toy (default=0)  
         * @param params.rotation (default=0)  
         * @param params.side (default=1)  
         * @param params.scale (default=1)  
         * @param params.name (default=null) Can be a pb2ColoredText or a string optionally containing color tags like "[#00FFFF]John[/] Doe"  
         * @param params.style_swords (default=pb2StyleSwords.NONE)  
         * @param params.style_grappling_hook (default=pb2StyleGrapplingHook.STYLE_NOTHING)  
         * @param params.style_boost (default=pb2StyleBoost.NONE)  
         * @param params.vision (default=pb2Vision.VISION_RADIAL_TRACE)  
         * @param params.can_breathe_in_water (default=false)  
         * @param params.can_breathe_in_toxic_clouds (default=false)  
         * @param params.enforce_skin_limitations (default=false)  
         * @param params.use_skin_properties (default=false)  
         * @param params.sword_projectile_reflection (default=false)  
         * @param params.normalize_all_voice_lines_volume (default=false)  
         * @param params.normalize_custom_voice_lines_volume (default=false)  
         * @param params.voice_pitch (default=undefined) If undefined, pitch will be based on the ragdoll scale and voice preset pitch  
         * @param params.driver_of (default=null)  
         * 
         * @param params.hmax (default=pb2Character.bXF)
         * @param params.hea (default=this.hmax)
         * @param params.start_hea (default=this.hmax)
         * @param params.hmax_damage_multiplier (default=pb2Character.hmax_damage_multiplier)
         * @param params.stability (default=1)
         * @param params.block_instant_midair_jump (default=false)
         * @param params.drop_guns_on_death (default=pb2Character.DROP_ALWAYS)
         * @param params.drop_grenades_on_death (default=pb2Character.DROP_WHEN_INTENDED_ONLY)
         * @param params.can_be_revived (default=undefined) Can be left unspecified, but the value will be `undefined` (falsy) rather than a boolean value.
         * @param params.Gd (default=false) If true, body part hp values on the ragdoll will not be set
         * @param params.regen_module (default=pb2StyleRegen.style_delayed_speedup)
         * @param params.onDeath Optional function or trigger that gets added as an "OBJECT_DIED" event listener on the character
         * @param params.onAbility Optional function or trigger that gets added as a "CHARACTER_ABILITY" event listener on the character
         * 
         * @param params.player_controllable (default=false)
         * @param params.ai_preset (default=undefined)
         */
        CreateRagdollComplete: (p: {
            // ragdoll
            team: pb2Team,
            skin: pb2EditorObject,
            x?: number,
            y?: number,
            tox?: number,
            toy?: number,
            rotation?: number,
            side?: -1 | 1,
            scale?: number,
            name?: pb2ColoredText | string,
            style_swords?: TODO,
            style_grappling_hook?: TODO,
            style_boost?: TODO,
            vision?: TODO,
            can_breathe_in_water?: boolean,
            can_breathe_in_toxic_clouds?: boolean,
            enforce_skin_limitations?: boolean,
            use_skin_properties?: boolean,
            sword_projectile_reflection?: boolean,
            normalize_all_voice_lines_volume?: boolean,
            normalize_custom_voice_lines_volume?: boolean,
            voice_pitch?: number | undefined,
            driver_of?: pb2EntityBase<string> | null,

            // character
            hmax?: number,
            hea?: number,
            start_hea?: number,
            hmax_damage_multiplier?: number,
            stability?: number,
            block_instant_midair_jump?: boolean,
            drop_guns_on_death?: TODO,
            drop_grenades_on_death?: TODO,
            can_be_revived?: boolean,
            Gd?: boolean,
            regen_module?: TODO | null,
            onDeath?: (
                died: pb2Character, 
                killers: pb2Ragdoll[], // entities don't count
                damage_dealt: number[], 
                using: (pb2Gun | pb2Bullet)[]
            ) => void,
            onAbility?: (user: pb2Character) => void,

            // controller
            player_controllable?: boolean,
            ai_preset?: AIPreset | null
        }) => pb2Ragdoll;
        /** Type is unknown. One known value: 0 */
        b_pelvis: TODO;
        /** Type is unknown. One known value: 1 */
        b_leg1: TODO;
        /** Type is unknown. One known value: 2 */
        b_leg2: TODO;
        /** Type is unknown. One known value: 3 */
        b_arm1: TODO;
        /** Type is unknown. One known value: 4 */
        b_arm2: TODO;
        /** Type is unknown. One known value: 5 */
        b_body: TODO;
        /** Type is unknown. One known value: 6 */
        b_head_start: TODO;
        /** Type is unknown. One known value: 7 */
        b_head_end: TODO;
        /** Type is unknown. One known value: 8 */
        b_body_brk1: TODO;
        /** Type is unknown. One known value: 9 */
        b_body_brk2: TODO;
        /** Type is unknown. One known value: [true,true,false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,true] */
        mc_body_top_pattern: TODO;
        /** Type is unknown. One known value: 0 */
        mc_head: TODO;
        /** Type is unknown. One known value: 1 */
        mc_head_broken: TODO;
        /** Type is unknown. One known value: 2 */
        mc_pelvis: TODO;
        /** Type is unknown. One known value: 3 */
        mc_pelvis_broken: TODO;
        /** Type is unknown. One known value: 4 */
        mc_body: TODO;
        /** Type is unknown. One known value: 5 */
        mc_arm1a: TODO;
        /** Type is unknown. One known value: 6 */
        mc_arm1b: TODO;
        /** Type is unknown. One known value: 7 */
        mc_arm1b_broken: TODO;
        /** Type is unknown. One known value: 8 */
        mc_arm1b_sword: TODO;
        /** Type is unknown. One known value: 9 */
        mc_arm2a: TODO;
        /** Type is unknown. One known value: 10 */
        mc_arm2b: TODO;
        /** Type is unknown. One known value: 11 */
        mc_arm2b_broken: TODO;
        /** Type is unknown. One known value: 12 */
        mc_arm2b_sword: TODO;
        /** Type is unknown. One known value: 13 */
        mc_leg1a: TODO;
        /** Type is unknown. One known value: 14 */
        mc_leg1b: TODO;
        /** Type is unknown. One known value: 15 */
        mc_leg1c: TODO;
        /** Type is unknown. One known value: 16 */
        mc_leg1b_broken: TODO;
        /** Type is unknown. One known value: 17 */
        mc_leg2a: TODO;
        /** Type is unknown. One known value: 18 */
        mc_leg2b: TODO;
        /** Type is unknown. One known value: 19 */
        mc_leg2c: TODO;
        /** Type is unknown. One known value: 20 */
        mc_leg2b_broken: TODO;
        /** Type is unknown. One known value: 21 */
        mc_body_broken: TODO;
        ragdolls: pb2Ragdoll[];
    }
}

declare global {
    var pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose: (r: TODO) => TODO;
        normal_time_to_live: number;
        /** Type is unknown. One known value: [] */
        disposers: TODO;
    }
}

declare global {
    interface pb2Region extends ClassIdentityProps<"pb2Region"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 101 */
        readonly classid: TODO;
        /** @param recursive (default=true)  */
        remove: (recursive?: TODO) => TODO;
        attached_to: TODO;
        readonly p: TODO;
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: TODO;
        readonly is_quad: TODO;
        /** Type is unknown. One known value: 5 */
        readonly type: TODO;
        readonly _childs: TODO;
        AddPosition: (x: number, y: number) => void;
        SetPosition: (x: number, y: number) => TODO;
        /**
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetSize: (w?: number, h?: number) => TODO;
        /**
         * @param x   
         * @param y   
         * @param w (default=undefined)   
         * @param h (default=undefined)   
         */
        SetPositionAndSize: (x: number, y: number, w?: number, h?: number) => TODO;
        CopyPositionAndSizeFrom: (cP: TODO) => TODO;
        readonly collected_entities_counter: TODO;
    }
    var pb2Region: ClassIdentityProps<"pb2Region"> & {
        regions: pb2Region[];
    }
}

declare global {
    /** the class is actually called lo but it's renamed here for obvious reasons */
    interface pb2Rope extends ClassIdentityProps<"lo"> {
        /** Type is unknown. One known value: 23 */
        readonly classid: TODO;
        readonly ragdoll: TODO;
        readonly is_collapsing: boolean;
        readonly held_ragdoll: TODO;
        readonly remote_body: TODO;
    }
    
}

declare global {
    interface pb2Shape extends ClassIdentityProps<"pb2Shape"> {
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
        /** Type is unknown. One known value: 6 */
        readonly classid: TODO;
        SetSpeed: (v: number) => TODO;
        /**
         * @param x   
         * @param y   
         * @param yg (default=null)   
         */
        StartMove: (x: number, y: number, yg?: TODO) => TODO;
        /** @param recursive (default=true)  */
        remove: (recursive?: TODO) => TODO;
        /**
         * @param bN   
         * @param pos (default=null)   
         * @param bhS (default=0)   
         * @param Ai (default=0)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param lA (default=null)   
         */
        DealDamage: (bN: TODO, pos?: TODO, bhS?: TODO, Ai?: TODO, fG?: TODO, fE?: TODO, lA?: TODO) => TODO;
        attached_to: TODO;
        readonly p: TODO;
        readonly normal: TODO;
        readonly hea: TODO;
        readonly box2d_body: b2Body;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: TODO;
        readonly is_quad: TODO;
        readonly type: TODO;
        readonly frozen_spots: TODO;
        readonly _childs: TODO;
        SingleTracePoint: (x: number, y: number) => TODO;
        readonly see_through: TODO;
        SetAIBreakingAllowed: (v: boolean) => void;
        SetHitpointsIfPossible: (v: number) => TODO;
        /** @param id (default=0)  */
        GetMesh: (id?: 0) => TODO;
    }
    var pb2Shape: ClassIdentityProps<"pb2Shape"> & {
        /** Type is unknown. One known value: 0 */
        WALL: TODO;
        /** Type is unknown. One known value: 2 */
        MOVABLE: TODO;
        /** Type is unknown. One known value: 1 */
        BACKGROUND: TODO;
        /** Type is unknown. One known value: 4 */
        WATER: TODO;
        /** Type is unknown. One known value: 3 */
        CORNER_LEFT_BOTTOM: TODO;
        /** Type is unknown. One known value: 1 */
        CORNER_LEFT_TOP: TODO;
        /** Type is unknown. One known value: 2 */
        CORNER_RIGHT_TOP: TODO;
        /** Type is unknown. One known value: 4 */
        CORNER_RIGHT_BOTTOM: TODO;
        /** Type is unknown. One known value: 3 */
        RIGID: TODO;
        /** Type is unknown. One known value: 5 */
        REGION: TODO;
        /** Type is unknown. One known value: 0 */
        CORNER_NONE: TODO;
        /** Type is unknown. One known value: ["pb2Shape.WALL","pb2Shape.BACKGROUND","pb2Shape.MOVABLE","pb2Shape.RIGID","pb2Shape.WATER","pb2Shape.REGION","pb2Shape.CORNER_NONE","pb2Shape.CORNER_LEFT_TOP","pb2Shape.CORNER_RIGHT_TOP","pb2Shape.CORNER_LEFT_BOTTOM","pb2Shape.CORNER_RIGHT_BOTTOM"] */
        ALL_TYPES: TODO;
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
        SnowCanReach: (x: number, y: number, eLd?: TODO) => boolean;
        CountShapesInRect: (yJ: TODO, x: number, y: number, _width: number, _height: number, world_shapes_collide: TODO) => number;
        /**
         * @param x   
         * @param y   
         * @param tox   
         * @param toy   
         * @param where   
         * @param QI (default=true)   
         */
        isRayTraceable: (x: number, y: number, tox: number, toy: number, where: TODO, QI?: TODO) => boolean;
        isLineTraceable: (x: number, y: number, tox: number, toy: number, where: TODO) => boolean;
        GetShapeAtPoint: (x: number, y: number) => TODO;
        RaycastResult: (x: number, y: number, tox: number, toy: number, where: TODO) => TODO;
        /**
         * @param x   
         * @param y   
         * @param eLv (default=true)   
         */
        isWaterAtPoint: (x: number, y: number, eLv?: TODO) => boolean;
        /**
         * @param x   
         * @param y   
         * @param where (default=null)   
         * @param QI (default=true)   
         */
        isShapesAtPoint: (x: number, y: number, where?: TODO, QI?: TODO) => boolean;
    }
}

declare global {
    interface pb2ShieldZone extends ClassIdentityProps<"pb2ShieldZone"> {
        /** Type is unknown. One known value: 21 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        /**
         * @param bN   
         * @param xx   
         * @param yy   
         * @param _boD   
         * @param Ox (default=null)   
         */
        DealDamage: (bN: TODO, xx: TODO, yy: TODO, _boD: TODO, Ox?: TODO) => TODO;
        Heal: (bN: TODO) => TODO;
        MoveTo: (xx: number, yy: number) => TODO;
        /** @param gv (default=false)  */
        Destroy: (gv?: TODO) => TODO;
        remove: () => TODO;
    }
    var pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        /** Type is unknown. One known value: 0 */
        SOUND_PRESET_ID_SILENT: TODO;
        /** Type is unknown. One known value: 1 */
        SOUND_PRESET_ID_SHIELD_GRENADE: TODO;
        /** Type is unknown. One known value: 2 */
        SOUND_PRESET_ID_SPOILER26_SHIELD: TODO;
        /** Type is unknown. One known value: ["pb2ShieldZone.SOUND_PRESET_ID_SILENT","pb2ShieldZone.SOUND_PRESET_ID_SHIELD_GRENADE","pb2ShieldZone.SOUND_PRESET_ID_SPOILER26_SHIELD"] */
        ALL_SOUND_PRESET_IDS: TODO;
        shields: pb2ShieldZone[];
    }
}

declare global {
    var pb2SkinEditor: ClassIdentityProps<"pb2SkinEditor"> & {
        SpawnDefaultSkin: (frame: TODO) => TODO;
        /**
         * @param user_data_uid   
         * @param cWI (default=1)   
         */
        SpawnUserDataSkin: (user_data_uid: TODO, cWI?: TODO) => TODO;
        ScheduleCustomSkinUpdate: (skin: TODO) => TODO;
        /**
         * @param skin   
         * @param new_value (default=true)   
         */
        AllowSkinDispose: (skin: TODO, new_value?: TODO) => TODO;
        /**
         * @param dc   
         * @param cWI (default=1)   
         */
        SpawnTemporaryPreferredUserSkin: (dc: TODO, cWI?: TODO) => TODO;
        OpenSkinEditor: (user_data_uid: TODO, user_data_title: TODO) => TODO;
    }
}

declare global {
    var pb2Sound: ClassIdentityProps<"pb2Sound"> & {
        StopAllSounds: () => TODO;
        /** Type is unknown. One known value: 0 */
        PRIORITY_FLOOD: TODO;
        /** Type is unknown. One known value: 1 */
        PRIORITY_FLOOD_TICKS: TODO;
        /** Type is unknown. One known value: 2 */
        PRIORITY_NORMAL: TODO;
        /** Type is unknown. One known value: 3 */
        PRIORITY_GAMEPLAY: TODO;
        /** Type is unknown. One known value: 4 */
        PRIORITY_GAMEPLAY_SPEECH: TODO;
        /** Type is unknown. One known value: 5 */
        PRIORITY_GAMEPLAY_PINGS: TODO;
        /** Type is unknown. One known value: 6 */
        PRIORITY_GAMEPLAY_MERGED_SOUNDS: TODO;
        /** Type is unknown. One known value: 7 */
        PRIORITY_UI: TODO;
        /** Type is unknown. One known value: 8 */
        PRIORITY_ATMOSHPERICS: TODO;
        /** Type is unknown. One known value: 9 */
        PRIORITY_MUSIC: TODO;
        /** Type is unknown. One known value: ["pb2Sound.PRIORITY_FLOOD","pb2Sound.PRIORITY_FLOOD_TICKS","pb2Sound.PRIORITY_NORMAL","pb2Sound.PRIORITY_GAMEPLAY","pb2Sound.PRIORITY_GAMEPLAY_SPEECH","pb2Sound.PRIORITY_GAMEPLAY_PINGS","pb2Sound.PRIORITY_GAMEPLAY_MERGED_SOUNDS","pb2Sound.PRIORITY_UI","pb2Sound.PRIORITY_ATMOSHPERICS","pb2Sound.PRIORITY_MUSIC"] */
        ALL_TYPES: TODO;
        PlayCustomSound: (params: TODO) => ep;
    }
}

declare global {
    var pb2StartDetails: null | {
        testing_in_level_editor: boolean;
    }
}

declare global {
    var pb2Storage: {
        /**
         * @param dVZ   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetCreationProperty: (dVZ: TODO, then?: TODO, onerror?: TODO) => TODO;
        /**
         * @param dVZ   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetCreationProperty: (dVZ: TODO, value: TODO, then?: TODO, onerror?: TODO) => TODO;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        GetPlayerProperty: (dVZ: TODO, user_uid: TODO, then?: TODO, onerror?: TODO) => TODO;
        /**
         * @param dVZ   
         * @param user_uid   
         * @param value   
         * @param then (default=null)   
         * @param onerror (default=null)   
         */
        SetPlayerProperty: (dVZ: TODO, user_uid: TODO, value: TODO, then?: TODO, onerror?: TODO) => TODO;
        ClearPropertyNameToUIDCache: () => TODO;
    }
}

declare global {
    interface pb2StyleAmmo extends ClassIdentityProps<"pb2StyleAmmo"> {
        readonly style_id: TODO;
        readonly owner_gun: TODO;
        rounds_total: TODO;
        infinite_ammo: TODO;
        magazine_capacity: TODO;
        rounds_in_magazine: TODO;
        burst_shots: TODO;
        burst_timeout: TODO;
        regen_time: TODO;
        regen_timeout: TODO;
        reload_speed: TODO;
        waste_remain_part: TODO;
        recharge_speed: TODO;
        min_charge: TODO;
        charge_speed: TODO;
        zero_energy_value: TODO;
        energy: TODO;
        speed_up_factor: TODO;
        speed_up_max: TODO;
        charge_to_distance: TODO;
        readonly last_error_reason: TODO;
    }
    
}

declare global {
    var pb2StyleGrapplingHook: ClassIdentityProps<"pb2StyleGrapplingHook"> & {
        /** Type is unknown. One known value: 0 */
        STYLE_NOTHING: TODO;
        /** Type is unknown. One known value: 1 */
        STYLE_EVERYTHING: TODO;
        /** Type is unknown. One known value: 2 */
        STYLE_WALLS_ONLY: TODO;
        /** Type is unknown. One known value: 3 */
        STYLE_ENTITIES_ONLY: TODO;
        /** Type is unknown. One known value: 4 */
        STYLE_SIMPLE_ROPE: TODO;
        /** Type is unknown. One known value: 5 */
        STYLE_RIGID_BODY_MANIPULATING: TODO;
        /** Type is unknown. One known value: 7 */
        STYLE_FEEDBACKLESS_RIGID_BODY_MANIPULATING: TODO;
        /** Type is unknown. One known value: 8 */
        STYLE_KINETIC_MODULE: TODO;
        /** Type is unknown. One known value: ["pb2StyleGrapplingHook.STYLE_NOTHING","pb2StyleGrapplingHook.STYLE_EVERYTHING","pb2StyleGrapplingHook.STYLE_WALLS_ONLY","pb2StyleGrapplingHook.STYLE_ENTITIES_ONLY","pb2StyleGrapplingHook.STYLE_SIMPLE_ROPE","pb2StyleGrapplingHook.STYLE_RIGID_BODY_MANIPULATING","pb2StyleGrapplingHook.STYLE_FEEDBACKLESS_RIGID_BODY_MANIPULATING","pb2StyleGrapplingHook.STYLE_KINETIC_MODULE"] */
        ALL_TYPES: TODO;
    }
}

declare global {
    var pb2StyleRegen: ClassIdentityProps<"pb2StyleRegen"> & {
        /** Type is unknown. One known value: 0 */
        style_none: TODO;
        /** Type is unknown. One known value: 2 */
        style_delayed_speedup: TODO;
        /** Type is unknown. One known value: ["pb2StyleRegen.style_none","pb2StyleRegen.style_delayed_speedup"] */
        ALL_TYPES: TODO;
    }
}

declare global {
    var pb2StyleSwords: ClassIdentityProps<"pb2StyleSwords"> & {
        /** Type is unknown. One known value: 0 */
        NONE: TODO;
        /** Type is unknown. One known value: 1 */
        BASIC: TODO;
        /** Type is unknown. One known value: 2 */
        LARGE: TODO;
        /** Type is unknown. One known value: 3 */
        COMPACT: TODO;
        /** Type is unknown. One known value: 4 */
        CLIMBER: TODO;
        /** Type is unknown. One known value: 5 */
        STANCE: TODO;
        /** Type is unknown. One known value: 6 */
        RISING_ARC: TODO;
        /** Type is unknown. One known value: 7 */
        BYTE_NAIL: TODO;
        /** Type is unknown. One known value: 8 */
        ARCHWAY: TODO;
        /** Type is unknown. One known value: 9 */
        TRIPLET: TODO;
        /** Type is unknown. One known value: 10 */
        ARROW: TODO;
        /** Type is unknown. One known value: 11 */
        FALCON: TODO;
        /** Type is unknown. One known value: 12 */
        EDGE: TODO;
        /** Type is unknown. One known value: 13 */
        STORM: TODO;
        /** Type is unknown. One known value: 14 */
        PLEXUS: TODO;
        /** Type is unknown. One known value: 15 */
        MYTHIC: TODO;
        /** Type is unknown. One known value: 16 */
        CLAW: TODO;
        /** Type is unknown. One known value: 17 */
        STICK: TODO;
        /** Type is unknown. One known value: 18 */
        WING_KNIFE: TODO;
        /** Type is unknown. One known value: 19 */
        KNIFE: TODO;
        /** Type is unknown. One known value: ["pb2StyleSwords.NONE","pb2StyleSwords.BASIC","pb2StyleSwords.LARGE","pb2StyleSwords.COMPACT","pb2StyleSwords.CLIMBER","pb2StyleSwords.STANCE","pb2StyleSwords.RISING_ARC","pb2StyleSwords.BYTE_NAIL","pb2StyleSwords.ARCHWAY","pb2StyleSwords.TRIPLET","pb2StyleSwords.ARROW","pb2StyleSwords.FALCON","pb2StyleSwords.EDGE","pb2StyleSwords.STORM","pb2StyleSwords.PLEXUS","pb2StyleSwords.MYTHIC","pb2StyleSwords.CLAW","pb2StyleSwords.STICK","pb2StyleSwords.WING_KNIFE","pb2StyleSwords.KNIFE"] */
        ALL_TYPES: TODO;
        /** Type is unknown. One known value: ["None","Basic","Large","Compact","Climber","Stance","Rising-Arc","Byte-Nail","Archway","Triplet","Arrow","Falcon","Edge","Storm","Plexus","Mythic","Claw","Stick","Wing-Knife","Knife"] */
        id_to_name: TODO;
    }
}

declare global {
    interface pb2SurfaceType extends ClassIdentityProps<"pb2SurfaceType"> {
        is_soft: TODO;
        recommended_slices_per_density: TODO;
    }
    var pb2SurfaceType: ClassIdentityProps<"pb2SurfaceType"> & {
        /** Type is unknown. One known value: 0 */
        TYPE_SIMPLE_WALL: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_SIMPLE_BACKGROUND: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_PLATFORM_WALL: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_PB2PLATFORM_WALL: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_STAR_DEFENDING_CUBE: TODO;
        /** Type is unknown. One known value: 5 */
        TYPE_3D_MODEL: TODO;
        /** Type is unknown. One known value: 0 */
        APPEARANCE_NORMAL: TODO;
        /** Type is unknown. One known value: 1 */
        APPEARANCE_FULL_BRIGHT: TODO;
        /** Type is unknown. One known value: 2 */
        APPEARANCE_ADDITIVE: TODO;
        /** Type is unknown. One known value: 3 */
        APPEARANCE_FULL_BRIGHT_NO_GLOW: TODO;
        /** Type is unknown. One known value: 4 */
        APPEARANCE_NORMAL_NO_LIGHT_BLOCKING: TODO;
        /** Type is unknown. One known value: 0 */
        SHADER_GAMEPLAY: TODO;
        /** Type is unknown. One known value: 1 */
        SHADER_ENVIRONMENT: TODO;
        /** Type is unknown. One known value: 0 */
        TERRAIN_LAYER_GROUND: TODO;
        /** Type is unknown. One known value: 1 */
        TERRAIN_LAYER_GRASS: TODO;
        /** Type is unknown. One known value: 2 */
        TERRAIN_LAYER_SAND: TODO;
        /** Type is unknown. One known value: 3 */
        TERRAIN_LAYER_CLIFF: TODO;
        /** Type is unknown. One known value: 4 */
        TERRAIN_LAYER_SNOW: TODO;
        /** Type is unknown. One known value: ["pb2SurfaceType.TYPE_SIMPLE_WALL","pb2SurfaceType.TYPE_SIMPLE_BACKGROUND","pb2SurfaceType.TYPE_PLATFORM_WALL","pb2SurfaceType.TYPE_PB2PLATFORM_WALL","pb2SurfaceType.TYPE_STAR_DEFENDING_CUBE","pb2SurfaceType.TYPE_3D_MODEL","pb2SurfaceType.APPEARANCE_NORMAL","pb2SurfaceType.APPEARANCE_FULL_BRIGHT","pb2SurfaceType.APPEARANCE_ADDITIVE","pb2SurfaceType.APPEARANCE_FULL_BRIGHT_NO_GLOW","pb2SurfaceType.APPEARANCE_NORMAL_NO_LIGHT_BLOCKING","pb2SurfaceType.SHADER_GAMEPLAY","pb2SurfaceType.SHADER_ENVIRONMENT","pb2SurfaceType.TERRAIN_LAYER_GROUND","pb2SurfaceType.TERRAIN_LAYER_GRASS","pb2SurfaceType.TERRAIN_LAYER_SAND","pb2SurfaceType.TERRAIN_LAYER_CLIFF","pb2SurfaceType.TERRAIN_LAYER_SNOW"] */
        ALL_TYPES: TODO;
        /**
         * @param params   
         * @param slot (default=-1)   
         */
        CreateSurfaceType: (params: TODO, slot?: TODO) => pb2SurfaceType;
        SpawnPB2SurfaceTypeParams: (ffS: TODO, is_wall: TODO) => TODO;
    }
}

declare global {
    interface pb2Team extends ClassIdentityProps<"pb2Team"> {
        /** Type is unknown. One known value: 7 */
        readonly classid: TODO;
        readonly ai_in_team: TODO;
        allow_private_communication: boolean;
        friendly_damage_multiplier: number;
        friendly_fire: TODO;
        hud_color: TODO;
        hud_color_for_enemies: TODO;
        normal_damage_to_dead_teammates: TODO;
        readonly teammates_collide: boolean;
        title: TODO;
        remove: () => TODO;
    }
    var pb2Team: ClassIdentityProps<"pb2Team"> & {
        CreateTeam: (params: TODO) => pb2Team;
        teams: pb2Team[];
    }
}

declare global {
    interface pb2TextChannel extends ClassIdentityProps<"pb2TextChannel"> {
        InvitePlayerConnection: (dc: TODO) => TODO;
        UninvitePlayerConnection: (dc: TODO) => TODO;
        remove: () => TODO;
        readonly title: TODO;
        readonly color: TODO;
        readonly show_tag: TODO;
        readonly sync_with_main_server: TODO;
        readonly auto_channel_id: TODO;
        readonly channel_id: TODO;
        readonly is_being_removed: TODO;
        readonly synced: TODO;
        readonly syncing: TODO;
        GetInvitedDataConnections: () => TODO;
    }
    var pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel: (params: TODO) => pb2TextChannel;
    }
}

declare global {
    interface pb2Texture extends ClassIdentityProps<"pb2Texture"> {
        readonly internal: TODO;
        readonly url: TODO;
    }
    var pb2Texture: ClassIdentityProps<"pb2Texture"> & {
        GetTextureByName: (name: TODO) => pb2Texture;
    }
}

declare global {
    var pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        decal_decay_remain: number;
        RemoveAllDecalsAndParticles: () => TODO;
    }
}

declare global {
    interface pb2TimeWarpZone extends ClassIdentityProps<"pb2TimeWarpZone"> {
        /** Type is unknown. One known value: 22 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        MoveTo: (xx: number, yy: number) => TODO;
        SetTargetSpeed: (v: number) => TODO;
        readonly target_speed: number;
        decay_speed: number;
        remove: () => TODO;
    }
    var pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        base_range: number;
        blur_range: number;
        target_speed: number;
        /** Type is unknown. One known value: 0 */
        TEXTURE_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        TEXTURE_TIME_NADE_BLACKOUT: TODO;
        /** Type is unknown. One known value: 2 */
        TEXTURE_GRADIENT: TODO;
        CreateWarpZone: (params: TODO) => pb2TimeWarpZone;
        /**
         * @param x   
         * @param y   
         * @param eft (default=null)   
         * @param beL (default=null)   
         * @param efv (default=false)   
         */
        GetSpeedAtPoint: (x: number, y: number, eft?: TODO, beL?: TODO, efv?: TODO) => number;
        /**
         * @param body   
         * @param eft (default=null)   
         */
        TimeWarpFunction: (body: TODO, eft?: TODO) => TODO;
        IsBodyChronoFrozen: (body: TODO) => boolean;
        zones: pb2TimeWarpZone[];
    }
}

declare global {
    interface pb2Timer extends ClassIdentityProps<"pb2Timer"> {
        calls_left: number;
        current_cycle_time_left: number;
        SetCalls: (v: number) => TODO;
        SetTimeUntilNextCycle: (v: number) => TODO;
        SetDefaultCycleDuration: (v: number) => TODO;
        ResetCurrentCycle: () => TODO;
        enabled: boolean;
        Start: () => TODO;
        Stop: () => TODO;
        position_container: TODO;
        readonly type: TODO;
    }
    var pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        /**
         * @param func   
         * @param tim   
         * @param _type (default=0)   
         * @param bql (default=null)   
         */
        CreateTimer: (func: TODO, tim: TODO, _type?: TODO, bql?: TODO) => pb2Timer;
        /** Type is unknown. One known value: 0 */
        TYPE_GAME_TIMESCALE: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_GAME_TIMESCALE_WARPED: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_REAL_WORLD_TIMESCALE: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_FULL_FRAME_TICKS: TODO;
        timers_active_game: pb2Timer[];
        timers_active_world: pb2Timer[];
    }
}

declare global {
    interface pb2UsableSwitch extends ClassIdentityProps<"pb2UsableSwitch"> {
        /** Type is unknown. One known value: 34 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        usable_glow_intensity: TODO;
        is_usable: boolean;
        /** @param Ox (default=null)  */
        Use: (Ox?: TODO) => TODO;
        remove: () => TODO;
        readonly model_frame: TODO;
        SetPosition: (x2: number, y2: number) => TODO;
        readonly is_being_removed: boolean;
    }
    var pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch: (params: TODO) => pb2UsableSwitch;
        switches: pb2UsableSwitch[];
    }
}

declare global {
    var pb2Vision: ClassIdentityProps<"pb2Vision"> & {
        /** Type is unknown. One known value: 1 */
        VISION_EVERYTHING: TODO;
        /** Type is unknown. One known value: 2 */
        VISION_SCREEN_BOX: TODO;
        /** Type is unknown. One known value: 3 */
        VISION_RADIAL_TRACE: TODO;
        /** Type is unknown. One known value: 4 */
        VISION_DIRECTED_TRACE: TODO;
        /** Type is unknown. One known value: ["pb2Vision.VISION_EVERYTHING","pb2Vision.VISION_SCREEN_BOX","pb2Vision.VISION_RADIAL_TRACE","pb2Vision.VISION_DIRECTED_TRACE"] */
        ALL_TYPES: TODO;
    }
}

declare global {
    var pb2Void: ClassIdentityProps<"pb2Void"> & {
        /** Type is unknown. One known value: 102 */
        readonly classid: TODO;
    }
}

declare global {
    interface pb2WaterClass extends ClassIdentityProps<"pb2WaterClass"> {
        readonly shapes: TODO;
    }
    var pb2WaterClass: ClassIdentityProps<"pb2WaterClass"> & {
        /** Type is unknown. One known value: 0 */
        TYPE_WATER: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_TOXIC: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_CORROSIVE: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_LAVA: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_FREEZING: TODO;
        /** Type is unknown. One known value: 5 */
        TYPE_ZERO_GRAVITY: TODO;
        /** Type is unknown. One known value: 6 */
        TYPE_ZERO_GRAVITY_NO_MUFFLE: TODO;
        /** Type is unknown. One known value: ["pb2WaterClass.TYPE_WATER","pb2WaterClass.TYPE_TOXIC","pb2WaterClass.TYPE_CORROSIVE","pb2WaterClass.TYPE_LAVA","pb2WaterClass.TYPE_FREEZING","pb2WaterClass.TYPE_ZERO_GRAVITY","pb2WaterClass.TYPE_ZERO_GRAVITY_NO_MUFFLE"] */
        ALL_TYPES: TODO;
        DeclareWaterClass: (params: TODO) => pb2WaterClass;
    }
}

type pb2WindowBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
    tooltip: TODO;
    readonly type: TODO;
    /**
     * @param cWC   
     * @param cWE (default=true)   
     * @param Hi (default=true)   
     */
    SetVisibilityFor: (cWC: TODO, cWE?: TODO, Hi?: TODO) => TODO;
    SendChanges: () => TODO;
    visible: TODO;
    requires_ctrl_key: TODO;
    ignore_mouse_events: TODO;
    click_animation: TODO;
    /**
     * @param txt   
     * @param size (default=12)   
     * @param cMI (default=false)   
     * @param nu (default=false)   
     */
    SetText: (txt: TODO, size?: TODO, cMI?: TODO, nu?: TODO) => TODO;
    /** @param c (default=null)  */
    remove: (c?: TODO) => TODO;
    readonly parent: TODO;
    readonly childs: TODO;
    GetTypeSpecificStructure: () => TODO;
    SetTypeSpecificStructure: (Ap: TODO) => TODO;
    readonly is_being_removed: boolean;
};

declare global {
    interface pb2Window extends pb2WindowBase<"pb2Window"> {}
    var pb2Window: ClassIdentityProps<"pb2Window"> & {
        /** return type may be different based on the parameters passed in */
        CreateWindow: (params: TODO) => pb2Window;
        /** Type is unknown. One known value: 0 */
        DIALOGBOX: TODO;
        /** Type is unknown. One known value: 1 */
        BUTTON: TODO;
        /** Type is unknown. One known value: 2 */
        SCREEN_BLOCKING_BOX: TODO;
        /** Type is unknown. One known value: 3 */
        SCROLL_LIST: TODO;
        /** Type is unknown. One known value: 4 */
        SCROLLBAR_PAD: TODO;
        /** Type is unknown. One known value: 5 */
        SCROLLBAR_CARET: TODO;
        /** Type is unknown. One known value: 6 */
        CAPTION_IMPORTANT: TODO;
        /** Type is unknown. One known value: 7 */
        CAPTION: TODO;
        /** Type is unknown. One known value: 8 */
        PARAM_PANEL: TODO;
        /** Type is unknown. One known value: 9 */
        DRAG_PARENT: TODO;
        /** Type is unknown. One known value: 10 */
        COLOR_PICKER: TODO;
        /** Type is unknown. One known value: 11 */
        COLOR_PALETTE: TODO;
        /** Type is unknown. One known value: 12 */
        CONTAINER: TODO;
        /** Type is unknown. One known value: 13 */
        HUD_RECT: TODO;
        /** Type is unknown. One known value: 14 */
        SAYBOX: TODO;
        /** Type is unknown. One known value: 15 */
        ICON_BUTTON: TODO;
        /** Type is unknown. One known value: 16 */
        PROGRESS_BAR_SEGMENT: TODO;
        /** Type is unknown. One known value: 17 */
        STRETCH_PARENT: TODO;
        /** Type is unknown. One known value: 18 */
        LEADERBOARD: TODO;
        /** Type is unknown. One known value: 19 */
        LEADERBOARD_PLAYERS_LIST: TODO;
        /** Type is unknown. One known value: 20 */
        CAPTION_CENTERED: TODO;
        /** Type is unknown. One known value: 21 */
        PERFORMANCE_GRAPH: TODO;
        /** Type is unknown. One known value: 22 */
        CLOCK: TODO;
        /** Type is unknown. One known value: 23 */
        BUTTON_HOLO: TODO;
        /** Type is unknown. One known value: 24 */
        HUD_RECT_SOLID: TODO;
        /** Type is unknown. One known value: ["freeedit","wall","movable","region","pusher","bg","water","compound_character","entity","decoration","gun","usable_switch","lamp","barrel","trigger","timer","info","song","image","scale","surface","group","group_expanded","group_item","group_last","team","area","point","vector","circle","fire","window","set","text","bleeding","frozen","water_class","execute","bullet","usercode","comment","code","instance","boolean","camera","bar","nothing","group_non_item","ragdoll","character","controller","ai_preset","skin","skin_userdata","group_tool","surface_old","crate","lamp_dynamic","visible_1","visible_0","locked_0","locked_1","timer_inline","module","animated_point","cross","sound","sound_preloader","movable_sounds_preset","ai_hint","blue_question","window_hint","var","transform_selection","disabled_0","disabled_1","model_preloader","model"] */
        icons16_names: TODO;
        /** maps name (one of pb2Window.icon16_names) to id */
        icons16_names_to_id: {[k: string]: number};
    }
}

declare global {
    interface pb2WindowHint extends ClassIdentityProps<"pb2WindowHint"> {
        readonly x: number;
        readonly y: number;
        readonly text: TODO;
        readonly text_decorated: TODO;
        readonly type: TODO;
        readonly container: TODO;
        readonly attachment_ragdoll: TODO;
        readonly time_current: number;
        readonly time_to_live: number;
        /**
         * @param s   
         * @param cYr (default=false)   
         */
        SetText: (s: TODO, cYr?: TODO) => TODO;
        SetColor: (color: TODO) => TODO;
        Expire: () => TODO;
        readonly appearance_duration: TODO;
        readonly main_color: TODO;
        GetOptions: () => TODO;
        /**
         * @param options   
         * @param cYr (default=false)   
         */
        SetOptions: (options: TODO, cYr?: TODO) => TODO;
        readonly my_vote_id: TODO;
        readonly votes: TODO;
        sync_to_spectators: TODO;
    }
    var pb2WindowHint: ClassIdentityProps<"pb2WindowHint"> & {
        CreateWindowHint: (params: TODO) => pb2WindowHint;
        /** Type is unknown. One known value: 0 */
        CONTAINER_TOP: TODO;
        /** Type is unknown. One known value: 1 */
        CONTAINER_BOTTOM: TODO;
        /** Type is unknown. One known value: 2 */
        CONTAINER_FLOATING_IN_WORLD: TODO;
        /** Type is unknown. One known value: 0 */
        TYPE_WARNING: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_RESPONSE_OPTIONS: TODO;
        /** Type is unknown. One known value: 2 */
        TYPE_SUBTITLE: TODO;
        /** Type is unknown. One known value: 3 */
        TYPE_HINT: TODO;
        /** Type is unknown. One known value: 4 */
        TYPE_HEALTHBAR: TODO;
        COLOR_RED: {
            r: number;
            g: number;
            b: number;
        }
        COLOR_YELLOW: {
            r: number;
            g: number;
            b: number;
        }
        COLOR_GREEN: {
            r: number;
            g: number;
            b: number;
        }
        COLOR_WHITE: {
            r: number;
            g: number;
            b: number;
        }
    }
}

declare global {
    // failed to be included in generation (extractor didn't search for pb2Window subclasses)
    interface pb2WindowIconButton extends pb2WindowBase<"pb2WindowIconButton"> {
        icon: TODO;
    }
}

declare global {
    // failed to be included in generation (extractor didn't search for pb2Window subclasses)
    interface pb2WindowLeaderboard extends pb2WindowBase<"pb2WindowLeaderboard"> {
        round_time: number;
        round_time_max: number;
        players_max: number;
        fields: TODO;
        players: TODO;
        teams: TODO;
        my_player_id: TODO;
        my_spectated_id: TODO;
        graphs: TODO;
    }
    var pb2WindowLeaderboard: ClassIdentityProps<"pb2WindowLeaderboard"> & {
        /** Type is unknown. One known value: 0 */
        ICON_ID_REPORT: TODO;
        /** Type is unknown. One known value: 1 */
        ICON_ID_SPECTATE: TODO;
        /** Type is unknown. One known value: 2 */
        ICON_ID_KICK: TODO;
        /** Type is unknown. One known value: 3 */
        ICON_ID_PROMOTE: TODO;
        /** Type is unknown. One known value: 4 */
        ICON_ID_DEMOTE: TODO;
        /** Type is unknown. One known value: 5 */
        ICON_ID_ELIMINATE: TODO;
        /** Type is unknown. One known value: 6 */
        ICON_ID_COIN: TODO;
        /** Type is unknown. One known value: 0 */
        FIELD_TYPE_NUMERIC: TODO;
        /** Type is unknown. One known value: 1 */
        FIELD_TYPE_NUMERIC_ELIMINATIONS: TODO;
        /** Type is unknown. One known value: 2 */
        FIELD_TYPE_NUMERIC_DEATHS: TODO;
        /** Type is unknown. One known value: 3 */
        FIELD_TYPE_NUMERIC_SCORE: TODO;
        /** Type is unknown. One known value: 4 */
        FIELD_TYPE_TEXT_NICKNAME: TODO;
        /** Type is unknown. One known value: 5 */
        FIELD_TYPE_TEXT: TODO;
        /** Type is unknown. One known value: 6 */
        FIELD_TYPE_TEXT_CENTERED: TODO;
        /** Type is unknown. One known value: 7 */
        FIELD_TYPE_BUTTON: TODO;
        /** Type is unknown. One known value: 0 */
        FIELD_WIDTH_AUTO: TODO;
        /** Type is unknown. One known value: -1 */
        FIELD_TEAM_ID_SPECTATORS: TODO;
        /** Type is unknown. One known value: ["pb2WindowLeaderboard.ICON_ID_REPORT","pb2WindowLeaderboard.ICON_ID_SPECTATE","pb2WindowLeaderboard.ICON_ID_KICK","pb2WindowLeaderboard.ICON_ID_PROMOTE","pb2WindowLeaderboard.ICON_ID_DEMOTE","pb2WindowLeaderboard.ICON_ID_ELIMINATE","pb2WindowLeaderboard.ICON_ID_COIN","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_ELIMINATIONS","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_DEATHS","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_SCORE","pb2WindowLeaderboard.FIELD_TYPE_TEXT_NICKNAME","pb2WindowLeaderboard.FIELD_TYPE_TEXT","pb2WindowLeaderboard.FIELD_TYPE_TEXT_CENTERED","pb2WindowLeaderboard.FIELD_TYPE_BUTTON","pb2WindowLeaderboard.FIELD_WIDTH_AUTO","pb2WindowLeaderboard.FIELD_TEAM_ID_SPECTATORS"] */
        ALL_TYPES: TODO;
    }
}

declare global {
    var pb2_mp: ClassIdentityProps<"pb2_mp"> & {
        /** Type is unknown. One known value: 0 */
        GAME_FPS: TODO;
        /** Type is unknown. One known value: 1 */
        FUNCTION_LINEAR: TODO;
        /** Type is unknown. One known value: 2 */
        FUNCTION_MORPH: TODO;
        /** Type is unknown. One known value: 3 */
        FUNCTION_INVERSEMORPH: TODO;
        ui_offset_x: number;
        ui_offset_y: number;
    }
}
