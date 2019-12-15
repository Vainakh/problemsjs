Instructions from your teacher:
Write a function called findInObj which accepts an array of objects, a key, and some value to search for, and returns the first found value in the array. If no match is found, return undefined.

function findInObj(array, key, value) {
    let match = array.filter(object => object[key] === value);

    for (let i = 0; i < match.length; i += 1){
       if(match[i]){
         return match[i];
        } else {
        return undefined;
    }
}
}
