<!-- 
全局安装：npm i -g typescript
版本检测：tsc -v
文件格式：name.ts
命令输出：tsc name.ts ->name.js
命令检测：tsc name.ts --watch ->name.js 会持续检测name.ts的修改并输出到name.js
多文件输出：tsc name1.ts name2.ts ...ts ->name1.js name2.js
多文件监控：tsc name1.ts name2.ts ...ts --watch ->name1.js name2.js 会持续检测文件输出到对应文件
多文件输出整合同一个文件并检测 tsc name1.ts name2.ts ...ts --out pub.js --watch
 -->