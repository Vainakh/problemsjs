function unshift(array, value){
   array.splice(0,0, value);
   return array.length;

}

var arr = [1, 2, 3];
unshift(arr, 0); // 4
arr; // [0, 1, 2, 3]

unshift([4, 5, 6], 10); // 4
