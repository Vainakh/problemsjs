Write a function called rangeInArray which accepts an array and start and end indices, and returns the sum of the values between (and including) the start and end index.

If a start parameter is not passed in, it should default to zero. If an end parameter is not passed in, it should default to the last value in the array. Also, if the end argument is too large, the sum should still go through the end of the array.

let rangeInArray = function (array, start = 0, end = array.length - 1) {
  var arr = 0;
  if (end >= array.length){
      end = array.length - 1;
  }
  for (let i = (start || 0); i < (array[end] || array.length - 1); i += 1){
    arr += array[i]
  }
  return arr;
};
