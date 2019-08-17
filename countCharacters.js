function countCharacters(str, count){
    for (let i = 0; i < str.length; i += 1){
        count = seeIfVowels(str[i], count);
    }
    return count;
}

console.log(countCharacters("pugLifeForever", 0))
