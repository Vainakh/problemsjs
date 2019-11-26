Instructions from your teacher:
Write a function called binaryToDecimal which accepts a string of zeros and ones and returns the decimal value. Do not use parseInt!

function binaryToDecimal(string){

    let decimal = 0;
    let ones = 1;

    for (let i = 0; i < string.length; i++) {
        let currentElement = +(string[string.length - i - 1]);
        if (currentElement === 1) {
            decimal += ones;
        }
        ones *= 2;
    }
    return decimal;
}
console.log(binaryToDecimal('1')); // 1
console.log(binaryToDecimal('101')); // 5
console.log(binaryToDecimal('1001')); // 9
console.log(binaryToDecimal('10001')); // 17
console.log(binaryToDecimal('10011101101')); // 1261
console.log(binaryToDecimal('100010101010101010101')); // 1135957
