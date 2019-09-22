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

console.log(findTheDuplicate([1,2,1,4,3,12])) // 1
console.log(findTheDuplicate([6,1,9,5,3,4,9])) // 9
console.log(findTheDuplicate([2,1,3,4])); // undefined
