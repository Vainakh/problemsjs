Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.

Do not use the built in shift function!


function shift(array) {
  let removed = array.splice(0,1);
  return removed[0];
}

var arr = ["a", "b", "c"];
console.log(shift(arr)); // "a"
arr; // ["b","c"]

var emptyArr = [];
shift(emptyArr); // undefined
emptyArr.length; // 0
