import { Split, Guard } from '..'

export namespace TestSplit {
  type o = {
    a: number
    b: string
  }

  type t1 = Split<o>

  type t2 = Guard<o, {}>
  type t3 = Guard<o, { a }>
  type t4 = Guard<o, { b }>
  type t5 = Guard<o, { a; b }>
  type t6 = Guard<o, { c }>
}
