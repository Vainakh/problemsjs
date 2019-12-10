Instructions from your teacher:
Write a function called filterByKey which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByKey(array, key) {
    let newarray = [];

    for (let i = 0; i < array.length; i += 1) {
        let currentObject = array[i];
        let currentKeyArray = Object.keys(currentObject);
        if(currentKeyArray.includes(key)) {
            newarray.push(currentObject);
        }

    }
    return newarray;
};
