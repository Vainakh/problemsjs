Write a function called filter which accepts an array and a callback. The function should return a new array consisting of elements from the original array that return truthy values when passed into the callback. Also, the original array should not be affected.

function filter(array, callback){
    let newArray = [];

    for (let i = 0; i < array.length; i += 1){
        if(callback(array[i]))
        newArray.push(array[i])
    }
    return newArray;
}

var arr = [1, 2, 3, 4];

console.log(filter(arr, function (value) {
    return value % 2 === 0;
})); // [2,4]

console.log(filter(arr, function (value) {
    return value > 2;
})); // [3,4]

console.log(filter(arr, function (value) {
    return value < 0;
})); // []
