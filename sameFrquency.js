/*
Write a function sameFrquency accepts 2 +ve interger 
and find out if both the numbers have the ssame frequency of digits 
*/

function sameFrquency(a, b) {
  let obj = {};
  a = a.toString();
  b = b.toString();
  if (a.length != b.length) {
    return false;
  }
  
  for (let i of a) {
    obj[i] = ++obj[i] || 1;
  }

  for (let i of b) {
    if (!obj[i]) {
      return false;
    }
    --obj[i];
  }
  return true;
}

console.log(sameFrquency(182, 281));
console.log(sameFrquency(34, 14));
console.log(sameFrquency(97531, 13579));
console.log(sameFrquency(192804021, 12019284));
console.log(sameFrquency(2132, 1223));
