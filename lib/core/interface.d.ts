/*
 * @Author: saber2pr
 * @Date: 2019-06-07 21:56:46
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-07 21:56:46
 */
export type AddKey<T, K> = GetKeys<T> | K

export type Add<Target, K extends string | number | symbol, T = any> = {
  [P in AddKey<Target, K>]: P extends keyof Target ? Target[P] : T
}

export type DeleteKey<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? never : P
}[keyof T]

export type Delete<T, K extends keyof T> = Pick<T, DeleteKey<T, K>>

export type GetKeys<T, Type = any> = {
  [P in keyof T]: T[P] extends Type ? P : never
}[keyof T]

export type GetFunctionKeys<T> = GetKeys<T, Function>

export type GetStringKeys<T> = GetKeys<T, String>

export type GetNumberKeys<T> = GetKeys<T, Number>

export type GetBooleanKeys<T> = GetKeys<T, Boolean>

export type Alter<Target, K extends keyof Target, T = any> = {
  [P in keyof Target]: P extends K ? T : Target[P]
}
