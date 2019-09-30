Create a function isAlt that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples:

function isAlt(string){
  let newString = string.toLowerCase();
  let vowels = ['a','e','i','o','u'];
  let notVowels = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];



  for (let i = 0; i < vowels.length; i += 1) {
     if (newString[0] === vowels[i]) {
        for (let i = 0; i < newString.length; i += 2){
          if (vowels.indexOf(newString[i]) < 0) {
            return false;
          } else if (notVowels.indexOf(newString[i + 1].toLowerCase()) < 0) {
           return false;
         }
       }
     return true;
  }
}

for (let i = 0; i < notVowels.length; i += 1) {
  if (newString[0] === notVowels[i]) {
    for (let i = 0; i < newString.length; i += 2){
      if (notVowels.indexOf(newString[i]) <  0){
          return false;
         } else if(vowels.indexOf(newString[i + 1]) < 0) {
          return false;
        }
      }
        return true;
    }
  }
}

console.log(isAlt("amazon")); // true
console.log(isAlt("apple")); // false
console.log(isAlt("banana")); // true
