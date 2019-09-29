Given a sorted array of numbers, return the length of the subarray formed by allowing each number to appear at most two times.

Examples:

function removeDuplicatesFromSorted(array) {
  let length = 0;
  let currentElement = 0;
  let index = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (currentElement !== array[i]) {
        currentElement = array[i];
          length += 1;
          index = 1;
        } else {
          index += 1;
          if (index < 3){
          length += 1;
        }
     }
  }
  return length;
}

console.log(removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));
// 8
