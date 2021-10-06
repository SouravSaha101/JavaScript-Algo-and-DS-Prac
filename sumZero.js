/* Write a function that accepts a SORTED array and returns the 1st pair where sum is 0 
    In case no such pairs exists it returns Nonde.
*/

// function sumZero(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if (array[i] + array[j] === 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
//   return "None";
// }

//Using 2 pointer
function sumZero(ar) {
  let low = 0;
  let high = ar.length - 1;
  while (low < high) {
    let sum = ar[low] + ar[high];
    if (sum === 0) {
      return [ar[low], ar[high]];
    } else if (sum > 0) {
      high--;
    } else {
      low++;
    }
  }

  return "None";
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-5, 5, 5, 6, 7]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([0, 0, 1, 1]));
console.log(sumZero([4, 5, 6, 7]));
