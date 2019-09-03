Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or -1 if the character is not found.

Do not use the built in String.lastIndexOf() function!


function lastIndexOf(array, number){
  for (let i = array.length - 1; i > 0; i -= 1){
    if(array[i] === number){
      return i;
    }
  }
  return -1;
}

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
