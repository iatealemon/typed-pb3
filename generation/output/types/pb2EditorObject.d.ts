export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2EditorObject extends ClassIdentityProps<"pb2EditorObject"> {
        readonly attributes: TODO;
        readonly children: TODO;
        Recreate: (params: TODO) => TODO;
        GetDeepCopy: () => TODO;
        SetUnsetDefaultAttributes: () => TODO;
        push: (obj: TODO) => TODO;
        unshift: (obj: TODO) => TODO;
        RemoveChild: (rem: TODO) => TODO;
        /**
         * @param where   
         * @param selected (default=null)   
         */
        ListChildren: (where: TODO, selected?: TODO) => TODO;
        /**
         * @param exA (default='Accessory ')   
         * @param exq (default='name')   
         */
        GetUniqueName: (exA?: TODO, exq?: TODO) => TODO;
        /**
         * @param class_name   
         * @param exi (default='*')   
         * @param exq (default='id')   
         */
        FindChild: (class_name: TODO, exi?: TODO, exq?: TODO) => TODO;
        /**
         * @param class_name   
         * @param lW (default=false)   
         */
        FindAllChildren: (class_name: TODO, lW?: TODO) => TODO;
        DragPoints: (wx: TODO, wy: TODO) => TODO;
        fromString: (xml_str: TODO) => TODO;
        /**
         * @param bdI   
         * @param exn (default=false)   
         */
        fromXMLNode: (bdI: TODO, exn?: TODO) => TODO;
    }
    var pb2EditorObject: {
        new (params: TODO): pb2EditorObject;
        GetModificationWorldCopy: () => TODO;
    }
}
