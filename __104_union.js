Instructions from your teacher:
Write a function called union which accepts a variable number of arguments, which are all arrays. The function returns a new array of unique values from all the parameters.

function union(...arrays){
    let uniqueNums = [];

    for (let i = 0; i < arrays.length; i += 1){
        for (let j = 0; j < arrays[i].length; j += 1){

            if(!uniqueNums.includes(arrays[i][j])) {
                let num = arrays[i][j]
                uniqueNums.push(num)
            } else {
                continue;
            }
        }
    }
    return uniqueNums;
}

console.log(union([2], [1, 2])); // [2, 1]
console.log(union([2], [1, 2], [3], [3, 4, 5])); // [2,1,3,4,5]
console.log(union([2], [1, 2], [6, 8], [4, 5, 1, 2], [2, 7, 6, 9])); // [2,1,6,8,4,5,7,9]
