Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

Examples:

function countNumbers(array){
  let count = 0;

  for (let i = 0; i < array.length; i += 1){
    // if(!(isNaN(array[i])) || array[i] > 0){
    if(array[i] === '0') count += 1;
    if(array[i] && parseInt(array[i])) count += 1;
  }
  return count;
}
