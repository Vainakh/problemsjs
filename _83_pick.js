Instructions from your teacher:
Write a function called pick, which accepts an object and an array of keys and returns a new object with all of the keys that are in the array passed to pick. If an array element doesn't correspond to a valid key, the element is simply ignored.

function pick(object, array) {
    let newObject = {};

    for (let key in object) {
        if(array.includes(key))
        newObject[key] = object[key];
    }

    return newObject;
}


var object = { 'a': 1, 'b': 2, 'c': 3 };
console.log(pick(object, ['a', 'c'])); // { 'a': 1, 'c': 3 }
console.log(pick(object, ['b', 'c'])); // { 'b': 2, 'c': 3 }

console.log(pick(object, ['a', 'd'])); // { 'a': 1 }
console.log(pick(object, ['d', 'e', 'f'])); // { }
