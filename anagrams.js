/*
    Find Weather two strings are anagrams or not.
    (Strange Edge cases are not handled)
*/

// function anagrams(s1, s2) {
//   let obj1 = {};
//   let obj2 = {};

//   for (let i of s1) {
//     obj1[i] = ++obj1[i] || 1;
//   }

//   for (let i of s2) {
//     obj2[i] = ++obj2[i] || 1;
//   }

//   for (let i in obj1) {
//     if (!(obj2[i] && obj2[i] === obj1[i])) {
//       return false;
//     }
//   }
//   return true;
// }

function anagrams(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }
  
  let obj1 = {};

  for (let i of s1) {
    obj1[i] = ++obj1[i] || 1;
  }

  for (let i of s2) {
    if (!obj1[i]) {
      return false;
    } else {
      --obj1[i];
    }
  }

  return true;
}

console.log(anagrams("car", "bar"));
console.log(anagrams("earth", "heart"));
console.log(anagrams("qazwsx", "xswzaq"));
console.log(anagrams("", ""));
console.log(anagrams("o1", "po1"));
