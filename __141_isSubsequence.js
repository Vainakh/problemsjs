Write a function called isSubsequnce which takes in two strings and
whether the characters in the first string form a subsequence of the
characters in the second string. In other words, the function should
check whether the characters in the first string appear somewhere in
the second string, without their order changing.

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
