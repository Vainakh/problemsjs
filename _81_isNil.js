Write a function called isNil, which should return true if the input is null or undefined.
function isNil(value){

    if(value === undefined || value === NaN || value === null) {
        return true;
    }
    return false;
}

console.log(isNil(null)); // true
console.log(isNil(NaN)); // false
console.log(isNil([])); // false
console.log(isNil(false)); // false
console.log(isNil(undefined)); // true
console.log(isNil()); // true
