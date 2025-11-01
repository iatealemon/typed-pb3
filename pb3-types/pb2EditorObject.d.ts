export {};

declare global {
    /** unfinished */
    class pb2EditorObject {
        constructor(...args: unknown[]);

        _class: "pb2EditorObject";
        toString(): string;
        readonly attributes: unknown;
        readonly children: unknown;
        Recreate(...args: unknown[]): unknown;
        GetDeepCopy(...args: unknown[]): unknown;
        SetUnsetDefaultAttributes(...args: unknown[]): unknown;
        push(...args: unknown[]): unknown;
        unshift(...args: unknown[]): unknown;
        RemoveChild(...args: unknown[]): unknown;
        ListChildren(...args: unknown[]): unknown;
        GetUniqueName(...args: unknown[]): unknown;
        FindChild(...args: unknown[]): unknown;
        FindAllChildren(...args: unknown[]): unknown;
        DragPoints(...args: unknown[]): unknown;
        fromString(...args: unknown[]): unknown;
        fromXMLNode(...args: unknown[]): unknown;
        
        /** bugged, the returned value shows up as "Error" */
        static GetModificationWorldCopy(): pb2EditorObject;
    }
}