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
        readonly clone: unknown;
        _uint: unknown;
        readonly multiply: unknown;
        readonly average: unknown;
        readonly toColorTransform: unknown;
        readonly random: unknown;
        readonly multUpToMax: unknown;
        readonly setRGB: unknown;
        readonly isEqual: unknown;
    }
}