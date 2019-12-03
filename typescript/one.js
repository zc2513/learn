var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = 'hellow';
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('runoob');
    };
    return Site;
}());
var obj = new Site();
obj.name();
var Num = /** @class */ (function () {
    function Num() {
    }
    Num.prototype.ncv = function (e) {
        return e; //由于是静态检测所以无法检测到e的类型是否为number，不会报错，把e改为其它类型具体值则会报错 
        // return 'e' //报错
    };
    return Num;
}());
var n = new Num();
var res = n.ncv('汉子');
console.log(res);
try {
    var x = void 0;
    x = (function () { throw new Error('err'); })();
}
catch (e) {
    console.log('异常捕获：---', e);
}
// 1.全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
// 2.类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
//2.0:实例      function a(){}
//2.1:实例变量  a.name
//2.2:静态变量  function a(){this.name=''}
//2.3:局部变量  a.prototype.save={this.name}
// 3.局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers(x, y) {
        this.x = x;
        this.y = y;
        this.num_val = 13; // 实例变量  
        // 默认为public
        // 当成员被标记为private时，它就不能在声明它的类的外部访问,但是在继承类中可以使用
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量 
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var save = new Numbers(1, 'str');
console.log("实例变量: " + save.num_val);
function add(x, y) {
    return x + y;
}
function greer(params) {
    return { name: params.firstName, age: params.age };
}
greer({
    firstName: 'zs',
    age: 16
});
function function_name(param1, param2) {
    if (param2 === void 0) { param2 = 9; }
    console.log(param1, param2);
}
function_name('1');
// 剩余参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(restOfName);
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
var foo = function (x) { return 10 + x; };
console.log(foo(100));
// tsc的类型推断
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " 是一个数字");
    }
    else if (typeof x == "string") {
        console.log(x + " 是一个字符串");
    }
};
func(12);
func("Tom");
console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(j, nums[j]);
}
var options = { program: "test1", commandline: "Hello" };
options = { program: "test1", commandline: ["Hello", "World"] };
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
//let list2:namelist = ["John",1,"Bran"] // 错误元素 1 不是 string 类型
var list2 = ["John", '1', "Bran"]; // 错误元素 1 不是 string 类型
var agelist;
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
var Iobj = { v1: 12, v2: 23 };
//----------------------------------------------------------
var Car = /** @class */ (function () {
    // 构造函数 
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("发动机为 :   " + this.engine);
    };
    return Car;
}());
var carItm = new Car("XXSY1");
console.log("读取发动机型号 :  " + carItm.engine);
carItm.disp();
//类型继承
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj2 = new Circle(223);
obj2.disp();
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj3 = new Encapsulate();
console.log(obj3.str1); // 可访问 
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj4 = new AgriLoan(10, 2);
console.log("利润为 : " + obj4.interest + "，抽成为 : " + obj4.rebate);
