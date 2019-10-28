Instructions from your teacher:
Write a function called padEnd, which accepts a string and a number and pads the string on the right side if it's shorter than the number. By default, it will pad the string with whitespace. However, you can also provide a third argument to padEnd which will specify how it should pad the output string.

Padding characters are truncated if there's not enough padding, and are repeated if there's too much padding.

If the number is less than the input string length, no padding or truncation occurs; instead, the original string is simply returned.

Examples:

function padEnd(string, number, padding) {


    if (number <= string.length) {
        return string;
    }

    let padd = [[padding]];
    let newstring = "";

    for (let i = 0; i <= number; i += 1) {
        for (let j = 0; j < padd.length; j += 1) {

            if (newstring.length < string.length) {
                newstring += (string[i] || padding);
            } else if (newstring.length < number) {
                newstring += (padd[j] || padding);
            }
        }
    }
    if (newstring.length < number) {
        return  newstring + " ".repeat(number - newstring.length)
    } else {
    return newstring.split("").splice(0, number).join("");
    }
}
console.log(padEnd('abc', 6)); //  'abc   '
console.log(padEnd('hi', 10)); // 'hi        '
console.log(padEnd('hello', 5)); // 'hello'
console.log(padEnd('hello', 1)); // 'hello'
console.log(padEnd('abc', 6, 'xyz')); // 'abcxyz'
console.log(padEnd('hello', 11, ' world')); // 'hello world'
console.log(padEnd('hello', 5, ' world')); // 'hello';
console.log(padEnd('abc', 5, 'xyz')); // 'abcxy'
console.log(padEnd('abc', 10, 'xyz')); // 'abcxyzxyzx'
console.log(padEnd('hello', 7, ' world')); // 'hello w'
console.log(padEnd('hello', 25, ' world')); // 'hello world world world w'
