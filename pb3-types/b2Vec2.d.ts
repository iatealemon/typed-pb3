export {};

declare global {
    class b2Vec2 {
        constructor(x?: number, y?: number);

        /** === "b2Vec2" */
        readonly _class: string;
        x: number;
        y: number;
        //r: unknown; // made accessible but doesn't actually exist
    }
}