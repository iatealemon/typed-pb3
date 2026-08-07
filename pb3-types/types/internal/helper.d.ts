export interface ClassIdentityProps<ClassName extends string> {
    readonly _class: ClassName;
    toString(): `[object ${ClassName}]`;
}

export type TODO = any;