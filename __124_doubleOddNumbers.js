nstructions from your teacher:
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers in the input array doubled. (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(array) {
    let odd = (array.filter((element, i) => element % 2 !== 0));
    let double = odd.map(x => x * 2);
    return double;
}
