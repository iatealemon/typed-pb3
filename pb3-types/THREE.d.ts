import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    namespace THREE {
        class Euler {}
        class Matrix4 {}
        class Vector3 {
            add(...args: unknown[]): unknown;
            addScalar(...args: unknown[]): unknown;
            addScaledVector(...args: unknown[]): unknown;
            addVectors(...args: unknown[]): unknown;
            angleTo(...args: unknown[]): unknown;
            applyAxisAngle(...args: unknown[]): unknown;
            applyEuler(...args: unknown[]): unknown;
            applyMatrix3(...args: unknown[]): unknown;
            applyMatrix4(...args: unknown[]): unknown;
            applyProjection(...args: unknown[]): unknown;
            applyQuaternion(...args: unknown[]): unknown;
            ceil(...args: unknown[]): unknown;
            clamp(...args: unknown[]): unknown;
            clampLength(...args: unknown[]): unknown;
            clampScalar(...args: unknown[]): unknown;
            clone(...args: unknown[]): unknown;
            copy(...args: unknown[]): unknown;
            cross(...args: unknown[]): unknown;
            crossVectors(...args: unknown[]): unknown;
            distanceTo(...args: unknown[]): unknown;
            distanceToManhattan(...args: unknown[]): unknown;
            distanceToSquared(...args: unknown[]): unknown;
            divide(...args: unknown[]): unknown;
            divideScalar(...args: unknown[]): unknown;
            dot(...args: unknown[]): unknown;
            equals(...args: unknown[]): unknown;
            floor(...args: unknown[]): unknown;
            fromArray(...args: unknown[]): unknown;
            fromAttribute(...args: unknown[]): unknown;
            fromBufferAttribute(...args: unknown[]): unknown;
            getColumnFromMatrix(...args: unknown[]): unknown;
            getComponent(...args: unknown[]): unknown;
            getPositionFromMatrix(...args: unknown[]): unknown;
            getScaleFromMatrix(...args: unknown[]): unknown;
            readonly isVector3: boolean;
            length(...args: unknown[]): unknown;
            lengthManhattan(...args: unknown[]): unknown;
            lengthSq(...args: unknown[]): unknown;
            lerp(...args: unknown[]): unknown;
            lerpVectors(...args: unknown[]): unknown;
            max(...args: unknown[]): unknown;
            min(...args: unknown[]): unknown;
            multiply(...args: unknown[]): unknown;
            multiplyScalar(...args: unknown[]): unknown;
            multiplyVectors(...args: unknown[]): unknown;
            negate(...args: unknown[]): unknown;
            normalize(...args: unknown[]): unknown;
            project(...args: unknown[]): unknown;
            projectOnPlane(...args: unknown[]): unknown;
            projectOnVector(...args: unknown[]): unknown;
            reflect(...args: unknown[]): unknown;
            round(...args: unknown[]): unknown;
            roundToZero(...args: unknown[]): unknown;
            set(x: number, y: number, z: number): Vector3;
            setComponent(...args: unknown[]): unknown;
            setEulerFromQuaternion(...args: unknown[]): unknown;
            setEulerFromRotationMatrix(...args: unknown[]): unknown;
            setFromCylindrical(...args: unknown[]): unknown;
            setFromMatrixColumn(...args: unknown[]): unknown;
            setFromMatrixPosition(...args: unknown[]): unknown;
            setFromMatrixScale(...args: unknown[]): unknown;
            setFromSpherical(...args: unknown[]): unknown;
            setLength(...args: unknown[]): unknown;
            setScalar(scalar: number): Vector3;
            setX(x: number): Vector3;
            setY(y: number): Vector3;
            setZ(z: number): Vector3;
            sub(...args: unknown[]): unknown;
            subScalar(...args: unknown[]): unknown;
            subVectors(...args: unknown[]): unknown;
            toArray(...args: unknown[]): unknown;
            transformDirection(...args: unknown[]): unknown;
            unproject(...args: unknown[]): unknown;
            x: number;
            y: number;
            z: number;
        }
        
        type MeshInstance = ClassIdentityProps<"pb2Entity"> & {
            lookAt(...args: unknown[]): unknown;
            readonly matrix: unknown; // bugged, accessing crashes
            readonly matrixWorld: unknown; // bugged, accessing crashes
            readonly parent: unknown;
            readonly position: Vector3;
            readonly rotation: unknown;
            readonly scale: unknown;
            visible: unknown;
        };

        /**
         * unfinished  
         * represents the instance of THREE.Object3D.
         */
        type Object3DInstance = ClassIdentityProps<"Object3D"> & {
            readonly parent: unknown;
            lookAt(...args: unknown[]): unknown;
            readonly position: unknown;
            readonly rotation: unknown;
            readonly scale: unknown;
            readonly matrix: unknown;
            readonly matrixWorld: unknown;
            visible: unknown;
        };
    }
}