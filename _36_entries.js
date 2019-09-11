Write a function called every which accepts an array and a callback function. The function should return true if all values in the array passed to the callback return true, otherwise return false.

Do not use the built in every function, the tests will fail!

function every(array, cb){
  for (let i = 0; i < array.length; i += 1){
    if (cb(array[i]) !== true){
      return false;
    }
  }
  return true;
}
