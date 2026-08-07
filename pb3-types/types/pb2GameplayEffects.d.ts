export { };

import type { ClassIdentityProps, TODO } from "./internal/helper";

declare global {
    interface pb2GameplayEffects extends ClassIdentityProps<"pb2GameplayEffects"> {
        CreateEffect: (params: TODO) => TODO;
        GetCharacterLogicSpeed: () => TODO;
        GetWeaponLogicSpeed: () => TODO;
        GetBulletModifier: (v: TODO, bfz: TODO) => TODO;
        GetInvisible: () => TODO;
        readonly ragdoll: TODO;
    }
    interface bsW extends ClassIdentityProps<"bsW"> {
        time_to_live: TODO;
        readonly ragdoll: TODO;
        remove: () => TODO;
        readonly cloak_intensity: TODO;
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
