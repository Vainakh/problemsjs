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


minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]

minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
