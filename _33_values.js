
Write a function called values, which accepts an object and returns an array of all of the values in the object.

Do not use the built in Object.values() function!

function values(obj){
  let newArray = [];

  for (var key in obj){
    newArray.push((obj[key]));
  }
  return newArray;
}
