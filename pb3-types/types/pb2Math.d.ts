export { };

declare global {
    var pb2Math: {
        SegmentBBoxIntersection: (x: unknown, y: unknown, tox: unknown, toy: unknown, minx: unknown, miny: unknown, maxx: unknown, maxy: unknown) => unknown;
        GetProjectionOnSegment: (p: unknown, v: unknown, w: unknown) => unknown;
        GetProjectionOnSegmentTo: (p: unknown, v: unknown, w: unknown, ret: unknown) => unknown;
        Dist2D: (x1: unknown, y1: unknown, x2: unknown, y2: unknown) => unknown;
        Dist3D: (x1: unknown, y1: unknown, z1: unknown, x2: unknown, y2: unknown, z2: unknown) => unknown;
        Dist2D_Vector: (tox: unknown, toy: unknown) => unknown;
        inDist2D: (x1: unknown, y1: unknown, x2: unknown, y2: unknown, rad: unknown) => unknown;
    }
}
