Instructions from your teacher:
Write a function called isPrime which returns true if a number is a prime number.

A prime number is a number greater than 1 which is only divisible by one and itself. The first few primes are 2, 3, 5, 7, 11, 13, and 17. Notice that 4 is not prime, since 4 = 2 * 2. Similarly, 6 is not prime since 6 = 2 * 3.

function isPrime(num){

    let squareRoot = Math.sqrt(num);

    if (num % 2 === 0) {
        return false;
    }

    i = 3;
    while (i <= squareRoot){
        if (num % i === 0){
            return false;
        }
    i += 2;
    }
    return true;
}

console.log(isPrime(3)); // true
console.log(isPrime(13)); // true
console.log(isPrime(24)); // false
console.log(isPrime(55)); // false
console.log(isPrime(1299720)); // false
console.log(isPrime(1299721)); // true
