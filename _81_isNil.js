Write a function called isNil, which should return true if the input is null or undefined.
function isNil(value){

    if(value === undefined || value === NaN || value === null) {
        return true;
    }
    return false;
}
