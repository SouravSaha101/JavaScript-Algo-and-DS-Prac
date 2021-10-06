/*
Write a function maxSubArray which accepts an array and a number n 
and returns the max sum of n consecutive element
*/

function maxSubArray(ar, n) {
  let maxSum = 0;
  let max = 0;
  if (ar.length < n) {
    return "None";
  }
  for (let i = 0; i < n; i++) {
    maxSum += ar[i];
  }
  max = maxSum;
  for (let i = n; i < ar.length; i++) {
    max = max + ar[i] - ar[i - n];
    if (max > maxSum) {
      maxSum = max;
    }
  }
  return maxSum;
}

console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArray([8, 11, 7, 1, 9], 1));
console.log(
  maxSubArray([5, 2, 6, 1, 7, 5, 6, 3, 8, 8, 4, 8, 1, 9, 2, 7, 3], 4)
);
console.log(maxSubArray([], 4));
console.log(maxSubArray([4, 2, 1, 6, 2], 4));
