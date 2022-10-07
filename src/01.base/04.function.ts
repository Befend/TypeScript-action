// 函数定义的四种方式，后三种只是函数的定义，并没有具体的实现。
// 1. function声明定义，需要明确参数的类型
function add1(x: number, y: number) {
  return x + y
}

// 2. 变量声明定义
// let add2: (x: number, y: number) => number

// 3. 类型别名定义
// type add3 = (x: number, y: number) => number

// 4. 接口定义
interface add4 {
  (x: number, y: number): number;
}

const add44: add4 = (x: number, y: number) => x + y
console.log('add4', add44(1, 2))

// ?可选参数，需要注意的是必选参数不能位于可选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
// 不允许。必选参数不能位于可选参数后。
// function add55(x: number, y?: number, z: number) {
//   return y ? x + y : x
// }
// console.log(add5(1, 6))
// console.log(add5(1))

// 可以像es6一样赋值默认值
function add6(x: number, y = 0, z: number, q = 1) {
  // console.log(x, y, z, q)
  return x + y + z + q
}
// console.log(add6(1, undefined, 3)) // 5

// ...剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
// console.log(add7(1, 2, 3, 4, 5)) // 15

// 函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
  let first = rest[0]
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
  if (typeof first === 'string') {
    return rest.join()
  }
}
console.log(add8(1, 2)) // 3
console.log(add8('a', 'b', 'c')) // 'abc'

/**
 * 小结一下：
 *  学习了ts函数相关的知识点，包括如何定义函数以及ts对函数参数的类型、个数有什么要求，函数重载的定义。
 */