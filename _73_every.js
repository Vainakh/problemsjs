Write a function called every which accepts an array and a callback. every should return true if the result of the callback at each value is truthy; otherwise it should return false. The callback accepts as its arguments the current array element, the current array index, and the entire array.

every should not mutate the input array.

Do not use the built in every function, the tests will fail!

Examples:


  function every(array, callback){

    for (let i = 0; i < array.length; i += 1){
        if(!callback(array[i], i, array)){
            return false;
        }
    }
    return true;
}

var arr = [1, 2, 3, 4];

console.log(every(arr, function (val, idx, arr) {
    return val < 5;
})); // true

console.log(every(arr, function (val, idx, arr) {
    return val > 4;
})); // false

console.log(every(arr, function (val, idx, arr) {
    return idx < 5;
})); // true

console.log(every(arr, function (val, idx, arr) {
    return arr.indexOf(4) > -1;
})); // true

console.log(arr); // [1,2,3,4]
