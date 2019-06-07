/*
 * @Author: saber2pr
 * @Date: 2019-06-07 21:55:42
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-07 21:55:42
 */
export type UnionToIntersection<U> = (U extends any
  ? ((K: U) => void)
  : never) extends (K: infer Result) => void
  ? Result
  : never
