/**
 * 类型检查机制
 *  Typescript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。
 * 作用：
 *  辅助开发，提高开发效率。
 * 
 * 1. 类型推断
 * 2. 类型兼容性
 * 3. 类型保护
 */

/**
 * 类型推断
 *  1. 类型推断
 *  2. 最佳通用类型推断
 *  3. 上下文类型推断
 */

// 1. 类型推断
const a = 1
const b = [1, '1', null] // 会推断出b的所有类型

// 2. 从右向左的推断 - 最佳通用类型推断
const c = (x = 1) => x + 1

// ??? 无法实现效果：https://www.typescriptlang.org/docs/handbook/type-inference.html
// 3. 从左向右的推断 - 上下文类型推断
window.onkeydown  = (event: any) => {
  console.log(event.button)
}


// 类型断言
interface Foo {
  bar: Number
}
// 1.
let foo = {} as Foo
// foo.bar = 1 // 避免乱用类型断言,容易出现属性的遗漏赋值

// 推荐使用常规的声明方式
// 2.
let foo1: Foo = {
  bar: 1
}