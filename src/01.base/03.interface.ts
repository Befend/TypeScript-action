/***************** 对象类型接口 ********************/
interface List {
  id: number;
  // 只读属性
  // readonly id: number;
  name: string;
  // 字符串索引签名，可用任意的字符串去索引List，可以得到任意结果，这样List可以支持多个属性
  [x: string]: any; 
  // 可选属性
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(item => {
    console.log(item.id, item.name)
    if (item.age) {
      console.log(item.age)
    }
    item.id++ // 只读属性时是不允许修改的
  })
}

const result = {
  data: [
    { id: 1, name: 'A', age: 25 },
    { id: 2, name: 'B' }
  ],
  a: 1
}

render(result)

// 类型断言
// 1. 推荐
// render(result as Result)
// 2. 不推荐，ts容易产生歧义
// render(<Result>result)

// 可索引类型
interface StringArray {
  // 数字索引签名，用任意数字去索引StringArray，都会得到字符串的返回值
  [index: number]: string
}

let chars: StringArray = ['a', 'b']
// console.log(chars)

// interface Names {
//   // 字符串索引签名，用任意字符串去索引Names，都会得到字符串的返回值
//   [x: string]: string;
//   // y: number; // 不能再声明非字符串结果的变量。报错：类型“number”的属性“y”不能赋给“string”索引类型“string”。
//   // [z: number]: number;
// }
interface Names {
  // 字符串索引签名，用任意字符串去索引Names，都会得到任意结果的返回值
  [x: string]: any;
  // y: number;
  [z: number]: number; // any可以兼容number类型
}
let names: Names = [1, 3]
// console.log(names[1], names[0], names['0'], names['1'])

/***************** 函数类型接口 ********************/
// let add3 = (x: number, y: number) => x + y
// interface Add {
//   (x: number, y: number): number
// }
// type 类型别名
type Add = (x: number, y: number) => number
let add3: Add = (a: number, b: number) => a + b
// console.log(add3(1, 4))

// 混合类型接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
// 类型断言
// let lib: Lib = (() => {}) as Lib
// lib.version = '1.0.0'
// lib.doSomething = () => {}
// console.log('lib', lib, lib.version, lib.doSomething)
// 上述这样就会对全局暴露了一个变量lib，它是一个单例，如果需要创建多个Lib，则需要用函数封装

function getLib() {
  // 类型断言
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib;
}

let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()

/**
 * 小结一下：
 *  用接口分别定义了对象和函数，其实接口还可以定义类的结构和类型。
 */

