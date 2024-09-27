// 1. **Rotate an Array**
//    Write a function that rotates an array k times. Each rotation moves the last element of the array to the front.
//    Example: `rotateArray([1, 2, 3, 4, 5], 2)` → `[4, 5, 1, 2, 3]`

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

const result = rotateArray([1, 2, 3, 4, 5,], 2);
console.log(result);


