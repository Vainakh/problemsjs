Write a function called countValues which accepts an array and a number and returns the number of times that value appears in the array.
function countValues(array, number){
  let count = 0;
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      count += 1;
    }
  }
  return count;
}
