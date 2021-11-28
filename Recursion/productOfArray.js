function productOfArray(ar) {
  if (ar.length === 0) return 1;
  return ar[0] * productOfArray(ar.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
