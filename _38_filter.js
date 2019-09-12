Write a function called filter which accepts an array and a callback
function. The callback takes a single parameter called val and return a boolean based on some comparison to the value.

The function should return an array of all values that pass the comparison test.

Do not use the built in filter function, the tests will fail!

function filter(array, cb){
  let newArray = [];

  for (let i = 0; i < array.length; i += 1){
    if(cb(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
