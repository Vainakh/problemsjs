Instructions from your teacher:
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(string){
    let lowered = string.toLowerCase();
    let word = lowered.split("");


    let modified = word.filter(function(char) {
        let vowels = "aeuioAEUIO";
        let constants = !vowels.includes(char);
        return constants;
    });
    return modified.join("")
}

console.log(removeVowels('Elie')); // 'l'
console.log(removeVowels('hELLO')); // 'hll'
console.log(removeVowels('ZZZZZZ')); // 'zzzzzz'
