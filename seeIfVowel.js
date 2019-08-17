function seeIfVowels(char, count){
    var vowels = "aeiou";
    if (vowels.includes(char.toLowerCase())){
        return ++count;
    }
    return count;
}
