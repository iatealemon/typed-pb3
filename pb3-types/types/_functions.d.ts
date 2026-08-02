export { };

declare global {
    /** equals console.log */
    var trace: (...args: any[]) => void;
    var warn: (...args: any[]) => void;
    var error: (...args: unknown[]) => unknown;
    var pb2DebugPermissionVerify: () => unknown;
    /** @param bV (default=false)  */
    var GetMilliseconds: (bV?: boolean) => unknown;
    /** @param bV (default=false)  */
    var GetTime30: (bV?: boolean) => unknown;
    var GetIngameTime: () => number;
    var _pb2ExecTimeTest: () => true;
    var _pb2DebugHook: (coK: unknown, coL: unknown) => void;
    var _pb2DebugLastPtr: (i: number) => void;
    var _pb2DebugReturn: (value: unknown) => void;
    var _pb2DebugPopUp: (...args: unknown[]) => void;
    var _pb2DebugPopUpOnce: (arg: unknown) => void;
    /**
     * @param _coV   
     * @param _cpk (default=1)   
     * @param _cpn (default=1)   
     * @param _cpo (default=null)   
     * @param _cpp (default=1)   
     */
    var _pb2T: (_coV: (...args: any[]) => any, _cpk?: unknown, _cpn?: unknown, _cpo?: unknown, _cpp?: unknown) => unknown;
    /** responsible for throwing error if a trigger is called before it's spawned */
    var _pb2TU: (t: string) => never;
    var _pb2ClientSideTrigger: (f: unknown) => unknown;
    /**
     * @param x   
     * @param y   
     * @param color (default=0xFF0000)   
     * @param size (default=3)   
     * @param z (default=-1000) depth  
     * @param opacity (default=0.5)   
     * @param eIe (default=0) time to display  
     */
    var DrawDebugPoint: (x: number, y: number, color?: unknown, size?: number, z?: number, opacity?: number, eIe?: number) => unknown;
    /**
     * @param ax start x  
     * @param ay start y  
     * @param bx end x  
     * @param by end y  
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugLine: (ax: number, ay: number, bx: number, by: number, color?: unknown, opacity?: number, y?: number, eIe?: number) => unknown;
    /**
     * @param ax start x  
     * @param ay start y  
     * @param bx end x  
     * @param by end y  
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugArrow: (ax: number, ay: number, bx: number, by: number, color?: unknown, opacity?: number, y?: number, eIe?: number) => unknown;
    /**
     * @param minx lower x bound  
     * @param miny lower y bound  
     * @param maxx upper x bound  
     * @param maxy upper y bound  
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugRect: (minx: number, miny: number, maxx: number, maxy: number, color?: unknown, opacity?: number, y?: number, eIe?: number) => unknown;
    /**
     * @param minx lower x bound  
     * @param miny lower y bound  
     * @param w   
     * @param h   
     * @param color (default=0xFF0000)   
     * @param opacity (default=0.25)   
     * @param y (default=-123) depth  
     * @param eIe (default=0) time to display  
     */
    var DrawDebugRectByDimensions: (minx: number, miny: number, w: number, h: number, color?: unknown, opacity?: number, y?: number, eIe?: number) => unknown;

    // cannot be typed because it would conflict with the declaration for javascript's addEventListener. requires a noLib: true setup with custom ts lib declarations
    //var addEventListener: (event_type: unknown, params: unknown, dVQ?: null | unknown) => void;
    //var removeEventListener: (event_type: unknown, params: unknown, dVQ?: null | unknown) => void;
}
