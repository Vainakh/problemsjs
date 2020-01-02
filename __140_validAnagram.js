Instructions from your teacher:
Given two strings, write a function to determine if the second string is an anagram of the first.  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

function validAnagram(string1, string2) {

        if (string1  === ''|| string2 === '') {
            return true;
        }

        if ( string1.length !== string2.length) {
            return false;
            }

    let sortedString1 = string1.split('').sort().join('');
    let sortedString2 = string2.split('').sort().join('');

        return sortedString1 === sortedString2;
}
