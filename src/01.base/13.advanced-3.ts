/** 
 * 映射类型
 * 含义：可以从一个旧的类型生成一个新的类型，比如把一个类型中的所有属性变成只读
 * 本质上是一种预先定义的泛型接口，通常还会结合索引类型去获取对象的属性和属性值，
 * 从而将一个对象映射成我们想要的结构。
 * */ 

interface Obj1 {
  a: string;
  b: number;
  c: boolean;
}

// 同态: 只会作用于旧类型的属性，而不会引入新的属性
// 1. Readonly<T> 将旧类型中的每一个成员都变成只读
type ReadonlyObj = Readonly<Obj1>
/*
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
*/

// 2. Partial<T>  把旧类型中的每一个成员都变成可选的
type PartialObj = Partial<Obj1>
/*
type Partial<T> = {
  [P in keyof T]?: T[P];
};
*/

// 3. 接受两个参数：第一个是要抽取的对象，第二个是要抽取的属性的key
type PickObj = Pick<Obj1, 'a' | 'c'>
/*
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
*/

// 非同态：会创建一些新的属性
type RecordObj = Record<'x' | 'y', 1>;
/*
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
*/