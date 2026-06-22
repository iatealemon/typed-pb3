import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    const pb2Bleeding: ClassIdentityProps<"pb2Bleeding"> & {
        /**
         * @param mesh THREE mesh. gives position
         * @param dXy object containing box2d_body or index of box2d_bodies in dXG. used to add velocity to blood particles
         * @param duration 
         * @param lD color. new pb2Color(0xff0000).toColorTransform
         * @param dXG bleeding character / entity. not sure if type is correct
         * @param is_glowing 
         * @param dXr owner ragdoll / entity ? (if bU() === true (maybe means frozen) then no particles). not sure if type is correct
         */
        BleedAt(
            mesh: THREE.MeshInstance, 
            dXy: {box2d_body: b2BodyInstance} | number, 
            duration: number, 
            lD: ColorTransform, 
            dXG: pb2CharacterInstance | pb2EntityInstance,
            is_glowing: boolean, 
            dXr: pb2RagdollInstance | pb2EntityInstance
        ): void;
    };
}
