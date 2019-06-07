/*
 * @Author: saber2pr
 * @Date: 2019-06-07 21:53:20
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-07 21:53:20
 */
export type GetParamsType<F> = F extends (...args: infer T) => any ? T : never

export type AlterReturnType<F, R> = F extends (...args: infer T) => any
  ? (...args: T) => R
  : never
