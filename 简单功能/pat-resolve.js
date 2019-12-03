const path = require('path')
console.log(__dirname, '----------1')
console.log(path.resolve(__dirname), '-------------2')
console.log(path.resolve(__dirname, './'), '-------------3')
console.log(path.resolve(__dirname, '../'), '-------------4')
console.log(path.resolve(__dirname, './views'), '-------------5')

console.log('******************---------------------------------------------------------------******************')

console.log(__filename, '----------1')