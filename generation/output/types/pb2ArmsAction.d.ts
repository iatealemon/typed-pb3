export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    var pb2ArmsAction: ClassIdentityProps<"pb2ArmsAction"> & {
        /** Type is unknown. One known value: 0 */
        ARMS_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        ARMS_PRIMARY: TODO;
        /** Type is unknown. One known value: 2 */
        ARMS_SECONDARY: TODO;
        /** Type is unknown. One known value: 3 */
        ARMS_BOTH: TODO;
        /** Type is unknown. One known value: 0 */
        LEGS_NONE: TODO;
        /** Type is unknown. One known value: 1 */
        LEGS_BOTH: TODO;
        /** Type is unknown. One known value: 0 */
        ACTION_TYPE_RELOAD_WEAPONS: TODO;
        /** Type is unknown. One known value: 1 */
        ACTION_TYPE_THROW_GRENADE_HE: TODO;
        /** Type is unknown. One known value: 2 */
        ACTION_TYPE_THROW_GRENADE_PORT: TODO;
        /** Type is unknown. One known value: 3 */
        ACTION_TYPE_THROW_GRENADE_SHIELD: TODO;
        /** Type is unknown. One known value: 4 */
        ACTION_TYPE_THROW_GRENADE_TIME: TODO;
        /** Type is unknown. One known value: 5 */
        ACTION_TYPE_THROW_GRENADE_SMOKE: TODO;
        /** Type is unknown. One known value: 6 */
        ACTION_TYPE_THROW_GRENADE_FLASH: TODO;
        /** Type is unknown. One known value: 7 */
        ACTION_TYPE_THROW_GRENADE_TOXIC_GAS: TODO;
        /** Type is unknown. One known value: 8 */
        ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE: TODO;
        /** Type is unknown. One known value: 9 */
        ACTION_TYPE_THROW_GRENADE_LASER_MINE: TODO;
        /** Type is unknown. One known value: 10 */
        ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA: TODO;
        /** Type is unknown. One known value: 11 */
        ACTION_TYPE_THROW_GRENADE_VIRUS: TODO;
        /** Type is unknown. One known value: 12 */
        ACTION_TYPE_THROW_GRENADE_SNOWBALL: TODO;
        /** Type is unknown. One known value: 13 */
        ACTION_TYPE_THROW_GRENADE_HEALER: TODO;
        /** Type is unknown. One known value: 14 */
        ACTION_TYPE_THROW_GRENADE_GLOW: TODO;
        /** Type is unknown. One known value: 15 */
        ACTION_TYPE_THROW_GRENADE_FIRE: TODO;
        /** Type is unknown. One known value: 16 */
        ACTION_TYPE_THROW_GRENADE_TURRET: TODO;
        /** Type is unknown. One known value: 17 */
        ACTION_TYPE_THROW_GRENADE_TURRET2: TODO;
        /** Type is unknown. One known value: 18 */
        ACTION_TYPE_THROW_GRENADE_COLD_NADE: TODO;
        /** Type is unknown. One known value: 19 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET: TODO;
        /** Type is unknown. One known value: 20 */
        ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2: TODO;
        /** Type is unknown. One known value: 1 */
        GRENADE_FIRST: TODO;
        /** Type is unknown. One known value: 20 */
        GRENADE_LAST: TODO;
        /** Type is unknown. One known value: 21 */
        ACTION_TYPE_DRAG_RIGIDBODY: TODO;
        /** Type is unknown. One known value: 22 */
        ACTION_TYPE_GRAPPLING_HOOK: TODO;
        /** Type is unknown. One known value: 23 */
        ACTION_TYPE_USE: TODO;
        /** Type is unknown. One known value: 24 */
        ACTION_TYPE_GESTURE_POINT_AT: TODO;
        /** Type is unknown. One known value: 25 */
        ACTION_TYPE_GESTURE_LISTEN_RADIO: TODO;
        /** Type is unknown. One known value: 26 */
        ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER: TODO;
        /** Type is unknown. One known value: 27 */
        ACTION_TYPE_GESTURE_WEAPON_DOWN: TODO;
        /** Type is unknown. One known value: 28 */
        ACTION_TYPE_GESTURE_HAPPY: TODO;
        /** Type is unknown. One known value: 29 */
        ACTION_TYPE_KICK: TODO;
        /** Type is unknown. One known value: 30 */
        ACTION_TYPE_WALLJUMP_FRONT: TODO;
        /** Type is unknown. One known value: 31 */
        ACTION_TYPE_WALLJUMP_BACK: TODO;
        /** Type is unknown. One known value: 32 */
        ACTION_TYPE_SWORDS_ACTIVATION: TODO;
        /** Type is unknown. One known value: 24 */
        GESTURE_FIRST: TODO;
        /** Type is unknown. One known value: 28 */
        GESTURE_LAST: TODO;
        /** Type is unknown. One known value: ["pb2ArmsAction.ARMS_NONE","pb2ArmsAction.ARMS_PRIMARY","pb2ArmsAction.ARMS_SECONDARY","pb2ArmsAction.ARMS_BOTH","pb2ArmsAction.LEGS_NONE","pb2ArmsAction.LEGS_BOTH","pb2ArmsAction.ACTION_TYPE_RELOAD_WEAPONS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_PORT","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SHIELD","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TIME","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SMOKE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FLASH","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TOXIC_GAS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_LASER_MINE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_VIRUS","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_SNOWBALL","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HEALER","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_GLOW","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_FIRE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_TURRET2","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_COLD_NADE","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET","pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2","pb2ArmsAction.GRENADE_FIRST","pb2ArmsAction.GRENADE_LAST","pb2ArmsAction.ACTION_TYPE_DRAG_RIGIDBODY","pb2ArmsAction.ACTION_TYPE_GRAPPLING_HOOK","pb2ArmsAction.ACTION_TYPE_USE","pb2ArmsAction.ACTION_TYPE_GESTURE_POINT_AT","pb2ArmsAction.ACTION_TYPE_GESTURE_LISTEN_RADIO","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER","pb2ArmsAction.ACTION_TYPE_GESTURE_WEAPON_DOWN","pb2ArmsAction.ACTION_TYPE_GESTURE_HAPPY","pb2ArmsAction.ACTION_TYPE_KICK","pb2ArmsAction.ACTION_TYPE_WALLJUMP_FRONT","pb2ArmsAction.ACTION_TYPE_WALLJUMP_BACK","pb2ArmsAction.ACTION_TYPE_SWORDS_ACTIVATION","pb2ArmsAction.GESTURE_FIRST","pb2ArmsAction.GESTURE_LAST"] */
        ALL_TYPES: TODO;
        /** Type is unknown. One known value: ["Grenade C-00n","Teleport Grenade v03 CS-PortNade","Portable Shield v07 CS-Quarium","Portable TimeWarp C-00w","Smoke Nade CS-Dust","Flashbang Nade CS-Flash","Toxic Nade CS-Napkin","Proximity Mine C-00t","Laser Mine CS-Trap","Scanner CS-Stalk","Attack Drone CS-Virus","Snowball","Heal Drone CS-HealVirus","Portable Light CS-GlowFam","Combustion Shell CS-Slash","Sentry Turret DR-Facet","Portable Turret CS-Denier","Freezing Nade CS-Cryo","Scout Drone C-02d","Harasser Drone-CS"] */
        grenade_titles: TODO;
    }
}
