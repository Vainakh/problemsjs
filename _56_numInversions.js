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

console.log(numInversions([])); // 0
console.log(numInversions([5])); // 0
console.log(numInversions([1,2])); // 0
console.log(numInversions([2,1])); // 1
console.log(numInversions([1,2,3])); // 0
console.log(numInversions([1,3,2])); // 1
console.log(numInversions([3,1,2])); // 2
console.log(numInversions([3,2,1])); // 3
console.log(numInversions([5,3,4,1,2])); // 8
console.log(numInversions([1,1,1,1])); // 0
console.log(numInversions([2,2,1,1])); // 4
console.log(numInversions([3,3,3,2,2,1])); // 11
console.log(numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2])); // 22console.log()
