export type UnionToTuple<U> = U extends any ? [U] : never;
export type UnionToArray<U> = U extends any ? U[] : never;
