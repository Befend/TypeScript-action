/**
 * 类与接口的关系：
 * 1. 接口之间可以相互继承，实现接口的复用
 * 2. 类之间也可以相互继承，实现类的方法和属性的复用
 * 3. 接口可以通过类实现，但接口只能约束类的公有成员，不能约束类的构造函数
 * 4. 接口可以抽离出类的成员，包括公有成员、私有成员和受保护成员
 * 5. 类实现接口时，必须实现接口中所有的属性
 * 
 * 接口继承接口：
 *  接口的继承，可以抽离出可重用的接口，也可以将多个接口合并为一个接口
 * 接口继承类（这相当于接口将类的成员都抽象出来，也就是只有类的成员结构，而没有具体实现）
 *  接口在抽离类成员的时候，不仅抽离了公共成员，而且也抽离了私有成员和受保护成员
 */
 interface Human {
  // 报错：类"Asian"错误实现接口"Human"（类型“Asian”提供的内容与签名“new (name: string): void”不匹配）
  // new (name: string): void;
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  // 报错：类"Asian"错误实现接口"Human"（属性“name”在类型“Asian”中是私有属性，但在类型“Human”中不是）
  // private name: string
  name: string
  eat() {}
}

/******************* 接口继承接口 ************************/
// 继承一个接口
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

// 继承多个接口
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

/******************* 接口继承类 ************************/
class Auto {
  state = 1
  // private state2 = 2
  // protected state3 = 3
}

interface AutoInterface extends Auto {

}

// 实现接口
// 如果Auto类中有静态成员或者受保护成员，C会报错：类“C”错误实现接口“AutoInterface”。（类型“C”缺少类型“Auto”中的以下属性: state2, state3）
class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {
  
}