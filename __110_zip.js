Instructions from your teacher:
Write a function called zip which accepts an arbitrary number of arrays, and creates an array of grouped elements, the first of which contains the first elements of the input arrays, the second of which contains the second elements of the input arrays, and so on.

function zip(...array) {

    let newarray = [];

    for (let row = 0; row < array.length; row += 1) {
        for (let col = 0; col <= array[row].length - 1; col += 1) {
            let subarray = [];

        for (let ele = 0; ele < array.length; ele += 1) {
                subarray.push(array[ele][col]);
            }
        newarray.push(subarray);

    }
        break;
}
    let filteredarray = newarray.filter(function (element) {
        return element !== undefined;
    });


    return filteredarray;
}
