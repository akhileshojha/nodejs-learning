//Reverse a string
//string = "hello"

const reverseString = (str) => {
  return str.split("").reverse().join('');
};
console.log(reverseString("hello"));

//2 check if number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(4));

//3. Find the logest word in a sentence
const sentence = "The quick brown fox jumped over the lazy dog";
const longestWord = sentence.split(' ').reduce((a, b) => a.length > b.length ? a : b);
console.log(longestWord);

//4. Flatten an array
const array = [1, 2, 3, [4, 5], 6, [7, 8, 9]];
function flattenedArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
}
console.log(flattenedArray(array));

//5. Remove duplicates from an Array

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(array2));