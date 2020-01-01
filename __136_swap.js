nstructions from your teacher:
Write a function called swap, which accepts an array and two numbers. The function should return the array with the values at each number swapped. The function should not create a new array. You can assume that each number will be within the range of 0 and the length of the array.

Examples:

function swap(array, num1, num2){
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
    return array;
}
