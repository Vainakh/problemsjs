nstructions from your teacher:
Write a function called flatten, which flattens an array a single level deep. In other words, if you have one level of nesting in your arrays, it will remove this one level of nesting.
function flatten(array) {

        var newArray = [];
        for (var i = 0; i < array.length; i += 1) {
            if (Array.isArray(array[i])) {
                newArray = newArray.concat((array[i]));
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
    console.log(flatten([[1], [2]])); // [1, 2]
    console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, [3, [4]], 5]
