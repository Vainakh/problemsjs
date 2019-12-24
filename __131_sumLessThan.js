Instructions from your teacher:
Write a function called sumLessThan which accepts an array of numbers and a number.  The function should return the sum off all numbers less than the number.

function sumLessThan(array, number){
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        if(array[i] < number) {
            sum += array[i];
        }
    }
    return sum;
}
