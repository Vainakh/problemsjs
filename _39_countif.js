Write a function called countIf which accepts an array and a callback function. The callback function will return a boolean comparison to its val parameter.

The function should return a count of the number of times the callback returns true when passed each value in the array.

function countIf(array, cb){
  let count = 0;

  for (let i = 0; i < array.length; i += 1){
    if(cb(array[i])){
      count += 1
    }
  }
  return count;
}
