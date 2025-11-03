import type { ClassIdentityProps } from "./internal/helper";
export {};

// defaults defined as what value would give the same effect as it being undefined
type ExplosionParams = {
    z?: number; // 0 by default 
    sV?: boolean; // false by default
    owner_entity?: null | pb2EntityInstance // null by default
    bcN?: number; // 1 by default
    /** defaults to pb2Fire.yh (instance of Ki aka pb2FireType class). if specified, it would be a pb2FireType instance, but you'll never specify the fire type because the level editor doesn't make that accessible. */
    fire_type?: unknown;
    yt?: null | unknown; // null by default
    /**
     * things to be ignored by the explosion, or internally the things that have already been hit by the explosion. [] by default.  
     * the internal array can also include rope parts but it's omitted here because they're not accessible in level editor scripts.
     */
    Bi?: (pb2ShapeInstance | b2BodyInstance | pb2GunInstance | pb2BulletInstance | pb2ShieldZoneInstance | pb2AtomInstance)[];
    /** false by default */
    Ch?: boolean;
    /** disable particles. false by default */
    bBR?: boolean;
    bO?: number; // 1 by default
    kw?: boolean; // true by default
    radius: number;
    x: number;
    y: number;
} & (
    {
        sprite: false;
    } |
    {
        sprite: true;
        color: pb2HighRangeColor;
        color2: pb2HighRangeColor;
    }
) & {
    is_smoke?: boolean; // false by default. has no effect if the point is in water, false is used in that case
    tk?: number; // 1 by default
    jj?: number; // 0 by default
    hI?: number; // 2.5 by default. has no effect if fire_duration > 0, 0.5 is used in that case
} & (
    {
        fire_duration?: 0; // 0 by default, otherwise a positive number
    } |
    {
        fire_duration: number; // 0 by default, otherwise a positive number. 30 = 1 second
        jf: boolean; // spawn fire?
        jH: number; // fire radius
    }
) & {
    owner_ragdoll?: null | pb2RagdollInstance; // null by default
    source_bullet?: pb2BulletInstance | ExplosionParams["owner_ragdoll"]; // equal to owner_ragdoll by default
    damage?: number; // 1 by default
    bh?: number; // value of pb2FloatingText.GetNewHash() by default
    gP?: boolean; // true by default
    sound: any; // one of pb2Explosion.EXPLOSION_* constants
};

declare global {
    /** unfinished */
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
        MakeExplosion(params: ExplosionParams): undefined | pb2ExplosionInstance;
        explosions: pb2ExplosionInstance[];
    };
    
    type pb2ExplosionInstance = ClassIdentityProps<"pb2Explosion"> & {
        readonly classid: typeof pb2ClassID.EXPLOSION;
        readonly x: number;
        readonly y: number;
        readonly source_bullet: pb2BulletInstance | pb2ExplosionInstance["owner_ragdoll"];
        readonly owner_ragdoll: null | pb2RagdollInstance;
        readonly is_smoke: boolean;
    };
}