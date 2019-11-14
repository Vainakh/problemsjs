Instructions from your teacher:
Write a function called takeRight which accepts an array and an optional value and creates a copy of the array starting from the end for the value number of elements. If a value is not passed the function should return an array with the last element. If the second parameter is greater than the length of the array, return a copy of the entire array.
function takeRight(array, value){
    let newArray = [];

    if(value === 0){
        return [];
    }

    if(value === undefined){
        return [array[array.length - 1]];
    }

    if(value > array.length) {
        return array;
    }

    for (let i = 0; i < array.length; i += 1) {
        newArray.push(array[i]);
    }

    return newArray.splice(-value)
}

console.log(takeRight([1, 2, 3])); // [3]
console.log(takeRight([1, 2, 3], 2)); // [2, 3]
console.log(takeRight([1, 2, 3], 5)); // [1, 2, 3]
console.log(takeRight([1, 2, 3], 0)); // []
