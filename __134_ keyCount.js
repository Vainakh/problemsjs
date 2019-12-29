Instructions from your teacher:
Write a function called keyCount which accepts an array of objects and returns an object with a count of how many times each key appears in the array of objects.

Examples:

function keyCount(array){

    return array.reduce(function (current, obj, i, array) {
        for (let key in obj) {
            current[key] = (current[key] += 1) || 1;
        }
        return current;
    }, {})
}
