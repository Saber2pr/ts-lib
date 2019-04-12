# @saber2pr/ts-lib

[![npm](https://img.shields.io/npm/v/@saber2pr/ts-lib.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/ts-lib)

> Typescript 工具泛型

```bash
npm i @saber2pr/ts-lib

git clone https://github.com/Saber2pr/ts-lib.git
```

# API

## Split

拆分一个类型

```ts
type Test = {
  a: string
  b: number
}

type result = Split<Test> // {a:string} | {b:number}
```

## Guard

守卫一个类型

```ts
type Test = {
  a: string
  b: number
}

type result0 = Guard<Test, { a }> // never
type result1 = Guard<Test, { _a }> // Test
```

## AddKey

获取一个类型的所有 key，并增加一个 key

```ts
type Test = {
  a: string
  b: number
}

type result = AddKey<Test, 'c'> // "a" | "b" | "c"
```

## Add

给一个类型增加一个 key，并指定其类型

```ts
type Test = {
  a: string
  b: number
}

type result0 = Add<Test, 'x'> // {x:any; a:string; b:number}
type result1 = Add<Test, 'x', boolean> // {x:boolean; a:string; b:number}
```

## DeleteKey

获取一个类型的所有 key，并删除一个 key

```ts
type Test = {
  a: string
  b: number
}

type result = DeleteKey<Test, 'a'> // "b"
```

## Delete

给一个类型删除一个 key

```ts
type Test = {
  a: string
  b: number
}

type result0 = Delete<Test, 'a'> // {b:number}
type result1 = Delete<Test, 'a' | 'b'> // {}
```

## Alter

更改一个类型的指定的 key 为新的类型

```ts
type Test = {
  a: string
  b: number
}

type result = Alter<Test, 'a', Function> // {a:Function; b:number}
```

## GetKeys

获取一个类型的所有 key，可设置过滤选项

```ts
type Test = {
  a: string
  b: number
}

type result0 = GetKeys<Test> // "a" | "b"

type result1 = GetKeys<Test, 'a'> // "b"
type result2 = GetKeys<Test, 'a' | 'b'> // never
```

## GetFunctionKeys

获取一个类型的所有 Function 类型的 key

## GetStringKeys

获取一个类型的所有 string 类型的 key

## GetNumberKeys

获取一个类型的所有 number 类型的 key

## GetBooleanKeys

获取一个类型的所有 boolean 类型的 key

# Author

saber2pr
