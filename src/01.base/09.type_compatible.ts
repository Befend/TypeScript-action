/**
 * 类型检查机制
 *  Typescript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。
 * 作用：
 *  辅助开发，提高开发效率。
 * 
 * 1. 类型推断
 * 2. 类型兼容性
 *  ts 允许类型兼容的变量相互赋值.
 *  含义：当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
 *  X 兼容 Y: X（目标类型） = Y（源类型）
 *  理解：源类型必须具备目标类型的必要属性，就可以进行赋值。
 * 3. 类型保护
 *  
 */
/**
 * 类型兼容性
 *  含义：当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
 *            X 兼容 Y: X（目标类型） = Y（源类型）
 *  1. 接口兼容性：成员少的兼容成员多
 *  2. 函数兼容性
 *  3. 枚举兼容性
 *  4. 类兼容性
 * 
 *  口诀： 
 *  1. 接口之间兼容：成员少的兼容成员多的
 *  2. 函数之间兼容：参数多的兼容参数少的
 */
const s: string = 'chj'
// s = null // "strictNullChecks": true。 于在 ts 中， null 是所有类型的子类型

// 接口兼容性：成员少的兼容成员多
interface X {
  a: any,
  b: any
}

interface Y {
  a: any,
  b: any,
  c: any
}

let x1: X = { a: 1, b: 2 }
const y1: Y = { a: 1, b: 2, c: 3 }
// ts的类型兼容原则：源类型必须具备目标类型的必要属性。
// x1(成员少) 可以兼容 y1(成员多)
x1 = y1
// y1 = x1


// 函数兼容性
// 函数兼容性：参数多的会兼容参数少的
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

// 高阶函数兼容性问题考虑要素：
// 1)参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c:number) => {}
// hof(handler2) // 报错：类型“(a: number, b: number, c: number) => void”的参数不能赋给类型“Handler”的参数。

// 可选参数和剩余参数
// 参数多的可以兼容少的
// 固定参数  兼容    可选参数 剩余参数
// 可选参数  不兼容  固定参数 剩余参数
// 剩余参数  兼容    固定参数 可选参数
let a5 = (p1: number, p2:number) => {}
let b5 = (p1?: number, p2?:number) => {}
let c5 = (...args: number[]) => {}
a5 = b5 // 固定参数 兼容 可选参数
a5 = c5 // 固定参数 兼容 剩余参数
// b5 = c5 // 报错：可选参数 不兼容 剩余参数
// b5 = a5 // 报错：可选参数 不兼容 固定参数
c5 = a5 // 剩余参数 兼容   固定参数
c5 = b5 // 剩余参数 兼容   可选参数

// 2) 参数类型
let handler3 = (a: string) => {}
// hof(handler3) // 报错类型“(a: string) => void”的参数不能赋给类型“Handler”的参数。

interface Point3D {
  x: number;
  y: number;
  z: number
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d // 成员个数多的能兼容成员个数少的
// p2d = p3d // 报错：不能将类型“(point: Point3D) => void”分配给类型“(point: Point2D) => void”。在tsconfig.json中修改“strictFunctionTypes: false”，则能去除兼容错误。
// 这种函数的相互赋值方式称之为函数的双向协定。这种情况允许我们将精确的类型赋值给不那么精确的类型，这样我们就不需要把不精确的类型断言成精确的类型。

// 3) 返回值类型
let a8 = () => ({name: 'chj'})
let a9 = () => ({name: 'chj', location: '广州'})
a8 = a9
// a9 = a8 // 报错：不能将类型“() => { name: string; }”分配给类型“() => { name: string; location: string; }”。

// 函数重载兼容性
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {};

// 枚举兼容性
// 枚举类型和数字类型相互兼容
// 不同枚举类型之间不兼容
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple // 报错：不能将类型“Fruit.Apple”分配给类型“Color.Red”。

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}

class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = ''
}
let aa = new A(1, 2)
let bb = new B(1)
// 如果类中有私有成员，则不能相互兼容
// aa = bb // 报错：不能将类型“B”分配给类型“A”。
// bb = aa // 报错：不能将类型“A”分配给类型“B”。
class D extends A {}
let dd = new D(1, 2)
aa = dd
dd = aa

// 泛型兼容性
// 泛型接口
interface Empty<T> {
  value: T
}
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// 类型参数T被接口成员使用时，才会影响泛型接口的兼容性
// obj1 = obj2 // 报错：类型 "{}" 中缺少属性 "value"，但类型 "Empty<number>" 中需要该属性。
// obj2 = obj1 // 报错：类型 "{}" 中缺少属性 "value"，但类型 "Empty<string>" 中需要该属性。

// 泛型函数
let log1 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log2 = <T>(y: T): T => {
  console.log('y')
  return y
}
// 如果泛型的定义相同，但是没有指定类型参数，那么他们之间也是可以相互兼容的
log1 = log2
log2 = log1


