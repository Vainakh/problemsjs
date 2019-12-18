nstructions from your teacher:
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers in the input array doubled. (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(array) {
    let odd = (array.filter((element, i) => element % 2 !== 0));
    let double = odd.map(x => x * 2);
    return double;
}

console.log(doubleOddNumbers([3, 1, 1, 3])); // [6,2,2,6]
console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2,6,10]
console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // []
