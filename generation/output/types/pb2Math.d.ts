export { };

import type { TODO } from "./internal/helper";

declare global {
    var pb2Math: {
        SegmentBBoxIntersection: (x: TODO, y: TODO, tox: TODO, toy: TODO, minx: TODO, miny: TODO, maxx: TODO, maxy: TODO) => TODO;
        GetProjectionOnSegment: (p: TODO, v: TODO, w: TODO) => TODO;
        GetProjectionOnSegmentTo: (p: TODO, v: TODO, w: TODO, ret: TODO) => TODO;
        Dist2D: (x1: TODO, y1: TODO, x2: TODO, y2: TODO) => TODO;
        Dist3D: (x1: TODO, y1: TODO, z1: TODO, x2: TODO, y2: TODO, z2: TODO) => TODO;
        Dist2D_Vector: (tox: TODO, toy: TODO) => TODO;
        inDist2D: (x1: TODO, y1: TODO, x2: TODO, y2: TODO, rad: TODO) => TODO;
    }
}
