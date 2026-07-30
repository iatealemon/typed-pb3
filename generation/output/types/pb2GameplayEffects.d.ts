export { };

import type { ClassIdentityProps } from "./internal/helper";

declare global {
    interface pb2GameplayEffects extends ClassIdentityProps<"pb2GameplayEffects"> {
        CreateEffect: (params: unknown) => unknown;
        GetCharacterLogicSpeed: () => unknown;
        GetWeaponLogicSpeed: () => unknown;
        GetBulletModifier: (v: unknown, bfz: unknown) => unknown;
        GetInvisible: () => unknown;
        readonly ragdoll: unknown;
    }
    interface bsW extends ClassIdentityProps<"bsW"> {
        time_to_live: unknown;
        readonly ragdoll: unknown;
        remove: () => unknown;
        readonly cloak_intensity: unknown;
    }
    var pb2GameplayEffects: ClassIdentityProps<"pb2GameplayEffects"> & {
        types: {
            RageRune: ClassIdentityProps<"Function"> & {

            }
            DestructionRune: ClassIdentityProps<"Function"> & {

            }
            TimeLordRune: ClassIdentityProps<"Function"> & {

            }
            InvisibilityRune: ClassIdentityProps<"Function"> & {

            }
            Poisoned: ClassIdentityProps<"Function"> & {

            }
        }

    }
}
