namespace fileA{
    export interface Person{
        name:string,
        age:number|string
    }
    export interface IShape{//管道返回一个方法调用
        draw(); 
    } 
    export class log{
        constructor(){
            console.log(999)
        }
    }
}