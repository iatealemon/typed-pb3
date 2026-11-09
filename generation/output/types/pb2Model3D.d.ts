export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Model3D extends ClassIdentityProps<"pb2Model3D"> {
        readonly vertices: TODO;
        readonly normals: TODO;
        readonly uvs: TODO;
        readonly uvs2: TODO;
        readonly indices: TODO;
        FlipYZ: () => TODO;
        SetEmptyVectors: () => TODO;
        CopyContent: (source: TODO) => TODO;
        AddPos: (x: TODO, y: TODO, z: TODO) => TODO;
        FlipPolygons: () => TODO;
        /**
         * @param cHy   
         * @param eyg (default=true)   
         * @param eyh (default=true)   
         */
        AddModelContents: (cHy: TODO, eyg?: TODO, eyh?: TODO) => TODO;
        /**
         * @param _radius   
         * @param _ewl (default=64)   
         * @param _ewm (default=24)   
         * @param _ewn (default=true)   
         */
        BuildSphere: (_radius: TODO, _ewl?: TODO, _ewm?: TODO, _ewn?: TODO) => TODO;
        ExtractIsolatedGeometries: (params: TODO) => TODO;
        GetBounds: () => TODO;
    }
    var pb2Model3D: ClassIdentityProps<"pb2Model3D"> & {
        CreateModel: () => TODO;
        IsModelExists: (id: TODO) => TODO;
        GetModel: (id: TODO) => TODO;
        SetModel: (id: TODO, cHy: TODO) => TODO;
    }
}
