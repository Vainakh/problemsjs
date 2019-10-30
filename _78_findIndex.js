Write a function called findIndex, which accepts an array and a callback. The function should return the index where the callback first returns a truthy value. If the callback never returns a truthy value, findIndex should return -1.

function findIndex(array, callback) {

    for (let i = 0; i < array.length; i += 1) {
        if(callback(array[i])) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4], function (value) {
    return value === 3;
})); // 2


console.log(findIndex([{ name: 'Test' }, { name: 'Another' }], function (value) {
    return value.name === 'Another';
})); // 1


console.log(findIndex(['a', 'bb', 'ccc'], function (value) {
    return value.length > 3;
})); // -1
