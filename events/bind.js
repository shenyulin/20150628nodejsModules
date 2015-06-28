/**
 *
 */



//call
var person={
    name:"xiaoxaio",
    say:function(words){
      console.log(name+"say:"+words);
    }
}

var p={name:"xiaozhu"};
p.say.call(person);
//bind  把函数say的this和参数分别指向p,hello
var newsay=person.say.bind(p,"hello");
newsay("asd");