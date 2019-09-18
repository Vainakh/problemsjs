Write a function called pluck, which takes an array of objects and the name of a key.

The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(array, key){
  let newArray = [];
  for (let i = 0; i < array.length; i += 1){

    newArray.push(array[i][key]);
  }
  return newArray;
}


pluck([
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
 'name'
)
// ["Tim", "Matt", "Elie"]

pluck(
  [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
 'isBoatOwner'
)
// [true, false, undefined]
