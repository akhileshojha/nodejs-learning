function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    // Default delimiter is comma or newline
    let delimiter = /,|\n/;
    
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        // Escape special regex characters if needed
        delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numberArray = numbers.split(delimiter);
    let sum = 0;
    let negativeNumbers = [];

    for (let num of numberArray) {
        const parsedNumber = parseInt(num, 10);

        if (isNaN(parsedNumber)) continue; // Skip non-numbers

        if (parsedNumber < 0) {
            negativeNumbers.push(parsedNumber);
        }

        sum += parsedNumber;
    }

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return sum;
}

// Test cases for console output
console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
console.log(add("//|\n1|2|3")); // Output: 6
console.log(add("//:\n1:2:3")); // Output: 6
console.log(add("//@\n1@-2@3")); // Throws an exception