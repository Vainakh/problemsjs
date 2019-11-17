Instructions from your teacher:
Write a function called upperFirst, which converts the first character of an input string to upper case.

function upperFirst(string){;

    return newString = string.charAt(0).toUpperCase() + string.slice(1);

}

console.log(upperFirst('fred')); // 'Fred'
console.log(upperFirst('FRED')); // 'FRED'
console.log(upperFirst('')); // ''
console.log(upperFirst('only first character')); // 'Only first character'
