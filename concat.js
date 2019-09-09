Write a function called concat, which accepts an array, and one, two, or three additional arguments (all of which are arrays).

The function returns a new array with all of the remaining parameters joined with the array.

Do not use the built in Array.concat() function!

function concat(...array){
  let newArray = [];

  for (let i = 0; i < array.length; i += 1){
    for (let j = 0; j < array[i].length; j += 1){

      newArray.push(array[i][j]);
    }
  }
  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2, 3], [4], [5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2, 3], [4], [5], [6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1], [[2], [3]], [4])); // [1, [2], [3], 4]]
