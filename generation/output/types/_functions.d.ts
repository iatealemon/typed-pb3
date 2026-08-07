export { };

import type { TODO } from "./internal/helper";

declare global {
    var trace: () => TODO;
    var warn: (...args: TODO[]) => TODO;
    var error: (...args: TODO[]) => TODO;
    var pb2DebugPermissionVerify: () => TODO;
    /** @param bV (default=false)  */
    var GetMilliseconds: (bV?: TODO) => TODO;
    /** @param bV (default=false)  */
    var GetTime30: (bV?: TODO) => TODO;
    var GetIngameTime: () => TODO;
    var _pb2ExecTimeTest: () => TODO;
    var _pb2DebugHook: (coK: TODO, coL: TODO) => TODO;
    var _pb2DebugLastPtr: (i: TODO) => TODO;
    var _pb2DebugReturn: (value: TODO) => TODO;
    var _pb2DebugPopUp: (...args: TODO[]) => TODO;
    var _pb2DebugPopUpOnce: (arg: TODO) => TODO;
    /**
     * @param _coV   
     * @param _cpk (default=1)   
     * @param _cpn (default=1)   
     * @param _cpo (default=null)   
     * @param _cpp (default=1)   
     */
    var _pb2T: (_coV: TODO, _cpk?: TODO, _cpn?: TODO, _cpo?: TODO, _cpp?: TODO) => TODO;
    var _pb2TU: (t: TODO) => TODO;
    var _pb2ClientSideTrigger: (f: TODO) => TODO;
    /**
     * @param x   
     * @param y   
     * @param color (default=0xFF0000)   
     * @param size (default=3)   
     * @param z (default=-1000)   
     * @param opacity (default=0.5)   
     * @param eIe (default=0)   
     */
    var DrawDebugPoint: (x: TODO, y: TODO, color?: TODO, size?: TODO, z?: TODO, opacity?: TODO, eIe?: TODO) => TODO;
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
    var DrawDebugLine: (ax: TODO, ay: TODO, bx: TODO, by: TODO, color?: TODO, opacity?: TODO, y?: TODO, eIe?: TODO) => TODO;
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
    var DrawDebugArrow: (ax: TODO, ay: TODO, bx: TODO, by: TODO, color?: TODO, opacity?: TODO, y?: TODO, eIe?: TODO) => TODO;
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
    var DrawDebugRect: (minx: TODO, miny: TODO, maxx: TODO, maxy: TODO, color?: TODO, opacity?: TODO, y?: TODO, eIe?: TODO) => TODO;
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
    var DrawDebugRectByDimensions: (minx: TODO, miny: TODO, w: TODO, h: TODO, color?: TODO, opacity?: TODO, y?: TODO, eIe?: TODO) => TODO;
}
