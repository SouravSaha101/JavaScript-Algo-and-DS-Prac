function recursiveRange(r) {
  if (r == 1) return 1;
  return r + recursiveRange(r - 1);
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55

console.log(recursiveRange(6));
console.log(recursiveRange(10));
