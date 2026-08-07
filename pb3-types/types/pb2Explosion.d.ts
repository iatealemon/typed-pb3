export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

/*
@TODO: check if these are still accurate
// defaults defined as what value would give the same effect as it being undefined
type ExplosionParams = {
    z?: number; // 0 by default 
    sV?: boolean; // false by default
    owner_entity?: null | pb2EntityInstance // null by default
    bcN?: number; // 1 by default
    /** defaults to pb2Fire.yh (instance of Ki aka pb2FireType class). if specified, it would be a pb2FireType instance, but you'll never specify the fire type because the level editor doesn't make that accessible. *\/
    fire_type?: unknown;
    yt?: null | unknown; // null by default
    /**
     * things to be ignored by the explosion, or internally the things that have already been hit by the explosion. [] by default.  
     * the internal array can also include rope parts but it's omitted here because they're not accessible in level editor scripts.
     *\/
    Bi?: (pb2ShapeInstance | b2BodyInstance | pb2GunInstance | pb2BulletInstance | pb2ShieldZoneInstance | pb2AtomInstance)[];
    /** false by default *\/
    Ch?: boolean;
    /** disable particles. false by default *\/
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
*/

declare global {
    interface pb2Explosion extends ClassIdentityProps<"pb2Explosion"> {
        /** Type is unknown. One known value: 20 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        readonly source_bullet: pb2Bullet | pb2Explosion["owner_ragdoll"];
        readonly owner_ragdoll: pb2Ragdoll | null;
        readonly is_smoke: boolean;
        readonly radius: number;
    }
    var pb2Explosion: ClassIdentityProps<"pb2Explosion"> & {
        MakeExplosion: (params: TODO) => pb2Explosion;
        /** Type is unknown. One known value: 0 */
        EXPLOSION_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        EXPLOSION_BASIC: TODO;
        /** Type is unknown. One known value: 2 */
        EXPLOSION_RADIOACTIVE: TODO;
        /** Type is unknown. One known value: 3 */
        EXPLOSION_PLASMA: TODO;
        /** Type is unknown. One known value: 4 */
        EXPLOSION_COINTOSS: TODO;
        /** Type is unknown. One known value: 5 */
        EXPLOSION_RL2: TODO;
        /** Type is unknown. One known value: 6 */
        EXPLOSION_RL3: TODO;
        /** Type is unknown. One known value: 7 */
        EXPLOSION_DODGE: TODO;
        /** Type is unknown. One known value: 8 */
        EXPLOSION_TROUBLE_HAWK: TODO;
        /** Type is unknown. One known value: 9 */
        EXPLOSION_HOUND_WALKER_PROJECTILE: TODO;
        /** Type is unknown. One known value: 10 */
        EXPLOSION_STORM_GUN: TODO;
        /** Type is unknown. One known value: 11 */
        EXPLOSION_SPOILER9: TODO;
        /** Type is unknown. One known value: 12 */
        EXPLOSION_SPOILER10: TODO;
        /** Type is unknown. One known value: 13 */
        EXPLOSION_SPOILER9_BOSS: TODO;
        /** Type is unknown. One known value: 14 */
        EXPLOSION_FIRE: TODO;
        /** Type is unknown. One known value: 15 */
        EXPLOSION_CORVETTE_RL: TODO;
        /** Type is unknown. One known value: 16 */
        EXPLOSION_CORVETTE_RL2: TODO;
        /** Type is unknown. One known value: 17 */
        EXPLOSION_CAR: TODO;
        /** Type is unknown. One known value: 18 */
        EXPLOSION_SPOILER35: TODO;
        /** Type is unknown. One known value: 19 */
        EXPLOSION_HOUND_WALKER: TODO;
        /** Type is unknown. One known value: 20 */
        EXPLOSION_SPOILER12: TODO;
        /** Type is unknown. One known value: 21 */
        EXPLOSION_SD_DRAIN_RIFLE: TODO;
        /** Type is unknown. One known value: ["pb2Explosion.EXPLOSION_NONE","pb2Explosion.EXPLOSION_BASIC","pb2Explosion.EXPLOSION_RADIOACTIVE","pb2Explosion.EXPLOSION_PLASMA","pb2Explosion.EXPLOSION_COINTOSS","pb2Explosion.EXPLOSION_RL2","pb2Explosion.EXPLOSION_RL3","pb2Explosion.EXPLOSION_DODGE","pb2Explosion.EXPLOSION_TROUBLE_HAWK","pb2Explosion.EXPLOSION_HOUND_WALKER_PROJECTILE","pb2Explosion.EXPLOSION_STORM_GUN","pb2Explosion.EXPLOSION_SPOILER9","pb2Explosion.EXPLOSION_SPOILER10","pb2Explosion.EXPLOSION_SPOILER9_BOSS","pb2Explosion.EXPLOSION_FIRE","pb2Explosion.EXPLOSION_CORVETTE_RL","pb2Explosion.EXPLOSION_CORVETTE_RL2","pb2Explosion.EXPLOSION_CAR","pb2Explosion.EXPLOSION_SPOILER35","pb2Explosion.EXPLOSION_HOUND_WALKER","pb2Explosion.EXPLOSION_SPOILER12","pb2Explosion.EXPLOSION_SD_DRAIN_RIFLE"] */
        ALL_TYPES: TODO;
        explosions: pb2Explosion[];
    }
}
