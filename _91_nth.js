Instructions from your teacher:
Write a function called nth, which accepts an array and a number and returns the element at whatever index is the number in the array. If the number is negative, the nth element from the end is returned.

You can assume that number will always be between the negative value of the array length, and the array length minus 1.

function nth(array, number) {

    if(Math.abs(number) >= array.length) {
        return array[0];
    }

    for (let i = 0; i < array.length; i += 1) {
        if(Math.abs(number) === i && number >= 0 && number < array.length){
            return array[i];
        } else if (Math.abs(number) === i && number < 0){
            return array[array.length - i];
        }
    }
}


console.log(nth(['a', 'b', 'c', 'd'], 1)); // 'b'
console.log(nth(['a', 'b', 'c', 'd'], -2)); // 'c';
console.log(nth(['a', 'b', 'c', 'd'], 0)); // 'a';
console.log(nth(['a', 'b', 'c', 'd'], -4)); // 'a';
console.log(nth(['a', 'b', 'c', 'd'], -1)); // 'd';
console.log(nth(['a', 'b', 'c', 'd'], 3)); // 'd';
