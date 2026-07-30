export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2EditorObject extends ClassIdentityProps<"pb2EditorObject"> {
        readonly attributes: unknown;
        readonly children: unknown;
        Recreate: (params: unknown) => unknown;
        GetDeepCopy: () => unknown;
        SetUnsetDefaultAttributes: () => unknown;
        push: (obj: unknown) => unknown;
        unshift: (obj: unknown) => unknown;
        RemoveChild: (rem: unknown) => unknown;
        /**
         * @param where   
         * @param selected (default=null)   
         */
        ListChildren: (where: unknown, selected?: unknown) => unknown;
        /**
         * @param exA (default='Accessory ')   
         * @param exq (default='name')   
         */
        GetUniqueName: (exA?: unknown, exq?: unknown) => unknown;
        /**
         * @param class_name   
         * @param exi (default='*')   
         * @param exq (default='id')   
         */
        FindChild: (class_name: unknown, exi?: unknown, exq?: unknown) => unknown;
        /**
         * @param class_name   
         * @param lW (default=false)   
         */
        FindAllChildren: (class_name: unknown, lW?: unknown) => unknown;
        DragPoints: (wx: unknown, wy: unknown) => unknown;
        fromString: (xml_str: unknown) => unknown;
        /**
         * @param bdI   
         * @param exn (default=false)   
         */
        fromXMLNode: (bdI: unknown, exn?: unknown) => unknown;
    }
    var pb2EditorObject: {
        new (params: unknown): pb2EditorObject;
        GetModificationWorldCopy: () => unknown;
    }
}
