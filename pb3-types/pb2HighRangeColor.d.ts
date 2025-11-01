export {};

declare global {
    /** unfinished */
    class pb2HighRangeColor {
        constructor(...args: unknown[]);

        _class: "pb2HighRangeColor";
        toString(): string;
        r: unknown;
        g: unknown;
        b: unknown;
        clone(...args: unknown[]): unknown;
        addRGB(...args: unknown[]): unknown;
        from_uint(...args: unknown[]): unknown;
        _uint: unknown;
        limit(...args: unknown[]): unknown;
        multiply(...args: unknown[]): unknown;
        multiplyColor(...args: unknown[]): unknown;
        add(...args: unknown[]): unknown;
        addColor(...args: unknown[]): unknown;
        average(...args: unknown[]): unknown;
        GetAverageValue(...args: unknown[]): unknown;
        rand(...args: unknown[]): unknown;
        setRGB(...args: unknown[]): unknown;
    }
}