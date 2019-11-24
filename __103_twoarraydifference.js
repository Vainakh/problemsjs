Instructions from your teacher:
Write a function called twoArrayDifference which accepts two arrays and returns an array of all of the values in the first that are not the second array. The returned array should preserve the order of elements from the first array.
function twoArrayDifference(array1, array2){
    let differences = [];

    for (let i = 0; i < array1.length; i += 1) {
        if(array2.includes(array1[i])) {
            continue;
        } else {
            differences.push(array1[i]);
        }
    }
    return differences;
}

console.log(twoArrayDifference([1, 2, 1], [2])); // [1, 1]
console.log(twoArrayDifference([1, 2, 1], [1])); // [2]
console.log(twoArrayDifference([2, 3, 4, 5], [2, 5])); // [3, 4]
console.log(twoArrayDifference([2, 3, 4, 5], [6, 7, 8])); // [2,3,4,5]
console.log(twoArrayDifference([2, 3, 4, 5], [2, 3, 4, 5, 6])); // []
