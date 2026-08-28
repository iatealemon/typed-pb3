export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

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
         * @param type (default=pb2Bleeding.TYPE_BLOOD)  
         */
        BleedAt: (
            mesh: THREE.Mesh, 
            dXy: {box2d_body: b2Body} | number, 
            duration: number, 
            lD: ColorTransform, 
            dXG: pb2Character | pb2Entity, 
            is_glowing: boolean, 
            dXr: pb2Ragdoll | pb2Entity,
            type?: TODO
        ) => void;
        /** Type is unknown. One known value: 0 */
        TYPE_BLOOD: TODO;
        /** Type is unknown. One known value: 1 */
        TYPE_WATER: TODO;
        /** Type is unknown. One known value: ["pb2Bleeding.TYPE_BLOOD","pb2Bleeding.TYPE_WATER"] */
        ALL_TYPES: TODO;
    }
}
