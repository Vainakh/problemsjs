Instructions from your teacher:
Write a function called hasCertainValue which accepts an array of objects, a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise, it should return false.
function hasCertainValue(array, key, value){
    return array.every(element => element[key] === value);
}

var arr = [
    { title: "Instructor", first: 'Elie', last: "Schoppik" },
    { title: "Instructor", first: 'Matt', last: "Lane", isCatOwner: true },
    { title: "Instructor", first: 'Michael', last: "Hueter" },
    { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
]

console.log(hasCertainValue(arr, 'title', 'Instructor')); // true
console.log(hasCertainValue(arr, 'first', 'Elie')); // false
