Instructions from your teacher:
Write a function called reverseVowels which accepts a string and reverses the vowels in the string.
function reverseVowels(str){

    let newstring = '';
    let string = [];
    let vowels = [];


    for (let i = 0; i < str.length; i += 1) {
        let regular = str[i];
        let letter = str[i].toLowerCase();

        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowels.push(regular);
            regular = 0;
        }
        string.push(regular);
    }


    for (var i = 0; i < string.length; i++) {
        if (!string[i]) {
            string[i] = vowels.splice(vowels.length - 1, 1)[0];
        }
    }

    newstring = string.join('');

    return newstring;

}
