function lastIndexOf(array, number){
  for (let i = array.length - 1; i > 0; i -= 1){
    if(array[i] === number){
      return i;
    }
  }
  return -1;
}
