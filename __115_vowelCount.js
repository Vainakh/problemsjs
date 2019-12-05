Instructions from your teacher:
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive, so both lowercase vowels and uppercase vowels should count.


function vowelCount(str) {
    let words = str.toLowerCase().split("");
    let vowels = "aeoui".split("");
    let newObj = {};

    let result = words.forEach(function(val){
        if(vowels.includes(val)){
        newObj[val] = (newObj[val] || 0) + 1;
        }
    });
    return newObj;
}
