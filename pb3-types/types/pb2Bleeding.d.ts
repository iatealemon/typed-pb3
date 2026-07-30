export { };

import type { ClassIdentityProps } from "./internal/helper";

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
