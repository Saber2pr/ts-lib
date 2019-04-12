/*
 * @Author: saber2pr
 * @Date: 2019-04-12 18:32:37
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-12 18:38:06
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
 * get the keys which extends Filter
 */
export type GetKeys<T, Filter = any> = {
  [P in keyof T]: T[P] extends Filter ? P : never
}[keyof T]
/**
 * get the function keys of T
 */
export type GetFunctionKeys<T> = {
  [P in keyof T]: T[P] extends Function ? P : never
}[keyof T]
/**
 * get the string keys of T
 */
export type GetStringKeys<T> = {
  [P in keyof T]: T[P] extends String ? P : never
}[keyof T]
/**
 * get the number keys of T
 */
export type GetNumberKeys<T> = {
  [P in keyof T]: T[P] extends Number ? P : never
}[keyof T]
/**
 * get the boolean keys of T
 */
export type GetBooleanKeys<T> = {
  [P in keyof T]: T[P] extends Boolean ? P : never
}[keyof T]
/**
 * Alter Target-K's type.
 */
export type Alter<Target, K, T> = {
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