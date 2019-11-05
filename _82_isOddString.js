
function isOddString(string){
    let alphabet = "adcbdefghijklmnopqrstuvwxyz";
    let letter = string.split("");
    let sum = 0;

    if(string.length < 2){
        return true;
    }

    letter.forEach(function(letter) {
        sum += alphabet.indexOf(letter);
    });

    if(sum % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOddString('a')); // true
console.log(isOddString('aaaa')); // false
console.log(isOddString('amazing')); // true
console.log(isOddString('veryfun')); // true
console.log(isOddString('veryfunny')); // false
