Instructions from your teacher:
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added to each object.

function addKeyAndValue(array, key, value){

    array.forEach(function(object) {
        object[key] = value;
    });
    return array;
}
