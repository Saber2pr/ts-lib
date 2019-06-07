import { Shift, Unshift } from '..'

type Test<Type, Expect extends Type> = Expect
export namespace TestTuple {
  type tuple = ['a', 'b']

  type t1 = Test<Shift<tuple>, ['b']>

  type t2 = Unshift<tuple, 'c'>
}
