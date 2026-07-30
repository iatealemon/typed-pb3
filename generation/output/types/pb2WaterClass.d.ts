export { };

import type { ClassIdentityProps } from "./internal/helper";

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
