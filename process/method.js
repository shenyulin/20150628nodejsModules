

/*
*rss 内存的消耗量
* heapTotal  总量
* heapUsed 已消耗
* */
console.log(process.memoryUsage());


//当前工作目录
console.log(process.cwd());
var fs=require("fs");
console.log(fs.readFileSync("1.txt"));

console.log(process.cwd());