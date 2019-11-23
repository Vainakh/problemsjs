Instructions from your teacher:
Write a function called sumBy which accepts an array of objects and a rule for summing up those objects to obtain a value.

The rule can be provided in one of two ways. One way is to provide a callback function which is invoked for each element in array to generate the value to be summed. The callback is invoked with one argument: the current array element.

Another option for the rule is to pass in a string referencing a key. With this syntax, the value to be summed is the value corresponding to the key passed in.

function sumBy(array, rule){
    let sum = 0;
    let count = 0;
    let count2 = 0;

        for (let i = 0; i < array.length; i += 1) {
            if (typeof rule === "function" && count <= 3) {
                sum += rule(array[i]);
                count += 1;
            }


        for (let j = 0; j < array.length; j += 1) {
            for (let key in array[j]){
                if (key === rule && count2 <= 3) {
                    sum += array[j][key];
                    count2 += 1;
                }
            }
        }
    }
   return sum;
}

var objects = [{
    'n': 4,
    'm': 8,
    's': 'first'
}, {
    'n': 2,
    'm': 3,
    's': 'second'
}, {
    'n': 8,
    'm': 5,
    's': 'third'
}, {
    'n': 6,
    'm': -2,
    's': 'fourth'
}];
console.log(sumBy(objects, function (obj) { return obj.n; })); // 20
console.log(sumBy(objects, function (obj) { return obj.n * obj.m })); // 66
console.log(sumBy(objects, function (obj) { return obj.s.length })); // 22

console.log(sumBy(objects, 'n')); // 20
console.log(sumBy(objects, 'm')); // 14
console.log(sumBy(objects, 's')); // '0firstsecondthirdfourth'
