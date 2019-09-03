Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or -1 if the character is not found.

Do not use the built in String.indexOf() function!

function indexOf(array, number){
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      return i;
    }
  }
  return -1
}

var arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1
