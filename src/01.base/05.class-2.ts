/**
 * 1. 抽象类
 *  定义：只能被继承，不能被实例化的类
 *  好处：抽离出一些事物的共性，有利于代码的复用和扩展。另外，抽象类也可以实现多态。
 *  抽象方法：不定义方法的具体实现
 * 2. 多态
 *  定义：在父类中定义一个抽象方法，在多个子类中对这个方法做不同的实现，在程序运行的时候，会根据不同的对象进行不同的操作，这样就实现了运行时的绑定。
 */
// 抽象类:只能被继承，不能被实例化的类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法：不定义方法的具体实现
  abstract sleep(): void
}

// let animal = new Animal() // 报错：无法创建抽象类的实例

class Cat extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat('Lucy')
cat.eat()

// 多态
class Lion extends Animal {
  sleep() {
    console.log('Lion sleep')
  }
}
let lion = new Lion();

let animals: Animal[] = [cat, lion]
animals.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

// 在继承时，this类型也可以表现出多态，这里的多态是指this既可以是父类型，也可以是子类型。
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()