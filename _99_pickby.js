Instructions from your teacher:
Write a function called pickBy which accepts an object and a callback function. The function should return a new object consisting of keys and values where the value returns something truthy when passed into the callback.
function pickBy(object, callback) {
    let newObject = {};
    let array = Object.keys(object);

    for (let i = 0; i < array.length; i += 1) {
        if(callback(object[array[i]])) {
            newObject[array[i]] = object[array[i]]
        } else {
            continue;
        }
    }
    return newObject;
}

function isNumber(val) {
    return Number.isFinite(val);
}

var object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(pickBy(object, isNumber)); // {'a':1, 'c':3}

function isShortString(str) {
    return typeof str === "string" && str.length < 10;
}

var object1 = { 'name': 'Bob', age: 47, job: null };
var object2 = {
    'key1': 'a string that is too long',
    'key2': 'another string that is too long'
};

console.log(pickBy(object1, isShortString)); // { 'name': 'Bob' }
console.log(pickBy(object2, isShortString)); // {}
