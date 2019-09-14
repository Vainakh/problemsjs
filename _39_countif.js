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

console.log(countIf([1, 2, 3, 4, 5], function(val) {
 return val > 4;
})); // 1

console.log(countIf([2, 4, 6, 7], function(val) {
 return val % 2 === 0;
})); // 3

console.log(countIf(['Tim', 'Matt', 'Elie'], function(val) {
 return val.length > 3;
})); // 2
