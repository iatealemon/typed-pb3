export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    var pb2ArmsAction: ClassIdentityProps<"pb2ArmsAction"> & {
        /** Type is unknown. One known value: 0 */
        ARMS_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        ARMS_PRIMARY: unknown;
        /** Type is unknown. One known value: 2 */
        ARMS_SECONDARY: unknown;
        /** Type is unknown. One known value: 3 */
        ARMS_BOTH: unknown;
        /** Type is unknown. One known value: 0 */
        LEGS_NONE: unknown;
        /** Type is unknown. One known value: 1 */
        LEGS_BOTH: unknown;
        /** Type is unknown. One known value: 0 */
        ACTION_TYPE_RELOAD_WEAPONS: unknown;
        /** Type is unknown. One known value: 1 */
        ACTION_TYPE_THROW_GRENADE_HE: unknown;
        /** Type is unknown. One known value: 2 */
        ACTION_TYPE_THROW_GRENADE_PORT: unknown;
        /** Type is unknown. One known value: 3 */
        ACTION_TYPE_THROW_GRENADE_SHIELD: unknown;
        /** Type is unknown. One known value: 4 */
        ACTION_TYPE_THROW_GRENADE_TIME: unknown;
        /** Type is unknown. One known value: 5 */
        ACTION_TYPE_THROW_GRENADE_SMOKE: unknown;
        /** Type is unknown. One known value: 6 */
        ACTION_TYPE_THROW_GRENADE_FLASH: unknown;
        /** Type is unknown. One known value: 7 */
        ACTION_TYPE_THROW_GRENADE_TOXIC_GAS: unknown;
        /** Type is unknown. One known value: 8 */
        ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE: unknown;
        /** Type is unknown. One known value: 9 */
        ACTION_TYPE_THROW_GRENADE_LASER_MINE: unknown;
        /** Type is unknown. One known value: 10 */
        ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA: unknown;
        /** Type is unknown. One known value: 11 */
        ACTION_TYPE_THROW_GRENADE_VIRUS: unknown;
        /** Type is unknown. One known value: 12 */
        ACTION_TYPE_THROW_GRENADE_SNOWBALL: unknown;
        /** Type is unknown. One known value: 13 */
        ACTION_TYPE_THROW_GRENADE_HEALER: unknown;
        /** Type is unknown. One known value: 14 */
        ACTION_TYPE_THROW_GRENADE_GLOW: unknown;
        /** Type is unknown. One known value: 15 */
        ACTION_TYPE_THROW_GRENADE_FIRE: unknown;
        /** Type is unknown. One known value: 16 */
        ACTION_TYPE_THROW_GRENADE_TURRET: unknown;
        /** Type is unknown. One known value: 17 */
        ACTION_TYPE_THROW_GRENADE_TURRET2: unknown;
        /** Type is unknown. One known value: 18 */
        ACTION_TYPE_THROW_GRENADE_COLD_NADE: unknown;
        /** Type is unknown. One known value: 19 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET: unknown;
        /** Type is unknown. One known value: 20 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2: unknown;
        /** Type is unknown. One known value: 1 */
        GRENADE_FIRST: unknown;
        /** Type is unknown. One known value: 20 */
        GRENADE_LAST: unknown;
        /** Type is unknown. One known value: 21 */
        ACTION_TYPE_DRAG_RIGIDBODY: unknown;
        /** Type is unknown. One known value: 22 */
        ACTION_TYPE_GRAPPLING_HOOK: unknown;
        /** Type is unknown. One known value: 23 */
        ACTION_TYPE_USE: unknown;
        /** Type is unknown. One known value: 24 */
        ACTION_TYPE_GESTURE_POINT_AT: unknown;
        /** Type is unknown. One known value: 25 */
        ACTION_TYPE_GESTURE_LISTEN_RADIO: unknown;
        /** Type is unknown. One known value: 26 */
        ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER: unknown;
        /** Type is unknown. One known value: 27 */
        ACTION_TYPE_GESTURE_WEAPON_DOWN: unknown;
        /** Type is unknown. One known value: 28 */
        ACTION_TYPE_GESTURE_HAPPY: unknown;
        /** Type is unknown. One known value: 29 */
        ACTION_TYPE_KICK: unknown;
        /** Type is unknown. One known value: 30 */
        ACTION_TYPE_WALLJUMP_FRONT: unknown;
        /** Type is unknown. One known value: 31 */
        ACTION_TYPE_WALLJUMP_BACK: unknown;
        /** Type is unknown. One known value: 32 */
        ACTION_TYPE_SWORDS_ACTIVATION: unknown;
        /** Type is unknown. One known value: 24 */
        GESTURE_FIRST: unknown;
        /** Type is unknown. One known value: 28 */
        GESTURE_LAST: unknown;
        /** Type is unknown. One known value: ["pb2ArmsAction.ARMS_NONE","pb2ArmsAction.ARMS_PRIMARY","pb2ArmsAction.ARMS_SECONDARY","pb2ArmsAction.ARMS_BOTH","pb2ArmsAction.LEGS_NONE","pb2ArmsAction.LEGS_BOTH","pb2ArmsAction.ACTION_TYPE_RELOAD_WEAPONS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_PORT","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SHIELD","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TIME","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SMOKE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FLASH","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TOXIC_GAS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_LASER_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_VIRUS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SNOWBALL","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HEALER","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_GLOW","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FIRE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET2","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_COLD_NADE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2","pb2ArmsAction.GRENADE_FIRST","pb2ArmsAction.GRENADE_LAST","pb2ArmsAction.ACTION_TYPE_DRAG_RIGIDBODY","pb2ArmsAction.ACTION_TYPE_GRAPPLING_HOOK","pb2ArmsAction.ACTION_TYPE_USE","pb2ArmsAction.ACTION_TYPE_GESTURE_POINT_AT","pb2ArmsAction.ACTION_TYPE_GESTURE_LISTEN_RADIO","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_DOWN","pb2ArmsAction.ACTION_TYPE_GESTURE_HAPPY","pb2ArmsAction.ACTION_TYPE_KICK","pb2ArmsAction.ACTION_TYPE_WALLJUMP_FRONT","pb2ArmsAction.ACTION_TYPE_WALLJUMP_BACK","pb2ArmsAction.ACTION_TYPE_SWORDS_ACTIVATION","pb2ArmsAction.GESTURE_FIRST","pb2ArmsAction.GESTURE_LAST"] */
        ALL_TYPES: unknown;
        /** Type is unknown. One known value: ["Grenade C-00n","Teleport Grenade v03 CS-PortNade","Portable Shield v07 CS-Quarium","Portable TimeWarp C-00w","Smoke Nade CS-Dust","Flashbang Nade CS-Flash","Toxic Nade CS-Napkin","Proximity Mine C-00t","Laser Mine CS-Trap","Scanner CS-Stalk","Attack Drone CS-Virus","Snowball","Heal Drone CS-HealVirus","Portable Light CS-GlowFam","Combustion Shell CS-Slash","Sentry Turret DR-Facet","Portable Turret CS-Denier","Freezing Nade CS-Cryo","Scout Drone C-02d","Harasser Drone-CS"] */
        grenade_titles: unknown;
    }
}
