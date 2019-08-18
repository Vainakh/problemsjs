
function rotate(array, number){
    var amount = number % array.length;
    for (let i = 0; i < amount; i += 1){
        array.unshift(array.pop());
    }
    return array;
}
