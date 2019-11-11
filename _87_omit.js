Write a function called omit, which accepts an object and an array of keys and returns a new object with the keys from the array omitted. If an array element doesn't correspond to a valid key, the element is simply ignored.
function omit(object, keys){
    let newObject = {};

    let newKeys = Object.keys(object);

    for (let i = 0; i < newKeys.length; i += 1){
        if(!keys.includes(newKeys[i])){
            newObject[newKeys[i]] = object[newKeys[i]]
        }
    }
    return newObject;
}

var object = { 'a': 1, 'b': 2, 'c': 3 };
console.log(omit(object, ['a', 'c'])); // { 'b': 2 }
console.log(omit(object, ['b', 'c'])); // { 'a': 1 }

console.log(omit(object, ['a', 'd'])); // { 'b': 2, 'c': 3 }
console.log(omit(object, ['d', 'e', 'f'])); // { 'a': 1, 'b': 2, 'c': 3 }
