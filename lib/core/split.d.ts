/*
 * @Author: saber2pr
 * @Date: 2019-04-12 18:32:37
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-07 21:58:22
 */
export type Split<T, K extends keyof T = keyof T> = K extends any
  ? { [key in K]: T[key] }
  : never

export type Guard<T, Protect> = Exclude<T, Split<Protect>>
