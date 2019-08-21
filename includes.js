function includes(array, number){
  for (let i = 0; i < array.length; i += 1){
    if(array[i] === number){
      return true;
    }
  }
  return false
}
includes([1, 2, 3, 4], 4) // true
includes([1, 2, 3, 4], 14) // false
includes([], 14) // false
