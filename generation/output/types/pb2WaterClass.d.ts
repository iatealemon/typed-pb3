export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

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
        DeclareWaterClass: (params: TODO) => TODO;
    }
}
