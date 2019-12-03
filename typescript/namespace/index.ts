/// <reference path='a.ts' />
/// <reference path='b.ts' />
/// <reference path='c.ts' />
function p1 (params:fileA.Person){
    return params.name + params.age
}
let p = p1({name:'张三',age:'13'})

function test(params:fileA.IShape){
    params.draw()
    console.log('方法被调用')
}
test(new fileB.FileB())
test(new fileC.FileC())