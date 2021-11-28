// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(ar, cb) {
  if (!ar.length) return false;
  if (cb(ar[0])) return true;
  return someRecursive(ar.slice(1), cb);
}

console.log(someRecursive([4,6,8], val => val > 10))

