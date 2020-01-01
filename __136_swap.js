nstructions from your teacher:
Write a function called swap, which accepts an array and two numbers. The function should return the array with the values at each number swapped. The function should not create a new array. You can assume that each number will be within the range of 0 and the length of the array.

Examples:

function swap(array, num1, num2){
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
    return array;
}

var arr = [1, 2, 3, 4]
console.log(swap(arr, 0, 2)); // [3,2,1,4]
console.log(arr); // [3,2,1,4]

var arr2 = [5, 6, 8, 7]
console.log(swap(arr2, 2, 3)); // [5,6,7,8]
console.log(arr2); // [5,6,7,8]
