Instructions from your teacher:
Write a function called clamp, which accepts three parameters: a number, a lower bound, and an upper bound. The function should return the number if it is in between the lower and upper bounds. Otherwise, the function should return lower if number is less than lower, or upper if number is greater than upper.

function clamp(number, lower, upper){

    if(number === 0 || lower === 0 || upper === 0) {
        return 0;
    }

    for (let i = lower; i < upper; i += 1) {
        if(number > lower && number < upper) {
            return number;
        } else if(number < lower) {
            return lower;
        } else {
            return upper;
        }
    }
}

console.log(clamp(-10, -5, 6)); // -5
console.log(clamp(10, -2, 5)); // 5
console.log(clamp(2, -5, 5)); // 2
console.log(clamp(-2, -5, 5)); // -2
console.log(clamp(0, 0, 0)); // 0
