Instructions from your teacher:
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter, or undefined if the value is not found in the array.

function find(array, value) {

    let match = array.filter(element => element === value);
    if (match.length !== 0) {
        return match;
    } else {
        return undefined;
    }
}
