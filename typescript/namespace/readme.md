

<!-- 
  命令执行：tsc index.ts   会生成：index.js a.js b.js c.js 但最终node index.js 不能正常输出
  正确执行：tsc index.ts --out pub.js --watch  ;会生成pub.js 执行node pub.js 输出结果
 -->

一、typescript的命名空间 
<!-- 
  定义：使用 namespace 来定义   
    语法格式：
        namespace name/*模块名称*/ { 
        export interface ISomeInterfaceName {      }  
        export class SomeClassName {      }  
    }
  使用方式：需要在外部可以调用 name 中的类和接口，则需要在类和接口添加 export 关键字。
    1.在命名空间调用另外一个命名空间的方法、类、接口
        语法：nameSpaceName.SomeClassName;
    2.在ts文件中引入命名空间的文件，则应使用三斜杠 /// 引用它
        语法：/// <reference path = "SomeFileName.ts" />
 -->