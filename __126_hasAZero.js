Instructions from your teacher:
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false.

function hasAZero(number){
    let numberArray = Array.from(String(number), Number);


    let hasZero = numberArray.some(function(element) {
        return element === 0;
    });

    return hasZero;
}

console.log(hasAZero(3332123213101232321)); // true
console.log(hasAZero(1212121)); // false
