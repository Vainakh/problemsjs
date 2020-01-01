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
