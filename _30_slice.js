function slice(array, num1, num2){
  let newArr = [];

  if(!num2 || num2 > array.length){
    num2 = array.length;
  }

  for (let i = num1; i < num2; i+= 1){
    newArr.push(array[i]);
  }
  return newArr;
}
