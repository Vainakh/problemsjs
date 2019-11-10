Instructions from your teacher:
Write a function called find which accepts an array and a callback. The function should return the first value for which the callback returns a truthy value. If the callback never returns a truthy value, the function should return undefined.

function find(array, callback){

    for (let i = 0; i < array.length; i += 1) {
        if(callback(array[i])){
            return array[i];
        }
    }
}

console.log(find([1, 2, 3, 4], function (value) {
    return value === 2;
})); // 2

console.log(find([{ name: 'Test' }, { name: 'Another' }], function (value) {
    return value.name === 'Another';
})); // {name: 'Another'}

console.log(find(['a', 'bb', 'ccc'], function (value) {
    return value.length > 3;
})); // undefined
