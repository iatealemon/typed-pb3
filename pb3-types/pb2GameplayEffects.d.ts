import type { ClassIdentityProps } from "./internal/helper";
export {};

declare global {
    /** unfinished auto-generated */
    const pb2GameplayEffects: ClassIdentityProps<"pb2GameplayEffects"> & {
        types: unknown;
    };
    
    /** unfinished auto-generated */
    type pb2GameplayEffectsInstance = ClassIdentityProps<"pb2GameplayEffects"> & {
        readonly CreateEffect: unknown;
        readonly GetCharacterLogicSpeed: unknown;
        readonly GetWeaponLogicSpeed: unknown;
        readonly GetBulletModifier: unknown;
        readonly GetInvisible: unknown;
        readonly ragdoll: unknown;
    };
    
    /**
     * unfinished  
     * represents the instance of pb2GameplayEffects.bsW
     */
    type bsWInstance = ClassIdentityProps<"bsW"> & {
        time_to_live: unknown;
        readonly ragdoll: unknown;
        readonly remove: unknown;
        readonly cloak_intensity: unknown;
    };
}