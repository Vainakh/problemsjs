Write a function called push which accepts two parameters, an array and any value.

The function should add the value to the end of the array and then return the new length of the array.

Do not use the built in Array.push() function!

function push(array, number){
  array[array.length] = number;
  array;
  return array.length;
};

var arr = [1, 2, 3];
push(arr, 10); // 4

arr; // [1, 2, 3, 10]

var secondArr = [5, 2, 1, 6];
push(secondArr, 20); // 5

arr; // [5, 2, 1, 6, 20]
