let arr = '68 01 23 02 03 06 FF 08'.split(' ').map(v=>`0x${v}`-0) //等同于Array.from('68 01 23 02 03 06 FF 08'.split(' '),v=>`0x${v}`-0)
let num = (arr.reduce((prev,cur)=>prev+cur)).toString(16);
console.log(num) 
 

