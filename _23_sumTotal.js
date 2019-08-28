const nestedArr = [[1, 2], [3, 4], [5, 6]];

function sumTotal(array){
    let sumOfNumbers = 0;

    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {

            sumOfNumbers += array[i][j];
    }
}
    return sumOfNumbers;

}

console.log(sumTotal(nestedArr));
