const _ = require("lodash");

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

//Filtering users:
const activeUsers = _.filter(users, ["active", true]);
console.log("Filtering users:", activeUsers);

//Mapping user names:
const userNames = _.map(users, "user");
console.log("Mapping user names:", userNames);

//Finding a user by user name:
const user = _.find(users, { user: "barney" });
console.log("Finding a user by user name:", user);

//Sorting users by age:
const sortedUsers = _.sortBy(users, "age");
console.log("Sorting users by age:",sortedUsers);

//Working with Objects
//Creating a new object with specific properties:
const newObj = _.pick({ name: "John", age: 30 }, "age");
console.log("Creating a new object with specific properties:", newObj);

//Merging two objects:
const mergedObj = _.merge({ name: "John", age: 30 }, { city: "New York" });
console.log("Merging two objects:", mergedObj);

//_.cloneDeep
const clonedObj = _.cloneDeep({ name: "John", age: 30 });
console.log("Cloning an object:", clonedObj);

//_.defaults
const defaultObj = _.defaults({ name: "John", age: 30 }, { city: "New York" });
console.log("Setting default values:", defaultObj);

//_.has
const hasName = _.has({ name: "John", age: 30 }, "name");
console.log("Checking if an object has a property:", hasName);

//_.keys
const keys = _.keys({ name: "John", age: 30 });
console.log("Getting the keys of an object:", keys);

//_.values
const values = _.values({ name: "John", age: 30 });
console.log("Getting the values of an object:", values);

//Array manipulation: 
//_.chunk
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(array, 3);
console.log("Chunking an array:", chunkedArray);

//_.concat
const concatenatedArray = _.concat(array, 11, 12, 13);
console.log("Concatenating an array:", concatenatedArray);

//_.difference
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const differenceArray = _.difference(array1, array2);
console.log("Finding the difference between two arrays:", differenceArray);

//_.flatten
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = _.flatten(nestedArray);
console.log("Flattening an array:", flattenedArray);

//_.groupBy
const myusers = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];
const groupedUsers = _.groupBy(myusers, "active");
console.log("Grouping users by active status:", groupedUsers);

//_.join
const joinedArray = _.join(["Hello", "world"], " ");
console.log("Joining an array:", joinedArray);

//_.reduce
const array3 = [1, 2, 3, 4, 5];
const reducedArray = _.reduce(array3, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reducing an array:", reducedArray);

//String manipulation:
//_.camelCase
const camelCaseString = _.camelCase("hello world");
console.log("Converting a string to camelCase:", camelCaseString);

//_.capitalize
const capitalizedString = _.capitalize("hello world");
console.log("Capitalizing a string:", capitalizedString);

//_.lowerCase
const lowerCaseString = _.lowerCase("HELLO WORLD");
console.log("Converting a string to lowercase:", lowerCaseString);

//_.upperCase
const upperCaseString = _.upperCase("hello world");
console.log("Converting a string to uppercase:", upperCaseString);

//_.trim
const trimmedString = _.trim("  hello world  ");
console.log("Trimming a string:", trimmedString);

//Functional programming: 
//_.curry
const curriedAdd = _.curry((a, b) => a + b);
console.log("Currying a function:", curriedAdd(2, 3));

//_.partial
const partialAdd = _.partial((a, b) => a + b, 2);
console.log("Partially applying a function:", partialAdd(3));
