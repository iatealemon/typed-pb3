export { };

declare global {
    interface Math {
        sumPrecise: () => unknown;
        POSITIVE_INFINITY: unknown;
        NEGATIVE_INFINITY: unknown;
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
        /** Type is unknown. One known value: null */
        any: unknown;
    }
    interface ErrorConstructor {
        captureStackTrace: () => unknown;
        /** Type is unknown. One known value: 10 */
        stackTraceLimit: unknown;
    }
}
