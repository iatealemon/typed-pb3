export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        act_x: TODO;
        act_y: TODO;
        act_fall: TODO;
        look_x: number;
        look_y: number;
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
        readonly can_be_revived: boolean;
        MakeUnrevivable: () => TODO;
        readonly tox: number;
        readonly toy: number;
        readonly ang: TODO;
        hea: number;
        hmax: number;
        start_hea: TODO;
        readonly ragdoll: pb2Ragdoll | null;
        MoveOn: (nx: number, ny: number, sx: number, sy: number) => TODO;
        DealCharacterDamage: (beh: number, beg: TODO, bef: TODO, bed: TODO, beo: TODO) => TODO;
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
        addImpulse: (_x: number, _y: number, Vk?: TODO) => TODO;
        AddVel: (_x: number, _y: number) => TODO;
        SetVel: (_x: number, _y: number) => TODO;
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
        DropWeapon: (cqN: pb2Gun) => void;
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
        GetBody: (i: 0 | 1) => b2Body;
        stability: number;
        DoKick: () => TODO;
        StartGrapplingHookIfPossible: () => TODO;
        /** @param cay (default=-1)  */
        ThrowGrenadeIfPossible: (cay?: TODO) => TODO;
        GetHeldBody: () => TODO;
        forceUnHandHold: (id: TODO) => void;
    }
    var pb2Character: ClassIdentityProps<"pb2Character"> & {
        CreateCharacter: (params: TODO) => pb2Character;
        /** Type is unknown. One known value: 0 */
        DROP_NEVER: TODO;
        /** Type is unknown. One known value: 1 */
        DROP_WHEN_INTENDED_ONLY: TODO;
        /** Type is unknown. One known value: 2 */
        DROP_WHEN_CAN_NOT_BE_REVIVED: TODO;
        /** Type is unknown. One known value: 3 */
        DROP_ALWAYS: TODO;
        characters: pb2Character[];
        player_half_width: number;
        player_width: number;
        player_height: number;
        player_step_size: number;
        player_sitmax: number;
    }
}
