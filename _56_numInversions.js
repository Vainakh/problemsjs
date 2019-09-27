Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.

Implement a function called numInversions which counts the number of inversions in the array.

Examples:

function numInversions(array){
  let count = 0;

  for (let i = 0; i < array.length; i += 1){
    for (let j = i; j < array.length; j += 1){
      if(array[i] > array[j]){
        count += 1;
      }
    }
  }
  return count;
}
