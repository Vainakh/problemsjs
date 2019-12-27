Instructions from your teacher:
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at that key. If there is no value at that key, no value should be placed in the output array.
function extractValue(array, key){
    let newarray = [];

        for (let i = 0; i < array.length; i += 1) {
            if(array[i][key] !== undefined){
            newarray.push(array[i][key])
        }
    }

    return newarray;
}
