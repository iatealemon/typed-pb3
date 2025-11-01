import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    namespace THREE {
        class Euler {}
        class Matrix4 {}
        class Vector3 {}

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