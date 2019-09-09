Write a function called keys, which accepts an object and returns an array of all of the keys in the object.

Do not use the built in Object.keys() function!

function keys(obj){
  let newArray = [];

  for (var key in obj){
    newArray.push(key);
  }
  return newArray;
}


var obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

var obj2 = { first: 'Matt', last: 'Lane' };
keys(obj); // ["first", "last"]

var obj3 = {};
keys(obj); // []
