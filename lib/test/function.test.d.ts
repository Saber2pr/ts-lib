import { GetParamsType } from '..'
import { AlterReturnType, Test } from '..'

export namespace TestFunction {
  type F = (a: number, b: string) => number

  type P = Test<GetParamsType<F>, [number, string]>

  type F_R = Test<AlterReturnType<F, string>, (a: number, b: string) => string>
}
