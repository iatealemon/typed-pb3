export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: unknown;
        readonly x: number;
        readonly y: number;
        act_x: unknown;
        act_y: unknown;
        act_fall: unknown;
        look_x: number;
        look_y: number;
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
        readonly can_be_revived: boolean;
        MakeUnrevivable: () => unknown;
        readonly tox: number;
        readonly toy: number;
        readonly ang: unknown;
        hea: number;
        hmax: number;
        start_hea: unknown;
        readonly ragdoll: pb2Ragdoll | null;
        MoveOn: (nx: number, ny: number, sx: number, sy: number) => unknown;
        DealCharacterDamage: (beh: number, beg: unknown, bef: unknown, bed: unknown, beo: unknown) => unknown;
        /**
         * @param bN damage amount  
         * @param cqQ (default=true)   
         * @param beo (default=false)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param gv (default=false) mute damage sound  
         * @param cqP (default=false)   
         */
        SubstractHealth: (bN: number, cqQ?: boolean, beo?: boolean, fG?: number, fE?: number, gv?: boolean, cqP?: boolean) => boolean;
        AddGrenades: (cay: unknown, count: unknown) => unknown;
        SetGrenades: (cay: unknown, count: unknown) => unknown;
        GetGrenades: (cay: unknown) => unknown;
        remove: () => unknown;
        addEventListener: (event_type: unknown, params: unknown) => unknown;
        removeEventListener: (event_type: unknown, params: unknown) => unknown;
        removeAllListeners: () => unknown;
        removeListenersByType: (event_type: unknown) => unknown;
        readonly controller: unknown;
        readonly hand_holder: unknown;
        readonly curwea_slot: unknown;
        readonly curwea_slot_animation: unknown;
        curwea_backup_slot: unknown;
        readonly phys_sit: unknown;
        /**
         * @param slot   
         * @param caI (default=true)   
         * @param override_backup_slot_and_dont_ignore_entity_or_freezing_rules (default=true)   
         */
        ChangeGunIfPossible: (slot: unknown, caI?: unknown, override_backup_slot_and_dont_ignore_entity_or_freezing_rules?: unknown) => unknown;
        ReloadGunsIfPossible: () => unknown;
        ChangeGunToBackupIfPossible: () => unknown;
        DoGesture: (caD: unknown) => unknown;
        UseAction: () => unknown;
        /**
         * @param _x   
         * @param _y   
         * @param Vk (default=false)   
         */
        addImpulse: (_x: number, _y: number, Vk?: unknown) => unknown;
        AddVel: (_x: number, _y: number) => unknown;
        SetVel: (_x: number, _y: number) => unknown;
        DimLights: () => unknown;
        UndimLights: () => unknown;
        /** @param underwater (default=undefined)  */
        PlayDeathSound: (underwater?: unknown) => unknown;
        /**
         * @param bps (default=false)   
         * @param gv (default=false)   
         */
        Kill: (bps?: unknown, gv?: unknown) => unknown;
        aim_spread: unknown;
        BodyIsPartOfPlayer: (bodyB: unknown, cpD: unknown) => unknown;
        PickWeapon: (cqN: unknown) => unknown;
        DropWeapon: (cqN: pb2Gun) => void;
        DropGunIfPossible: () => unknown;
        /** @param v (default=0)  */
        SetAllGrenadesCount: (v?: unknown) => unknown;
        GetWeaponGlow: () => unknown;
        WeaponIsBeingChanged: () => unknown;
        CanShootNow: () => unknown;
        /**
         * @param slot   
         * @param primary (default=true)   
         */
        GetWeaponAtSlot: (slot: unknown, primary?: unknown) => unknown;
        GetCurrentAnimationWeapon: (primary: unknown) => unknown;
        HasAnyWeapon: () => unknown;
        ChangeGunToNonSwords: () => unknown;
        GetNonSwordsSlot: () => unknown;
        GetRandomNonSwordsSlot: () => unknown;
        GetFirstHealGunSlot: () => unknown;
        GetBody: (i: 0 | 1) => b2Body;
        stability: number;
        DoKick: () => unknown;
        StartGrapplingHookIfPossible: () => unknown;
        /** @param cay (default=-1)  */
        ThrowGrenadeIfPossible: (cay?: unknown) => unknown;
        GetHeldBody: () => unknown;
        forceUnHandHold: (id: unknown) => void;
    }
    var pb2Character: ClassIdentityProps<"pb2Character"> & {
        CreateCharacter: (params: unknown) => pb2Character;
        /** Type is unknown. One known value: 0 */
        DROP_NEVER: unknown;
        /** Type is unknown. One known value: 1 */
        DROP_WHEN_INTENDED_ONLY: unknown;
        /** Type is unknown. One known value: 2 */
        DROP_WHEN_CAN_NOT_BE_REVIVED: unknown;
        /** Type is unknown. One known value: 3 */
        DROP_ALWAYS: unknown;
        characters: pb2Character[];
        player_half_width: number;
        player_width: number;
        player_height: number;
        player_step_size: number;
        player_sitmax: number;
    }
}
