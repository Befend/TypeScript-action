// 原始类型
let num: number = 123
let num3: number | undefined | null = 123
const bool: boolean = true
const str: string = 'chj'

// 数组
const arr1: number[] = [1, 2, 3]
const arr2: Array<number | string> = [1, 2, 3,'4']

// 元组
const tuple: [number, string] = [0, '1']
// tuple.push(2) // 元组可以添加元素，但不能越界访问。
// console.log(tuple) // [0, '1', 2]
// tuple.[2] // 访问会报错，是因为元组的越界访问问题，实际开发中强烈不建议这样使用。

// 函数
const add = (x: number, y: number) => x + y
const add2: (x: number, y: number) => number = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
const obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 22
const h: Record<string, unknown> = { a: 1 }
console.log(h)

// symbol
const s1: symbol = Symbol()
const s2 = Symbol()
// console.log(s1 === s2) // false

// undefine, null
const un: undefined = undefined
// const un1: undefined = '1' // 不允许，只能复制为他本身。不能将类型“"1"”分配给类型“undefined”。
const nu: null = null
// 设置strictNullChecks为false 或者 设置变量为联合类型，则不会发生下面的错误。
// num = undefined // 不能将类型“undefined”分配给类型“number”。
// num = null // 不能将类型“null”分配给类型“number”。
num3 = undefined // 不会报错
num3 = null // 不会报错

// void 表示没有任何返回值的类型
const noReturn = () => {}
 
// any ts的默认类型，允许赋值为任意类型，如果不是特殊情况，不建议使用
let x
x = 1
x = []
x = () => {}

// never 永远不会有返回值的类型
// 1、总会抛出错误的函数
const error: () => never = () => {
  throw new Error('error')
}
// 2.永远不会有返回值的函数
const endless: () => never = () => {
  while(true) {}
}

/**
 * 小结一下：
 *  学习了ts的基本数据类型，它完全覆盖了es6的所有数据类型，并通过any类型实现了对js的兼容。
 */


