Instructions from your teacher:
Write a function called zipObject which accepts two arrays, one of property identifiers and one of corresponding values. It returns an object with the keys from one array and values from another. If the first array is longer than the second, the value in the object should be undefined. If the second array is longer, ignore the additional values in the second array.

function zipObject(array1, array2){
    let newObject = {};


    for (let i = 0; i < array1.length; i += 1) {
                newObject[array1[i]] = array2[i];
    }
    return newObject;
}

console.log(zipObject(['a', 'b'], [1, 2]));
// { a: 1, b: 2 }

console.log(zipObject(['a', 'b', 'c', 'd'], [1, 2, 3]));
// {a: 1, b: 2, c: 3, d: undefined}

console.log(zipObject(['a', 'b', 'c'], [1, 2, 3, 4]));
// {a: 1, b: 2, c: 3}
