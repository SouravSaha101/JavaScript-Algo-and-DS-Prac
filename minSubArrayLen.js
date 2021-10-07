// WAF which accepts 2 param a array and a +ve interger and returns the smallest continious subArray whose x is
// equal to the +ve interger passed.

function minSubArrayLen(arr, x) {
  let sum = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (sum < x && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= x) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
