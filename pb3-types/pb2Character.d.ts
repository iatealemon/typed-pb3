import type { ClassIdentityProps } from "./internal/helper";
export {};

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