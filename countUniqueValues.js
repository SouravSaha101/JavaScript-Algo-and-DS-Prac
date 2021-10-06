/* Write a function which accepts an sorted array and returns the unique values present in them */

// function countUniqueValues(ar) {
//   return new Set(ar).size;
// }

function countUniqueValues(ar) {
  let low = 0;

  if (ar.length < 2) return ar.length;

  for (let high = 1; high < ar.length; high++) {
    if (ar[low] != ar[high]) {
      low++;
      ar[low] = ar[high];
    }
  }
  return low + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 6, 6]));
console.log(countUniqueValues([1, 2, 4]));
console.log(countUniqueValues([0, 0, 1, 1, 2, 2, 2, 3]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9, 10, 10]));
console.log(countUniqueValues([]));
