function nestedEvenSum(obj) {
  let keys = Object.keys(obj);
  let sum = 0;
  if (keys.length === 0) return sum;

  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] == "object") {
        sum += nestedEvenSum(obj[keys[i]]);
    } else if (!isNaN(obj[keys[i]]) && obj[keys[i]] % 2 === 0) {
      sum += obj[keys[i]];
    }
  }
  return sum
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
