Instructions from your teacher:
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

function onlyEvenValues(array) {
    let evenNumArray = [];

    for (let i = 0; i < array.length; i += 1) {
        if(array[i] % 2 === 0) {
            evenNumArray.push(array[i]);
        }
    }
    return evenNumArray;
}
console.log(onlyEvenValues([1, 2, 3])); // [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10]
console.log(onlyEvenValues([1, 3, 5])); // []showFirstAndLast
