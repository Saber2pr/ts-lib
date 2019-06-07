import { UnionToIntersection } from '..'

type Test<Type, Expect extends Type> = Expect

export namespace TestUnion {
  type u = 'a' | 'b'

  type t1 = Test<UnionToIntersection<u>, 'a' & 'b'>

  // type t2 = Test<UnionToIntersection<u>, 'a' | 'b'>
}
