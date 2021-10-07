/*
WAF areThereDuplicates which accepts a valiable number of arguments 
and checks wheathers there are duplicates present or not
*/

//Using freq counter
// function areThereDuplicates(...a) {
//   let obj = {};

//   for (let i of a) {
//     if (!obj[i]) obj[i] = 1;
//     else return true;
//   }
//   return false;
// }

//using pointer works only if sorted
function areThereDuplicates(...args) {
//   args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  args.sort();
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
//   }

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates(2, 1, 2, 4));
console.log(areThereDuplicates(1, 2, 3, 4, 6));
