export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

// some commented out because user code shouldn't depend on obfuscated names
type CharacterEventKind = "OBJECT_DIED" | "CHARACTER_ABILITY"/* | "erw" | "erx"*/;
type CharacterEventListener<T extends CharacterEventKind> = {
    "OBJECT_DIED": (
        died: pb2Character, 
        killers: pb2Ragdoll[], // entities don't count
        damage_dealt: number[], 
        using: (pb2Gun | pb2Bullet)[]
    ) => void,
    "CHARACTER_ABILITY": (
        user: pb2Character
    ) => void
    //"erw": (shooter: pb2Ragdoll, gun: pb2Gun, bullet: pb2Bullet) => void, // gun fired
    //"erx": (thrower: pb2Ragdoll, grenade: pb2Bullet, intended: boolean) => void, // grenade thrown or dropped
}[T];

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
        /**
         * Sets `can_be_revived` to false. If the character is dead, the character is removed and its ragdoll is allowed to be disposed.
         */
        MakeUnrevivable: () => void;
        /** X speed */
        readonly tox: number;
        /** Y speed */
        readonly toy: number;
        /**
         * Character to cursor angle in radians.  
         * Ranges from 0 to -2*PI.  
         * Has the value 0 when looking downwards and decreases counter-clockwise.
         */
        readonly ang: number;
        /** Current health */
        hea: number;
        /** Maximum health */
        hmax: number;
        /** Starting health */
        start_hea: number;
        readonly ragdoll: pb2Ragdoll;
        /**
         * Moves the character to a new position and sets its velocity.  
         * Doesn't set the position of the ragdoll.  
         * Doesn't work on characters in ragdoll mode.
         * @param nx New X
         * @param ny New Y
         * @param sx New X speed
         * @param sy New Y speed
         */
        MoveOn: (nx: number, ny: number, sx: number, sy: number) => void;
        /**
         * Damages the character. Similar to `SubstractHealth`, but shows damage direction indicators.
         * @param dmg Damage amount. Negative values will heal the character.  
         * @param id Damage source ID. Affects how damage direction indicators are merged. pb2FloatingText.GetNewHash() gives a unique ID.  
         * @param dir_x Damage direction vector X  
         * @param dir_y Damage direction vector Y  
         * @param gradual_handicap If true, maximum health handicap will be applied over time (with ease-out)  
         */
        DealCharacterDamage: (dmg: number, id: number, dir_x: number, dir_y: number, gradual_handicap: boolean) => void;
        /**
         * Subtracts health from the character. Similar to `DealCharacterDamage`, but has more options and doesn't show damage direction indicators.  
         * @param dmg Damage amount. Negative values will heal the character.  
         * @param natural (default=true) If false, skips: #1 handicap. #2 hurt sound. #3 regeneration (regen doesn't start, death beep doesn't play, low health beep volume is not updated)  
         * @param gradual_handicap (default=false) If true, maximum health handicap will be applied over time (with ease-out)  
         * @param dir_x (default=0) Damage direction vector X. Affects death animation.  
         * @param dir_y (default=0) Damage direction vector Y. Affects death animation.  
         * @param mute_hurt (default=false) Mute damage sound  
         * @param no_death_effect (default=false) If true, death sound and animation won't play.  
         */
        SubstractHealth: (dmg: number, natural?: boolean, gradual_handicap?: boolean, dir_x?: number, dir_y?: number, mute_hurt?: boolean, no_death_effect?: boolean) => boolean;
        /**
         * Adds to the number of grenades or gadgets of a specific variety that the character has.
         * @param id One of the grenade type IDs defined on pb2ArmsAction, such as pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE
         * @param count How many grenades to add
         */
        AddGrenades: (id: TODO, count: number) => void;
        /**
         * Sets the number of grenades or gadgets of a specific variety that the character has.
         * @param id One of the grenade type IDs defined on pb2ArmsAction, such as pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE
         * @param count Number to set
         */
        SetGrenades: (id: TODO, count: number) => void;
        /**
         * Gets the number of grenades or gadgets of a specific variety that the character has.
         * @param id One of the grenade type IDs defined on pb2ArmsAction, such as pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE
         */
        GetGrenades: (id: TODO) => number;
        /** Removes the character. */
        remove: () => TODO;
        /**
         * Adds a function or trigger as an event listener.
         * @param event_type One of "OBJECT_DIED" | "CHARACTER_ABILITY"
         * @param params Function or trigger to call when the event occurs
         */
        addEventListener: <T extends CharacterEventKind>(event_type: T, params: CharacterEventListener<T>) => void;
        /**
         * Removes an event listener previously added using `addEventListener`. The event listener is identified by the event type and the listener function or trigger.  
         * @param event_type One of "OBJECT_DIED" | "CHARACTER_ABILITY"
         * @param params Function or trigger that was set as the event listener
         */
        removeEventListener: <T extends CharacterEventKind>(event_type: T, params: CharacterEventListener<T>) => void;
        /** Removes all event listeners that have been added to this character. */
        removeAllListeners: () => void;
        /** Removes all event listeners of a given type that have been added to this character. */
        removeListenersByType: (event_type: CharacterEventKind) => void;
        readonly controller: pb2Controller | null;
        /** Gives an error if accessed while the character is holding onto a ledge. */
        readonly hand_holder: null;
        /** Slot of the held weapon. */
        readonly curwea_slot: number;
        /**
         * Slot of the weapon that is physically held by the character.  
         * In other words, it's the slot of the held weapon but updated only after the previous weapon's put-away animation has finished
         */
        readonly curwea_slot_animation: number;
        /** The slot that the character would switch to upon pressing Q. Typically the slot of the previously held weapon. */
        curwea_backup_slot: number;
        /**
         * Proportion between crouching (1) and standing (0).  
         * Changes when in the process of standing up or crouching down.  
         * This value changes to 1 also if the character has low stability.  
         */
        readonly phys_sit: number;
        /**
         * Forces the character to switch the currently held weapon to the weapon in the specified slot if possible.
         * @param slot Slot of the weapon to switch to  
         * @param respect_arms (default=true) If true, the character will only switch to the slot if they have arms.  
         * @param override_backup_slot_and_dont_ignore_entity_or_freezing_rules (default=true)   
         */
        ChangeGunIfPossible: (slot: number, respect_arms?: boolean, override_backup_slot_and_dont_ignore_entity_or_freezing_rules?: boolean) => void;
        /**
         * Forces the character to reload their held weapon if possible.  
         * The character pressing a button or otherwise being busy with their arms will prevent reloading.
         */
        ReloadGunsIfPossible: () => void;
        /** Forces the character to switch the currently held weapon to their previously held weapon if possible. */
        ChangeGunToBackupIfPossible: () => void;
        /**
         * Makes the character do a gesture.  
         * The gesture won't be performed if the character is already doing a gesture or is otherwise busy with their arms, 
         * such as pressing a button.
         * @param id One of the gesture IDs defined on pb2ArmsAction, such as pb2ArmsAction.ACTION_TYPE_GESTURE_HAPPY
         */
        DoGesture: (id: TODO) => void;
        /** Makes the character press a usable switch. Returns true if the action was performed. */
        UseAction: () => boolean | undefined;
        /**
         * Applies an impulse force to the character.  
         * Doesn't apply an impulse to the ragdoll.  
         * Has no effect on characters in ragdoll mode.
         * @param _x Impulse X  
         * @param _y Impulse Y  
         * @param Vk (default=false) If true, updates this.velocity_sync_delta_x and this.velocity_sync_delta_y  
         */
        addImpulse: (_x: number, _y: number, Vk?: boolean) => void;
        /**
         * Adds velocity to the character.  
         * Doesn't add velocity to the ragdoll.  
         * Has no effect on characters in ragdoll mode.
         * @param _x Added X speed  
         * @param _y Added Y speed  
         */
        AddVel: (_x: number, _y: number) => void;
        /**
         * Sets the velocity of the character.  
         * Doesn't set the velocity of the ragdoll.  
         * Has no effect on characters in ragdoll mode.
         * @param _x New X speed  
         * @param _y New Y speed  
         */
        SetVel: (_x: number, _y: number) => void;
        /** Turns off the lights in the visor and other parts. Sets `ragdoll.dimmed` to true. */
        DimLights: () => void;
        /** Turns on the lights in the visor and other parts. Sets `ragdoll.dimmed` to false. */
        UndimLights: () => void;
        /**
         * Plays the character's death sound at its ragdoll.  
         * @param underwater (default=undefined)  Play underwater death sound. If undefined, the fitting sound will be played.  
         */
        PlayDeathSound: (underwater?: boolean) => void;
        /**
         * Kills the character.  
         * @param update_immediately (default=false)   
         * @param no_death_sound (default=false)   
         */
        Kill: (update_immediately?: boolean, no_death_sound?: boolean) => void;
        /**
         * Value between 0-1 representing aim inaccuracy after continued firing.  
         * Decreases when shooting. Decreases more when firing weapons with high recoil.  
         * Always regenerating towards 1.
         */
        aim_spread: number;
        /**
         * Returns true if the b2Body `bodyB` is part of the character or the ragdoll.  
         * @param bodyB  
         * @param include_guns If true, guns are considered as well  
         */
        BodyIsPartOfPlayer: (bodyB: b2Body, include_guns: boolean) => boolean;
        /**
         * Gives a weapon to a character.  
         * An error is thrown if the weapon slot is occupied.
         * @param gun 
         */
        PickWeapon: (gun: pb2Gun) => void;
        /**
         * Forces the character to drop a weapon.  
         * An error is thrown if the character doesn't have the weapon.  
         * 
         * Note that the character may immediately pick up the gun again.
         * @param gun 
         */
        DropWeapon: (gun: pb2Gun) => void;
        /** Forces the character to drop their currently held weapon if possible. */
        DropGunIfPossible: () => void;
        /**
         * Sets the number of owned grenades of all kinds.
         * @param v (default=0)
         */
        SetAllGrenadesCount: (v?: number) => void;
        /** Gets the sum of the gun glow colors of all owned weapons. */
        GetWeaponGlow: () => pb2HighRangeColor;
        /** Returns true if the weapon change animation is playing. */
        WeaponIsBeingChanged: () => boolean;
        /** Returns true if the character is currently ready to shoot. The character is considered ready to shoot also if they are not holding any weapon. */ 
        CanShootNow: () => boolean;
        /**
         * Returns the gun occupying a slot or null if the slot is empty.
         * @param slot   
         * @param primary (default=true) Controls whether to get from the primary weapon slots or the secondary (off-hand) slots  
         */
        GetWeaponAtSlot: (slot: number, primary?: boolean) => pb2Gun | null;
        /**
         * Returns the weapon that is physically held by the character, i.e. the weapon in the slot `curwea_slot_animation`, or null if the slot is empty.
         * @param slot   
         * @param primary (default=true) Controls whether to get from the primary weapon slots or the secondary (off-hand) slots  
         */
        GetCurrentAnimationWeapon: (primary: boolean) => pb2Gun | null;
        /** Returns true if the character has any weapon in any slot. */
        HasAnyWeapon: () => boolean;
        /** Switches to the first weapon slot containing a gun if possible. If the character is already holding a weapon, nothing happens. */
        ChangeGunToNonSwords: () => void;
        /** Returns the first weapon slot that has a gun. If the character is already holding a weapon, its slot is returned instead. If the character has no weapons, -1 is returned. */
        GetNonSwordsSlot: () => number;
        /** Returns a random weapon slot that has a gun. If the character has no weapons, 0 is returned. */
        GetRandomNonSwordsSlot: () => number;
        /**
         * Returns the first weapon slot that contains a healing gun. If none are found, -1 is returned.  
         * 
         * This checks that the gun type has is_healgun but not is_repairgun.
         */
        GetFirstHealGunSlot: () => number;
        /**
         * Gets the character's b2Body (one of two).
         * @param i Which b2Body to get
         */
        GetBody: (i: 0 | 1) => b2Body;
        stability: number;
        /** Makes the character kick if possible. */
        DoKick: () => void;
        /** Makes the character use grappling hook if possible. If the grappling hook is already active, it's pulled back instead. */
        StartGrapplingHookIfPossible: () => void;
        /**
         * Makes the character throw a grenade or gadget of a given type if possible.  
         * The grenade won't be thrown if the character is pressing a button or is otherwise busy with their arms.  
         * Returns true if the grenade or gadget was thrown.  
         * @param id (default=-1) One of the grenade type IDs defined on pb2ArmsAction, such as pb2ArmsAction.ACTION_TYPE_THROW_GRENADE_HE. If unspecified, the currently selected grenade kind is used.
         */
        ThrowGrenadeIfPossible: (id?: TODO) => boolean;
        /** Returns the b2Body that is currently grabbed or null if nothing is grabbed. */
        GetHeldBody: () => b2Body | null;
        /** Forces the character to let go of any ledge. */
        forceUnHandHold: () => void;
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
            onDeath?: CharacterEventListener<"OBJECT_DIED">,
            onAbility?: CharacterEventListener<"CHARACTER_ABILITY">,
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
