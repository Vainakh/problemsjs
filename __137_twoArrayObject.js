Instructions from your teacher:
Write a function called twoArrayObject which accepts to arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values.

If there are not enough values, the rest of keys should have a value of null.

If there not enough keys, just ignore the rest of values.

function twoArrayObject(array1, array2) {

    let newobject = {};



    for (let i = 0; i < array1.length; i += 1)  {
        newobject[array1[i]] = null;
    }

    for (let i = 0; i < array1.length; i += 1) {
    if (i < array2.length) {
        newobject[array1[i]] = array2[i];
    } else {
        continue;
    }

    }
    return newobject;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': nu
