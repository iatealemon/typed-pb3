export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2Character extends ClassIdentityProps<"pb2Character"> {
        /** Type is unknown. One known value: 1 */
        readonly classid: TODO;
        readonly x: number;
        readonly y: number;
        /**
         * The character's horizontal movement intention.  
         * 
         * -1: Trying to move left  
         * 0: Not trying to move horizontally  
         * 1: Trying to move right  
         * 
         * In players these values correspond to which horizontal movement keys are currently held. The value is 0 if both are held.
         */
        act_x: -1 | 0 | 1;
        /**
         * The character's vertical movement intention.  
         * 
         * -1: Trying to move up  
         * 0: Not trying to move vertically  
         * 1: Trying to move down  
         * 
         * In players these values correspond to which vertical movement keys are currently held. The value is 0 if both are held.
         */
        act_y: -1 | 0 | 1;
        /**
         * The character's fall / ragdoll mode intention.  
         * 
         * 0: Trying to stand  
         * 1: Trying to fall / ragdoll  
         */
        act_fall: 0 | 1;
        /** Cursor x position */
        look_x: number;
        /** Cursor y position */
        look_y: number;
        /**
         * The character's primary shoot intention.  
         * 
         * 0: Not trying to use primary attack  
         * 1: Trying to use primary attack  
         * 
         * In players these values correspond to the state of the primary attack button (LMB).  
         * 
         * Setting this to 1 to force primary attack can work but is unreliable, see `auto_fire` instead.
         */
        act_fire: 0 | 1;
        /**
         * The character's secondary shoot intention.  
         * 
         * 0: Not trying to use secondary attack  
         * 1: Trying to use secondary attack  
         * 
         * In players these values correspond to the state of the secondary attack button (RMB).
         * 
         * Setting this to 1 to force secondary attack can work but is unreliable, see `auto_fire2` instead.
         */
        act_fire2: 0 | 1;
        /**
         * Setting this to true will make the character use primary attack with their held weapon.  
         * The weapon is only fired once. To auto-fire repeatedly, `auto_fire` needs to be set to true constantly or after every shot.  
         * If the held weapon is not ready to fire, it will be fired once it is.  
         * If the held weapon is switched, the weapon will not be fired.  
         */
        auto_fire: boolean;
        /**
         * Setting this to true will make the character use secondary attack with their held weapon.  
         * The weapon is only fired once. To auto-fire repeatedly, `auto_fire2` needs to be set to true constantly or after every shot.  
         * If the held weapon is not ready to fire, it will be fired once it is.  
         * If the held weapon is switched, the weapon will not be fired.  
         */
        auto_fire2: boolean;
        /**
         * Equals true for one frame when the jump button (W / Space) is pressed down. Will always be false on NPC characters.  
         * Example:
         * ```js
         * addEventListener("ENTER_FRAME", function() {
         *     if (ragdoll.owner_character.act_single_jump) {
         *         pb2GameWorld.ShowChatMessage(`${ragdoll.GetName().text} pressed jump`);
         *     }
         * });
         * ```
         */
        act_single_jump: boolean;
        /**
         * Equals true for one frame when the primary attack button (LMB) is pressed down. Will always be false on NPC characters.  
         * Example:
         * ```js
         * addEventListener("ENTER_FRAME", function() {
         *     if (ragdoll.owner_character.act_single_fire) {
         *         pb2GameWorld.ShowChatMessage(`${ragdoll.GetName().text} pressed the primary attack button`);
         *     }
         * });
         * ```
         */
        act_single_fire: boolean;
        // didn't actually check if act_single_fire2 and act_single_fall are always false on NPCs but it's not an unreasonable assumption and it's hard to test
        /**
         * Equals true for one frame when the secondary attack button (RMB) is pressed down. Will always be false on NPC characters.  
         * Example:
         * ```js
         * addEventListener("ENTER_FRAME", function() {
         *     if (ragdoll.owner_character.act_single_fire2) {
         *         pb2GameWorld.ShowChatMessage(`${ragdoll.GetName().text} pressed the secondary attack button`);
         *     }
         * });
         * ```
         */
        act_single_fire2: boolean;
        /**
         * Equals true for one frame when the fall / ragdoll mode button (X) is pressed down. Will always be false on NPC characters.  
         * Example:
         * ```js
         * addEventListener("ENTER_FRAME", function() {
         *     if (ragdoll.owner_character.act_single_fall) {
         *         pb2GameWorld.ShowChatMessage(`${ragdoll.GetName().text} pressed the fall / ragdoll mode button`);
         *     }
         * });
         * ```
         */
        act_single_fall: boolean;
        /**
         * The character's grab intention.  
         * 
         * 0: Not trying to grab  
         * 1: Trying to grab  
         * 
         * These values correspond to the state of the grab object button 
         */
        act_grab: 0 | 1;
        /**
         * The character's kick intention.  
         * 
         * 0: Not trying to kick  
         * 1: Trying to kick  
         * 
         * These values correspond to the state of the kick button (C) 
         */
        act_kick: 0 | 1;
        /**
         * The character's reload intention. Will always be 0 on NPC characters.  
         * 
         * 0: Not trying to reload  
         * 1: Trying to reload  
         * 
         * These values correspond to the state of the reload button (R) 
         */
        act_reload: 0 | 1;
        /**
         * The character's sprint intention.  
         * 
         * 0: Not trying to sprint  
         * 1: Trying to sprint  
         * 
         * These values correspond to the state of the sprint button (Left shift) 
         */
        act_sprint: 0 | 1;
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
        /**
         * @param params Object containing parameters
         * @param params.ragdoll Must be defined or an error is thrown. The ragdoll's `owner_character` property will automatically be set to this character.
         * @param params.controller (default=null)
         * @param params.x (default=params.ragdoll.x)
         * @param params.y (default=params.ragdoll.y)
         * @param params.tox (default=0)
         * @param params.toy (default=0)
         * @param params.hmax (default=pb2Character.bXF)
         * @param params.hea (default=this.hmax)
         * @param params.start_hea (default=this.hmax)
         * @param params.hmax_damage_multiplier (default=pb2Character.hmax_damage_multiplier)
         * @param params.side If unspecified, the character will spawn looking at the world origin
         * @param params.stability (default=1)
         * @param params.block_instant_midair_jump (default=false)
         * @param params.drop_guns_on_death (default=pb2Character.DROP_ALWAYS)
         * @param params.drop_grenades_on_death (default=pb2Character.DROP_WHEN_INTENDED_ONLY)
         * @param params.can_be_revived (default=undefined) Can be left unspecified, but the value will be `undefined` (falsy) rather than a boolean value.
         * @param params.Gd (default=false) If true, body part hp values on the ragdoll will not be set
         * @param params.regen_module (default=pb2StyleRegen.style_delayed_speedup)
         * @param params.onDeath Optional function or trigger that gets added as an "OBJECT_DIED" event listener on the character
         * @param params.onAbility Optional function or trigger that gets added as a "CHARACTER_ABILITY" event listener on the character
         */
        CreateCharacter: (params: {
            // roughly ordered by importance and category
            ragdoll: pb2Ragdoll,
            controller?: pb2Controller | null,
            x?: number,
            y?: number,
            tox?: number,
            toy?: number,
            hmax?: number,
            hea?: number,
            start_hea?: number,
            hmax_damage_multiplier?: number,
            side?: number,
            stability?: number,
            block_instant_midair_jump?: boolean,
            drop_guns_on_death?: TODO,
            drop_grenades_on_death?: TODO,
            can_be_revived?: boolean,
            Gd?: boolean,
            regen_module?: TODO | null,
            onDeath?: (
                died: pb2Character, 
                killers: pb2Ragdoll[], // entities don't count
                damage_dealt: number[], 
                using: (pb2Gun | pb2Bullet)[]
            ) => void,
            onAbility?: (user: pb2Character) => void,
        }) => pb2Character; // technically can return null but it seems like an edge case
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
