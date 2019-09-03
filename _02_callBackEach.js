// Write a function called prependToString, which accepts two strings.
//
// The function should return a new string with the second string
// prepended to the first string.
function each(array, cb){
    for (let i = 0; i < array.length; i += 1){
        let currentElement = array[i];

        cb(currentElement);
    }

}


each([1, 2, 3, 4], function (val) {
    console.log(val * 2);
});
