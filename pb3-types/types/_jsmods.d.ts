export { };

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
        eoX: (a: unknown, b: unknown) => unknown;
    }
    interface String {
        split_test: (d: unknown) => unknown;
    }
    interface Array<T> {
        join_test: () => unknown;
        /** Getter which returns a random element. Proper usage example: [ 0, 1, 2 ].any */
        any: T;
    }
    interface ErrorConstructor {
        captureStackTrace: () => unknown;
        stackTraceLimit: number;
    }
}
