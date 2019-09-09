
Write a function called values, which accepts an object and returns an array of all of the values in the object.

Do not use the built in Object.values() function!

function values(obj){
  let newArray = [];

  for (var key in obj){
    newArray.push((obj[key]));
  }
  return newArray;
}

var obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]

var obj3 = {};
values(obj3); // []
