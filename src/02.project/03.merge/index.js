"use strict";
/**
 * 声明合并: 编译器会将程序中多个具有相同名称的声明合并为一个声明
 * 优势：可以将程序中散落在各处的重名声明合并在一起
 */
var ax = {
    x: 1,
    y: 2,
    // 实现时,需要指定更为宽泛的类型
    foo: function (bar) {
        return bar;
    }
};
// 3> 合并命名空间和函数  --- 相当于给函数添加了属性
function Lib() { }
(function (Lib) {
    Lib.str = 'hello world';
})(Lib || (Lib = {}));
console.log(Lib, Lib.str);
// 4> 合并命名空间和类  --- 相当于给类添加了静态属性
var C2 = /** @class */ (function () {
    function C2() {
    }
    return C2;
}());
(function (C2) {
    C2.str = 'zcl';
})(C2 || (C2 = {}));
console.log(C2, C2.str);
// 注意：命名空间与函数或者类合并时，必须要放在函数或者类的后面，否则会报错
// 5> 合并命名空间与枚举，相对于给枚举添加了属性。同时需要注意，命名空间与枚举的位置不受限制
// 注意命名空间与枚举的位置
var Color2;
(function (Color2) {
    function mix() { }
    Color2.mix = mix;
})(Color2 || (Color2 = {}));
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2);
