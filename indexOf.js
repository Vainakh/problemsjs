function indexOf(array, number){
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      return i;
    }
  }
  return -1
}

var arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1
