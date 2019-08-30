Write a function called max, which accepts an array and returns the highest value.

Do not use the built-in Math.max() function!

function max(arr) {
  return arr.reduce(function (x, y) {
    return ( x > y ? x : y );
  });
}

max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6
