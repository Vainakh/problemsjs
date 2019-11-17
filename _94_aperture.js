Instructions from your teacher:
Write a function called aperture which accepts a number and an array and returns a new array. The new array should be composed of subarrays the size of the number with consecutive elements. If the number passed to this function is greater than the length of the array or less than 1, an empty array is returned.


function aperture(number, array){
    let nestedArray = [];

    if(number > array.length || number < 1){
        return [];
    };


    for (let i = 0; i <= array.length; i += 1){
        let newArray = array.slice(i, number + i);
            if(newArray && newArray.length === number) {
            nestedArray.push(newArray);
            continue;
        }
        break;
    }
    return nestedArray;
}


console.log(aperture(0, [1, 2, 3, 4, 5])); // []
console.log(aperture(1, [1, 2, 3, 4, 5])); // [[1], [2], [3], [4], [5]]
console.log(aperture(2, [1, 2, 3, 4, 5])); // [[1, 2], [2, 3], [3, 4], [4, 5]]
console.log(aperture(3, [1, 2, 3, 4, 5])); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
console.log(aperture(4, [1, 2, 3, 4, 5])); // [[1, 2, 3, 4], [2, 3, 4, 5]]
console.log(aperture(5, [1, 2, 3, 4, 5])); // [[1, 2, 3, 4, 5]]
console.log(aperture(6, [1, 2, 3, 4, 5])); // []
