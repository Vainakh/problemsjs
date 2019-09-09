Write a function called keys, which accepts an object and returns an array of all of the keys in the object.

Do not use the built in Object.keys() function!

function keys(obj){
  let newArray = [];

  for (var key in obj){
    newArray.push(key);
  }
  return newArray;
}
