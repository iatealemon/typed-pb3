import type { ClassIdentityProps } from "./internal/helper";
export {};

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