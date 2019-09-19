Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

The function should return an array with the following format: [lowestKey, highestKey]

function minMaxKeyInObject(obj){

  let newArray = [];

  for (let key in obj){
    newArray.push(key)
  }

  let sortedArr = newArray.sort(function(a, b){return a-b});

  lowestKey = parseInt(sortedArr[0]);
  highestKey = parseInt(sortedArr[sortedArr.length - 1]);

  return [lowestKey, highestKey];
}
