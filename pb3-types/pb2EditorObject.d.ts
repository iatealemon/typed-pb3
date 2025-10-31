export {};

declare global {
    /** unfinished */
    class pb2EditorObject {
        constructor(...args: unknown[]);

        _class: "pb2EditorObject";
        toString(): string;
        readonly attributes: unknown;
        readonly children: unknown;
        readonly Recreate: unknown;
        readonly GetDeepCopy: unknown;
        readonly SetUnsetDefaultAttributes: unknown;
        readonly push: unknown;
        readonly unshift: unknown;
        readonly RemoveChild: unknown;
        readonly ListChildren: unknown;
        readonly GetUniqueName: unknown;
        readonly FindChild: unknown;
        readonly FindAllChildren: unknown;
        readonly DragPoints: unknown;
        readonly fromString: unknown;
        readonly fromXMLNode: unknown;
        
        /** bugged, the returned value shows up as "Error" */
        static GetModificationWorldCopy(): pb2EditorObject;
    }
}