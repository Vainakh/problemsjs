function lastIndexOf(array, number){
  for (let i = array.length - 1; i > 0; i -= 1){
    if(array[i] === number){
      return i;
    }
  }
  return -1;
}

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
