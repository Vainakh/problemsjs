Instructions from your teacher:
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number. Otherwise, it returns false.

function hasOddNumber(array) {

    let odd = array.some(function(element) {
        let uneven = element % 2 !== 0;
        return uneven;
    });
    return odd;
}
