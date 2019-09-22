Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

Examples:

function findTheDuplicate(array){
  let newArray = [];
  for (let i = 0; i < array.length; i += 1){
    if(newArray.includes(array[i])){
      return array[i];
    } else {
      newArray.push(array[i]);
    }
  }
}
