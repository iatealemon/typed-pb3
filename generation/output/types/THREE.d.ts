export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface Vector3 extends ClassIdentityProps<"Vector3"> {
        /** Type is unknown. One known value: true */
        isVector3: unknown;
        set: (x: unknown, y: unknown, z: unknown) => unknown;
        setScalar: (scalar: unknown) => unknown;
        setX: (x: unknown) => unknown;
        setY: (y: unknown) => unknown;
        setZ: (z: unknown) => unknown;
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
    var THREE: {
        Vector3: {
            new (): Vector3;

        }
        Matrix4: {
            new (): Matrix4;

        }
        Euler: {
            new (): Euler;

        }

    }
}
