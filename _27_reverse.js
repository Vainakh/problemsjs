Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm

Do not use the built in Array.reverse() function!

function reverse(array) {
  if(array.length === 0){
    return [];
  }
  for (var i = 0; i <= (array.length / 2); i++) {
    let currentElement = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = currentElement;
  }
  return array;
}
