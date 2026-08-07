export { };

import type { TODO } from "./internal/helper";

declare global {
    interface Math {
        sumPrecise: () => TODO;
        POSITIVE_INFINITY: TODO;
        NEGATIVE_INFINITY: TODO;
        randomIntegerWithin: (a: TODO, b: TODO) => TODO;
        randomWithin: (a: TODO, b: TODO) => TODO;
    }
    interface StringConstructor {
        eoX: (a: TODO, b: TODO) => TODO;
    }
    interface String {
        split_test: (d: TODO) => TODO;
    }
    interface Array<T> {
        join_test: () => TODO;
        /** Type is unknown. One known value: null */
        any: TODO;
    }
    interface ErrorConstructor {
        captureStackTrace: () => TODO;
        /** Type is unknown. One known value: 10 */
        stackTraceLimit: TODO;
    }
}
