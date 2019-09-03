Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

The function should return true if the first string includes the character, otherwise it should return false.

Do not use the built in String.includes() function!

function includes(array, number){
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      return true;
    }
  }
  return false
}
includes([1, 2, 3, 4], 4) // true
includes([1, 2, 3, 4], 14) // false
includes([], 14) // false
