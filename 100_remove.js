Instructions from your teacher:
Write a function called remove that accepts an array and a callback. This function should iterate through the array and remove all elements for which the callback returns a truthy value. Then, the function should return an array of removed elements.

The callback should accept up to three arguments: the current array value, the current array index, and the entire array.

function remove(array, callback) {
    let newarray = [];


    for (let i = 0; i <= array.length - 1; i += 1) {
        if(typeof array[i] !== 'string'){
        if (callback(array[i], i, array)) {
            newarray.push(array.splice(i, 1));

            }
        }


        if (typeof array[i] === 'string') {
            if (callback(array[i], i, array)) {
                newarray.push(array.splice(i, 2));

            }
        }


}
     let final = newarray.reduce((acc, val) => acc.concat(val), []);
     return final;
};

var array = [1, 2, 3, 4];
var evens = remove(array, function(n) {
  return n % 2 == 0;
});

array; // [1, 3]
evens; // [2, 4]

var strings = ["hello", "I SAID HELLO", "YO", "goodbye"];

var shouting = remove(strings, function(s) {
  return s.toUpperCase() === s;
});

strings; // ["hello", "goodbye"]
shouting; // ["I SAID HELLO", "YO"]
