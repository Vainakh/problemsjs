Instructions from your teacher:
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(array) {

    let newarray = array.every((element) => {
        return element % 2 !== 0;
    });
    return newarray;
}

console.log(hasOnlyOddNumbers([1, 3, 5, 7])); // true
console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7])); // false
