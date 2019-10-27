Instructions from your teacher:
Write a function called drop which accepts an array and optional number and returns a new array with the number of elements dropped from the beginning. If the number is greater than the length of the array, return an empty array and if there is no second parameter, return a slice starting from the first index to the end of the array.

Since drop returns a new array, it should not mutate the original array.

function drop(array, number) {

    if(number > array.length){
        return array.length = [];
    }

    for (let i = 0; i < array.length; i += 1){
        if(number === undefined){
            return array.slice(1);
        } else {
            return array.slice(number);
        }
    }
}

console.log(drop([1, 2, 3])); // [2,3]
console.log(drop([1, 2, 3], 2)); // [3]
console.log(drop([1, 2, 3], 10)); // []
console.log(drop([1, 2, 3], 0)); // [1,2,3]

var arr = [1, 2, 3];
console.log(drop(arr, 2));

console.log(arr); // [1,2,3]
