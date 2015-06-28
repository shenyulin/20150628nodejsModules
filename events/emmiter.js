var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Person(name,kind){
    this.name = name;
    this.kind = kind;
}
util.inherits(Person,EventEmitter);
var p = new Person();

//咨询
p.on('askfor',function(msg){
    console.log('请问这里有'+msg+"么？");
});
p.emit('askfor',"人");

//回复
p.once('reply',function(){
    console.log('请问你找谁？');
});
p.emit('reply');

//找人
p.addListener('findP',function(msg1,msg2){
    console.log('我想找一个：'+msg2+msg1);
});
p.emit('findP','朋友','好');



p.emit('askfor',"人");
function findFriend(msg){
    console.log('我想找一个:'+msg+"啊~~~");
}
for(var i=0;i<3;i++){
   p.on('find',findFriend);
}
p.emit('find','朋友');

//放弃了
function giveUpFun(){
   console.log("好吧，人们都去吃饭去了，我还是回去吧");
}
p.on('giveUp',giveUpFun);
p.emit('giveUp');

//删除
p.removeListener('giveUp',giveUpFun);





