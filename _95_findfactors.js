Instructions from your teacher:
Write a function called findFactors which accepts a number and returns an array of all of the numbers which it is divisible by starting from 1 and going up to the number.

function findFactors(number){
    let newArray = [];

    for (let i = 1; i <= number; i += 1) {
        if(number % i === 0) {
            newArray.push(i);
        }
    }
    return newArray;
}

console.log(findFactors(10)); // [1,2,5,10]
console.log(findFactors(11)); // [1,11]
console.log(findFactors(30)); // [1,2,3,5,6,10,15,30]
console.log(findFactors(111)); // [1,3,37,111]
console.log(findFactors(321421)); // [1,293,1097,321421]
console.log(findFactors(412146)); // [1,2,3,6,7,9,14,18,21,42,63,126,3271,6542,9813,1
