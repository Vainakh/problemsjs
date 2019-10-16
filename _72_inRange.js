Write a function called inRange, which takes in number n, start, and end, and checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped.

Examples:

function inRange(n, start, end){
   let m = Math.round(n);
   let array = [];

   if(start > end){
       [start, end] = [end, start];
   }

   if(end === undefined){
       end = start;
       start = 0;
   }

   for (let i = start; i < end; i += 1){
       array.push(i);
   }

   if(array.includes(m)){
       return true;
   }
   return false;
}


console.log(inRange(3, 2, 4)); // true
console.log(inRange(0, -10, 10)); // true
console.log(inRange(5, 0, 3)); // false
console.log(inRange(4, 8)); // true
console.log(inRange(4, 2)); // false
console.log(inRange(2, 2)); // false
console.log(inRange(1.2, 2)); // true
console.log(inRange(5.2, 4)); // false
console.log(inRange(5, 6, 4)); // true
console.log(inRange(-3, -2, -6)); // true
console.log(inRange(10, 100, -5)); // true
console.log(inRange(10, 10, -5)); // false
