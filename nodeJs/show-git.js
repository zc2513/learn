const execSync = require('child_process').execSync; //同步子进程
const gitName = execSync('git show -s --format=%cn').toString().trim()
console.log(gitName)

// https://blog.csdn.net/wang1006008051/article/details/103699669