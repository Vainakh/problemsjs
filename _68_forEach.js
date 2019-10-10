Write a function called forEach, which accepts an array and a callback. forEach should iterate through the array and run a callback function for each value in the array. The callback should accept as its first argument the current array element, and as its second element the current array index. Also, forEach should always return undefined.
Do not use the built in forEach function, the tests will fail!

Examples:

function forEach(array, callback){

    for (var i = 0; i < array.length; i++) {
        callback(array[i], i)
    }
}
