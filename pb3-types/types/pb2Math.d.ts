export { };

import type { TODO } from "./internal/helper";

declare global {
    var pb2Math: {
        SegmentBBoxIntersection: (x: number, y: number, tox: number, toy: number, minx: number, miny: number, maxx: number, maxy: number) => TODO;
        GetProjectionOnSegment: (p: TODO, v: TODO, w: TODO) => TODO;
        GetProjectionOnSegmentTo: (p: TODO, v: TODO, w: TODO, ret: TODO) => TODO;
        Dist2D: (x1: number, y1: number, x2: number, y2: number) => number;
        Dist3D: (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => number;
        Dist2D_Vector: (tox: number, toy: number) => number;
        inDist2D: (x1: number, y1: number, x2: number, y2: number, rad: number) => TODO;
    }
}
