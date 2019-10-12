Instructions from your teacher:
Write a function called map which accepts an array and a callback. The function should iterate over the array passed to the function and return a new array, whose values are determined by the return values from the callback. For each iteration, the callback should accept the current value, current index and the entire original array as its arguments.

Since map returns a new array, it should not mutate the original array passed into it.

Do not use the built in map function, the tests will fail!

function map(array, callback){
    let newArray = [];

    for (let i = 0; i < array.length; i += 1){
        newArray.push(callback(array[i], i, array));
    }
    return newArray
}

var nums = [1, 2, 3, 4];

var newTotal = map(nums, function (val, idx, array) {
    return val * 10;
})

console.log(newTotal); // [10,20,30,40]
console.log(nums); // [1,2,3,4]

console.log(map([1, 2, 3, 4], function (val, idx) {
    return val + idx;
})); // [1,3,5,7]

console.log(map(["a", "b", "c"], function (val, idx, arr) {
    return arr;
})); // [["a","b","c"],["a","b","c"],["a","b","c"]]
