function outer() {
  let count = 0;
  return function inner() {
    return count++;
    //console.log(count);
  };
}

const counter = outer();
// counter();
// counter();
console.log(counter());
console.log(counter());
console.log(counter());
