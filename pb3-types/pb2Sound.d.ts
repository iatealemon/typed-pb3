import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished */
    const pb2Sound: ClassIdentityProps<"pb2Sound"> & {
        readonly ALL_TYPES: any;
        readonly PRIORITY_ATMOSHPERICS: any;
        readonly PRIORITY_FLOOD: any;
        readonly PRIORITY_FLOOD_TICKS: any;
        readonly PRIORITY_GAMEPLAY: any;
        readonly PRIORITY_GAMEPLAY_MERGED_SOUNDS: any;
        readonly PRIORITY_GAMEPLAY_PINGS: any;
        readonly PRIORITY_GAMEPLAY_SPEECH: any;
        readonly PRIORITY_MUSIC: any;
        readonly PRIORITY_NORMAL: any;
        readonly PRIORITY_UI: any;
        PlayCustomSound(...args: unknown[]): unknown;
    };
}