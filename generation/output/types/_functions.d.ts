export { };

declare global {
    var trace: () => unknown;
    var warn: (...args: unknown[]) => unknown;
    var error: (...args: unknown[]) => unknown;
    var pb2DebugPermissionVerify: () => unknown;
    /** @param bV (default=false)  */
    var GetMilliseconds: (bV?: unknown) => unknown;
    /** @param bV (default=false)  */
    var GetTime30: (bV?: unknown) => unknown;
    var GetIngameTime: () => unknown;
    var _pb2ExecTimeTest: () => unknown;
    var _pb2DebugHook: (coK: unknown, coL: unknown) => unknown;
    var _pb2DebugLastPtr: (i: unknown) => unknown;
    var _pb2DebugReturn: (value: unknown) => unknown;
    var _pb2DebugPopUp: (...args: unknown[]) => unknown;
    var _pb2DebugPopUpOnce: (arg: unknown) => unknown;
    /**
     * @param _coV   
     * @param _cpk (default=1)   
     * @param _cpn (default=1)   
     * @param _cpo (default=null)   
     * @param _cpp (default=1)   
     */
    var _pb2T: (_coV: unknown, _cpk?: unknown, _cpn?: unknown, _cpo?: unknown, _cpp?: unknown) => unknown;
    var _pb2TU: (t: unknown) => unknown;
    var _pb2ClientSideTrigger: (f: unknown) => unknown;
    /**
     * @param x   
     * @param y   
     * @param color (default=0xFF0000)   
     * @param size (default=3)   
     * @param z (default=-1000)   
     * @param opacity (default=0.5)   
     * @param eIe (default=0)   
     */
    var DrawDebugPoint: (x: unknown, y: unknown, color?: unknown, size?: unknown, z?: unknown, opacity?: unknown, eIe?: unknown) => unknown;
    /**
     * @param ax   
     * @param ay   
     * @param bx   
     * @param by   
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123)   
     * @param eIe (default=0)   
     */
    var DrawDebugLine: (ax: unknown, ay: unknown, bx: unknown, by: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
    /**
     * @param ax   
     * @param ay   
     * @param bx   
     * @param by   
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123)   
     * @param eIe (default=0)   
     */
    var DrawDebugArrow: (ax: unknown, ay: unknown, bx: unknown, by: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
    /**
     * @param minx   
     * @param miny   
     * @param maxx   
     * @param maxy   
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123)   
     * @param eIe (default=0)   
     */
    var DrawDebugRect: (minx: unknown, miny: unknown, maxx: unknown, maxy: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
    /**
     * @param minx   
     * @param miny   
     * @param w   
     * @param h   
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123)   
     * @param eIe (default=0)   
     */
    var DrawDebugRectByDimensions: (minx: unknown, miny: unknown, w: unknown, h: unknown, color?: unknown, opacity?: unknown, y?: unknown, eIe?: unknown) => unknown;
}
