export {};

declare global {
    /** unfinished */
    class pb2Color {
        constructor(u?: number);

        _class: "pb2Color";
        toString(): string;
        r: unknown;
        g: unknown;
        b: unknown;
        _uint: unknown;
        clone(...args: unknown[]): unknown;
        multiply(...args: unknown[]): unknown;
        average(...args: unknown[]): unknown;
        toColorTransform(...args: unknown[]): unknown;
        random(...args: unknown[]): unknown;
        multUpToMax(...args: unknown[]): unknown;
        setRGB(...args: unknown[]): unknown;
        isEqual(...args: unknown[]): unknown;
    }
}