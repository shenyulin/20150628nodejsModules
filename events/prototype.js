/**
 *js通过原型和构造函数生成对象
 * 与直接定义不同，如：
 * 1、构造韩式内定义属性继承方式与原型对象不同，需要子类调用call，才能继承
 * 2、构造函数内部的任何属性包括函数在内会被重复创建，不通对象不会共享实例
 * 3、构造函数运行的有闭包的开销
 */

function Person(){

}

Person.prototype.name="xiaoxiao";
Person.prototype.showName=function(){
    console.log(this.name+","+this.__proto__.name);

}
var person=new Person();
person.showName();


function Animal(name,food){


}
