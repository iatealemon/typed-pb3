export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2AIModule extends ClassIdentityProps<"pb2AIModule"> {
        readonly skill: number;
        readonly controller: TODO;
        readonly allow_trace_shots: boolean;
        readonly allow_hit_reporting: boolean;
        readonly bot_decided_hunt_threat: TODO;
        bot_decided_teammate_heal: TODO;
        bot_decided_teammate_follow: TODO;
        /**
         * @param x   
         * @param y   
         * @param mode (default=pb2AIModule.GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED)   
         */
        GoTo: (x: number, y: number, mode?: TODO) => TODO;
        hunt_attacker: boolean;
        hunt_seen_threats: boolean;
        hunt_random_known_threats_range: number;
        heal_teammates: boolean;
        hear_range: number;
    }
    var pb2AIModule: ClassIdentityProps<"pb2AIModule"> & {
        /** Type is unknown. One known value: null */
        YQ: TODO;
        /** Type is unknown. One known value: 0 */
        BEHAVIOR_IDLE: TODO;
        /** Type is unknown. One known value: 1 */
        BEHAVIOR_LOOK_AROUND: TODO;
        /** Type is unknown. One known value: 2 */
        BEHAVIOR_INVESTIGATE: TODO;
        /** Type is unknown. One known value: 3 */
        BEHAVIOR_MPBOT: TODO;
        /** Type is unknown. One known value: 0 */
        COMBAT_LEVEL_NO_COMBAT: TODO;
        /** Type is unknown. One known value: 1 */
        COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE: TODO;
        /** Type is unknown. One known value: 2 */
        COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS: TODO;
        /** Type is unknown. One known value: 0 */
        TASK_TYPE_BASIC_GOTO: TODO;
        /** Type is unknown. One known value: 1 */
        TASK_TYPE_OXYGEN_RUSH: TODO;
        /** Type is unknown. One known value: 2 */
        TASK_TYPE_THREAT_HUNT: TODO;
        /** Type is unknown. One known value: 3 */
        TASK_TYPE_TEAMMATE_HEAL: TODO;
        /** Type is unknown. One known value: 4 */
        TASK_TYPE_TEAMMATE_FOLLOW: TODO;
        /** Type is unknown. One known value: 0 */
        GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED: TODO;
        /** Type is unknown. One known value: 1 */
        GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED: TODO;
        /** Type is unknown. One known value: 2 */
        GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED: TODO;
        /** Type is unknown. One known value: 9999 */
        NO_SLOT: TODO;
        /** Type is unknown. One known value: -1 */
        FIRST_WEAPON_SLOT: TODO;
        /** Type is unknown. One known value: 0 */
        SEQUENCE_BEHAVIOR_SERIOUS: TODO;
        /** Type is unknown. One known value: 1 */
        SEQUENCE_BEHAVIOR_SILLY: TODO;
        /** Type is unknown. One known value: 2 */
        SEQUENCE_BEHAVIOR_MAD: TODO;
        /** Type is unknown. One known value: 0 */
        WAYPOINT_TYPE_UNDEFINED: TODO;
        /** Type is unknown. One known value: 1 */
        WAYPOINT_TYPE_FLOOR: TODO;
        /** Type is unknown. One known value: 2 */
        WAYPOINT_TYPE_WALL: TODO;
        /** Type is unknown. One known value: 3 */
        WAYPOINT_TYPE_WATER: TODO;
        /** Type is unknown. One known value: 4 */
        WAYPOINT_TYPE_SLIDING_FLOOR: TODO;
        /** Type is unknown. One known value: 0 */
        REACH_TACTIC_UNREACHABLE: TODO;
        /** Type is unknown. One known value: 1 */
        REACH_TACTIC_WALK: TODO;
        /** Type is unknown. One known value: 2 */
        REACH_TACTIC_CROUCH: TODO;
        /** Type is unknown. One known value: 3 */
        REACH_TACTIC_JUMP: TODO;
        /** Type is unknown. One known value: 4 */
        REACH_TACTIC_SWORDJUMP: TODO;
        /** Type is unknown. One known value: 5 */
        REACH_TACTIC_SELFBOOST: TODO;
        /** Type is unknown. One known value: 6 */
        REACH_TACTIC_FALL: TODO;
        /** Type is unknown. One known value: 7 */
        REACH_TACTIC_WALLJUMP_START: TODO;
        /** Type is unknown. One known value: 8 */
        REACH_TACTIC_WALLJUMP_START_SWORDS: TODO;
        /** Type is unknown. One known value: 9 */
        REACH_TACTIC_WALLJUMP_LOOP: TODO;
        /** Type is unknown. One known value: 10 */
        REACH_TACTIC_WALLJUMP_END: TODO;
        /** Type is unknown. One known value: 11 */
        REACH_TACTIC_SWIM: TODO;
        /** Type is unknown. One known value: 12 */
        REACH_TACTIC_SWIM_JUMP: TODO;
        /** Type is unknown. One known value: 13 */
        REACH_TACTIC_SWIM_SELFBOOST: TODO;
        /** Type is unknown. One known value: 14 */
        REACH_TACTIC_HINT: TODO;
        /** Type is unknown. One known value: 15 */
        REACH_TACTIC_CLEARING_PATH: TODO;
        /** Type is unknown. One known value: 16 */
        REACH_TACTIC_SELF_HEALING: TODO;
        /** Type is unknown. One known value: ["unreachable","walk","crouch","jump","sword jump","self-boost","fall","walljump start","walljump start swords","walljump loop","walljump end","swim","swim jump","swim self-boost jump","hint-assisted","clearing movables in path","self-healing"] */
        REACH_TACTIC_NAMES: TODO;
        /** Type is unknown. One known value: [0,1,4,20,24,28,12,10,14,4,10,3,20,28,40,0,0] */
        REACH_TACTIC_PRICES: TODO;
        /** Type is unknown. One known value: [1,1,1,4,20,35,4,20,40,40,4,2,6,35,20,0,0] */
        REACH_TACTIC_THREAT_PRICES: TODO;
        /** Type is unknown. One known value: 1 */
        COEF_MULT_GLOBAL: TODO;
        /** Type is unknown. One known value: -1 */
        FIRE_COEF: TODO;
        /** Type is unknown. One known value: -1 */
        TOXIC_GAS_COEF: TODO;
        /** Type is unknown. One known value: -1 */
        LASER_MINE_COEF: TODO;
        /** Type is unknown. One known value: -1 */
        PROX_MINE_COEF: TODO;
        /** Type is unknown. One known value: 0.25 */
        TIME_WARP_COEF: TODO;
        /** Type is unknown. One known value: 0.5 */
        SHIELDED_COEF: TODO;
        /** Type is unknown. One known value: 1000 */
        VISITED_HINT_LINE_COST: TODO;
        /** Type is unknown. One known value: 1 */
        MOVABLE_ON_A_LINE_COST_PER_HITPOINT: TODO;
        /** Type is unknown. One known value: 50 */
        MOVABLE_ON_A_LINE_COST_PER_MOVABLE: TODO;
        /** Type is unknown. One known value: 10 */
        FAIL_WAY_LINE_COST_PER_FAILURE: TODO;
        /** Type is unknown. One known value: 0 */
        BULLET_COLLISION_LOGIC_PENETRATE: TODO;
        /** Type is unknown. One known value: 1 */
        BULLET_COLLISION_LOGIC_EXPLODE: TODO;
        /** Type is unknown. One known value: 2 */
        BULLET_COLLISION_LOGIC_MIRROR: TODO;
        /** Type is unknown. One known value: 3 */
        BULLET_COLLISION_LOGIC_GRENADE: TODO;
        /** Type is unknown. One known value: 4 */
        BULLET_COLLISION_LOGIC_DRAIN_LIGHT: TODO;
        /** Type is unknown. One known value: 5 */
        BULLET_COLLISION_LOGIC_CHRONO_BEAM: TODO;
        /** Type is unknown. One known value: 0 */
        FILTER_ANY: TODO;
        /** Type is unknown. One known value: 1 */
        FILTER_FLOOR: TODO;
        /** Type is unknown. One known value: 2 */
        FILTER_WATER: TODO;
        /** Type is unknown. One known value: 3 */
        FILTER_FLOOR_AND_WATER: TODO;
        /** Type is unknown. One known value: 4 */
        FILTER_ANY_ANYWHERE: TODO;
        /** Type is unknown. One known value: 5 */
        FILTER_ANY_ANYWHERE_PING_RANGE: TODO;
        /** Type is unknown. One known value: -1 */
        BEST_ATTACK_NOATOM: TODO;
        /** Type is unknown. One known value: -2 */
        BEST_ATTACK_BULLET: TODO;
        /** Type is unknown. One known value: -3 */
        BEST_ATTACK_ENTITY: TODO;
        /** Type is unknown. One known value: -4 */
        BEST_ATTACK_SHAPE: TODO;
        /** Type is unknown. One known value: 0 */
        HINT_ACTION_USE_SWITCH: TODO;
        /** Type is unknown. One known value: 1 */
        HINT_ACTION_JUST_WAIT: TODO;
        /** Type is unknown. One known value: 2 */
        HINT_ACTION_GO_TO: TODO;
        /** Type is unknown. One known value: 3 */
        HINT_ACTION_ATTACK_OBJECT: TODO;
        /** Type is unknown. One known value: 4 */
        HINT_ACTION_SHOOT_AT_POINT: TODO;
        /** Type is unknown. One known value: -1 */
        GUN_MODE_CURRENT: TODO;
        /** Type is unknown. One known value: ["pb2AIModule.YQ","pb2AIModule.BEHAVIOR_IDLE","pb2AIModule.BEHAVIOR_LOOK_AROUND","pb2AIModule.BEHAVIOR_INVESTIGATE","pb2AIModule.BEHAVIOR_MPBOT","pb2AIModule.COMBAT_LEVEL_NO_COMBAT","pb2AIModule.COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE","pb2AIModule.COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS","pb2AIModule.TASK_TYPE_BASIC_GOTO","pb2AIModule.TASK_TYPE_OXYGEN_RUSH","pb2AIModule.TASK_TYPE_THREAT_HUNT","pb2AIModule.TASK_TYPE_TEAMMATE_HEAL","pb2AIModule.TASK_TYPE_TEAMMATE_FOLLOW","pb2AIModule.GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED","pb2AIModule.GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED","pb2AIModule.GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED","pb2AIModule.NO_SLOT","pb2AIModule.FIRST_WEAPON_SLOT","pb2AIModule.SEQUENCE_BEHAVIOR_SERIOUS","pb2AIModule.SEQUENCE_BEHAVIOR_SILLY","pb2AIModule.SEQUENCE_BEHAVIOR_MAD","pb2AIModule.WAYPOINT_TYPE_UNDEFINED","pb2AIModule.WAYPOINT_TYPE_FLOOR","pb2AIModule.WAYPOINT_TYPE_WALL","pb2AIModule.WAYPOINT_TYPE_WATER","pb2AIModule.WAYPOINT_TYPE_SLIDING_FLOOR","pb2AIModule.REACH_TACTIC_UNREACHABLE","pb2AIModule.REACH_TACTIC_WALK","pb2AIModule.REACH_TACTIC_CROUCH","pb2AIModule.REACH_TACTIC_JUMP","pb2AIModule.REACH_TACTIC_SWORDJUMP","pb2AIModule.REACH_TACTIC_SELFBOOST","pb2AIModule.REACH_TACTIC_FALL","pb2AIModule.REACH_TACTIC_WALLJUMP_START","pb2AIModule.REACH_TACTIC_WALLJUMP_START_SWORDS","pb2AIModule.REACH_TACTIC_WALLJUMP_LOOP","pb2AIModule.REACH_TACTIC_WALLJUMP_END","pb2AIModule.REACH_TACTIC_SWIM","pb2AIModule.REACH_TACTIC_SWIM_JUMP","pb2AIModule.REACH_TACTIC_SWIM_SELFBOOST","pb2AIModule.REACH_TACTIC_HINT","pb2AIModule.REACH_TACTIC_CLEARING_PATH","pb2AIModule.REACH_TACTIC_SELF_HEALING","pb2AIModule.REACH_TACTIC_NAMES","pb2AIModule.REACH_TACTIC_PRICES","pb2AIModule.REACH_TACTIC_THREAT_PRICES","pb2AIModule.COEF_MULT_GLOBAL","pb2AIModule.FIRE_COEF","pb2AIModule.TOXIC_GAS_COEF","pb2AIModule.LASER_MINE_COEF","pb2AIModule.PROX_MINE_COEF","pb2AIModule.TIME_WARP_COEF","pb2AIModule.SHIELDED_COEF","pb2AIModule.VISITED_HINT_LINE_COST","pb2AIModule.MOVABLE_ON_A_LINE_COST_PER_HITPOINT","pb2AIModule.MOVABLE_ON_A_LINE_COST_PER_MOVABLE","pb2AIModule.FAIL_WAY_LINE_COST_PER_FAILURE","pb2AIModule.BULLET_COLLISION_LOGIC_PENETRATE","pb2AIModule.BULLET_COLLISION_LOGIC_EXPLODE","pb2AIModule.BULLET_COLLISION_LOGIC_MIRROR","pb2AIModule.BULLET_COLLISION_LOGIC_GRENADE","pb2AIModule.BULLET_COLLISION_LOGIC_DRAIN_LIGHT","pb2AIModule.BULLET_COLLISION_LOGIC_CHRONO_BEAM","pb2AIModule.FILTER_ANY","pb2AIModule.FILTER_FLOOR","pb2AIModule.FILTER_WATER","pb2AIModule.FILTER_FLOOR_AND_WATER","pb2AIModule.FILTER_ANY_ANYWHERE","pb2AIModule.FILTER_ANY_ANYWHERE_PING_RANGE","pb2AIModule.BEST_ATTACK_NOATOM","pb2AIModule.BEST_ATTACK_BULLET","pb2AIModule.BEST_ATTACK_ENTITY","pb2AIModule.BEST_ATTACK_SHAPE","pb2AIModule.HINT_ACTION_USE_SWITCH","pb2AIModule.HINT_ACTION_JUST_WAIT","pb2AIModule.HINT_ACTION_GO_TO","pb2AIModule.HINT_ACTION_ATTACK_OBJECT","pb2AIModule.HINT_ACTION_SHOOT_AT_POINT","pb2AIModule.GUN_MODE_CURRENT"] */
        ALL_TYPES: TODO;
        CreateAI: (params: TODO) => pb2AIModule;
        DebugReachTactic: (from: TODO, to: TODO) => TODO;
    }
}
