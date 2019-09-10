Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.

In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

Do not use the built in Object.entries() function!

function entries(obj){
  let newArray = [];

  for (var key in obj){
    newArray.push([key, obj[key]])
  }
  return newArray;
}
var obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj));
// [["a",1], ["b",2], ["c",3]]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

var obj3 = {};
entries(obj3); // []
