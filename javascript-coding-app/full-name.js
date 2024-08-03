//Challenge: Write a function that creates a person object with the ability to get and set the first name, last name, and full name.
const Person = function (firstAndLast) {
  let [firstName, lastName] = firstAndLast.split(" ");
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
  this.setFirstName = function (name) {
    firstName = name;
  };
  this.setLastName = function (name) {
    lastName = name;
  };
  this.setFullName = function (name) {
    [firstName, lastName] = name.split(" ");
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

bob.setFirstName("Haskell");
console.log(bob.getFullName());

bob.setLastName("Curry");
console.log(bob.getFullName());

bob.setFullName("John Doe");
console.log(bob.getFullName());
