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

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

Note: You may assume the string contains only lowercase characters.

Bonus: If you used nested loops to solve this problem, try it without nested loops!
