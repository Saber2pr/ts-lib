/*
 * @Author: saber2pr
 * @Date: 2019-06-07 21:54:03
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-07 22:25:00
 */
export type Shift<Tuple extends any[]> = ((...items: Tuple) => void) extends ((
  first: any,
  ...items: infer Result
) => void)
  ? Result
  : never

export type Unshift<Tuple extends any[], value> = ((
  first: value,
  ...items: Tuple
) => void) extends ((...items: infer Result) => void)
  ? Result
  : never
