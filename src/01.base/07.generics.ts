/**
 * 泛型
 *  好处：
 *  1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
 *  2. 不必写多条函数重载，冗长的联合类型 声明，增强代码的可读性
 *  3. 灵活控制类型之间的约束
 */

// 1. 泛型函数
function log<T>(value: T): T {
  console.log(value)
  return value
}

// 调用方式：第二种更好
log<string[]>(['a', 'b'])
log(['a', 'b'])

// type Log = <T>(value: T) => T
// let myLog: Log = log

// 2. 泛型接口
interface Log<T = string> {
  (value: T): T
}
let myLog: Log = log
myLog('1')

// 3. 泛型类
class Logger<T> {
  // 静态成员不能引用类类型参数
  // static run(value: T) {
  run(value: T) {
    console.log(value)
    return value
  }
}

let logger1 = new Logger<number>()
logger1.run(1)
let logger2 = new Logger()
logger2.run('1')


// 4. 泛型约束
interface Length {
  length: number
}
// 泛型函数
function logger<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}

logger([1])
logger('123')
logger({length: 1})