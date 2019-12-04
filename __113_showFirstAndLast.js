Instructions from your teacher:
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(array) {
    let words = array.join(" ").split(" ");
    let newArray = [];

    words.forEach(function(word){
        newArray.push(word[0].concat(word[word.length - 1]));
    });
    return newArray;
}

console.log(showFirstAndLast(['elie', 'matt', 'michael']));
// ["ee", "mt", "ml"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));
// ['hi', 'ge', 'se']
