export type ClassIdentityProps<ClassName extends string> = {
    readonly _class: ClassName;
    toString(): `[object ${ClassName}]`;
};