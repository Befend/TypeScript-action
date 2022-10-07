/**
 * 条件类型
 * 条件类型使类型具有了不唯一性，同样地，也增加了语言的灵活性。
 * T extends U ? X : Y
 * 若类型T可被赋值给类型U,那么结果类型就是X类型,否则就是Y类型
 * 
 */
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

// 定义类型T1为条件类型,传入参数string,指定t1为string类型
type T1 = TypeName<string>
// 定义类型T2为条件类型,传入参数string[]
type T2 = TypeName<string[]>

/*
(A | B) extends U ? X : Y
拆解为：(A extends U ? X : Y) | (B extends U ? X : Y)
*/
// 传入string | string[]联合类型,被推断为string|object的联合类型
type T3 = TypeName<string | string[]>

// 1、Diff作用：可以从类型T中过滤掉可以被赋值给类型U的类型
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// 拆解分析:
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

// 2、从类型T中移除不需要的类型，如：undefined和null
type NotNull<T> = Diff<T, undefined | null>
// 过滤掉undefined和null,T5的类型就变成了string和number
type T5 = NotNull<string | number | undefined | null>
// 等价于 type T5 = NonNullable<string | number | undefined | null>

// 3、内置类型
// Diff的内置类型叫做：Exclude<T, U>
// NotNull的内置类型叫做：NonNullable<T>
// 官方提供的内置方法：
// Exclude<T, U> 从类型T过滤掉可以赋值给类型U的类型
// NonNullable<T>
// Extract<T, U> // 与Exclude相反，从类型T抽取出可以赋值给类型U的类型
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// 4、ReturnType<T> 可以获取一个函数返回值的类型
type T7 = ReturnType<() => string>

/*
源码分析：
`type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;`
T extends (...args: any) => any:
ReturnType要求参数T可以赋值给一个函数,这个函数有任意的参数,返回值类型也是任意的
由于函数返回值类型不确定,这里使用了infer关键字,表示待推断,延迟推断,需要根据实际的情况确定

infer R ? R : any:
如果实际类型是R,那么结果类型就是R,否则返回值类型就是any
*/
