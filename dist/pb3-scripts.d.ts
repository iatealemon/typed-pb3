export {};
declare global {
    /** unfinished */
    class ColorTransform {
        constructor(...args: unknown[]);

        _class: "ColorTransform";
        toString(): string;
        redMultiplier: number;
        greenMultiplier: number;
        blueMultiplier: number;
        redOffset: number;
        greenOffset: number;
        blueOffset: number;
        clone(...args: unknown[]): unknown;
        multiplyHighRangeColor(...args: unknown[]): unknown;
    }
}

declare global {
    class Point extends b2Vec2 {
        constructor(params: {
            x: number,
            y: number,
        });

        /** === "Point" */
        readonly _class: string;
        x: number;
        y: number;
        //r: unknown; // made accessible but doesn't actually exist
    }

    class Vector extends Point {
        constructor(params: {
            x: number,
            y: number,
        });

        readonly _class: "Circle";
        x: number;
        y: number;
        //r: unknown; // made accessible but doesn't actually exist
    }

    class Circle extends Point {
        constructor(params: {
            x: number,
            y: number,
            r: number,
        });

        readonly _class: "Circle";
        x: number;
        y: number;
        r: number;
    }
}

type ClassIdentityProps<ClassName extends string> = {
    readonly _class: ClassName;
    toString(): `[object ${ClassName}]`;
};

declare global {
    /** unfinished */
    namespace THREE {
        class Euler {}
        class Matrix4 {}
        class Vector3 {
            add(...args: unknown[]): unknown;
            addScalar(...args: unknown[]): unknown;
            addScaledVector(...args: unknown[]): unknown;
            addVectors(...args: unknown[]): unknown;
            angleTo(...args: unknown[]): unknown;
            applyAxisAngle(...args: unknown[]): unknown;
            applyEuler(...args: unknown[]): unknown;
            applyMatrix3(...args: unknown[]): unknown;
            applyMatrix4(...args: unknown[]): unknown;
            applyProjection(...args: unknown[]): unknown;
            applyQuaternion(...args: unknown[]): unknown;
            ceil(...args: unknown[]): unknown;
            clamp(...args: unknown[]): unknown;
            clampLength(...args: unknown[]): unknown;
            clampScalar(...args: unknown[]): unknown;
            clone(...args: unknown[]): unknown;
            copy(...args: unknown[]): unknown;
            cross(...args: unknown[]): unknown;
            crossVectors(...args: unknown[]): unknown;
            distanceTo(...args: unknown[]): unknown;
            distanceToManhattan(...args: unknown[]): unknown;
            distanceToSquared(...args: unknown[]): unknown;
            divide(...args: unknown[]): unknown;
            divideScalar(...args: unknown[]): unknown;
            dot(...args: unknown[]): unknown;
            equals(...args: unknown[]): unknown;
            floor(...args: unknown[]): unknown;
            fromArray(...args: unknown[]): unknown;
            fromAttribute(...args: unknown[]): unknown;
            fromBufferAttribute(...args: unknown[]): unknown;
            getColumnFromMatrix(...args: unknown[]): unknown;
            getComponent(...args: unknown[]): unknown;
            getPositionFromMatrix(...args: unknown[]): unknown;
            getScaleFromMatrix(...args: unknown[]): unknown;
            readonly isVector3: boolean;
            length(...args: unknown[]): unknown;
            lengthManhattan(...args: unknown[]): unknown;
            lengthSq(...args: unknown[]): unknown;
            lerp(...args: unknown[]): unknown;
            lerpVectors(...args: unknown[]): unknown;
            max(...args: unknown[]): unknown;
            min(...args: unknown[]): unknown;
            multiply(...args: unknown[]): unknown;
            multiplyScalar(...args: unknown[]): unknown;
            multiplyVectors(...args: unknown[]): unknown;
            negate(...args: unknown[]): unknown;
            normalize(...args: unknown[]): unknown;
            project(...args: unknown[]): unknown;
            projectOnPlane(...args: unknown[]): unknown;
            projectOnVector(...args: unknown[]): unknown;
            reflect(...args: unknown[]): unknown;
            round(...args: unknown[]): unknown;
            roundToZero(...args: unknown[]): unknown;
            set(x: number, y: number, z: number): Vector3;
            setComponent(...args: unknown[]): unknown;
            setEulerFromQuaternion(...args: unknown[]): unknown;
            setEulerFromRotationMatrix(...args: unknown[]): unknown;
            setFromCylindrical(...args: unknown[]): unknown;
            setFromMatrixColumn(...args: unknown[]): unknown;
            setFromMatrixPosition(...args: unknown[]): unknown;
            setFromMatrixScale(...args: unknown[]): unknown;
            setFromSpherical(...args: unknown[]): unknown;
            setLength(...args: unknown[]): unknown;
            setScalar(scalar: number): Vector3;
            setX(x: number): Vector3;
            setY(y: number): Vector3;
            setZ(z: number): Vector3;
            sub(...args: unknown[]): unknown;
            subScalar(...args: unknown[]): unknown;
            subVectors(...args: unknown[]): unknown;
            toArray(...args: unknown[]): unknown;
            transformDirection(...args: unknown[]): unknown;
            unproject(...args: unknown[]): unknown;
            x: number;
            y: number;
            z: number;
        }
        
        type MeshInstance = ClassIdentityProps<"pb2Entity"> & {
            lookAt(...args: unknown[]): unknown;
            readonly matrix: unknown; // bugged, accessing crashes
            readonly matrixWorld: unknown; // bugged, accessing crashes
            readonly parent: unknown;
            readonly position: Vector3;
            readonly rotation: unknown;
            readonly scale: unknown;
            visible: unknown;
        };

        /**
         * unfinished  
         * represents the instance of THREE.Object3D.
         */
        type Object3DInstance = ClassIdentityProps<"Object3D"> & {
            readonly parent: unknown;
            lookAt(...args: unknown[]): unknown;
            readonly position: unknown;
            readonly rotation: unknown;
            readonly scale: unknown;
            readonly matrix: unknown;
            readonly matrixWorld: unknown;
            visible: unknown;
        };
    }
}

declare global {
    /** unfinished */
    type b2BodyInstance = ClassIdentityProps<"b2Body"> & {
        SetPos(x: number, y: number): void;
        SetPosX(...args: unknown[]): unknown;
        SetPosY(...args: unknown[]): unknown;
        GetPosX(): number;
        GetPosY(): number;
        SetVel(x: number, y: number): void;
        SetVelX(...args: unknown[]): unknown;
        SetVelY(...args: unknown[]): unknown;
        GetVelX(...args: unknown[]): unknown;
        GetVelY(...args: unknown[]): unknown;
        SetAngle(angle: number): void;
        GetAngle(...args: unknown[]): unknown;
        GetAngularVelocity(...args: unknown[]): unknown;
        SetAngularVelocity(omega: number): void;
        ApplyForce(...args: unknown[]): unknown;
        ApplyForceXY(...args: unknown[]): unknown;
        ApplyTorque(...args: unknown[]): unknown;
        ApplyImpulse(...args: unknown[]): unknown;
        ApplyImpulseXY(...args: unknown[]): unknown;
        GetMass(...args: unknown[]): unknown;
        GetWorldPoint(...args: unknown[]): unknown;
        GetWorldVector(...args: unknown[]): unknown;
        GetLocalPoint(...args: unknown[]): unknown;
        GetLocalVector(...args: unknown[]): unknown;
        GetLinearVelocityFromWorldPoint(...args: unknown[]): unknown;
        GetLinearVelocityFromLocalPoint(...args: unknown[]): unknown;
        SetSleepingAllowed(...args: unknown[]): unknown;
        SetAwake(...args: unknown[]): unknown;
        IsAwake(...args: unknown[]): unknown;
        SetFixedRotation(...args: unknown[]): unknown;
        IsFixedRotation(...args: unknown[]): unknown;
        IsActive(...args: unknown[]): unknown;
        SetBullet(...args: unknown[]): unknown;
        GetWorldCenter(...args: unknown[]): unknown;
        SetGravityScale(...args: unknown[]): unknown;
        SetAngularDamping(...args: unknown[]): unknown;
        GetAngularDamping(...args: unknown[]): unknown;
        SetLinearDamping(...args: unknown[]): unknown;
        GetLinearDamping(...args: unknown[]): unknown;
        SetType(...args: unknown[]): unknown;
        GetOwner(...args: unknown[]): unknown;
        GetUserData(...args: unknown[]): unknown;
    };
}

declare global {
    class b2Vec2 {
        constructor(x?: number, y?: number);

        /** === "b2Vec2" */
        readonly _class: string;
        x: number;
        y: number;
        //r: unknown; // made accessible but doesn't actually exist
    }
}

declare global {
    const b2World: ClassIdentityProps<"b2World"> & {
        GetAllBodies(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2AIModule: ClassIdentityProps<"pb2AIModule"> & {
        readonly ALL_TYPES: any;
        readonly BEHAVIOR_IDLE: any;
        readonly BEHAVIOR_INVESTIGATE: any;
        readonly BEHAVIOR_LOOK_AROUND: any;
        readonly BEHAVIOR_MPBOT: any;
        readonly BEST_ATTACK_BULLET: any;
        readonly BEST_ATTACK_ENTITY: any;
        readonly BEST_ATTACK_NOATOM: any;
        readonly BEST_ATTACK_SHAPE: any;
        readonly BULLET_COLLISION_LOGIC_EXPLODE: any;
        readonly BULLET_COLLISION_LOGIC_GRENADE: any;
        readonly BULLET_COLLISION_LOGIC_MIRROR: any;
        readonly BULLET_COLLISION_LOGIC_PENETRATE: any;
        readonly COEF_MULT_GLOBAL: any;
        readonly COMBAT_LEVEL_BOTH_ENEMIES_AND_TRACESHOTS: any;
        readonly COMBAT_LEVEL_NO_COMBAT: any;
        readonly COMBAT_LEVEL_ONLY_IF_ENEMY_IS_VISIBLE: any;
        CreateAI(...args: unknown[]): unknown;
        readonly FAIL_WAY_LINE_COST_PER_FAILURE: any;
        readonly FILTER_ANY: any;
        readonly FILTER_ANY_ANYWHERE: any;
        readonly FILTER_ANY_ANYWHERE_PING_RANGE: any;
        readonly FILTER_FLOOR: any;
        readonly FILTER_FLOOR_AND_WATER: any;
        readonly FILTER_WATER: any;
        readonly FIRE_COEF: any;
        readonly FIRST_WEAPON_SLOT: any;
        readonly GOTO_MODE_DELAY_PREVIOUSLY_SCHEDULED: any;
        readonly GOTO_MODE_EXECUTE_AFTER_PREVIOUSLY_SCHEDULED: any;
        readonly GOTO_MODE_OVERRIDE_PREVIOUSLY_SCHEDULED: any;
        readonly GUN_MODE_CURRENT: any;
        readonly HINT_ACTION_ATTACK_OBJECT: any;
        readonly HINT_ACTION_GO_TO: any;
        readonly HINT_ACTION_JUST_WAIT: any;
        readonly HINT_ACTION_SHOOT_AT_POINT: any;
        readonly HINT_ACTION_USE_SWITCH: any;
        readonly LASER_MINE_COEF: any;
        readonly MOVABLE_ON_A_LINE_COST_PER_HITPOINT: any;
        readonly MOVABLE_ON_A_LINE_COST_PER_MOVABLE: any;
        readonly NO_SLOT: any;
        readonly PROX_MINE_COEF: any;
        readonly REACH_TACTIC_CLEARING_PATH: any;
        readonly REACH_TACTIC_CROUCH: any;
        readonly REACH_TACTIC_FALL: any;
        readonly REACH_TACTIC_HINT: any;
        readonly REACH_TACTIC_JUMP: any;
        readonly REACH_TACTIC_NAMES: any;
        readonly REACH_TACTIC_PRICES: any;
        readonly REACH_TACTIC_SELFBOOST: any;
        readonly REACH_TACTIC_SELF_HEALING: any;
        readonly REACH_TACTIC_SWIM: any;
        readonly REACH_TACTIC_SWIM_JUMP: any;
        readonly REACH_TACTIC_SWIM_SELFBOOST: any;
        readonly REACH_TACTIC_SWORDJUMP: any;
        readonly REACH_TACTIC_THREAT_PRICES: any;
        readonly REACH_TACTIC_UNREACHABLE: any;
        readonly REACH_TACTIC_WALK: any;
        readonly REACH_TACTIC_WALLJUMP_END: any;
        readonly REACH_TACTIC_WALLJUMP_LOOP: any;
        readonly REACH_TACTIC_WALLJUMP_START: any;
        readonly REACH_TACTIC_WALLJUMP_START_SWORDS: any;
        readonly SEQUENCE_BEHAVIOR_MAD: any;
        readonly SEQUENCE_BEHAVIOR_SERIOUS: any;
        readonly SEQUENCE_BEHAVIOR_SILLY: any;
        readonly SHIELDED_COEF: any;
        readonly TASK_TYPE_BASIC_GOTO: any;
        readonly TASK_TYPE_OXYGEN_RUSH: any;
        readonly TASK_TYPE_TEAMMATE_FOLLOW: any;
        readonly TASK_TYPE_TEAMMATE_HEAL: any;
        readonly TASK_TYPE_THREAT_HUNT: any;
        readonly TIME_WARP_COEF: any;
        readonly TOXIC_GAS_COEF: any;
        readonly VISITED_HINT_LINE_COST: any;
        readonly WAYPOINT_TYPE_FLOOR: any;
        readonly WAYPOINT_TYPE_SLIDING_FLOOR: any;
        readonly WAYPOINT_TYPE_UNDEFINED: any;
        readonly WAYPOINT_TYPE_WALL: any;
        readonly WAYPOINT_TYPE_WATER: any;
    };
    
    /** unfinished */
    type pb2AIModuleInstance = ClassIdentityProps<"pb2AIModule"> & {
        readonly skill: unknown;
        readonly controller: unknown;
        readonly allow_trace_shots: unknown;
        readonly allow_hit_reporting: unknown;
        readonly bot_decided_hunt_threat: unknown;
        readonly bot_decided_teammate_heal: unknown;
        GoTo(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2AIPathFindingHint: ClassIdentityProps<"pb2AIPathFindingHint"> & {
        Create(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2AIPathFindingHintInstance = ClassIdentityProps<"pb2AIPathFindingHint"> & {
        enabled: unknown;
        remove(...args: unknown[]): unknown;
        action_to_proceed: unknown;
        action_target: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2AIThreat: ClassIdentityProps<"pb2AIThreat"> & {
        /**
         * @param _dHj hunter team
         * @param _dHk enemy
         * @param rk null or pb2AIWayPoint instance
         * @param dHo no throw
         * @returns {pb2AIThreatInstance}
         */
        NewThreat(_dHj: pb2TeamInstance, _dHk: pb2RagdollInstance, rk: null | unknown, dHo: boolean): pb2AIThreatInstance;
    };
    
    /** unfinished */
    type pb2AIThreatInstance = ClassIdentityProps<"pb2AIThreat"> & {
        readonly knowledge_owner_team: unknown;
        readonly knowledge_about: unknown;
        ThreatEliminated(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2ArmsAction: ClassIdentityProps<"pb2ArmsAction"> & {
        readonly ACTION_TYPE_DRAG_RIGIDBODY: any;
        readonly ACTION_TYPE_GESTURE_HAPPY: any;
        readonly ACTION_TYPE_GESTURE_LISTEN_RADIO: any;
        readonly ACTION_TYPE_GESTURE_POINT_AT: any;
        readonly ACTION_TYPE_GESTURE_WEAPON_DOWN: any;
        readonly ACTION_TYPE_GESTURE_WEAPON_ON_SHOULDER: any;
        readonly ACTION_TYPE_GRAPPLING_HOOK: any;
        readonly ACTION_TYPE_KICK: any;
        readonly ACTION_TYPE_RELOAD_WEAPONS: any;
        readonly ACTION_TYPE_SWORDS_ACTIVATION: any;
        readonly ACTION_TYPE_THROW_GRENADE_COLD_NADE: any;
        readonly ACTION_TYPE_THROW_GRENADE_DRONE_TURRET: any;
        readonly ACTION_TYPE_THROW_GRENADE_DRONE_TURRET2: any;
        readonly ACTION_TYPE_THROW_GRENADE_EXPLOSION_MINE: any;
        readonly ACTION_TYPE_THROW_GRENADE_FIRE: any;
        readonly ACTION_TYPE_THROW_GRENADE_FLASH: any;
        readonly ACTION_TYPE_THROW_GRENADE_GLOW: any;
        readonly ACTION_TYPE_THROW_GRENADE_HE: any;
        readonly ACTION_TYPE_THROW_GRENADE_HEALER: any;
        readonly ACTION_TYPE_THROW_GRENADE_LASER_MINE: any;
        readonly ACTION_TYPE_THROW_GRENADE_PORT: any;
        readonly ACTION_TYPE_THROW_GRENADE_SCANNER_CAMERA: any;
        readonly ACTION_TYPE_THROW_GRENADE_SHIELD: any;
        readonly ACTION_TYPE_THROW_GRENADE_SMOKE: any;
        readonly ACTION_TYPE_THROW_GRENADE_SNOWBALL: any;
        readonly ACTION_TYPE_THROW_GRENADE_TIME: any;
        readonly ACTION_TYPE_THROW_GRENADE_TOXIC_GAS: any;
        readonly ACTION_TYPE_THROW_GRENADE_TURRET: any;
        readonly ACTION_TYPE_THROW_GRENADE_TURRET2: any;
        readonly ACTION_TYPE_THROW_GRENADE_VIRUS: any;
        readonly ACTION_TYPE_USE: any;
        readonly ACTION_TYPE_WALLJUMP_BACK: any;
        readonly ACTION_TYPE_WALLJUMP_FRONT: any;
        readonly ALL_TYPES: any;
        readonly ARMS_BOTH: any;
        readonly ARMS_NONE: any;
        readonly ARMS_PRIMARY: any;
        readonly ARMS_SECONDARY: any;
        readonly GESTURE_FIRST: any;
        readonly GESTURE_LAST: any;
        readonly GRENADE_FIRST: any;
        readonly GRENADE_LAST: any;
        readonly LEGS_BOTH: any;
        readonly LEGS_NONE: any;
    };
}

declare global {
    /**
     * unfinished  
     * the class is actually called hT in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2AtomInstance = ClassIdentityProps<"hT"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        tox: unknown;
        toy: unknown;
        readonly rad: unknown;
        readonly of: unknown;
        Teleport(...args: unknown[]): unknown;
        GetBody(): b2BodyInstance;
        GetPosition(): b2Vec2;
        DealDamage(...args: unknown[]): unknown;
    };
}

declare global {
    const pb2Bleeding: ClassIdentityProps<"pb2Bleeding"> & {
        /**
         * @param mesh THREE mesh. gives position
         * @param dXy object containing box2d_body or index of box2d_bodies in dXG. used to add velocity to blood particles
         * @param duration 
         * @param lD color. new pb2Color(0xff0000).toColorTransform
         * @param dXG bleeding character / entity. not sure if type is correct
         * @param is_glowing 
         * @param dXr owner ragdoll / entity ? (if bU() === true (maybe means frozen) then no particles). not sure if type is correct
         */
        BleedAt(
            mesh: THREE.MeshInstance, 
            dXy: {box2d_body: b2BodyInstance} | number, 
            duration: number, 
            lD: ColorTransform, 
            dXG: pb2CharacterInstance | pb2EntityInstance,
            is_glowing: boolean, 
            dXr: pb2RagdollInstance | pb2EntityInstance
        ): void;
    };
}

declare global {
    /** unfinished */
    const pb2Bullet: ClassIdentityProps<"pb2Bullet"> & {
        beam_hit_spark_multiplier: unknown;
        beam_max_life_time: unknown;
        blip_time: unknown;
        bullet_gravity_multiplayer: unknown;
        bullet_min_hp: unknown;
        bullet_self_push_multiplayer: unknown;
        bullet_target_push_multiplayer: unknown;
        bullets: unknown;
        bullets_damage_guns: unknown;
        default_bullet_life: unknown;
        default_bullet_speed: unknown;
        dist_before_selfhit: unknown;
        entity_push_power: unknown;
        entity_push_power_explosion: unknown;
        explosive_direct_based_multiplier: unknown;
        friction_air: unknown;
        friction_distance_multiplier: unknown;
        friction_for_beam: unknown;
        friction_for_cloud_air: unknown;
        friction_for_cloud_water: unknown;
        friction_wall: unknown;
        friction_water: unknown;
        grenade_density: unknown;
        held_gun_knock_multiplier: unknown;
        held_ragdoll_damage_sword_kick_punch_mult: unknown;
        hp_beam: unknown;
        hp_default_bullet: unknown;
        hp_grenade: unknown;
        hp_nail: unknown;
        hp_plasma: unknown;
        hp_plasma_radioactive: unknown;
        hp_railgun: unknown;
        hp_raygun: unknown;
        hp_rocket: unknown;
        hp_sword: unknown;
        knock_gun_owner_intensity: unknown;
        knock_sword_owner_intensity: unknown;
        max_damaging_constant_beam_damage: unknown;
        max_rocket_fuel: unknown;
        min_damaging_ammount: unknown;
        min_damaging_ammount_AI: unknown;
        min_damaging_ammount_clouds: unknown;
        min_damaging_ammount_nails: unknown;
        normal_grenade_mesh_scale: unknown;
        particle_push_power: unknown;
        player_push_power: unknown;
        radius_beam: unknown;
        radius_bullet: unknown;
        radius_cloud: unknown;
        radius_grenade: unknown;
        radius_sword: unknown;
        radius_sword_bullet_reflection: unknown;
        radius_sword_crosshit: unknown;
        radius_sword_protection: unknown;
        ragdoll_push_power: unknown;
        ragdoll_push_power_explosion: unknown;
        ricochet_power_remain_beam: unknown;
        ricochet_power_remain_bullet: unknown;
        ricochet_power_remain_rail: unknown;
        time_before_selfhit: unknown;
        water_push_power: unknown;
        water_push_power_directed: unknown;
    };
    
    /** unfinished */
    type pb2BulletInstance = ClassIdentityProps<"pb2Bullet"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        readonly owner_ragdoll: unknown;
        readonly owner_gun: unknown;
        GetMesh(id?: 0 | 1 | 2): unknown | undefined;
    };
}

declare global {
    /** unfinished */
    const pb2BulletDisposer: ClassIdentityProps<"pb2BulletDisposer"> & {
        normal_time_to_live: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2ByteShifter: ClassIdentityProps<"pb2ByteShifter"> & {
        send_repeat_delay_for_server: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Character: ClassIdentityProps<"pb2Character"> & {
        CreateCharacter(...args: unknown[]): unknown;
        readonly DROP_ALWAYS: any;
        readonly DROP_NEVER: any;
        readonly DROP_WHEN_CAN_NOT_BE_REVIVED: any;
        readonly DROP_WHEN_INTENDED_ONLY: any;
        characters: pb2CharacterInstance[];
        readonly player_half_width: any;
        readonly player_height: any;
        readonly player_sitmax: any;
        readonly player_step_size: any;
        readonly player_width: any;
    };
    
    /** unfinished */
    type pb2CharacterInstance = ClassIdentityProps<"pb2Character"> & {
        readonly classid: typeof pb2ClassID["CHARACTER"];
        readonly x: number;
        readonly y: number;
        act_x: unknown;
        act_y: unknown;
        act_fall: unknown;
        look_x: unknown;
        look_y: unknown;
        act_fire: unknown;
        act_fire2: unknown;
        auto_fire: unknown;
        auto_fire2: unknown;
        act_single_jump: unknown;
        act_single_fire: unknown;
        act_single_fire2: unknown;
        act_single_fall: unknown;
        act_grab: unknown;
        act_kick: unknown;
        act_reload: unknown;
        act_sprint: unknown;
        readonly can_be_revived: unknown;
        MakeUnrevivable(...args: unknown[]): unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        readonly ang: unknown;
        hea: number;
        hmax: number;
        start_hea: unknown;
        readonly ragdoll: pb2RagdollInstance;
        MoveOn(...args: unknown[]): unknown;
        DealCharacterDamage(...args: unknown[]): unknown;
        /**
         * @param damage damage amount
         * @param cqQ default=true
         * @param beo default=false
         * @param fG default=0
         * @param fE default=0
         * @param gv mute damage sound. default=false
         * @param cqP default=false
         * @returns {boolean}
         */
        SubstractHealth(damage: number, cqQ: boolean, beo: boolean, fG: number, fE: number, gv: boolean, cqP: boolean): boolean;
        AddGrenades(...args: unknown[]): unknown;
        SetGrenades(...args: unknown[]): unknown;
        GetGrenades(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        addEventListener(...args: unknown[]): unknown;
        removeEventListener(...args: unknown[]): unknown;
        removeAllListeners(...args: unknown[]): unknown;
        removeListenersByType(...args: unknown[]): unknown;
        readonly controller: unknown;
        readonly hand_holder: unknown;
        readonly curwea_slot: unknown;
        readonly curwea_slot_animation: unknown;
        curwea_backup_slot: unknown;
        readonly phys_sit: unknown;
        ChangeGunIfPossible(...args: unknown[]): unknown;
        ReloadGunsIfPossible(...args: unknown[]): unknown;
        ChangeGunToBackupIfPossible(...args: unknown[]): unknown;
        DoGesture(...args: unknown[]): unknown;
        UseAction(...args: unknown[]): unknown;
        addImpulse(...args: unknown[]): unknown;
        AddVel(...args: unknown[]): unknown;
        SetVel(...args: unknown[]): unknown;
        DimLights(...args: unknown[]): unknown;
        UndimLights(...args: unknown[]): unknown;
        PlayDeathSound(...args: unknown[]): unknown;
        Kill(...args: unknown[]): unknown;
        aim_spread: unknown;
        BodyIsPartOfPlayer(...args: unknown[]): unknown;
        PickWeapon(...args: unknown[]): unknown;
        DropWeapon(cqN: pb2GunInstance): void;
        DropGunIfPossible(...args: unknown[]): unknown;
        SetAllGrenadesCount(...args: unknown[]): unknown;
        GetWeaponGlow(...args: unknown[]): unknown;
        WeaponIsBeingChanged(...args: unknown[]): unknown;
        CanShootNow(...args: unknown[]): unknown;
        GetWeaponAtSlot(...args: unknown[]): unknown;
        GetCurrentAnimationWeapon(...args: unknown[]): unknown;
        HasAnyWeapon(...args: unknown[]): unknown;
        ChangeGunToNonSwords(...args: unknown[]): unknown;
        GetNonSwordsSlot(...args: unknown[]): unknown;
        GetRandomNonSwordsSlot(...args: unknown[]): unknown;
        GetFirstHealGunSlot(...args: unknown[]): unknown;
        GetBody(id: 0 | 1): b2BodyInstance;
        forceUnHandHold(id: unknown): void;
    };
}

declare global {
    /** unfinished */
    const pb2ClassID: ClassIdentityProps<"pb2ClassID"> & {
        readonly AI_MODULE: any;
        readonly ATOM: any;
        readonly BEAM_BULLET_TRAIL: any;
        readonly BULLET: any;
        readonly CHARACTER: 1;
        readonly COLLISION_IGNORE: any;
        readonly CONTROLLER: any;
        readonly DATA_CONNECTION: any;
        readonly DECORATION: any;
        readonly ENTITY: any;
        readonly EXPLOSION: any;
        readonly FIRE: any;
        readonly FIRE_TYPE: any;
        readonly FLOATING_TEXT: any;
        readonly FROZEN_SPOT: any;
        readonly GUN: any;
        readonly HAND_HOLDER: any;
        readonly HERO_INFO: any;
        readonly HERO_INFO_BAR: any;
        readonly LASER_SIGHT: any;
        readonly LIGHT: any;
        readonly MERGED_SOUND_ADD_SOURCE_CALL: any;
        readonly OTHER: any;
        readonly PHYS3D: any;
        readonly RADIOACTIVE_CLOUD: any;
        readonly RAGDOLL: 3;
        readonly REGION: any;
        readonly REPLAY_DATA: any;
        readonly ROPE: any;
        readonly SHAPE: any;
        readonly SHIELD: any;
        readonly SOUND: any;
        readonly SWITCH: any;
        readonly TEAM: any;
        readonly TEMP_HURT_FORCE: any;
        readonly TIME_WARP_ZONE: any;
        readonly VOID: any;
        readonly WATER_CLASS: any;
        readonly WINDOW: any;
        readonly WINDOW_HINT: any;
    };
}

declare global {
    /** unfinished */
    const pb2Cloth: ClassIdentityProps<"pb2Cloth"> & {
        readonly TYPE_BEARD: any;
        readonly TYPE_CAPE: any;
        readonly TYPE_ENTITY_CABLES: any;
        readonly TYPE_HAIR_PONYTAIL: any;
        readonly TYPE_HAIR_REGULAR: any;
        readonly TYPE_HAT_MAGE: any;
        readonly TYPE_HAT_MAGICIAN: any;
        readonly TYPE_HAT_SANTA: any;
        readonly TYPE_MINIGUN_BELT: any;
        readonly TYPE_NIMBUS: any;
        readonly TYPE_PARACHUTE: any;
        readonly TYPE_SCARF: any;
        readonly TYPE_SKIRT: any;
        readonly TYPE_TAIL_CAT: any;
        readonly TYPE_TAIL_DEMONIC: any;
        readonly TYPE_TAIL_DRAGON: any;
        readonly TYPE_TAIL_FOX: any;
        readonly TYPE_WEAPON_FUEL_CABLE: any;
        readonly TYPE_WINGS: any;
    };
}

declare global {
    /** unfinished */
    class pb2Color {
        constructor(u?: number);

        _class: "pb2Color";
        toString(): string;
        r: unknown;
        g: unknown;
        b: unknown;
        _uint: unknown;
        clone(...args: unknown[]): unknown;
        multiply(...args: unknown[]): unknown;
        average(...args: unknown[]): unknown;
        toColorTransform(...args: unknown[]): unknown;
        random(...args: unknown[]): unknown;
        multUpToMax(...args: unknown[]): unknown;
        setRGB(...args: unknown[]): unknown;
        isEqual(...args: unknown[]): unknown;
    }
}

declare global {
    /** unfinished */
    class pb2ColoredText {
        constructor(...args: unknown[]);

        _class: "pb2ColoredText";
        toString(): string;
        text: unknown;
        colors: unknown;
        CapitalRedColors(...args: unknown[]): unknown;
        RandomColors(...args: unknown[]): unknown;
        WhiteColors(...args: unknown[]): unknown;
        FromTagged(...args: unknown[]): unknown;
        GetTagged(...args: unknown[]): unknown;
    }
}

declare global {
    /** unfinished */
    const pb2Controller: ClassIdentityProps<"pb2Controller"> & {
        CreateController(...args: unknown[]): unknown;
        controllers: unknown;
        readonly default_zoom_driving: unknown;
        readonly default_zoom_on_foot: unknown;
        readonly vehicle_in_out_func: unknown;
        readonly vehicle_in_out_param: unknown;
    };
    
    /** unfinished */
    type pb2ControllerInstance = ClassIdentityProps<"pb2Controller"> & {
        readonly character: unknown;
        readonly player_connection: unknown;
        act_x: unknown;
        act_y: unknown;
        look_x: number;
        look_y: number;
        act_fall: unknown;
        act_fire: unknown;
        act_fire2: unknown;
        act_grab: unknown;
        act_sprint: unknown;
        readonly _is_typing: unknown;
        readonly _is_in_menu: unknown;
        remove(...args: unknown[]): unknown;
        readonly zoom: unknown;
        CopyStateFrom(...args: unknown[]): unknown;
        StartZoomMorph(...args: unknown[]): unknown;
        StopZoomMorph(...args: unknown[]): unknown;
        StartPositionMorph(...args: unknown[]): unknown;
        StopPositionMorph(...args: unknown[]): unknown;
        readonly camera_position_forced: unknown;
        readonly camera_position_target_x: unknown;
        readonly camera_position_target_y: unknown;
        readonly zoom_changing: unknown;
        readonly target_zoom: unknown;
        ScreenMinX(...args: unknown[]): unknown;
        ScreenMaxX(...args: unknown[]): unknown;
        ScreenMinY(...args: unknown[]): unknown;
        ScreenMaxY(...args: unknown[]): unknown;
        ai: unknown;
        allow_damage_report_flash: unknown;
        color_mult: unknown;
        color_add: unknown;
        UpdateScreenColor(...args: unknown[]): unknown;
        damage_report_flash_current: unknown;
        player_controllable: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Decoration: ClassIdentityProps<"pb2Decoration"> & {
        readonly BLENDING_ADDITIVE: any;
        readonly BLENDING_MULTIPLY: any;
        readonly BLENDING_NORMAL: any;
        CreateDecoration(...args: unknown[]): unknown;
        readonly LAYER_SCREEN_HUD: any;
        readonly LAYER_WORLD: any;
        readonly LAYER_WORLD_HUD: any;
        PreloadUserData(...args: unknown[]): unknown;
        readonly SHADING_DIMMED: any;
        readonly SHADING_GLOWING: any;
        readonly SHADING_INITIAL: any;
    };
    
    /** unfinished */
    type pb2DecorationInstance = ClassIdentityProps<"pb2Decoration"> & {
        readonly classid: unknown;
        remove(...args: unknown[]): unknown;
        SetColor(...args: unknown[]): unknown;
        blending: unknown;
        shading: unknown;
        relative_to_mesh: unknown;
        hide_relative_to_mesh: unknown;
        inherit_effects: unknown;
        visible: unknown;
        readonly is_being_removed: unknown;
        readonly position: unknown;
        readonly rotation: unknown;
        readonly scale: unknown;
        readonly offset: unknown;
        SetPersonalVisibilityFor(...args: unknown[]): unknown;
        ResetPersonalVisibilityRules(...args: unknown[]): unknown;
        default_visibility: unknown;
        PlayAnimation(...args: unknown[]): unknown;
        PauseAnimation(...args: unknown[]): unknown;
        ResumeAnimation(...args: unknown[]): unknown;
        animation_info: unknown;
        UpdateAnimationUVs(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Disposer: ClassIdentityProps<"pb2Disposer"> & {
        GetDisposer(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2DisposerInstance = ClassIdentityProps<"pb2Disposer"> & {
        time_to_live: unknown;
        readonly Pause: unknown;
        readonly Resume: unknown;
        readonly paused: unknown;
    };
}

declare global {
    /** unfinished */
    class pb2EditorObject {
        constructor(...args: unknown[]);

        _class: "pb2EditorObject";
        toString(): string;
        readonly attributes: unknown;
        readonly children: unknown;
        Recreate(...args: unknown[]): unknown;
        GetDeepCopy(...args: unknown[]): unknown;
        SetUnsetDefaultAttributes(...args: unknown[]): unknown;
        push(...args: unknown[]): unknown;
        unshift(...args: unknown[]): unknown;
        RemoveChild(...args: unknown[]): unknown;
        ListChildren(...args: unknown[]): unknown;
        GetUniqueName(...args: unknown[]): unknown;
        FindChild(...args: unknown[]): unknown;
        FindAllChildren(...args: unknown[]): unknown;
        DragPoints(...args: unknown[]): unknown;
        fromString(...args: unknown[]): unknown;
        fromXMLNode(...args: unknown[]): unknown;
        
        /** bugged, the returned value shows up as "Error" */
        static GetModificationWorldCopy(): pb2EditorObject;
    }
}

declare global {
    /** unfinished */
    const pb2EngineDatabase: ClassIdentityProps<"pb2EngineDatabase"> & {
        DragPoints(...args: unknown[]): unknown;
        FindAllChildren(...args: unknown[]): unknown;
        FindChild(...args: unknown[]): unknown;
        GetDeepCopy(...args: unknown[]): unknown;
        GetUniqueName(...args: unknown[]): unknown;
        ListChildren(...args: unknown[]): unknown;
        Recreate(...args: unknown[]): unknown;
        RemoveChild(...args: unknown[]): unknown;
        SetUnsetDefaultAttributes(...args: unknown[]): unknown;
        readonly attributes: unknown;
        readonly children: unknown;
        fromString(...args: unknown[]): unknown;
        fromXMLNode(...args: unknown[]): unknown;
        push(...args: unknown[]): unknown;
        unshift(...args: unknown[]): unknown;
    };
}

/** unfinished */
type pb2EntityInstanceBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    readonly classid: unknown;
    readonly x: number;
    readonly y: number;
    readonly tox: number;
    readonly toy: number;
    InstallGun(...args: unknown[]): unknown;
    DropGun(...args: unknown[]): unknown;
    remove(...args: unknown[]): unknown;
    AddRagdoll(...args: unknown[]): unknown;
    ExcludeRagdoll(...args: unknown[]): unknown;
    IgnoreRagdoll(...args: unknown[]): unknown;
    DealDamage(...args: unknown[]): unknown;
    alpha: unknown;
    readonly is_being_removed: boolean;
    hea: number;
    hmax: number;
    dying_level: unknown;
    team: pb2TeamInstance;
    SetDriverSeatsAndRadius(...args: unknown[]): unknown;
    SetSide(...args: unknown[]): unknown;
    readonly box2d_bodies: b2BodyInstance[];
    addEventListener(...args: unknown[]): unknown;
    removeEventListener(...args: unknown[]): unknown;
    GetLimb(id: unknown): unknown;
    GetMesh(id?: number): THREE.MeshInstance;
};

declare global {
    /** unfinished */
    const pb2Entity: ClassIdentityProps<"pb2Entity"> & {
        readonly ALL_TYPES: any;
        CountShapesInRect(...args: unknown[]): unknown;
        CreateEntity(...args: unknown[]): unknown;
        readonly MATERIAL_BLOOD: any;
        readonly MATERIAL_CONCRETE: any;
        readonly MATERIAL_CRAB_SHELL: any;
        readonly MATERIAL_GLASS: any;
        readonly MATERIAL_ICE: any;
        readonly MATERIAL_MAGAZINE_CANISTER: any;
        readonly MATERIAL_MAGAZINE_GENERIC_METAL: any;
        readonly MATERIAL_MAGAZINE_PISTOL: any;
        readonly MATERIAL_MAGAZINE_PISTOL3: any;
        readonly MATERIAL_MAGAZINE_RIFLE: any;
        readonly MATERIAL_METAL: any;
        readonly MATERIAL_METAL_MOTO: any;
        readonly MATERIAL_METAL_SPOILER33: any;
        readonly MATERIAL_METAL_USURP: any;
        readonly MATERIAL_METAL_USURP_BOSS_LEG: any;
        readonly MATERIAL_ROCK: any;
        readonly MATERIAL_RUBBER: any;
        readonly MATERIAL_WOOD: any;
        readonly TYPE_ANTIGRAVITY: any;
        readonly TYPE_BARREL: any;
        readonly TYPE_BARREL_PART: any;
        readonly TYPE_CORVETTE: any;
        readonly TYPE_CRATE: any;
        readonly TYPE_FLOATING_ICE: any;
        readonly TYPE_MOTO: any;
        readonly TYPE_SPOILER13: any;
        readonly TYPE_SPOILER14: any;
        readonly TYPE_SPOILER15: any;
        readonly TYPE_SPOILER16: any;
        readonly TYPE_SPOILER17: any;
        readonly TYPE_SPOILER18: any;
        readonly TYPE_SPOILER19: any;
        readonly TYPE_SPOILER20: any;
        readonly TYPE_SPOILER21: any;
        readonly TYPE_SPOILER27: any;
        readonly TYPE_SPOILER28: any;
        readonly TYPE_SPOILER29: any;
        readonly TYPE_SPOILER30: any;
        readonly TYPE_SPOILER33: any;
        readonly TYPE_SPOILER34: any;
        readonly TYPE_SPOILER35: any;
        readonly TYPE_TURRET: any;
        readonly TYPE_UNKNOWN: any;
        readonly TYPE_WALKER: any;
        entities: unknown;
    };
    
    type pb2EntityInstance = pb2EntityInstanceBase<"pb2Entity">;
}

declare global {
    /** unfinished */
    const pb2EntityAntigravity: ClassIdentityProps<"pb2EntityAntigravity"> & {
        readonly STYLE_ID_FORCE: any;
        readonly STYLE_ID_IMPACT_PREVENTION: any;
        readonly STYLE_ID_KINETIC_PUSHER: any;
    };
    
    /** unfinished */
    type pb2EntityAntigravityInstance = pb2EntityInstanceBase<"pb2EntityAntigravity"> & {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        Detach(...args: unknown[]): unknown;
        range: unknown;
        strength: unknown;
        mass_cap_scale: unknown;
        cooldown_duration_scale: unknown;
        can_be_damaged: unknown;
        lights_intensity: unknown;
        light_current: unknown;
        light_next_update_in: unknown;
        malfunction_timer: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2EntityBarrel: ClassIdentityProps<"pb2EntityBarrel"> & {
        readonly STYLE_ID_BLUE: any;
        readonly STYLE_ID_EMPTY: any;
        readonly STYLE_ID_FREEZING: any;
        readonly STYLE_ID_RADIOACTIVE: any;
        readonly STYLE_ID_RED: any;
        readonly STYLE_ID_RED_PBFTTP: any;
        readonly STYLE_ID_TOXIC_GAS: any;
        readonly STYLE_ID_YELLOW: any;
    };
    
    type pb2EntityBarrelInstance = pb2EntityInstanceBase<"pb2EntityBarrel">;
}

declare global {
    /** unfinished */
    const pb2EntityFloatingIce: ClassIdentityProps<"pb2EntityFloatingIce"> & {
        readonly STYLE_ID_ICE: any;
        readonly STYLE_ID_ROCK: any;
    };
    
    type pb2EntityFloatingIceInstance = pb2EntityInstanceBase<"pb2EntityFloatingIce">;
}

declare global {
    /** unfinished */
    const pb2EntityMoto: ClassIdentityProps<"pb2EntityMoto"> & {
        readonly STYLE_ID_MOBILE_C9: any;
        readonly STYLE_ID_MOBILE_CS: any;
        readonly STYLE_ID_MOTO: any;
    };
    
    type pb2EntityMotoInstance = pb2EntityInstanceBase<"pb2EntityMoto">;
}

declare global {
    /** unfinished */
    const pb2EntityTurret: ClassIdentityProps<"pb2EntityTurret"> & {
        readonly STYLE_ID_DENIER: any;
        readonly STYLE_ID_FACET: any;
        readonly STYLE_ID_HARASSER_DRONE: any;
        readonly STYLE_ID_SCOUT_DRONE: any;
    };
    
    type pb2EntityTurretInstance = pb2EntityInstanceBase<"pb2EntityTurret"> & {
        // Detach is only accessible when this.oh (type b2Joint sometimes) !== undefined, which is true only on pb2EntityAntigravity and pb2EntityTurret
        Detach(...args: unknown[]): unknown;
    };
}

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

declare global {
    /** unfinished */
    const pb2Fire: ClassIdentityProps<"pb2Fire"> & {
        fires: unknown;
    };
    
    /** unfinished */
    type pb2FireInstance = ClassIdentityProps<"pb2Fire"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2FloatingText: ClassIdentityProps<"pb2FloatingText"> & {
        GetNewHash(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2FoliageClass: ClassIdentityProps<"pb2FoliageClass"> & {
        readonly ALL_TEMPLATE_TYPES: any;
        readonly TEMPLATE_EARTH: any;
        readonly TEMPLATE_NONE: any;
    };
}

declare global {
    /** unfinished */
    const pb2GameWorld: ClassIdentityProps<"pb2GameWorld"> & {
        CancelPointOfViewReplay(...args: unknown[]): unknown;
        CreateBoxShape(...args: unknown[]): unknown;
        DownloadModules(...args: unknown[]): unknown;
        DownloadSounds(...args: unknown[]): unknown;
        DownloadTextures(...args: unknown[]): unknown;
        EnableSimplePlayerAssignmentLogic(...args: unknown[]): unknown;
        FinalizeNewMovables(...args: unknown[]): unknown;
        FinalizeWorld(...args: unknown[]): unknown;
        GetBounds(...args: unknown[]): unknown;
        GetPing(...args: unknown[]): unknown;
        IsHostSpectating(...args: unknown[]): unknown;
        IsWatchingReplay(...args: unknown[]): unknown;
        SetDisconnectActionDescriptionStructure(...args: unknown[]): unknown;
        SetReplayTimeScale(...args: unknown[]): unknown;
        SetToController(...args: unknown[]): unknown;
        SetToFreeCamera(...args: unknown[]): unknown;
        SetToSpectateRagdoll(...args: unknown[]): unknown;
        ShakeScreen(...args: unknown[]): unknown;
        ShowChatMessage(...args: unknown[]): unknown;
        StartPointOfViewReplay(...args: unknown[]): unknown;
        background_snow: unknown;
        background_terrain_random_seed: unknown;
        readonly connected: unknown;
        readonly controller: pb2ControllerInstance | null;
        default_lamp_color: unknown;
        fog_intensity: unknown;
        foliage_random_seed: unknown;
        foliage_shadow_multiplier: unknown;
        foreground_platform_random_seed: unknown;
        foreground_snow: unknown;
        foreground_terrain_random_seed: unknown;
        hud_custom_bars: unknown;
        hud_show_character_info: unknown;
        hud_visible: unknown;
        readonly isHost: unknown;
        light_power_multiplier: unknown;
        readonly nickname_tagged: unknown;
        readonly personal_virtual_controller: unknown;
        raining: unknown;
        readonly settings: unknown;
        sky_color: unknown;
        sky_intensity: unknown;
        snowing: unknown;
        readonly spectated_ragdoll: unknown;
        sun_color: unknown;
        sun_intensity: unknown;
        sun_shade_x: unknown;
        sun_shade_y: unknown;
        terrain_enabled: unknown;
        terrain_extra_sky_ground_contrast: unknown;
        terrain_extra_space_x: unknown;
        terrain_extra_space_y: unknown;
        terrain_force_low_level_terrain: unknown;
        terrain_fractal_cube_size: unknown;
        terrain_level_influence_factor: unknown;
        terrain_phys_scale: unknown;
        terrain_post_tesselation_grass_noise: unknown;
        terrain_remove_floating_islands: unknown;
        terrain_size_z: unknown;
        terrain_sky_ground_contrast: unknown;
        terrain_solve_random_factor: unknown;
        terrain_start_z: unknown;
        terrain_uv_relax_iterations: unknown;
        terrain_y_offset: unknown;
        readonly user_uid: unknown;
        wind_amplitude: unknown;
        wind_random_part: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2GameplayEffects: ClassIdentityProps<"pb2GameplayEffects"> & {
        types: unknown;
    };
    
    /** unfinished */
    type pb2GameplayEffectsInstance = ClassIdentityProps<"pb2GameplayEffects"> & {
        CreateEffect(...args: unknown[]): unknown;
        GetCharacterLogicSpeed(...args: unknown[]): unknown;
        GetWeaponLogicSpeed(...args: unknown[]): unknown;
        GetBulletModifier(...args: unknown[]): unknown;
        GetInvisible(...args: unknown[]): unknown;
        readonly ragdoll: unknown;
    };
    
    /**
     * unfinished  
     * represents the instance of pb2GameplayEffects.bsW
     */
    type bsWInstance = ClassIdentityProps<"bsW"> & {
        time_to_live: unknown;
        readonly ragdoll: unknown;
        remove(...args: unknown[]): unknown;
        readonly cloak_intensity: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Gun: ClassIdentityProps<"pb2Gun"> & {
        CreateGun(...args: unknown[]): unknown;
        guns: unknown;
        pickable_guns: unknown;
    };
    
    /** unfinished */
    type pb2GunInstance = ClassIdentityProps<"pb2Gun"> & {
        readonly classid: unknown;
        x: unknown;
        y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        readonly owner: pb2CharacterInstance | null;
        readonly owner_entity: pb2EntityInstance | null;
        readonly gun_type: unknown;
        readonly gun_type_string: unknown;
        barrel_spin: unknown;
        heat: unknown;
        main_cooldown: unknown;
        readonly side: 1 | -1;
        Flip(): void;
        Hide(...args: unknown[]): unknown;
        Show(...args: unknown[]): unknown;
        MoveTo(...args: unknown[]): unknown;
        GetPhysSpread(...args: unknown[]): unknown;
        DetachClip(...args: unknown[]): unknown;
        AttachClip(...args: unknown[]): unknown;
        CanShoot(...args: unknown[]): unknown;
        CanShootUI(...args: unknown[]): unknown;
        Fire(...args: unknown[]): unknown;
        CarryStart(...args: unknown[]): unknown;
        activate(...args: unknown[]): unknown;
        deactivate(...args: unknown[]): unknown;
        CarryEnd(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly is_being_removed: boolean;
        readonly box2d_body: b2BodyInstance;
        main_reload_length: unknown;
        readonly is_active: unknown;
        readonly is_being_carried: boolean;
        readonly attachment_atom: unknown;
        readonly clip_out: unknown;
        readonly muzzle_alpha: unknown;
        readonly scale: unknown;
        GetMesh(id?: number): unknown | unknown;
    };
}

declare global {
    /** unfinished */
    const pb2GunClass: ClassIdentityProps<"pb2GunClass"> & {
        CachedGunClasses: unknown;
        CreateCustomGunClass(...args: unknown[]): unknown;
        GetGunClassByString(...args: unknown[]): unknown;
        non_spoiler_weapons: unknown;
        registered_weapons: unknown;
    };
    
    /** unfinished */
    type pb2GunClassInstance = ClassIdentityProps<"pb2GunClass"> & {
        inventory_slot: unknown;
        forcars: unknown;
        cost: unknown;
        costupg: unknown;
        two_at_a_time: unknown;
        stat_count: unknown;
        spawn_distance: unknown;
        stat_spread: unknown;
        stat_bullets: unknown;
        stat_cursor: unknown;
        projectile_speed: unknown;
        projectile_luminescent: unknown;
        fire_duration: unknown;
        fire_type: unknown;
        auto_fire_if_unready: unknown;
        disabled_laser: unknown;
        mass_mult: unknown;
        secondary_mode_toggle: unknown;
        is_grenade: unknown;
        is_lightning: unknown;
        is_rocket: unknown;
        rocket_direct_damage_mode: unknown;
        projectile_base_color: unknown;
        is_railgun: unknown;
        is_heavy: unknown;
        is_healgun: unknown;
        is_repairgun: unknown;
        is_capturehealgun: unknown;
        is_radioactive: unknown;
        is_cloud: unknown;
        is_snowball: unknown;
        is_beam: unknown;
        is_blaster: unknown;
        is_plasma: unknown;
        is_nail: unknown;
        is_raygun: unknown;
        is_wall_sticking: unknown;
        rocket_damage: unknown;
        xpos1: unknown;
        xpos2: unknown;
        attachment: unknown;
        zpos: unknown;
        zpos2: unknown;
        len1: unknown;
        len2: unknown;
        size1: unknown;
        size2: unknown;
        recoil_factor: unknown;
        chaotic_recoil: unknown;
        constant_beam_damage: unknown;
        speed_to_damage_multiplier: unknown;
        explosion_knock_multiplier: unknown;
        explosion_hp_damage_multiplier: unknown;
        max_life_time: unknown;
        max_life_time_rand: unknown;
        ammo_bullet_price: unknown;
        grenade_density: unknown;
        model_name: unknown;
        reload_length: unknown;
        GetProjectileMovieClip(...args: unknown[]): unknown;
        SetProjectileMovieClip(...args: unknown[]): unknown;
        GetStuckProjectileMovieClip(...args: unknown[]): unknown;
        SetStuckProjectileMovieClip(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2GunDefinitions: ClassIdentityProps<"pb2GunDefinitions"> & {
        GetDefinitionFor(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2GunDisposer: ClassIdentityProps<"pb2GunDisposer"> & {
        normal_time_to_live: unknown;
    };
}

declare global {
    /** unfinished */
    class pb2HeroInfoBar {
        constructor(...args: unknown[]);

        _class: "pb2HeroInfoBar";
        toString(): string;
        readonly classid: unknown;
        title: unknown;
        value: unknown;
        value_max: unknown;
        value_handicap: unknown;
        color: unknown;
        color_border: unknown;
        color_delta: unknown;
        color_handicap: unknown;
        color_title: unknown;
        
        static readonly TYPE_SERVER_VAR: any;
        static readonly TYPE_SPACER: any;
    }
}

declare global {
    /** unfinished */
    class pb2HighRangeColor {
        constructor(...args: unknown[]);

        _class: "pb2HighRangeColor";
        toString(): string;
        r: unknown;
        g: unknown;
        b: unknown;
        clone(...args: unknown[]): unknown;
        addRGB(...args: unknown[]): unknown;
        from_uint(...args: unknown[]): unknown;
        _uint: unknown;
        limit(...args: unknown[]): unknown;
        multiply(...args: unknown[]): unknown;
        multiplyColor(...args: unknown[]): unknown;
        add(...args: unknown[]): unknown;
        addColor(...args: unknown[]): unknown;
        average(...args: unknown[]): unknown;
        GetAverageValue(...args: unknown[]): unknown;
        rand(...args: unknown[]): unknown;
        setRGB(...args: unknown[]): unknown;
    }
}

declare global {
    /** unfinished */
    const pb2Light: ClassIdentityProps<"pb2Light"> & {
        CreateLight(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2LightInstance = ClassIdentityProps<"pb2Light"> & {
        x: unknown;
        y: unknown;
        readonly is_static: unknown;
        color: unknown;
        power: unknown;
        readonly flare: unknown;
        remove(...args: unknown[]): unknown;
        readonly is_being_removed: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Math: ClassIdentityProps<"pb2Math"> & {
        Dist2D(...args: unknown[]): unknown;
        Dist2D_Vector(...args: unknown[]): unknown;
        Dist3D(...args: unknown[]): unknown;
        GetProjectionOnSegment(...args: unknown[]): unknown;
        GetProjectionOnSegmentTo(...args: unknown[]): unknown;
        SegmentBBoxIntersection(...args: unknown[]): unknown;
        inDist2D(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Multiplayer: ClassIdentityProps<"pb2Multiplayer"> & {
        AddMatchTag(...args: unknown[]): unknown;
        GetAllPlayerConnectionsAndSelf(...args: unknown[]): unknown;
        GetMatchInfoObject(...args: unknown[]): unknown;
        SetMatchProperty(...args: unknown[]): unknown;
        readonly enabled: unknown;
        readonly initiator_user_uid: any;
        readonly match_host_user_uid: any;
        readonly match_instance_key: any;
        readonly match_uid: any;
    };
}

declare global {
    /** unfinished */
    const pb2OverheadHUD: ClassIdentityProps<"pb2OverheadHUD"> & {
        readonly ALL_TYPES: any;
        readonly OVERHEAD_VISIBILITY_EVERYONE: any;
        readonly OVERHEAD_VISIBILITY_HIDDEN: any;
        readonly OVERHEAD_VISIBILITY_TEAMMATES_ONLY: any;
        readonly VG: any;
        readonly _FK: any;
    };
}

declare global {
    /** unfinished */
    const pb2ParticleSystems: ClassIdentityProps<"pb2ParticleSystems"> & {
        CreateParticleSystem(...args: unknown[]): unknown;
        readonly TYPE_TACTICAL_PING: any;
        readonly TYPE_TELEPORT: any;
    };
}

declare global {
    /** unfinished */
    type pb2PendingJoinRequestInstance = ClassIdentityProps<"pb2PendingJoinRequest"> & {
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly response_sent: unknown;
        accept(...args: unknown[]): unknown;
        reject(...args: unknown[]): unknown;
        redirect(...args: unknown[]): unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
    };
}

declare global {
    /**
     * unfinished  
     * represents the instance of either DataConnection or bAK. these same properties are made accessible on bAK instances even though they don't exist.
     */
    type pb2PlayerConnectionInstance = ClassIdentityProps<"pb2PlayerConnection"> & {
        readonly controller: unknown;
        readonly spectated_ragdoll: unknown;
        readonly personal_virtual_controller: unknown;
        readonly isHost: unknown;
        readonly StartPointOfViewReplay: unknown;
        readonly IsWatchingReplay: unknown;
        readonly CancelPointOfViewReplay: unknown;
        readonly SetReplayTimeScale: unknown;
        readonly GetReplayTimeScale: unknown;
        readonly user_uid: unknown;
        readonly connection_uid: unknown;
        readonly SetDisconnectActionDescriptionStructure: unknown;
        readonly Disconnect: unknown;
        readonly SetToController: unknown;
        readonly SetToSpectateRagdoll: unknown;
        readonly nickname_tagged: unknown;
        readonly skin_info: unknown;
        controls_trusted: unknown;
        hud_visible: unknown;
        hud_show_character_info: unknown;
        hud_custom_bars: unknown;
        readonly settings: unknown;
        readonly ShowChatMessage: unknown;
        readonly ShakeScreen: unknown;
        readonly SetToFreeCamera: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2RadioactiveCloud: ClassIdentityProps<"pb2RadioactiveCloud"> & {
        clouds: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Ragdoll: ClassIdentityProps<"pb2Ragdoll"> & {
        CreateRagdoll(...args: unknown[]): unknown;
        CreateRagdollComplete(...args: unknown[]): unknown;
        readonly b_arm1: any; // atom id
        readonly b_arm2: any; // atom id
        readonly b_body: any; // atom id
        readonly b_body_brk1: any; // atom id
        readonly b_body_brk2: any; // atom id
        readonly b_head_end: any; // atom id
        readonly b_head_start: any; // atom id
        readonly b_leg1: any; // atom id
        readonly b_leg2: any; // atom id
        readonly b_pelvis: any; // atom id
        readonly mc_arm1a: any;
        readonly mc_arm1b: any;
        readonly mc_arm1b_broken: any;
        readonly mc_arm1b_sword: any;
        readonly mc_arm2a: any;
        readonly mc_arm2b: any;
        readonly mc_arm2b_broken: any;
        readonly mc_arm2b_sword: any;
        readonly mc_body: any;
        readonly mc_body_broken: any;
        readonly mc_body_top_pattern: any;
        readonly mc_head: any;
        readonly mc_head_broken: any;
        readonly mc_leg1a: any;
        readonly mc_leg1b: any;
        readonly mc_leg1b_broken: any;
        readonly mc_leg1c: any;
        readonly mc_leg2a: any;
        readonly mc_leg2b: any;
        readonly mc_leg2b_broken: any;
        readonly mc_leg2c: any;
        readonly mc_pelvis: any;
        readonly mc_pelvis_broken: any;
        ragdolls: unknown;
    };

    /** unfinished */
    type pb2RagdollInstance = ClassIdentityProps<"pb2Ragdoll"> & {
        readonly classid: typeof pb2ClassID["RAGDOLL"];
        readonly x: unknown;
        readonly y: unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        dimmed: unknown;
        readonly owner_character: null | pb2CharacterInstance;
        DealLimbDamage(...args: unknown[]): unknown;
        HealGunApplied(...args: unknown[]): unknown;
        CaptureHealGunApplied(...args: unknown[]): unknown;
        SetName(...args: unknown[]): unknown;
        GetName(...args: unknown[]): unknown;
        MeltDown(...args: unknown[]): unknown;
        ExpireAllHintObjects(...args: unknown[]): unknown;
        readonly side: unknown;
        Flip(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly is_being_removed: unknown;
        SetVision(...args: unknown[]): unknown;
        GetVision(...args: unknown[]): unknown;
        GetBlindness(...args: unknown[]): unknown;
        SetBlindness(...args: unknown[]): unknown;
        GetDeafness(...args: unknown[]): unknown;
        SetDeafness(...args: unknown[]): unknown;
        hp_head: unknown;
        hp_body: unknown;
        hp_arms: unknown;
        hp_legs: unknown;
        GetAtomsTotal(...args: unknown[]): unknown;
        readonly gameplay_effects: unknown;
        ClearBulletHoles(...args: unknown[]): unknown;
        UsesGrapplingHook(...args: unknown[]): unknown;
        DetachFromRope(...args: unknown[]): unknown;
        hud_custom_bars: unknown;
        readonly enforce_skin_limitations: unknown;
        readonly use_skin_properties: unknown;
        readonly mobility: unknown;
        readonly team: unknown;
        /** id is one of the atom id static consts defined on pb2Ragdoll */
        GetAtom(id: number): pb2AtomInstance | undefined;
        GetMesh(id?: 0 | unknown): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2RagdollDisposer: ClassIdentityProps<"pb2RagdollDisposer"> & {
        AllowDispose(...args: unknown[]): unknown;
        normal_time_to_live: unknown;
    };
}

declare global {
    /**
     * unfinished  
     * the class is actually called zV in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2RegionInstance = ClassIdentityProps<"zV"> & {
        readonly x: number;
        readonly y: number;
        readonly classid: unknown;
        remove(...args: unknown[]): unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly box2d_body: unknown;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly corner: unknown;
        readonly is_quad: unknown;
        readonly type: unknown;
        readonly _childs: unknown;
        AddPosition(x: number, y: number): void;
        readonly collected_entities_counter: unknown;
    };
}

declare global {
    /**
     * unfinished  
     * the class is actually called lo in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2RopeInstance = ClassIdentityProps<"lo"> & {
        readonly classid: unknown;
        readonly ragdoll: unknown;
        readonly is_collapsing: unknown;
        readonly held_ragdoll: unknown;
        readonly remote_body: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Shape: ClassIdentityProps<"pb2Shape"> & {
        readonly ALL_TYPES: any;
        readonly BACKGROUND: any;
        readonly CORNER_LEFT_BOTTOM: any;
        readonly CORNER_LEFT_TOP: any;
        readonly CORNER_NONE: any;
        readonly CORNER_RIGHT_BOTTOM: any;
        readonly CORNER_RIGHT_TOP: any;
        CountShapesInRect(...args: unknown[]): unknown;
        GetShapeAtPoint(...args: unknown[]): unknown;
        readonly MOVABLE: any;
        readonly REGION: any;
        readonly RIGID: any;
        RaycastResult(...args: unknown[]): unknown;
        SnowCanReach(...args: unknown[]): unknown;
        readonly WALL: any;
        readonly WATER: any;
        isLineTraceable(...args: unknown[]): unknown;
        isRayTraceable(...args: unknown[]): unknown;
        isShapesAtPoint(...args: unknown[]): unknown;
        isWaterAtPoint(...args: unknown[]): unknown;
        world_shapes: pb2ShapeInstance[];
        world_shapes_bgs: (pb2ShapeInstance & {type: typeof pb2Shape.BACKGROUND })[];
        world_shapes_collide: (pb2ShapeInstance & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID | typeof pb2Shape.WATER })[];
        world_shapes_collide_no_water: (pb2ShapeInstance & {type: typeof pb2Shape.WALL | typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_nonstatic: (pb2ShapeInstance & {type: typeof pb2Shape.MOVABLE | typeof pb2Shape.RIGID })[];
        world_shapes_walls: (pb2ShapeInstance & {type: typeof pb2Shape.WALL })[];
        world_shapes_water: (pb2ShapeInstance & {type: typeof pb2Shape.WATER })[];
    };
    
    /** unfinished */
    type pb2ShapeInstance = ClassIdentityProps<"pb2Shape"> & {
        readonly classid: unknown;
        SetSpeed(...args: unknown[]): unknown;
        StartMove(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        DealDamage(...args: unknown[]): unknown;
        attached_to: unknown;
        readonly p: unknown;
        readonly normal: unknown;
        readonly hea: unknown;
        readonly box2d_body: unknown;
        readonly minx: unknown;
        readonly miny: unknown;
        readonly maxx: unknown;
        readonly maxy: unknown;
        readonly corner: unknown;
        readonly is_quad: unknown;
        readonly type: unknown;
        readonly frozen_spots: unknown;
        readonly _childs: unknown;
        SingleTracePoint(...args: unknown[]): unknown;
        readonly see_through: unknown;
        GetMesh(id?: 0): unknown | undefined;
    };
}

declare global {
    /** unfinished */
    const pb2ShieldZone: ClassIdentityProps<"pb2ShieldZone"> & {
        readonly ALL_SOUND_PRESET_IDS: any;
        readonly SOUND_PRESET_ID_SHIELD_GRENADE: any;
        readonly SOUND_PRESET_ID_SILENT: any;
        readonly SOUND_PRESET_ID_SPOILER26_SHIELD: any;
    };
    
    /** unfinished */
    type pb2ShieldZoneInstance = ClassIdentityProps<"pb2ShieldZone"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        DealDamage(...args: unknown[]): unknown;
        Heal(...args: unknown[]): unknown;
        MoveTo(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2SkinEditor: ClassIdentityProps<"pb2SkinEditor"> & {
        AllowSkinDispose(...args: unknown[]): unknown;
        ScheduleCustomSkinUpdate(...args: unknown[]): unknown;
        SpawnDefaultSkin(...args: unknown[]): unknown;
        SpawnTemporaryPreferredUserSkin(...args: unknown[]): unknown;
        SpawnUserDataSkin(...args: unknown[]): unknown;
    };
}

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

declare global {
    /** unfinished */
    const pb2StartDetails: ClassIdentityProps<"pb2StartDetails"> & {
        cT: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Storage: ClassIdentityProps<"pb2Storage"> & {
        ClearPropertyNameToUIDCache(...args: unknown[]): unknown;
        GetCreationProperty(...args: unknown[]): unknown;
        GetPlayerProperty(...args: unknown[]): unknown;
        SetCreationProperty(...args: unknown[]): unknown;
        SetPlayerProperty(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2StyleBoost: ClassIdentityProps<"pb2StyleBoost"> & {
        readonly ALL_TYPES: any;
        readonly DOUBLEJUMP: any;
        readonly JETPACK: any;
        readonly NONE: any;
        readonly SELFBOOST: any;
    };
}

declare global {
    /** unfinished */
    const pb2StyleGrapplingHook: ClassIdentityProps<"pb2StyleGrapplingHook"> & {
        readonly ALL_TYPES: any;
        readonly STYLE_ENTITIES_ONLY: any;
        readonly STYLE_EVERYTHING: any;
        readonly STYLE_FEEDBACKLESS_RIGID_BODY_MANIPULATING: any;
        readonly STYLE_KINETIC_MODULE: any;
        readonly STYLE_NOTHING: any;
        readonly STYLE_RIGID_BODY_MANIPULATING: any;
        readonly STYLE_SIMPLE_ROPE: any;
        readonly STYLE_WALLS_ONLY: any;
    };
}

declare global {
    /** unfinished */
    const pb2StyleRegen: ClassIdentityProps<"pb2StyleRegen"> & {
        readonly ALL_TYPES: any;
        readonly style_delayed_speedup: any;
        readonly style_none: any;
    };
}

declare global {
    /** unfinished */
    const pb2StyleSwords: ClassIdentityProps<"pb2StyleSwords"> & {
        readonly ALL_TYPES: any;
        readonly ARCHWAY: any;
        readonly ARROW: any;
        readonly BASIC: any;
        readonly BYTE_NAIL: any;
        readonly CLAW: any;
        readonly CLIMBER: any;
        readonly COMPACT: any;
        readonly EDGE: any;
        readonly FALCON: any;
        readonly KNIFE: any;
        readonly LARGE: any;
        readonly MYTHIC: any;
        readonly NONE: any;
        readonly PLEXUS: any;
        readonly RISING_ARC: any;
        readonly STANCE: any;
        readonly STICK: any;
        readonly STORM: any;
        readonly TRIPLET: any;
        readonly WING_KNIFE: any;
    };
}

declare global {
    /** unfinished */
    const pb2SurfaceType: ClassIdentityProps<"pb2SurfaceType"> & {
        readonly ALL_TYPES: any;
        readonly APPEARANCE_ADDITIVE: any;
        readonly APPEARANCE_FULL_BRIGHT: any;
        readonly APPEARANCE_NORMAL: any;
        CreateSurfaceType(...args: unknown[]): unknown;
        readonly SHADER_ENVIRONMENT: any;
        readonly SHADER_GAMEPLAY: any;
        SpawnPB2SurfaceTypeParams(...args: unknown[]): unknown;
        readonly TERRAIN_LAYER_CLIFF: any;
        readonly TERRAIN_LAYER_GRASS: any;
        readonly TERRAIN_LAYER_GROUND: any;
        readonly TERRAIN_LAYER_SAND: any;
        readonly TERRAIN_LAYER_SNOW: any;
        readonly TYPE_PB2PLATFORM_WALL: any;
        readonly TYPE_PLATFORM_WALL: any;
        readonly TYPE_SIMPLE_BACKGROUND: any;
        readonly TYPE_SIMPLE_WALL: any;
    };
    
    /** unfinished */
    type pb2SurfaceTypeInstance = ClassIdentityProps<"pb2SurfaceType"> & {
        name: unknown;
        is_soft: unknown;
        recommended_slices_per_density: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Team: ClassIdentityProps<"pb2Team"> & {
        CreateTeam(...args: unknown[]): unknown;
        teams: unknown;
    };
    
    /** unfinished */
    type pb2TeamInstance = ClassIdentityProps<"pb2Team"> & {
        readonly classid: unknown;
        readonly ai_in_team: unknown;
        allow_private_communication: unknown;
        friendly_damage_multiplier: unknown;
        friendly_fire: unknown;
        hud_color: unknown;
        normal_damage_to_dead_teammates: unknown;
        readonly teammates_collide: unknown;
        title: unknown;
        remove(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2TextChannel: ClassIdentityProps<"pb2TextChannel"> & {
        CreateTextChannel(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2TextChannelInstance = ClassIdentityProps<"pb2TextChannel"> & {
        InvitePlayerConnection(...args: unknown[]): unknown;
        UninvitePlayerConnection(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly title: unknown;
        readonly color: unknown;
        readonly show_tag: unknown;
        readonly sync_with_main_server: unknown;
        readonly auto_channel_id: unknown;
        readonly channel_id: unknown;
        readonly is_being_removed: unknown;
        readonly synced: unknown;
        readonly syncing: unknown;
        GetInvitedDataConnections(...args: unknown[]): unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Texture: ClassIdentityProps<"pb2Texture"> & {
        GetTextureByName(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2TextureInstance = ClassIdentityProps<"pb2Texture"> & {
        readonly internal: unknown;
        readonly url: unknown;
        readonly name: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2TextureDecal: ClassIdentityProps<"pb2TextureDecal"> & {
        RemoveAllDecalsAndParticles(...args: unknown[]): unknown;
        readonly decal_decay_remain: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2TimeWarpZone: ClassIdentityProps<"pb2TimeWarpZone"> & {
        CreateWarpZone(...args: unknown[]): unknown;
        GetSpeedAtPoint(...args: unknown[]): unknown;
        IsBodyChronoFrozen(...args: unknown[]): unknown;
        readonly TEXTURE_GRADIENT: unknown;
        readonly TEXTURE_NONE: unknown;
        readonly TEXTURE_TIME_NADE_BLACKOUT: unknown;
        TimeWarpFunction(...args: unknown[]): unknown;
        readonly base_range: unknown;
        readonly blur_range: unknown;
        readonly target_speed: unknown;
        zones: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Timer: ClassIdentityProps<"pb2Timer"> & {
        CreateTimer(...args: unknown[]): unknown;
        readonly TYPE_FULL_FRAME_TICKS: any;
        readonly TYPE_GAME_TIMESCALE: any;
        readonly TYPE_GAME_TIMESCALE_WARPED: any;
        readonly TYPE_REAL_WORLD_TIMESCALE: any;
    };
    
    /** unfinished */
    type pb2TimerInstance = ClassIdentityProps<"pb2Timer"> & {
        calls_left: unknown;
        current_cycle_time_left: unknown;
        SetCalls(...args: unknown[]): unknown;
        SetTimeUntilNextCycle(...args: unknown[]): unknown;
        SetDefaultCycleDuration(...args: unknown[]): unknown;
        ResetCurrentCycle(...args: unknown[]): unknown;
        enabled: unknown;
        Start(...args: unknown[]): unknown;
        Stop(...args: unknown[]): unknown;
        position_container: unknown;
        readonly type: unknown;
    };
}

declare global {
    type pb2TriggerInstance = {
        (...args: unknown[]): unknown;
        enabled: 0 | 1;
        max_calls: number;
        fail_call_callback: null | pb2TriggerInstance;
        fail_call_callback_same_arguments: 0 | 1;
    };
}

declare global {
    /** unfinished */
    const pb2UsableSwitch: ClassIdentityProps<"pb2UsableSwitch"> & {
        CreateSwitch(...args: unknown[]): unknown;
    };
    
    /** unfinished */
    type pb2UsableSwitchInstance = ClassIdentityProps<"pb2UsableSwitch"> & {
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
        usable_glow_intensity: unknown;
        is_usable: unknown;
        Use(...args: unknown[]): unknown;
        remove(...args: unknown[]): unknown;
        readonly model_frame: unknown;
        SetPosition(...args: unknown[]): unknown;
        readonly is_being_removed: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2Vision: ClassIdentityProps<"pb2Vision"> & {
        readonly ALL_TYPES: any;
        readonly VISION_DIRECTED_TRACE: any;
        readonly VISION_EVERYTHING: any;
        readonly VISION_RADIAL_TRACE: any;
        readonly VISION_SCREEN_BOX: any;
    };
}

declare global {
    /** unfinished */
    const pb2Void: ClassIdentityProps<"pb2Void"> & {
        readonly classid: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2WaterClass: ClassIdentityProps<"pb2WaterClass"> & {
        readonly ALL_TYPES: any;
        DeclareWaterClass(...args: unknown[]): unknown;
        readonly TYPE_CORROSIVE: any;
        readonly TYPE_FREEZING: any;
        readonly TYPE_LAVA: any;
        readonly TYPE_TOXIC: any;
        readonly TYPE_WATER: any;
        readonly TYPE_ZERO_GRAVITY: any;
        readonly TYPE_ZERO_GRAVITY_NO_MUFFLE: any;
    };
    
    /** unfinished */
    type pb2WaterClassInstance = ClassIdentityProps<"pb2WaterClass"> & {
        readonly shapes: unknown;
    };
}

/** unfinished */
type pb2WindowInstanceBase<ClassName extends string> = ClassIdentityProps<ClassName> & {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
    tooltip: unknown;
    readonly type: unknown;
    SetVisibilityFor(...args: unknown[]): unknown;
    SendChanges(...args: unknown[]): unknown;
    visible: unknown;
    requires_ctrl_key: unknown;
    ignore_mouse_events: unknown;
    click_animation: unknown;
    SetText(...args: unknown[]): unknown;
    remove(...args: unknown[]): unknown;
    readonly parent: unknown;
    readonly childs: unknown;
    GetTypeSpecificStructure(...args: unknown[]): unknown;
    SetTypeSpecificStructure(...args: unknown[]): unknown;
    readonly is_being_removed: boolean;
};

declare global {
    /** unfinished */
    const pb2Window: ClassIdentityProps<"pb2Window"> & {
        readonly BUTTON: any;
        readonly BUTTON_HOLO: any;
        readonly CAPTION: any;
        readonly CAPTION_CENTERED: any;
        readonly CAPTION_IMPORTANT: any;
        readonly CLOCK: any;
        readonly COLOR_PALETTE: any;
        readonly COLOR_PICKER: any;
        readonly CONTAINER: any;
        CreateWindow(...args: unknown[]): unknown;
        readonly DIALOGBOX: any;
        readonly DRAG_PARENT: any;
        readonly HUD_RECT: any;
        readonly HUD_RECT_SOLID: any;
        readonly ICON_BUTTON: any;
        readonly LEADERBOARD: any;
        readonly LEADERBOARD_PLAYERS_LIST: any;
        readonly PARAM_PANEL: any;
        readonly PERFORMANCE_GRAPH: any;
        readonly PROGRESS_BAR_SEGMENT: any;
        readonly SAYBOX: any;
        readonly SCREEN_BLOCKING_BOX: any;
        readonly SCROLLBAR_CARET: any;
        readonly SCROLLBAR_PAD: any;
        readonly SCROLL_LIST: any;
        readonly STRETCH_PARENT: any;
        readonly icons16_names: any;
        readonly icons16_names_to_id: any;
    };
    
    type pb2WindowInstance = pb2WindowInstanceBase<"pb2Window">;
}

declare global {
    /** unfinished */
    const pb2WindowHint: ClassIdentityProps<"pb2WindowHint"> & {
        readonly COLOR_GREEN: any;
        readonly COLOR_RED: any;
        readonly COLOR_WHITE: any;
        readonly COLOR_YELLOW: any;
        readonly CONTAINER_BOTTOM: any;
        readonly CONTAINER_FLOATING_IN_WORLD: any;
        readonly CONTAINER_TOP: any;
        CreateWindowHint(...args: unknown[]): unknown;
        readonly TYPE_HEALTHBAR: any;
        readonly TYPE_HINT: any;
        readonly TYPE_RESPONSE_OPTIONS: any;
        readonly TYPE_SUBTITLE: any;
        readonly TYPE_WARNING: any;
    };
    
    /** unfinished */
    type pb2WindowHintInstance = ClassIdentityProps<"pb2WindowHint"> & {
        readonly x: unknown;
        readonly y: unknown;
        readonly text: unknown;
        readonly text_decorated: unknown;
        readonly type: unknown;
        readonly container: unknown;
        readonly attachment_ragdoll: unknown;
        readonly time_current: unknown;
        readonly time_to_live: unknown;
        SetText(...args: unknown[]): unknown;
        SetColor(...args: unknown[]): unknown;
        Expire(...args: unknown[]): unknown;
        readonly appearance_duration: unknown;
        readonly main_color: unknown;
        GetOptions(...args: unknown[]): unknown;
        SetOptions(...args: unknown[]): unknown;
        readonly my_vote_id: unknown;
        readonly votes: unknown;
        sync_to_spectators: unknown;
    };
}

declare global {
    /**
     * unfinished  
     * the class is actually called bIc in the pb3 code but it's renamed here for obvious reasons
     */
    type pb2WindowIconButtonInstance = pb2WindowInstanceBase<"pb2WindowIconButton"> & {
        icon: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2WindowLeaderboard: ClassIdentityProps<"pb2WindowLeaderboard"> & {
        readonly ALL_TYPES: any;
        readonly FIELD_TEAM_ID_SPECTATORS: any;
        readonly FIELD_TYPE_BUTTON: any;
        readonly FIELD_TYPE_NUMERIC: any;
        readonly FIELD_TYPE_NUMERIC_DEATHS: any;
        readonly FIELD_TYPE_NUMERIC_ELIMINATIONS: any;
        readonly FIELD_TYPE_NUMERIC_SCORE: any;
        readonly FIELD_TYPE_TEXT: any;
        readonly FIELD_TYPE_TEXT_CENTERED: any;
        readonly FIELD_TYPE_TEXT_NICKNAME: any;
        readonly FIELD_WIDTH_AUTO: any;
        readonly ICON_ID_COIN: any;
        readonly ICON_ID_DEMOTE: any;
        readonly ICON_ID_ELIMINATE: any;
        readonly ICON_ID_KICK: any;
        readonly ICON_ID_PROMOTE: any;
        readonly ICON_ID_REPORT: any;
        readonly ICON_ID_SPECTATE: any;
    };
    
    /** unfinished */
    type pb2WindowLeaderboardInstance = pb2WindowInstanceBase<"pb2WindowLeaderboard"> & {
        round_time: unknown;
        round_time_max: unknown;
        players_max: unknown;
        fields: unknown;
        players: unknown;
        teams: unknown;
        my_player_id: unknown;
        my_spectated_id: unknown;
        graphs: unknown;
    };
}

declare global {
    /** unfinished */
    const pb2_mp: ClassIdentityProps<"pb2_mp"> & {
        readonly FUNCTION_INVERSEMORPH: any;
        readonly FUNCTION_LINEAR: any;
        readonly FUNCTION_MORPH: any;
        GAME_FPS: unknown;
        readonly ui_offset_x: any;
        readonly ui_offset_y: any;
    };
}
