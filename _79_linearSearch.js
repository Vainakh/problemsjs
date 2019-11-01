Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

function linearSearch(array, value) {
    for (let i = 0; i < array.length; i += 1) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 2)); // 1
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
