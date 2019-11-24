Instructions from your teacher:
Write a function called sumDiagonals which accepts an NxN array of arrays and sums the two main diagonals in the array: the one from the upper left to the lower right, and the one from the upper right to the lower left.
function sumUpDiagonals(array) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < array.length; i += 1) {
        leftToRight += array[i][i];
        rightToLeft += array[i][array.length - i - 1];
    }
     let totalSum = leftToRight + rightToLeft;
     return totalSum;
}

var arr1 = [
    [1, 2],
    [3, 4]
];

console.log(sumUpDiagonals(arr1)); // 10

var arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(sumUpDiagonals(arr2)); // 30

var arr3 = [
    [4, 1, 0],
    [-1, -1, 0],
    [0, 0, 9]
];

console.log(sumUpDiagonals(arr3)); // 11

var arr4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(sumUpDiagonals(arr4)); // 68
