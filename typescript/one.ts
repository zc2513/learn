let message:string = 'hellow';

class Site {
  name():void{
    console.log('runoob')
  }
}
let obj = new Site()
obj.name()

class Num {
  ncv(e):number{
    return e  //由于是静态检测所以无法检测到e的类型是否为number，不会报错，把e改为其它类型具体值则会报错 
    // return 'e' //报错
  }
}
let n = new Num()
let res = n.ncv('汉子')
console.log(res) 

try {
  let x: never;
      x = (()=>{throw new Error('err')})(); 
}
catch(e){
  console.log('异常捕获：---',e)
}

// 1.全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
// 2.类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
    //2.0:实例      function a(){}
    //2.1:实例变量  a.name
    //2.2:静态变量  function a(){this.name=''}
    //2.3:局部变量  a.prototype.save={this.name}
// 3.局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量  
   constructor(public x:number,private y:string){
      // 默认为public
      // 当成员被标记为private时，它就不能在声明它的类的外部访问,但是在继承类中可以使用
   }
   static sval = 10;         // 静态变量 
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
let save = new Numbers(1,'str'); 
console.log("实例变量: "+save.num_val)

function add(x: number, y: number): number {
  return x + y;
}

interface Person{
  firstName:string,
  age:number 
}
function greer(params:Person):Object{
  return {name:params.firstName,age:params.age}
}
greer({
  firstName:'zs',
  age:16
})

function function_name(param1:string,param2:number = 9) { 
  console.log(param1,param2)
}
function_name('1')

// 剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  console.log(restOfName)
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

var foo = (x:number)=>10 + x 
console.log(foo(100))
// tsc的类型推断
var func = (x)=> { 
  if(typeof x=="number") { 
      console.log(x+" 是一个数字") 
  } else if(typeof x=="string") { 
      console.log(x+" 是一个字符串") 
  }  
} 
func(12) 
func("Tom")

console.log("TypeScript Number 属性: "); 
console.log("最大值为: " + Number.MAX_VALUE); 
console.log("最小值为: " + Number.MIN_VALUE); 
console.log("负无穷大: " + Number.NEGATIVE_INFINITY); 
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

let j:any; 
var nums:number[] = [1001,1002,1003,1004]  
for(j in nums) { 
    console.log(j,nums[j]) 
}
//----------------------------------------------------------------------------------------------------------------------------------
//联合类型和接口
interface RunOptions { 
  program:string; 
  commandline:string[]|string|(()=>string); 
} 
let options:RunOptions = {program:"test1",commandline:"Hello"}; 
    options = {program:"test1",commandline:["Hello","World"]};
    options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

//接口和数组**
interface namelist { 
  [index:number]:string 
}  
//let list2:namelist = ["John",1,"Bran"] // 错误元素 1 不是 string 类型
let list2:namelist = ["John",'1',"Bran"] // 错误元素 1 不是 string 类型
interface ages { 
  [index:string]:number 
}  
var agelist:ages;  
//    agelist["John"] = 15   // 正确 
//agelist[2] = "nine"   // 错误

//接口继承 ->继承使用关键字 extends
//单接口继承语法格式: Child_interface_name extends ages 
//多接口继承语法格式：Child_interface_name extends ages, namelist,…,super_interface_name

//单接口 例如：
interface Person { 
  age:number 
}  
interface Musician extends Person { 
  instrument:string 
}  
var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 

//多接口 例如：
interface IParent1 { 
  v1:number 
}  
interface IParent2 { 
  v2:number 
}  
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 


//----------------------------------------------------------
class Car {  
  engine:string;  // 字段 
  // 构造函数 
  constructor(engine:string) { 
      this.engine = engine 
  }   
  disp():void { // 方法 
      console.log("发动机为 :   "+this.engine) 
  } 
}
var carItm = new Car("XXSY1")
    console.log("读取发动机型号 :  "+carItm.engine)  
    carItm.disp()
//类型继承
class Shape { 
  Area:number 
  constructor(a:number) { 
      this.Area = a 
  } 
} 
class Circle extends Shape { 
  disp():void { 
      console.log("圆的面积:  "+this.Area) 
  } 
}
var obj2 = new Circle(223); 
    obj2.disp()
  
class Encapsulate { 
  str1:string = "hello" 
  private str2:string = "world" 
} 
var obj3 = new Encapsulate() 
console.log(obj3.str1)     // 可访问 
//console.log(obj3.str2)   // 编译错误-但不影响正常输出， str2 是私有的 


/*-类和接口 
 关键字：implements
*/
interface ILoan {
  interest:number 
}
class AgriLoan implements ILoan { 
  interest:number 
  rebate:number  
  constructor(interest:number,rebate:number) { 
     this.interest = interest 
     this.rebate = rebate 
  } 
}  
let obj4 = new AgriLoan(10,2) 
console.log("利润为 : "+obj4.interest+"，抽成为 : "+obj4.rebate )
