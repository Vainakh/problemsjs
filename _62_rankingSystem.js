Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest.

Examples:

function rankings(arr) {
  // add whatever parameters you deem necessary....good luck!
  let newArray = [];
  let sorted = arr.slice().sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < sorted.length; j += 1){
        if(arr[i] === sorted[j]){
          newArray.push(j + 1);
        }
      }
    }
  return newArray;
}

console.log(rankings([10, 5, 20])); // [2, 3, 1]
console.log(rankings(([6, 8, 1, 12, 4, 3, 9]))); // [4, 3, 7, 1, 5, 6, 2]
console.log(rankings(([100]))); // [1]
console.log(rankings(([4, 2, 3, 1]))); // [1, 3, 2, 4]
