Instructions from your teacher:
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the values for that key in each object.

function extractKey(array, key) {
    let newarray = array.map(myFunction);

    function myFunction(object) {
        return object[key];
    }
    return newarray;
}
