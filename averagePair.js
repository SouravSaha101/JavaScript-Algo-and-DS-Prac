/*
WAF averagePair, given a sorted array and target value, find a pair whose avg is equal to the
target value, there may be more than one pair
*/

function averagePair(ar, n) {
  if (!ar.length) return false;
  let low = 0;
  let high = ar.length-1;

  while (low < high) {
    let avg = (ar[low] + ar[high]) / 2;
    if (avg === n) {
      return true;
    } else if (avg < n) {
      low++;
    } else {
      high--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([4, 5, 7, 9, 11, 14], 4.5));
console.log(averagePair([2, 4, 6, 8], 2));
console.log(averagePair([], 4));
