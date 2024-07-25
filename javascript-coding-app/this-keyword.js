// The this keyword refers to the object it belongs to. It has different values depending on where it is used:
// 	•	In a method, this refers to the owner object.
// 	•	Alone, this refers to the global object (in non-strict mode).
// 	•	In a function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
// 	•	In an event, this refers to the element that received the event.
// 	•	In an arrow function, this retains the value of the enclosing lexical context.

const obj = {
    name: 'John',
    age: 30,
    sayName: function() {
        console.log(this.name);
    }
}

obj.sayName();
const sayName = obj.sayName;
sayName();

const sayName2 = () => {
    console.log(this);
}
sayName2();

var check = true;
if(check){
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a);
console.log(b);
console.log(c);