Write a function called tap, which accepts an array and a callback. The callback should be invoked on the array and then the returned value should be the array regardless of what the callback returns.


  function tap(array, callback){

    for (let i = 0; i < array.length; i += 1) {
       if(callback(array)){
           return array;
       } else {
           return array;
       }
    }
}

console.log(tap([1, 2, 3], function (array) {
    array.pop();
}).reverse()); // [2,1]

console.log(tap([1, 2, 3], function (array) {
    array[0] = 10
    array[1] = -10
    return "cool";
})); // [10, -10, 3];

console.log(tap(["a", "b", "c"], function (array) {
    return array[0];
})); // ["a","b","c"]


tap([1, 2, 3], function(array) {
  array.pop();
}).reverse(); // [2,1]

tap([1, 2, 3], function(array) {
  array[0] = 10
  array[1] = -10
  return "cool";
}); // [10, -10, 3];

tap(["a","b","c"], function(array) {
  return array[0];
}); // ["a","b","c"]
