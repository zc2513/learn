var fileA;
(function (fileA) {
    var log = /** @class */ (function () {
        function log() {
            console.log(999);
        }
        return log;
    }());
    fileA.log = log;
})(fileA || (fileA = {}));
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
