/**
 * 索引类型
 *  索引类型可以实现对对象属性的查询和访问，然后再配合泛型约束，就能
 *  告诉我们建立对象、对象属性以及属性值之间的约束关系。
 */
 let obj1 = {
  a: 1,
  b: 2,
  c: 3
}
// function getValues(obj: any, keys: string[]) {
//   return keys.map(key => obj[key])
// }
// 函数优化：
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValues(obj1, ['a', 'b']));
// console.log(getValues(obj1, ['e', 'f'])); // 报错：不能将类型“"e"”分配给类型“"a" | "b" | "c"”。不能将类型“"f"”分配给类型“"a" | "b" | "c"”。

// 索引类型的三大基本概念：
// 1、查询操作符：keyof T
interface Obj {
  a: number,
  b: string
}
let key: keyof Obj

// 2、索引访问操作符： T[K]
let value: Obj['a']

// 3、泛型约束：T extends U
