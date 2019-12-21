Instructions from your teacher:
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

function hasCertainKey(array, key){
    return array.every(element => element[key]);
}
