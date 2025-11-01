export {};

declare global {
    /** unfinished */
    class pb2HeroInfoBar {
        constructor(...args: unknown[]);

        _class: "pb2HeroInfoBar";
        toString(): string;
        readonly classid: unknown;
        title: unknown;
        value: unknown;
        value_max: unknown;
        value_handicap: unknown;
        color: unknown;
        color_border: unknown;
        color_delta: unknown;
        color_handicap: unknown;
        color_title: unknown;
        
        static readonly TYPE_SERVER_VAR: any;
        static readonly TYPE_SPACER: any;
    }
}