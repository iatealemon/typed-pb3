export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: TODO;
        readonly x: TODO;
        readonly y: TODO;
        act_x: TODO;
        act_y: TODO;
        act_fall: TODO;
        look_x: TODO;
        look_y: TODO;
        act_fire: TODO;
        act_fire2: TODO;
        auto_fire: TODO;
        auto_fire2: TODO;
        act_single_jump: TODO;
        act_single_fire: TODO;
        act_single_fire2: TODO;
        act_single_fall: TODO;
        act_grab: TODO;
        act_kick: TODO;
        act_reload: TODO;
        act_sprint: TODO;
        readonly can_be_revived: TODO;
        MakeUnrevivable: () => TODO;
        readonly tox: TODO;
        readonly toy: TODO;
        readonly ang: TODO;
        hea: TODO;
        hmax: TODO;
        start_hea: TODO;
        readonly ragdoll: TODO;
        MoveOn: (nx: TODO, ny: TODO, sx: TODO, sy: TODO) => TODO;
        DealCharacterDamage: (beh: TODO, beg: TODO, bef: TODO, bed: TODO, beo: TODO) => TODO;
        /**
         * @param bN   
         * @param cqQ (default=true)   
         * @param beo (default=false)   
         * @param fG (default=0)   
         * @param fE (default=0)   
         * @param gv (default=false)   
         * @param cqP (default=false)   
         */
        SubstractHealth: (bN: TODO, cqQ?: TODO, beo?: TODO, fG?: TODO, fE?: TODO, gv?: TODO, cqP?: TODO) => TODO;
        AddGrenades: (cay: TODO, count: TODO) => TODO;
        SetGrenades: (cay: TODO, count: TODO) => TODO;
        GetGrenades: (cay: TODO) => TODO;
        remove: () => TODO;
        addEventListener: (event_type: TODO, params: TODO) => TODO;
        removeEventListener: (event_type: TODO, params: TODO) => TODO;
        removeAllListeners: () => TODO;
        removeListenersByType: (event_type: TODO) => TODO;
        readonly controller: TODO;
        readonly hand_holder: TODO;
        readonly curwea_slot: TODO;
        readonly curwea_slot_animation: TODO;
        curwea_backup_slot: TODO;
        readonly phys_sit: TODO;
        /**
         * @param slot   
         * @param caI (default=true)   
         * @param override_backup_slot_and_dont_ignore_entity_or_freezing_rules (default=true)   
         */
        ChangeGunIfPossible: (slot: TODO, caI?: TODO, override_backup_slot_and_dont_ignore_entity_or_freezing_rules?: TODO) => TODO;
        ReloadGunsIfPossible: () => TODO;
        ChangeGunToBackupIfPossible: () => TODO;
        DoGesture: (caD: TODO) => TODO;
        UseAction: () => TODO;
        /**
         * @param _x   
         * @param _y   
         * @param Vk (default=false)   
         */
        addImpulse: (_x: TODO, _y: TODO, Vk?: TODO) => TODO;
        AddVel: (_x: TODO, _y: TODO) => TODO;
        SetVel: (_x: TODO, _y: TODO) => TODO;
        DimLights: () => TODO;
        UndimLights: () => TODO;
        /** @param underwater (default=undefined)  */
        PlayDeathSound: (underwater?: TODO) => TODO;
        /**
         * @param bps (default=false)   
         * @param gv (default=false)   
         */
        Kill: (bps?: TODO, gv?: TODO) => TODO;
        aim_spread: TODO;
        BodyIsPartOfPlayer: (bodyB: TODO, cpD: TODO) => TODO;
        PickWeapon: (cqN: TODO) => TODO;
        DropWeapon: (cqN: TODO) => TODO;
        DropGunIfPossible: () => TODO;
        /** @param v (default=0)  */
        SetAllGrenadesCount: (v?: TODO) => TODO;
        GetWeaponGlow: () => TODO;
        WeaponIsBeingChanged: () => TODO;
        CanShootNow: () => TODO;
        /**
         * @param slot   
         * @param primary (default=true)   
         */
        GetWeaponAtSlot: (slot: TODO, primary?: TODO) => TODO;
        GetCurrentAnimationWeapon: (primary: TODO) => TODO;
        HasAnyWeapon: () => TODO;
        ChangeGunToNonSwords: () => TODO;
        GetNonSwordsSlot: () => TODO;
        GetRandomNonSwordsSlot: () => TODO;
        GetFirstHealGunSlot: () => TODO;
        GetBody: (i: TODO) => TODO;
        stability: TODO;
        DoKick: () => TODO;
        StartGrapplingHookIfPossible: () => TODO;
        /** @param cay (default=-1)  */
        ThrowGrenadeIfPossible: (cay?: TODO) => TODO;
        GetHeldBody: () => TODO;
        forceUnHandHold: (id: TODO) => TODO;
    }
    var pb2Character: ClassIdentityProps<"pb2Character"> & {
        CreateCharacter: (params: TODO) => TODO;
        /** Type is unknown. One known value: 0 */
        DROP_NEVER: TODO;
        /** Type is unknown. One known value: 1 */
        DROP_WHEN_INTENDED_ONLY: TODO;
        /** Type is unknown. One known value: 2 */
        DROP_WHEN_CAN_NOT_BE_REVIVED: TODO;
        /** Type is unknown. One known value: 3 */
        DROP_ALWAYS: TODO;
        /** Type is unknown. One known value: [] */
        characters: TODO;
        /** Type is unknown. One known value: 10 */
        player_half_width: TODO;
        /** Type is unknown. One known value: 20 */
        player_width: TODO;
        /** Type is unknown. One known value: 70 */
        player_height: TODO;
        /** Type is unknown. One known value: 32 */
        player_step_size: TODO;
        /** Type is unknown. One known value: 14 */
        player_sitmax: TODO;
    }
}
