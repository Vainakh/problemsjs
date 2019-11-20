Instructions from your teacher:
Write a function called letterCounter which accepts a string and returns a function. When the inner function is invoked it should accept a parameter which is a letter, and the inner function should return the number of times that letter appears. This inner function should be case insensitive.
function letterCounter(string){
    let newstring = string.split(" ").join("").toLowerCase();

        let counter = function(letter) {
            let count = 0;
                for (let i = 0; i < newstring.length; i += 1) {
                    if (newstring[i] === letter) {
                        count += 1;
                }
            }
            return count;
        };
    return counter;
};

var counter = letterCounter('Amazing')
counter('a') // 2
counter('m') // 1

var counter2 = letterCounter('This Is Really Fun!')
counter2('i') // 2
counter2('t') // 1 
