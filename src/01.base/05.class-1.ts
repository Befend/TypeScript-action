/************************ 类的基本实现 ************************/
/**
 * 类的五种修饰符：
 * public: 公有成员
 *  类的属性默认都是public，对所有人都是可见的
 * private: 私有成员
 *  1. 只能在类本身被调用，而不能被类的实例调用，也不能子类继承或者调用
 *  2. 声明构造函数的私有成员属性，该类将不可被实例化，也不可被继承
 * protected: 受保护成员
 *  1. 声明受保护成员之后，不能在实例中访问，但可以在子类中访问
 *  2. 声明构造函数的受保护成员属性，该类不能被实例化，只能别继承
 * readonly: 只读属性
 *  只读属性跟实例属性一样，必须初始化
 * static: 静态成员
 *  类的静态成员只能通过类名来调用,不能通过实例来调用。可以被子类继承。
 * 
 * 除了类成员可以添加修饰符之外，构造函数的参数也可以添加修饰符。它的作用是将参数自动变成了实例的属性，
 * 这样可以省略参数在类中的定义。
 */
class Dog {
  // 声明构造函数的私有成员属性，该类将不可被实例化，也不可被继承
  // private constructor(name: string) {
  //   this.name = name
  // }
  // 声明构造函数的受保护成员属性，该类不能被实例化，只能别继承
  // protected constructor(name: string) {
  //   this.name = name
  // }
  constructor(name: string) {
    // 初始化，如果不初始化则需对name追加默认值或者变为可选属性
    this.name = name
  }
  // 默认是public，也可以写出来，显式声明
  public name: string // 等同于 name: string
  // 不初始化时，需要默认赋值
  // name: string = 'dog'
  // 可选属性
  // name?: string
  run() {}
  // 声明私有成员之后，既不能被实例调用，也不能子类继承或者调用
  private pri() {}
  // 声明受保护成员之后，不能在实例中访问，但可以在子类中访问
  protected pro() {}
  // 只读成员属性跟实例属性一样，必须初始化
  readonly legs: number = 4
  // 静态成员：类的静态成员只能通过类名来调用,不能通过实例来调用
  static food: string = 'bones'
}

// 注意两个问题，无论在es还是ts中，
// 类成员的属性都是实例属性，而不是原型属性
// 类成员的方法都是实例方法
console.log(Dog.prototype);
let dog = new Dog('wang')
console.log(dog)
// dog.pri() // 报错：属性‘pri’为私有属性，只能在类‘Dog’中访问
// dog.pro() //  报错：属性‘pro’为私有属性，只能在类‘Dog’及其子类中访问
console.log(Dog.food);
// console.log(dog.food); // 报错：属性“food”在类型“Dog”上不存在。你的意思是改为访问静态成员“Dog.food”吗?
/************************ 类的继承 ************************/
/**
 * extends 继承关键字
 * super 代表父类的实例
 */
class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    // this需要在super之后再调用
    this.color = color
    // this.pri() // 报错：属性‘pri’为私有属性，只能在类‘Dog’中访问
    this.pro()
  }
  // 属性已被修饰符修饰
  // color: string
}
// 可以继承父类的静态成员属性
console.log(Husky.food);
