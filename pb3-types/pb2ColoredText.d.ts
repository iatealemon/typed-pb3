export {};

declare global {
    /** unfinished */
    class pb2ColoredText {
        constructor(...args: unknown[]);

        _class: "pb2ColoredText";
        toString(): string;
        text: unknown;
        colors: unknown;
        CapitalRedColors(...args: unknown[]): unknown;
        RandomColors(...args: unknown[]): unknown;
        WhiteColors(...args: unknown[]): unknown;
        FromTagged(...args: unknown[]): unknown;
        GetTagged(...args: unknown[]): unknown;
    }
}

