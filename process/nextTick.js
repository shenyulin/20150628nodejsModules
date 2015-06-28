/*
*  nextTick延迟执行  ==>setTimeout
*  nextTick优先于setImmediate
*/


function say(){
    console.log("say")
}


process.nextTick(say);
console.log("hello");

//让同步方法在执行完后执行
setImmediate(say);