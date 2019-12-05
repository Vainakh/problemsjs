Instructions from your teacher:
Write a function called doubleValuesMap which accepts an array and returns a new array with all the values in the array passed to the function doubled.

function doubleValuesMap(array){
    let newArray = array.map(myFunction);

    function myFunction(num){
        return num * 2;
    }
    return newArray;
}

console.log(doubleValuesMap([1, 2, 3])); // [2,4,6]
console.log(doubleValuesMap([1, -2, -3])); // [2,-4,-6]
