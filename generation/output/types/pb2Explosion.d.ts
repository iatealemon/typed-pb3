export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Explosion extends ClassIdentityProps<"pb2Explosion"> {
        /** Type is unknown. One known value: 20 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly source_bullet: unknown;
        readonly owner_ragdoll: unknown;
        readonly is_smoke: unknown;
        readonly radius: unknown;
    }
    var pb2Explosion: ClassIdentityProps<"pb2Explosion"> & {
        MakeExplosion: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        EXPLOSION_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        EXPLOSION_BASIC: unknown;
        /** Type is unknown. One known value: 2 */
        EXPLOSION_RADIOACTIVE: unknown;
        /** Type is unknown. One known value: 3 */
        EXPLOSION_PLASMA: unknown;
        /** Type is unknown. One known value: 4 */
        EXPLOSION_COINTOSS: unknown;
        /** Type is unknown. One known value: 5 */
        EXPLOSION_RL2: unknown;
        /** Type is unknown. One known value: 6 */
        EXPLOSION_RL3: unknown;
        /** Type is unknown. One known value: 7 */
        EXPLOSION_DODGE: unknown;
        /** Type is unknown. One known value: 8 */
        EXPLOSION_TROUBLE_HAWK: unknown;
        /** Type is unknown. One known value: 9 */
        EXPLOSION_HOUND_WALKER_PROJECTILE: unknown;
        /** Type is unknown. One known value: 10 */
        EXPLOSION_STORM_GUN: unknown;
        /** Type is unknown. One known value: 11 */
        EXPLOSION_SPOILER9: unknown;
        /** Type is unknown. One known value: 12 */
        EXPLOSION_SPOILER10: unknown;
        /** Type is unknown. One known value: 13 */
        EXPLOSION_SPOILER9_BOSS: unknown;
        /** Type is unknown. One known value: 14 */
        EXPLOSION_FIRE: unknown;
        /** Type is unknown. One known value: 15 */
        EXPLOSION_CORVETTE_RL: unknown;
        /** Type is unknown. One known value: 16 */
        EXPLOSION_CORVETTE_RL2: unknown;
        /** Type is unknown. One known value: 17 */
        EXPLOSION_CAR: unknown;
        /** Type is unknown. One known value: 18 */
        EXPLOSION_SPOILER35: unknown;
        /** Type is unknown. One known value: 19 */
        EXPLOSION_HOUND_WALKER: unknown;
        /** Type is unknown. One known value: 20 */
        EXPLOSION_SPOILER12: unknown;
        /** Type is unknown. One known value: 21 */
        EXPLOSION_SD_DRAIN_RIFLE: unknown;
        /** Type is unknown. One known value: ["pb2Explosion.EXPLOSION_NONE","pb2Explosion.EXPLOSION_BASIC","pb2Explosion.EXPLOSION_RADIOACTIVE","pb2Explosion.EXPLOSION_PLASMA","pb2Explosion.EXPLOSION_COINTOSS","pb2Explosion.EXPLOSION_RL2","pb2Explosion.EXPLOSION_RL3","pb2Explosion.EXPLOSION_DODGE","pb2Explosion.EXPLOSION_TROUBLE_HAWK","pb2Explosion.EXPLOSION_HOUND_WALKER_PROJECTILE","pb2Explosion.EXPLOSION_STORM_GUN","pb2Explosion.EXPLOSION_SPOILER9","pb2Explosion.EXPLOSION_SPOILER10","pb2Explosion.EXPLOSION_SPOILER9_BOSS","pb2Explosion.EXPLOSION_FIRE","pb2Explosion.EXPLOSION_CORVETTE_RL","pb2Explosion.EXPLOSION_CORVETTE_RL2","pb2Explosion.EXPLOSION_CAR","pb2Explosion.EXPLOSION_SPOILER35","pb2Explosion.EXPLOSION_HOUND_WALKER","pb2Explosion.EXPLOSION_SPOILER12","pb2Explosion.EXPLOSION_SD_DRAIN_RIFLE"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: [] */
        explosions: unknown;
    }
}
