Instructions from your teacher:
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false.

function hasAZero(number){
    let numberArray = Array.from(String(number), Number);


    let hasZero = numberArray.some(function(element) {
        return element === 0;
    });

    return hasZero;
}
