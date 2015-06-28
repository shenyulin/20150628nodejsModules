
/*
* process进程
* process对象是一个全局对象，可以在任何地方访问到它
* */


//标准输入监听数据（在cmd运行）
process.stdin.on("date",function(chunk){
    process.stdout.write(chunk);

    //
    process.kill(进程号,"SIGTERM");
});


//一个包含命令行参数的数组。第一个元素会是 'node'， 第二个元素将是 .Js 文件的名称。接下来的元素依次是命令行传入的参数。
process.argv.forEach(function(val, index, array){
   console.log("val:"+val+",\nindex:"+index+",\narray:"+array);
});


//获取当前工作目录
var curPath=process.cwd();
console.log('当前目录：' + curPath);

//修改目录
process.chdir("../");
console.log('新目录：' + process.cwd());


//获取进程号
console.log(process.pid);

//监听信号
process.on("SIGINT",function(chunk){
    console.log('收到 SIGINT 信号。  退出请使用 Ctrl + D ');
    //退出进程
    process.exit();
});

//监听异常，报错但是不退出
process.on("uncaughtException",function(err){
    console.log(err);
});
