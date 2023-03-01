"use strict";
/*
使用的包是否有可用的声明文件,可以进行查找：
http://microsoft.github.io/TypeSearch/
如果没有,就需要自己写一个了：
http://definitelytyped.org/提供了为社区贡献声明文件的方法
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default('.app').css('color', 'red');
// 1> 全局库
globalLib({ x: 1 });
globalLib.doSomething();
// 2> 模块库
var module_lib_1 = __importDefault(require("./module-lib"));
module_lib_1.default({ y: 2 });
module_lib_1.default.doSomething();
// 3> umd库
var umd_lib_1 = __importDefault(require("./umd-lib"));
umd_lib_1.default.doSomething();
console.log(umd_lib_1.default.version);
// 4> 模块化插件
// 给类库添加一些自定义的方法，比如想给moment类库添加一些自定义的方法
var moment_1 = __importDefault(require("moment"));
moment_1.default.myFunc = function () { console.log('myFunc'); };
console.log(moment_1.default.myFunc());
globalLib.doAnyThing = function () { };
