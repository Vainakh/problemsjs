Instructions from your teacher:
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by its index in the array.


function valTimesIndex(array){
    let newArray = array.map(myFunction);

    function myFunction(num, i){

            return num * i;
    }
    return newArray;
}
console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
console.log(valTimesIndex([1, -2, -3])); // [0,-2,-6]
console.log(valTimesIndex([4, 2, 8, 0, 1])); // [0, 2, 16, 0, 4]
console.log(valTimesIndex([])); // []
