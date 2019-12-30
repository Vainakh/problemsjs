Instructions from your teacher:
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

Examples:

function partition(array, callback){

    let truearray = [];
    let falsearray = [];

    for (let i = 0; i < array.length; i += 1) {
        if(callback(array[i])){
            truearray.push(array[i])
        } else {
            falsearray.push(array[i])
        }
    }

    let newarray = [truearray, falsearray];
    return newarray;
}

function isEven(val) {
    return val % 2 === 0;
}
