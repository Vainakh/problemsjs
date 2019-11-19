Instructions from your teacher:
Write a function called greatestCommonDivisor which accepts two whole numbers and returns the greatest common divisor between both numbers. The greatest common divisor of two whole numbers is the largest whole number that divides both numbers evenly.

function greatestCommonDivisor(first, second) {
    let commonDiv = [];

    for (let i = 0; i < second; i += 1) {
        if(first % i === 0 && second % i === 0) {
            commonDiv.push(i);
        }
    }
    return commonDiv.pop();
}

//     Examples:

console.log(greatestCommonDivisor(3, 20)); // 1
console.log(greatestCommonDivisor(8, 12)); // 4
console.log(greatestCommonDivisor(20, 100)); // 20
console.log(greatestCommonDivisor(30, 48)); // 6
console.log(greatestCommonDivisor(66, 242)); // 22
console.log(greatestCommonDivisor(1324, 2648)); // 1324
