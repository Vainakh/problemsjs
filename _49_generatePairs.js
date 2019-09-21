Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.

Examples:

function generatePairs(integer){
  let newArray = [];

  for (let i = 0; i <= integer; i += 1){
    for (let j = i; j <= integer; j += 1){
      newArray.push([i, j]);
    }
  }
  return newArray;
}
