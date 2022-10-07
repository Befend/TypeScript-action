/**
 * 高级类型：交叉类型与联合类型
 * 交叉类型比较适合做对象的混用
 * 联合类型可以使类型具备不确定性，增加代码的灵活性
 */
interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}

// 交叉类型声明
const pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}

// 联合类型声明
const a1: number | string = 1
let b1: 'a' | 'b' | 'c'
let c1: 1 | 2 | 3

class Dog1 implements DogInterface {
  run() {}
  eat() {}
}

class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}

enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1()
  // 对象的联合类型: 取对象的交集
  pet.eat() // 类型不确定时，只能取公有成员
  // pet.run() // 报错：类型“Dog1 | Cat1”上不存在属性“run”。 类型“Cat1”上不存在属性“run”。
  return pet
}

// 接口的联合类型
interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  r: number;
}

type Shape = Square | Rectangle | Circle

function area(s: Shape) {
  switch(s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.r **2
    default:
      return ((e: never) => {throw new Error(e)})(s)
  }
}
console.log(area({kind: 'circle', r: 1}));

