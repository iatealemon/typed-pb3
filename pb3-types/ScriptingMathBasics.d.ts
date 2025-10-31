export {};

declare global {
    class Point extends b2Vec2 {
        constructor(params: {
            x: number,
            y: number,
        });

        /** === "Point" */
        readonly _class: string;
        x: number;
        y: number;
        //r: unknown; // made accessible but doesn't actually exist
    }

    class Vector extends Point {
        constructor(params: {
            x: number,
            y: number,
        });

        readonly _class: "Circle";
        x: number;
        y: number;
        //r: unknown; // made accessible but doesn't actually exist
    }

    class Circle extends Point {
        constructor(params: {
            x: number,
            y: number,
            r: number,
        });

        readonly _class: "Circle";
        x: number;
        y: number;
        r: number;
    }
}