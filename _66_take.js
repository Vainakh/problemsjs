Write a function called take which accepts an array and an optional value and creates a copy of the array starting from the beginning for the value number of elements. If a value is not passed the function should return an array with the first element. If the second parameter is greater than the length of the array, return a copy of the entire array.

function take(array, optional){
    let newArray = [];

    if(!optional && optional !== 0){
        return [array[0]];
    }

    for (let i = 0; i < array.length; i += 1) {
        if(newArray.length < optional) {
        newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(take([1, 2, 3])); // [1]
console.log(take([1, 2, 3], 1)); // [1]
console.log(take([1, 2, 3], 2)); // [1, 2]
console.log(take([1, 2, 3], 5)); // [1, 2, 3]
console.log(take([1, 2, 3], 0)); // []
