/*
 * @Author: saber2pr
 * @Date: 2019-04-12 20:08:38
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-12 20:11:01
 */
import { GetStringKeys } from '..'
import {
  Split,
  Guard,
  GetFunctionKeys,
  GetNumberKeys,
  GetBooleanKeys,
  GetKeys,
  Delete,
  DeleteKey,
  AddKey,
  Add,
  Alter
} from '../core/saber-ts-lib'

export namespace Test {
  type Test = {
    a: string
    b: string
    c: number
    d: number
    e: boolean
    f: boolean
    i: { a }
    method: () => void
    method2: () => string
  }

  type test_split = Split<Test>

  type test_guard0 = Guard<Test, { a }>
  type test_guard1 = Guard<Test, { _a }>

  type test_getStrKeys = GetStringKeys<Test>
  type test_getNumKeys = GetNumberKeys<Test>
  type test_getBoolKeys = GetBooleanKeys<Test>
  type test_getMethodKeys = GetFunctionKeys<Test>

  type test_getCusKeys0 = GetKeys<Test, String>
  type test_getCusKeys1 = GetKeys<Test, Number>
  type test_getCusKeys2 = GetKeys<Test, Boolean>
  type test_getCusKeys3 = GetKeys<Test, Function>
  type test_getCusKeys4 = GetKeys<Test, { a }>

  type test_deleteKey0 = DeleteKey<Test, 'a'>
  type test_deleteKey1 = DeleteKey<Test, 'a' | 'b'>
  type test_delete0 = Delete<Test, 'a'>
  type test_delete1 = Delete<Test, 'a' | 'b'>

  type test_addKey = AddKey<Test, 'x'>
  type test_add0 = Add<Test, 'x'>
  type test_add1 = Add<Test, 'x', number>

  type test_alter = Alter<Test, 'b', Function>
}
