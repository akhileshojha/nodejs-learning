//The module pattern is a design pattern used to encapsulate code into a module, providing both private and public access to methods and variables. It helps in organizing and maintaining code.

//module pattern
const person = (function () {
    let name = "John";
    let age = 30;
    return {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
    };
})();
person.getName();
person.getAge();