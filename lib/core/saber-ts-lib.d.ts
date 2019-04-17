/*
 * @Author: saber2pr
 * @Date: 2019-04-12 18:32:37
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-12 20:27:20
 */
/**
 * add a key to keys
 */
export type AddKey<T, K> = GetKeys<T> | K
/**
 * add a key to type
 */
export type Add<Target, K extends string | number | symbol, T = any> = {
  [P in AddKey<Target, K>]: P extends keyof Target ? Target[P] : T
}
/**
 * get the keys deleted with K
 */
export type DeleteKey<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? never : P
}[keyof T]
/**
 * get the type deleted with K
 */
export type Delete<T, K extends keyof T> = Pick<T, DeleteKey<T, K>>
/**
 * get the keys which type is Type
 */
export type GetKeys<T, Type = any> = {
  [P in keyof T]: T[P] extends Type ? P : never
}[keyof T]
/**
 * get the function keys of T
 */
export type GetFunctionKeys<T> = GetKeys<T, Function>
/**
 * get the string keys of T
 */
export type GetStringKeys<T> = GetKeys<T, String>
/**
 * get the number keys of T
 */
export type GetNumberKeys<T> = GetKeys<T, Number>
/**
 * get the boolean keys of T
 */
export type GetBooleanKeys<T> = GetKeys<T, Boolean>
/**
 * Alter Target-K's type.
 */
export type Alter<Target, K extends keyof Target, T = any> = {
  [P in keyof Target]: P extends K ? T : Target[P]
}
/**
 * Split the Type:
 * {a;b} -> {a} | {b}
 */
export type Split<T, K extends keyof T = keyof T> = K extends any
  ? { [key in K]: T[key] }
  : never
/**
 * if T has keyof Protect, then warn
 */
export type Guard<T, Protect> = Exclude<T, Split<Protect>>
/**
 * convert a union type to intersection type: "a" | "b" -> "a" & "b"
 */
export type UnionToIntersection<U> = (U extends any
  ? ((K: U) => void)
  : never) extends (K: infer Result) => void
  ? Result
  : never
/**
 * remove the first type of tuple: ['a', 'b', 'c'] -> ["b", "c"]
 */
export type Shift<Tuple extends any[]> = ((...items: Tuple) => void) extends ((
  first: any,
  ...items: infer Result
) => void)
  ? Result
  : never
/**
 * add a type before the tuple: <['b', 'c'], 'a'> -> ['a', 'b', 'c']
 */
export type Unshift<Tuple extends any[], value> = ((
  first: value,
  ...items: Tuple
) => void) extends ((...items: infer Result) => void)
  ? Result
  : never
