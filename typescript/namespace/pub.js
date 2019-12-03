/// <reference path='a.ts' />
var fileB;
(function (fileB) {
    var FileB = /** @class */ (function () {
        function FileB() {
        }
        FileB.prototype.draw = function () {
            console.log('我是文件B');
        };
        return FileB;
    }());
    fileB.FileB = FileB;
})(fileB || (fileB = {}));
/// <reference path='a.ts' />
var fileC;
(function (fileC) {
    var FileC = /** @class */ (function () {
        function FileC() {
        }
        FileC.prototype.draw = function () {
            console.log('我是文件C');
        };
        return FileC;
    }());
    fileC.FileC = FileC;
})(fileC || (fileC = {}));
/// <reference path='a.ts' />
/// <reference path='b.ts' />
/// <reference path='c.ts' />
function p1(params) {
    return params.name + params.age;
}
var p = p1({ name: '张三', age: '13' });
function test(params) {
    params.draw();
    console.log('方法被调用');
}
test(new fileB.FileB());
test(new fileC.FileC());
