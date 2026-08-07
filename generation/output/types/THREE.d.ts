export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface Vector3 extends ClassIdentityProps<"Vector3"> {
        /** Type is unknown. One known value: true */
        isVector3: TODO;
        set: (x: TODO, y: TODO, z: TODO) => TODO;
        setScalar: (scalar: TODO) => TODO;
        setX: (x: TODO) => TODO;
        setY: (y: TODO) => TODO;
        setZ: (z: TODO) => TODO;
        setComponent: (index: TODO, value: TODO) => TODO;
        getComponent: (index: TODO) => TODO;
        clone: () => TODO;
        copy: (v: TODO) => TODO;
        add: (v: TODO, w: TODO) => TODO;
        addScalar: (s: TODO) => TODO;
        addVectors: (a: TODO, b: TODO) => TODO;
        addScaledVector: (v: TODO, s: TODO) => TODO;
        sub: (v: TODO, w: TODO) => TODO;
        subScalar: (s: TODO) => TODO;
        subVectors: (a: TODO, b: TODO) => TODO;
        multiply: (v: TODO, w: TODO) => TODO;
        multiplyScalar: (scalar: TODO) => TODO;
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
        divideScalar: (scalar: TODO) => TODO;
        min: (v: TODO) => TODO;
        max: (v: TODO) => TODO;
        clamp: (min: TODO, max: TODO) => TODO;
        clampScalar: (minVal: TODO, maxVal: TODO) => TODO;
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
    }
    interface Matrix4 extends ClassIdentityProps<"Matrix4"> {
        /** Type is unknown. One known value: true */
        isMatrix4: TODO;
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
        multiplyScalar: (s: TODO) => TODO;
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
        x: TODO;
        y: TODO;
        z: TODO;
        order: TODO;
        /** Type is unknown. One known value: true */
        isEuler: TODO;
        set: (x: TODO, y: TODO, z: TODO, order: TODO) => TODO;
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
        readonly position: TODO;
        readonly rotation: TODO;
        readonly scale: TODO;
        readonly matrix: TODO;
        readonly matrixWorld: TODO;
        visible: TODO;
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
