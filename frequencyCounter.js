/*
  Find weather for 2 given arrays, every value for one array has a corresponding square in the other array
*/

const ar1 = [1, 2, 3, 5, 7, 7];
const ar2 = [4, 1, 9, 25, 49];

let obj1 = {};
let obj2 = {};

for (let i of ar1) {
  obj1[i] = ++obj1[i] || 1;
}

for (let i of ar2) {
  obj2[i] = ++obj2[i] || 1;
}

let flag = true;

for (let i in obj1) {
  if (!(obj2[i * i] && obj2[i * i] == obj1[i])) {
    flag = false;
  }
}

console.log(flag);
