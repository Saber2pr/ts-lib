import {
  AddKey,
  Add,
  DeleteKey,
  Delete,
  GetKeys,
  GetFunctionKeys,
  Alter
} from '..'

export namespace TestInterface {
  type test = {
    a: number
    b: string
    c: Function
    d: boolean
  }

  type t1 = AddKey<test, 'c'>

  type t2 = Add<test, 'c', boolean>

  type t3 = DeleteKey<test, 'a'>

  type t4 = Delete<test, 'a'>

  type t5 = GetKeys<test>
  type t5_2 = GetKeys<test, number>

  type t6 = GetFunctionKeys<test>

  type t7 = Alter<test, 'a', Object>
}
