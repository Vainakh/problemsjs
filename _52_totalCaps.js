Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.

Examples:


function totalCaps(array){
  let count = 0;
  for (let i = 0; i < array.length; i += 1){
    for (let j = 0; j < array[i].length; j += 1){
      if(array[i][j] === array[i][j].toUpperCase()){
        count += 1;
      }
    }
  }
  return count;
}

console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])); // 8
console.log(totalCaps(["Elie", "Matt", "Tim"])); // 3
console.log(totalCaps(["hello", "world"])); // 0
