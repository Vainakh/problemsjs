function pop(arr) {
 return arr.splice(-1, 1)[0];
}

var arr = [1, 2, 3, 4];
pop(arr); // 4
// arr; // [1, 2, 3]

// var emptyArr = [];
// pop(emptyArr); // undefined
// emptyArr.length; // 0
