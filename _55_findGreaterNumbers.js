Write a function called findGreaterNumbers which accepts an array and returns the number of times a number is followed by a larger number.

Note that the numbers don't need to be next to each other in the array. Any pair where the second number comes later in the array and is also the larger number should count.

function findGreaterNumbers(array){
  let count = 0;

  for (let i = 0; i < array.length; i += 1){
    for (let j = i; j < array.length; j += 1){
      if (array[i] < array[j] && array[i] !== array[j] ){
        count += 1;
      }
    }

  }
  return count;
}
