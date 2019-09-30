Write a function called threeOddNumbers, which accepts an array of numbers and returns true if any three consecutive numbers sum to an odd number.

Examples:

function threeOddNumbers(array){
  for (let i = 0; i < array.length - 2; i += 1){
      let first = array[i];
      let second = array[i + 1];
      let third = array[i + 2];
      let sum = first + second + third;


      if(!(sum % 2 === 0)){
        return true;
      }
  }
  return false;
}

console.log(threeOddNumbers([1,2,3,4,5])); // true
console.log(threeOddNumbers([0,-2,4,1,9,12,4,1,0])); // true
console.log(threeOddNumbers([5,2,1])); // false
