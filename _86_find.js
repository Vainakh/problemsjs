Instructions from your teacher:
Write a function called find which accepts an array and a callback. The function should return the first value for which the callback returns a truthy value. If the callback never returns a truthy value, the function should return undefined.

function find(array, callback){

    for (let i = 0; i < array.length; i += 1) {
        if(callback(array[i])){
            return array[i];
        }
    }
}
