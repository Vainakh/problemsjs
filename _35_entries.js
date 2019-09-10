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
