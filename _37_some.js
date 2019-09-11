Write a function called some which accepts an array and a callback function.

The function should return true if any value in the array passed to the callback returns true, otherwise return false.

Do not use the built in some function, the tests will fail!

function some(array, cb){
  for (let i = 0; i < array.length; i += 1){
    if(cb(array[i] === true)){
      return true;
    }
  }
  return false;
}

some([1, 2, 3, 4, 5], function(val) {
 return val > 5;
}); // false

some([1, 2, 3, 4, 5], function(val) {
 return val < 2;
}); // true
