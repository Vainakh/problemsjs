Write a function called repeat, which accepts a string and a number and returns a new string with the string passed to the function repeated the number amount of times. Do not use the built in repeat method!\
function repeat(string, number){
    let newString = "";

    while (number > 0){
    newString += string;
    number -= 1;
    }
    return newString;
}


console.log(repeat('*', 3));// => '***'
console.log(repeat('abc', 2));// => 'abcabc'
console.log(repeat('abc', 0));// => ''
