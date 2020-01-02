Instructions from your teacher:
Given two sorted arrays, write a function called mergeSortedArrays which accepts two arrays and returns a new array with both of the values from each array sorted.

As a bonus, try to implement this without using the built-in sort method.

function mergeSortedArrays(array1, array2) {
    let newarray = array1.concat(array2);

    let temparray = [];
    for (i = 0; i < newarray.length; i++) {
        for (j = 0; j < newarray.length; j++) {

            if (newarray[j] > newarray[j + 1]) {
                temparray = newarray[j];
                newarray[j] = newarray[j + 1];
                newarray[j + 1] = temparray;
            }
        }
    }
    return newarray;
}

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // [1,2,3,4,4,5,6,8]


arr1 // [1,3,4,5];
arr2 // [2,4,6,8];


var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];


console.log(mergeSortedArrays(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]


arr3 // [-2,-1,0,4,5,6];
arr4 // [-3,-2,-1,2,3,5,7,8];


var arr5 = [3, 4, 5]
var arr6 = [1, 2]


console.log(mergeSortedArrays(arr5, arr6)); // [1,2,3,4,5]Udemy
