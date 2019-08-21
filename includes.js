function includes(array, number){
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      return true;
    }
  }
  return false
}
