
  // add whatever parameters you deem necessary - good luck!
  function some(array, callback){

    for (let i = 0; i < array.length; i += 1){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}

var arr = [1, 2, 3, 4];

console.log(some(arr, function (val) {
    return val < 4;
})); // true

console.log(some(arr, function (val) {
    return val > 4;
})); // false

console.log(some(arr, function (val, idx) {
    return idx > 5;
})); // false

console.log(some(arr, function (val, idx, arr) {
    return arr.indexOf(5) > -1;
})); // false

console.log(arr); // [1,2,3,4]
