export { };

declare global {
    var pb2Math: {
        SegmentBBoxIntersection: (x: number, y: number, tox: number, toy: number, minx: number, miny: number, maxx: number, maxy: number) => unknown;
        GetProjectionOnSegment: (p: unknown, v: unknown, w: unknown) => unknown;
        GetProjectionOnSegmentTo: (p: unknown, v: unknown, w: unknown, ret: unknown) => unknown;
        Dist2D: (x1: number, y1: number, x2: number, y2: number) => number;
        Dist3D: (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => number;
        Dist2D_Vector: (tox: number, toy: number) => number;
        inDist2D: (x1: number, y1: number, x2: number, y2: number, rad: number) => unknown;
    }
}
