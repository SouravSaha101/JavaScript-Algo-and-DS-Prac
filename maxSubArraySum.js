// WAP maxSubArraySum which finds the max subarray from the length provided

function maxSubArraySum(ar, n) {
  if (ar.length < n) {
    return null;
  }
  let sum = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    sum += ar[i];
  }
  max = sum;
  for (let i = n; i < ar.length; i++) {
    sum = sum + ar[i] - ar[i - n];
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSubArraySum([10, 20, 40, 90, 50, -30], 3));
console.log(maxSubArraySum([2, 2, 5, 31, 8, 3, 0, 15, 7, 12, -10], 4));
console.log(maxSubArraySum([1, 2], 4));
console.log(maxSubArraySum([8, 7, 0, -8, 10, 20, 70], 3));
console.log(maxSubArraySum([10, 20, 30, 40], 2));
