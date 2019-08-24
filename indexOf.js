function indexOf(array, number){
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      return i;
    }
  }
  return -1
}
