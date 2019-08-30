Write a function called min, which accepts an array of numbers and returns the lowest value.

Do note use the built-in Math.min() function!

function min(arr) {
  return arr.reduce(function (x, y) {
    return ( x < y ? x : y );
  });
}

min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
