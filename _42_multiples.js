Implement a function called multiples that accepts two numbers: x and n.

The function should return the first n multiples of the number x.

Assume that x is a positive integer.

function multiples(x, n) {
  let multy = [];
 for (let i = 1; i <= n; i += 1){
   multy.push(x * i);
 }
 return multy;
}

console.log(multiples(3, 4)); // [3, 6, 9, 12]
console.log(multiples(2, 5)); // [2, 4, 6, 8, 10]
