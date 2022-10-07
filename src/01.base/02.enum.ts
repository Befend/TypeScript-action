// 数字枚举
enum Role {
  Reporter = 1,
  Developer = 2,
  Maintainer = 3,
  Owner = 4,
  Guest = 5
}
/*
// js编译结果
"use strict":
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
*/
console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message {
  Success = '恭喜你，成功啦！',
  Fail = '抱歉，失败了'
}

// 异构枚举 不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员的性质：
// 1. 枚举成员类型为只读类型
enum Char {
  // const 常量枚举
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 需要被计算的枚举成员，非常量的表达式
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 用const声明的枚举，称为常量枚举.
// 特性：编译阶段会被移除
// 作用: 当我们不需要一个对象，而需要对象值的时候，就可以使用常量枚举，这样可以减少编译环境的代码
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// e === f // 此比较似乎是无意的，因为类型“E”和“F”没有重叠。

let e1: E.a = 1
let e2: E.b
// e1 === e2 // 此比较似乎是无意的，因为类型“E”和“F”没有重叠。
let e3: E.a = 1
e1 === e3 // true

let g1: G = G.b
let g2: G.a = G.a

/**
 * 小结一下：
 *  学习了ts的枚举类型。需要我们掌握一个思维方法：将程序中不容易记忆的硬编码，或者在未来中
 * 可能改变的常量，抽取出来，定义成枚举类型，这样可以提高我们程序的可读性和可维护性。枚举
 * 类型可以让我们的程序以不变应万变。
 */

// 例题
/*function initByRole(role) {
  if (role === 1 || role === 2) {
    // do sth
  } else if (role === 1 || role === 2) {
    // do sth
  } else if (role === 3 || role === 4) {
    // do sth
  } else if (role === 5) {
    // do sth
  } else {
    // do sth
  }
} */

const enum ERole {
  a = '1',
  b = '2',
  c = '3',
  d = '4',
  e = '5'
}

function initByRole(role: ERole) {
  switch (role) {
    case ERole.a:
    case ERole.b:
      console.log(1)
      break
    case ERole.c:
    case ERole.d:
      console.log(2)
      break
    case ERole.e:
      console.log(3)
      break
    default:
      console.log(4)
      break
  }
}
initByRole(ERole.a);