import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2Explosion: ClassIdentityProps<"pb2Explosion"> & {
        readonly ALL_TYPES: any;
        readonly EXPLOSION_BASIC: any;
        readonly EXPLOSION_CAR: any;
        readonly EXPLOSION_COINTOSS: any;
        readonly EXPLOSION_CORVETTE_RL: any;
        readonly EXPLOSION_CORVETTE_RL2: any;
        readonly EXPLOSION_DODGE: any;
        readonly EXPLOSION_FIRE: any;
        readonly EXPLOSION_HOUND_WALKER: any;
        readonly EXPLOSION_HOUND_WALKER_PROJECTILE: any;
        readonly EXPLOSION_NONE: any;
        readonly EXPLOSION_PLASMA: any;
        readonly EXPLOSION_PLASMA_ALT: any;
        readonly EXPLOSION_RADIOACTIVE: any;
        readonly EXPLOSION_RL2: any;
        readonly EXPLOSION_RL3: any;
        readonly EXPLOSION_SPOILER10: any;
        readonly EXPLOSION_SPOILER12: any;
        readonly EXPLOSION_SPOILER35: any;
        readonly EXPLOSION_SPOILER9: any;
        readonly EXPLOSION_SPOILER9_BOSS: any;
        readonly EXPLOSION_STORM_GUN: any;
        readonly EXPLOSION_TROUBLE_HAWK: any;
        MakeExplosion(...args: unknown[]): unknown;
        explosions: unknown;
    };
    
    /** unfinished auto-generated */
    type pb2ExplosionInstance = ClassIdentityProps<"pb2Explosion"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly source_bullet: unknown;
        readonly owner_ragdoll: unknown;
        readonly is_smoke: unknown;
    };
}