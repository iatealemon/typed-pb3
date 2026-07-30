export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: unknown;
        readonly x: unknown;
        readonly y: unknown;
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
        MakeUnrevivable: () => unknown;
        readonly tox: unknown;
        readonly toy: unknown;
        readonly ang: unknown;
        hea: unknown;
        hmax: unknown;
        start_hea: unknown;
        readonly ragdoll: unknown;
        MoveOn: (nx: unknown, ny: unknown, sx: unknown, sy: unknown) => unknown;
        DealCharacterDamage: (beh: unknown, beg: unknown, bef: unknown, bed: unknown, beo: unknown) => unknown;
        /**
         * @param bN   
         * @param cqQ (default=true)   
         * @param beo (default=false)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param gv (default=false)   
         * @param cqP (default=false)   
         */
        SubstractHealth: (bN: unknown, cqQ?: unknown, beo?: unknown, fG?: unknown, fE?: unknown, gv?: unknown, cqP?: unknown) => unknown;
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
        addImpulse: (_x: unknown, _y: unknown, Vk?: unknown) => unknown;
        AddVel: (_x: unknown, _y: unknown) => unknown;
        SetVel: (_x: unknown, _y: unknown) => unknown;
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
        DropWeapon: (cqN: unknown) => unknown;
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
        GetBody: (i: unknown) => unknown;
        stability: unknown;
        DoKick: () => unknown;
        StartGrapplingHookIfPossible: () => unknown;
        /** @param cay (default=-1)  */
        ThrowGrenadeIfPossible: (cay?: unknown) => unknown;
        GetHeldBody: () => unknown;
        forceUnHandHold: (id: unknown) => unknown;
    }
    var pb2Character: ClassIdentityProps<"pb2Character"> & {
        CreateCharacter: (params: unknown) => unknown;
        /** Type is unknown. One known value: 0 */
        DROP_NEVER: unknown;
        /** Type is unknown. One known value: 1 */
        DROP_WHEN_INTENDED_ONLY: unknown;
        /** Type is unknown. One known value: 2 */
        DROP_WHEN_CAN_NOT_BE_REVIVED: unknown;
        /** Type is unknown. One known value: 3 */
        DROP_ALWAYS: unknown;
        /** Type is unknown. One known value: [] */
        characters: unknown;
        /** Type is unknown. One known value: 10 */
        player_half_width: unknown;
        /** Type is unknown. One known value: 20 */
        player_width: unknown;
        /** Type is unknown. One known value: 70 */
        player_height: unknown;
        /** Type is unknown. One known value: 32 */
        player_step_size: unknown;
        /** Type is unknown. One known value: 14 */
        player_sitmax: unknown;
    }
}
