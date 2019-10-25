Instructions from your teacher:
Write a function called padEnd, which accepts a string and a number and pads the string on the right side if it's shorter than the number. By default, it will pad the string with whitespace. However, you can also provide a third argument to padEnd which will specify how it should pad the output string.

Padding characters are truncated if there's not enough padding, and are repeated if there's too much padding.

If the number is less than the input string length, no padding or truncation occurs; instead, the original string is simply returned.

Examples:

padEnd('abc', 6); //  'abc   '
padEnd('hi', 10); // 'hi        '
padEnd('hello', 5); // 'hello'
padEnd('hello', 1); // 'hello'

padEnd('abc', 6, 'xyz'); // 'abcxyz'
padEnd('hello', 11, ' world'); // 'hello world'

padEnd('hello', 5, ' world'); // 'hello');
padEnd('abc', 5, 'xyz'); // 'abcxy'
padEnd('abc', 10, 'xyz'); // 'abcxyzxyzx'
padEnd('hello', 7, ' world'); // 'hello w'
padEnd('hello', 25, ' world'); // 'hello world world world w'
