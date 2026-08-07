export {};

import type { TODO } from "./internal/helper";
import type { pb2WindowBase } from "./pb2Window";

declare global {
    // failed to be included in generation (extractor didn't search for pb2Window subclasses)
    interface pb2WindowIconButton extends pb2WindowBase<"pb2WindowIconButton"> {
        icon: TODO;
    }
}