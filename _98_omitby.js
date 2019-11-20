Write a function called omitBy which accepts an object and a callback function. This function should return an object with all the keys and values for which the values return falsey values when passed into the callback function.
function omitBy(object, callback) {
    let newObject = {};
    let keyArray = Object.keys(object);

    for (let i = 0; i < keyArray.length; i += 1) {

       if(!callback(object[keyArray[i]])) {
           newObject[keyArray[i]] = object[keyArray[i]];
       } else {
           continue;
       }
    }
    return newObject;
}

function isNumber(val) {
    return Number.isFinite(val);
}

function isString(val) {
    return typeof val === "string";
}

var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(omitBy(object, isNumber)); // { 'b': '2' }
console.log(omitBy(object, isString)); // { 'a': 1, 'c': 3 }
