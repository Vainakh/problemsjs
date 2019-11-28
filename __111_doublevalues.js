Instructions from your teacher:
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled.

function doubleValues(array){
    let newArray = [];

    for (let i = 0; i < array.length; i += 1) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

console.log(doubleValues([1, 2, 3])); // [2,4,6]
console.log(doubleValues([5, 1, 2, 3, 10])); // [10,2,4,6,20]
