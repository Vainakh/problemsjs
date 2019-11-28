function isSubsequence(string1, string2) {

    if (string1.length === 0) return true;

    let first = 0;
    let second = 0;

    while (second < string2.length) {
        if (string2.charAt(second) === string1.charAt(first)) {
            first += 1;
            if (first === string1.length) return true;
        }
        second += 1;
    }
    return false;
};

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting"));//true
console.log(isSubsequence("abc", "abracadabra"));//true
console.log(isSubsequence("abc", "acb"));//false
