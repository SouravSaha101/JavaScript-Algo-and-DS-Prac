//WAP to pick odd numbers form an array using recursion.

// function pickOddNum(ar) {
//   let res = [];
//   if (!ar.length) return res;
//   let num = ar.pop();
//   if (num % 2 !== 0) {
//     res.push(num);
//   }
//   res = res.concat(pickOddNum(ar));
//   return res;
// }

//Using a helper function
function pickOddNum(ar) {
  let res = [];

  function helper(array) {
    if (!array.length) return;
    let num = array.pop();
    if (num % 2 !== 0) {
      res.push(num);
    }
    helper(array);
  }
  helper(ar);
  return res;
}
console.log(pickOddNum([11, 17, 19, 22, 21]));
console.log(pickOddNum([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(pickOddNum([2]));
