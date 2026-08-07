export { };

import type { TODO } from "./internal/helper";

declare global {
    interface Math {
        sumPrecise: (numbers: Iterable<number>) => number;
        /** Accessing this throws an error */
        POSITIVE_INFINITY: number;
        /** Accessing this throws an error */
        NEGATIVE_INFINITY: number;
        randomIntegerWithin: (a: number, b: number) => number;
        randomWithin: (a: number, b: number) => number;
    }
    interface StringConstructor {
        eoX: (a: TODO, b: TODO) => TODO;
    }
    interface String {
        split_test: (d: TODO) => TODO;
    }
    interface Array<T> {
        join_test: () => TODO;
        /** Getter which returns a random element. Proper usage example: [ 0, 1, 2 ].any */
        get any(): T;
    }
    interface ErrorConstructor {
        captureStackTrace: () => TODO;
        stackTraceLimit: number;
    }
}
