Instructions from your teacher:
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowels and the values as the number of times the vowel appears in the string. This function should be case insensitive, so a lowercase letter and uppercase letter should both count.

function vowelCount(str) {
        let words = str.split("").join("").toLowerCase();
        let vowels = "aeoui".split("");

        let newObj = {};

        for (let i = 0; i < words.length; i += 1) {
            for( let j = 0; j < vowels.length; j += 1) {
                if(vowels[j] === words[i]){
                    newObj[words[i]] = (newObj[words[i]] || 0) + 1;
                }
            }
        }
        return newObj;
    }
