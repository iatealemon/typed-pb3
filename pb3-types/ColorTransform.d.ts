export {};

declare global {
    /** unfinished */
    class ColorTransform {
        constructor(...args: unknown[]);

        _class: "ColorTransform";
        toString(): string;
        redMultiplier: number;
        greenMultiplier: number;
        blueMultiplier: number;
        redOffset: number;
        greenOffset: number;
        blueOffset: number;
        clone: unknown;
        multiplyHighRangeColor: unknown;
    }
}