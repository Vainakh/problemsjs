Instructions from your teacher:
Write a function called fill that accepts an array and a value and returns the same array with each slot in the array filled with the value passed to fill.

function fill(array, value) {

    for (let i = 0; i < array.length; i += 1) {
        array[i] = value;
    }
    return array;
}

var arr = [1, 2, 3];
console.log(fill(arr, "y"));

console.log(arr);// ["y","y","y"]

console.log(fill([undefined, undefined, null, false], "1"));
// ["1","1","1","1"]notours
console.log(fill([2, 3, 1, 95], 4)); // [4,4,4,4]
console.log(fill([1, 2, 3, 4, 5], 5)); // [5,5,5,5,5]
