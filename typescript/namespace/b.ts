/// <reference path='a.ts' />
namespace fileB{
    export class FileB implements fileA.IShape{
        public draw(){
            console.log('我是文件B')
        }
    }
}