/// <reference path='a.ts' />
namespace fileC{
    export class FileC implements fileA.IShape{
        public draw(){
            console.log('我是文件C')
        }
    }
}